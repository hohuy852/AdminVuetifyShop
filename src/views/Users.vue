<template>
  <v-container>
    <v-card>
      <v-card-title>
       User
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="headers"
        item-key="name"
        :items="users"
        disable-sort
        :items-per-page="-1"
        :search="search"
        :loading="loading"

      >
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2 mx-2"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn color="primary" dark class="mb-2">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container>
                  <v-form class="mt-3">
                    <v-text-field
                      label="ID"
                      dense
                      outlined
                      v-model="editedItem.id"
                    ></v-text-field>
                    <v-text-field
                      label="Title"
                      v-model="editedItem.title"
                      dense
                      outlined
                    ></v-text-field>
                    <v-file-input
                      accept="image/*"
                      label="Image"
                      v-model="editedItem.img"
                      outlined
                      prepend-icon="mdi-camera"
                      dense
                    ></v-file-input>
                    <v-text-field
                      label="Description"
                      v-model="editedItem.description"
                      dense
                      outlined
                    ></v-text-field>
                    <v-text-field
                      label="Ventor"
                      v-model="editedItem.ventor"
                      dense
                      outlined
                    ></v-text-field>
                    <v-text-field
                      v-model="editedItem.category"
                      label="Category"
                      dense
                      outlined
                    ></v-text-field>
                    <v-file-input
                      v-model="editedItem.previewImage"
                      outlined
                      dense
                      chips
                      multiple
                      accept="image/*"
                      label="Preview Image"
                      prepend-icon="mdi-camera"
                    ></v-file-input>
                    <v-text-field
                      v-model="editedItem.price"
                      label="Price"
                      dense
                      outlined
                      type="number"
                    ></v-text-field>
                  </v-form>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" @click="submitFiles" text>
                  Add
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small class="mr-2" @click="deleteItem(item)">
            mdi-delete
          </v-icon>
          <v-icon small color="red"> fas fa-ban </v-icon>
        </template>
        <template v-slot:[`item.DOB`]="{ item }">
          <div>
            <span v-if="item.DOB != null">{{ item.DOB.substr(0,10) }}</span>
          </div>
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-chip :color="getStatusColor(item.status)" dark small>
            {{ item.status }}
          </v-chip>
        </template>
        <template v-slot:[`item.role`]="{ item }">
          <v-chip :color="getRoleColor(item.role)" dark small>
            {{ item.role }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>


<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
      editedIndex: -1,
      editedItem: {
        id: "",
        title: "",
        img: null,
        description: "",
        ventor: "",
        category: "",
        previewImage: null,
        price: "",
      },
      defaultItem: {
        id: "",
        title: "",
        img: null,
        description: "",
        ventor: "",
        category: "",
        previewImage: null,
        price: "",
      },
      search: "",
      dialog: false,
      test: [
        {
          _id: "6151767330135c54093634b1",
          email: "hohuy@example.com",
          firstName: "ho321313",
          lastName: "huy2132133",
          status: "Active",
          role: "User",
          __v: 19,
          DOB: "2021-09-08T00:00:00.000Z",
          gender: "Male",
          phonenumber: "3",
        },
      ],
      headers: [
        {
          text: "ID",
          value: "_id",
        },
        {
          text: "First name",
          value: "firstName",
        },
        {
          text: "Last name",
          value: "lastName",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Gender",
          value: "gender",
        },
        {
          text: "Phone number",
          value: "phonenumber",
        },
        {
          text: "Birthday",
          value: "DOB",
        },
        {
          text: "Status",
          value: "status",
          align: "center",
        },
        {
          text: "Role",
          value: "role",
        },
        {
          text: "Actions",
          value: "actions",
        },
      ],
    };
  },
  computed: {
    formTitle() {
      return "";
    },
    users() {
      return this.$store.getters.users.allUser;
    },
  },
  methods: {
    getStatusColor(status) {
      if (status == "Banned") return "red";
      else if (status == "Morderate" || status == "Pending") return "orange";
      else return "green";
    },
    getRoleColor(role) {
      if (role == "Admin") return "red";
      else return "green";
    },
    close() {
      this.dialog = false;
    },
    submitFiles() {},
    ...mapActions(["getUsers"]),
  },
  mounted() {
    this.loading = true;
    this.getUsers().then(
      () => {
        this.loading = false;
      },
      (err) => {
        console.log(err.response.data);
        this.loading = false;
      }
    );
  },
};
</script>

<style>
</style>
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
                      label="First Name"
                      dense
                      v-model="editedItem.firstName"
                      outlined
                    ></v-text-field>
                    <v-text-field
                      label="Last Name"
                      dense
                      outlined
                      v-model="editedItem.lastName"
                    ></v-text-field>
                    <v-text-field
                      label="Email"
                      v-model="editedItem.email"
                      dense
                      outlined
                    ></v-text-field>
                    <v-select
                      label="Gender"
                      :items="gender"
                      dense
                      outlined
                      v-model="editedItem.gender"
                    ></v-select>
                    <v-text-field
                      label="Phone number"
                      dense
                      outlined
                      type="number"
                      v-model="editedItem.phonenumber"
                    ></v-text-field>
                    <!-- <v-text-field
                      label="Birthday"
                      dense
                      outlined
                      v-model="editedItem.Birthday"
                    ></v-text-field> -->
                    <v-select
                      label="Status"
                      :items="status"
                      dense
                      outlined
                      v-model="editedItem.status"
                      disabled
                    ></v-select>
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="editedItem.DOB"
                      transition="scale-transition"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="editedItem.DOB"
                          label="Birthday"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          outlined
                          dense
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="editedItem.DOB"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(editedItem.DOB)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                    <v-select
                      label="Role"
                      :items="roles"
                      dense
                      outlined
                      v-model="editedItem.role"
                    ></v-select>
                  </v-form>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  @click="ok(editedItem)"
                  text
                  :loading="btnLoading"
                >
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
           <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h6"
                >Are you sure you want to delete this user?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteUser"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
      
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editUser(item)">
            mdi-pencil
          </v-icon>
          <v-icon small class="mr-2" @click="deleteItem(item)">
            mdi-delete
          </v-icon>
          <v-icon small color="red"> fas fa-ban </v-icon>
        </template>
        <template v-slot:[`item.DOB`]="{ item }">
          <div>
            <span v-if="item.DOB != null">{{ item.DOB.substr(0, 10) }}</span>
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
    <v-snackbar timeout="1500" v-model="snackBar">{{ message }}</v-snackbar>
  </v-container>
</template>


<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      dialogDelete: false,
      menu: false,
      status: ["Active", "Inactive"],
      roles: ["User", "Admin"],
      gender: ["Male", "Female"],
      loading: false,
      editedIndex: -1,
      btnLoading: false,
      snackBar: false,
      message: null,
      editedItem: {
        _id: "",
        email: "",
        firstName: "",
        lastName: "",
        status: "",
        role: "",
        DOB: "",
        gender: "",
        phonenumber: "",
      },
      defaultItem: {
        _id: "",
        email: "",
        firstName: "",
        lastName: "",
        status: "",
        role: "",
        DOB: "",
        gender: "",
        phonenumber: "",
      },
      search: "",
      dialog: false,
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
      return this.editedIndex === -1 ? "Add User" : "Edit User";
    },
    cDate: {
      get() {
        return this.datecc;
      },
      set(value) {
        this.date = value;
      },
    },
    users() {
      return this.$store.getters.users.allUser;
    },
  },
  methods: {
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
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
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    ...mapActions(["getUsers"]),
    editUser(item) {
      this.dialog = true;
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    deleteUser() {
      this.$store.dispatch("deleteUser", this.editedItem).then(
        () => {
          this.closeDelete();
          this.getUsers();
        },
        (err) => {
          console.log(err.response.data);
        }
      );
    },
    ok(user) {
      if (this.editedIndex > -1) {
        this.btnLoading = true;
        this.$store.dispatch("editUser", user).then(
          () => {
            this.btnLoading = false;
            this.snackBar = true;
            this.message = "Update successful!";
            this.getUsers();
            this.close();
          },
          (err) => {
            this.btnLoading = false;
            this.snackBar = true;
            this.message = err.response.data;
          }
        );
      } else {
        //Add user
        this.btnLoading = true;
        this.$store.dispatch("addUser", user).then(
          () => {
            this.btnLoading = false;
            this.snackBar = true;
            this.message = "Add successful!";
            this.getUsers();
            this.close();
          },
          (err) => {
            this.btnLoading = false;
            this.snackBar = true;
            this.message = err.response.data;
          }
        );
      }
    },
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
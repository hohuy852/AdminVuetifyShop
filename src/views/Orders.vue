<template>
  <v-container>
    <v-card>
      <v-card-title>
        Orders
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
        :items="orders"
        disable-sort
        :items-per-page="-1"
        :search="search"
        :loading="loading"
      >
        <template v-slot:top>
          <v-btn color="primary" dark class="ml-2">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
          <v-dialog v-model="dialog" max-width="500px">
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
           mdi-keyboard-return
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:[`item.OrderItems`]="{ item }">
          <div v-for="(product, i) in item.OrderItems" :key="i">
            <span>{{ product.name }}</span>
          </div>
        </template>
        <template v-slot:[`item.Datetime`]="{ item }">
          <div>
            <span>{{ item.Datetime.substr(0, 10) }}</span>
          </div>
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-chip :color="getColor(item.status)" dark small>
            {{ item.status }}
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
          _id: "61470707dd5b0199ae1e99dd",
          status: "Paid",
          OrderItems: [
            {
              _id: "61470707dd5b0199ae1e99de",
              idProduct: "61125d7b516b371f38dc4123",
              name: "Vuetify Material Kit",
              quantity: 3,
              price: 8.58,
            },
          ],
          idUser: "613ba5097b92504198effbb0",
          Datetime: "2021-09-19T09:46:47.000Z",
          total: 25.74,
          discount: "",
          email: "123456",
          firstName: "demo",
          lastName: "demo",
          company: "a",
          address: "a",
          apartment: "a",
          city: "a",
          country: "Afghanistan",
          postalCode: "313",
          phone: "a",
        },
      ],
      headers: [
        {
          text: "OrderID",
          value: "_id",
        },
        {
          text: "UserID",
          value: "idUser",
        },
        {
          text: "OrderItems",
          value: "OrderItems",
          width: "170px",
        },
        {
          text: "Order Date",
          value: "Datetime",
          width: "110px",
        },
        {
          text: "Email",
          value: "email",
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
          text: "Company",
          value: "company",
        },
        {
          text: "Address",
          value: "address",
        },
        {
          text: "Apartment",
          value: "apartment",
        },
        {
          text: "City",
          value: "city",
        },
        {
          text: "Country",
          value: "country",
        },
        {
          text: "Postal Code",
          value: "postalCode",
        },
        {
          text: "Phonenumber",
          value: "phone",
        },
        {
          text: "Discount Code",
          value: "discount",
        },
        {
          text: "Total",
          value: "total",
        },
        {
          text: "Status",
          value: "status",
          align: "center",
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
    orders() {
      return this.$store.getters.orders.allOrder;
    },
  },
  methods: {
    ...mapActions(["getOrders"]),
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    submitFiles() {},
    getColor(status) {
      if (status == "Banned") return "red";
      else if (status == "Morderate" || status == "Pending") return "orange";
      else return "green";
    },
  },
  mounted() {
    this.loading = true;
    this.getOrders().then(
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
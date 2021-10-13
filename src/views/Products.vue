<template>
  <v-container>
    <v-card>
      <v-card-title>
        Products
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
        :items="products"
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
                <v-btn color="blue darken-1" @click="save(editedItem)" text>
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteProduct(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:[`item.previewImage`]="{ item }">
          <v-row>
            <v-col v-for="(image, i) in item.previewImage" :key="i">
              <v-img :src="image" width="40px" height="40px"> </v-img>
            </v-col>
          </v-row>
        </template>
        <template v-slot:[`item.img`]="{ item }">
          <div class="py-2">
            <v-img :src="item.img" width="80px" height="50px"> </v-img>
          </div>
        </template>
        <template v-slot:[`item.price`]="{ item }">
          <div>
            <span>{{ item.price }} $</span>
          </div>
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
        previewImage: [],
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
      headers: [
        {
          text: "ID",
          value: "id",
          align: "left",
        },
        {
          text: "Title",
          value: "title",
        },

        {
          text: "Image",
          value: "img",
        },
        {
          text: "Description",
          value: "description",
        },
        {
          text: "Ventor",
          value: "ventor",
        },
        {
          text: "Category",
          value: "category",
        },
        {
          text: "Preview Image",
          value: "previewImage",
        },
        {
          text: "Price",
          value: "price",
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
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    ...mapActions(["getProducts"]),
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
    save(product) {
      if (this.editedIndex > -1) {
        this.$store.dispatch("updateProduct", product).then(
          () => {
            this.getProducts();
          },
          (err) => {
            console.log(err.response.data);
          }
        );
      } else {
        this.$store.dispatch("addProduct", product).then(
          () => {
            this.getProducts();
          },
          (err) => {
            console.log(err.response.data);
          }
        );
      }
      this.close();
    },
    deleteProduct(product) {
      this.$store.dispatch("deleteProduct", product).then(
        () => {
          this.getProducts();
        },
        (err) => {
          console.log(err.response.data);
        }
      );
    },
  },
  mounted() {
    this.loading = true;
    this.getProducts().then(
      () => {
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        console.log(err.response.data);
      }
    );
  },
};
</script>

<style>
</style>
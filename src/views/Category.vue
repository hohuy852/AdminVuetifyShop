<template>
  <v-container>
    <v-card>
      <v-card-title>
        Category
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
        :items="categories"
        disable-sort
        :items-per-page="-1"
        :search="search"
        :loading="loading"
        class="elevation-1"
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
              <v-btn color="primary" dark class="mb-2" @click="refresh">
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
                      v-model="editedItem._id"
                      disabled
                      outlined
                    ></v-text-field>
                    <v-text-field
                      label="Category Name"
                      dense
                      outlined
                      v-model="editedItem.name"
                    ></v-text-field>
                    <v-autocomplete
                      clearable
                      dense
                      :items="products"
                      item-text="title"
                      return-object
                      chips
                      outlined
                      multiple
                      v-model="editedItem.products"
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          close
                          @click="data.select"
                          @click:close="remove(data.item)"
                        >
                          {{ data.item.title }}
                        </v-chip>
                      </template>
                    </v-autocomplete>
                  </v-form>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" @click="close" text>
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
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editCategory(item)">
            mdi-pencil
          </v-icon>
          <v-icon small class="mr-2" @click="deleteCategory(item)">
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:[`item.products`]="{ item }">
          <div class="py-5">
            <v-row v-for="(product, i) in item.products" :key="i">
              <v-col class="d-flex align-center">
                <div style="max-width: 70px" class="mr-2">
                  <v-img width="70px" height="50px" :src="product.img"></v-img>
                </div>

                <span>{{ product.title }}</span>
              </v-col>
            </v-row>
          </div>
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
      loading: false,
      btnLoading: false,
      snackBar: false,
      message: "",
      editedIndex: -1,
      editedItem: {
        _id: "",
        name: "",
        products: "",
      },
      defaultItem: {
        _id: "",
        name: "",
        products: "",
      },
      search: "",
      dialog: false,
      headers: [
        {
          text: "ID",
          value: "_id",
          width: "300px",
        },
        {
          text: "Category Name",
          value: "name",
          width: "300px",
        },
        {
          text: "Products",
          value: "products",
          width: "620px",
        },
        {
          text: "Actions",
          value: "actions",
          align: "right",
        },
      ],
    };
  },
  methods: {
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    editCategory(item) {
      this.dialog = true;
      this.editedIndex = this.categories.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    deleteCategory(category) {
      this.$store.dispatch("deleteCategory", category).then(
        () => {
          this.getCategories();
        },
        (err) => {
          console.log(err.response.data);
        }
      );
    },
    refresh() {
      this.getCategories();
    },
    ok(category) {
      if (this.editedIndex > -1) {
        this.btnLoading = true;
        this.$store.dispatch("updateCategory", category).then(
          () => {
            this.btnLoading = false;
            this.snackBar = true;
            this.message = "Update successful!";
            this.getCategories();
            this.close();
          },
          (err) => {
            this.btnLoading = false;
            this.snackBar = true;
            this.message = err.response.data;
          }
        );
      } else {
        this.$store.dispatch("addCategory", category).then(
          () => {
            this.btnLoading = false;
            this.snackBar = true;
            this.message = "Add successful!";
            this.getCategories();
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
    ...mapActions(["getProducts", "getCategories"]),
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Category" : "Edit Category";
    },
    categories() {
      return this.$store.getters.categories;
    },
    products() {
      return this.$store.getters.products;
    },
  },
  mounted() {
    this.$store.dispatch("getCategories");
    this.getProducts();
    
  },
};
</script>

<style>
</style>
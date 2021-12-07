<template>
  <v-container>
    <v-card>
      <v-card-title>
        Discount
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
        :items="discount"
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

              <v-card-text>
                <v-container>
                  <v-form class="mt-3">
                    <v-text-field
                      label="Code"
                      dense
                      v-model="editedItem.code"
                      outlined
                    ></v-text-field>
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="editedItem.startDate"
                      transition="scale-transition"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="editedItem.startDate"
                          label="Start Date"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          outlined
                          dense
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="editedItem.startDate"
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
                          @click="$refs.menu.save(editedItem.startDate)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                    <v-menu
                      ref="menu1"
                      v-model="menu1"
                      :close-on-content-click="false"
                      :return-value.sync="editedItem.expireDate"
                      transition="scale-transition"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="editedItem.expireDate"
                          label="Expire Date"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          outlined
                          dense
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="editedItem.expireDate"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu1 = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu1.save(editedItem.expireDate)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                    <v-text-field
                      label="Amount"
                      dense
                      type="number"
                      v-model="editedItem.amount"
                      outlined
                    ></v-text-field>
                    <!-- <v-select
                      label="Status"
                      dense
                      v-model="editedItem.status"
                      outlined
                      :items="status"
                    >
                    </v-select> -->
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
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h6"
                >Are you sure you want to delete this product?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteDiscount"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editCategory(item)">
            mdi-pencil
          </v-icon>
          <v-icon small class="mr-2" @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:[`item.startDate`]="{ item }">
          <div>
            <span v-if="item.startDate != null">{{
              item.startDate.substr(0, 10)
            }}</span>
          </div>
        </template>
        <template v-slot:[`item.expireDate`]="{ item }">
          <div>
            <span v-if="item.expireDate != null">{{
              item.expireDate.substr(0, 10)
            }}</span>
          </div>
        </template>
      </v-data-table>
    </v-card>
    <v-snackbar timeout="1500" v-model="snackBar">{{ message }}</v-snackbar>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      dialogDelete: false,
      status: ["Active", "Inactive"],
      menu: false,
      menu1: false,
      loading: false,
      btnLoading: false,
      snackBar: false,
      message: "",
      editedIndex: -1,
      editedItem: {
        code: "",
        startDate: "",
        expireDate: "",
        amount: "",
      },
      defaultItem: {
        code: "",
        startDate: "",
        expireDate: "",
        amount: "",
      },
      search: "",
      dialog: false,
      headers: [
        {
          text: "Code",
          value: "code",
        },
        {
          text: "Start Date",
          value: "startDate",
        },
        {
          text: "Expire Date",
          value: "expireDate",
        },
        {
          text: "Amount",
          value: "amount",
        },
        {
          text: "Status",
          value: "isActive",
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
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    deleteItem(item) {
      this.editedIndex = this.discount.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    editCategory(item) {
      this.dialog = true;
      this.editedIndex = this.discount.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    deleteDiscount() {
      this.$store.dispatch("deleteDiscount", this.editedItem).then(
        () => {
          this.getDiscount();
          this.closeDelete();
        },
        (err) => {
          console.log(err.response.data);
        }
      );
    },
    refresh() {
      this.getDiscount();
    },
    ok(discount) {
      if (this.editedIndex > -1) {
        this.btnLoading = true;
        this.$store.dispatch("updateDiscount", discount).then(
          () => {
            this.btnLoading = false;
            this.snackBar = true;
            this.message = "Update successful!";
            this.getDiscount();
            this.close();
          },
          (err) => {
            this.btnLoading = false;
            this.snackBar = true;
            this.message = err.response.data;
          }
        );
      } else {
        this.$store.dispatch("addDiscount", discount).then(
          () => {
            this.btnLoading = false;
            this.snackBar = true;
            this.message = "Add successful!";
            this.getDiscount();
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
    ...mapActions(["getDiscount"]),
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Category" : "Edit Category";
    },
    ...mapGetters(["discount"]),
  },
  mounted() {
    this.getDiscount();
  },
};
</script>

<style></style>

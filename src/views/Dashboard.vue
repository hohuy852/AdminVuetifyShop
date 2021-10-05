<template>
  <div class="home">
    <v-container class="mt-5">
      <v-row>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card color="cyan darken-1" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="cyan lighten-2" elevation="0">
                          <v-icon color="white">fas fa-dollar-sign</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                        $8520.50
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text"
                        >Revenue</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <v-img src="wallet.png"></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card color="pink darken-1" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="pink lighten-2" elevation="0">
                          <v-icon color="white">fas fa-rupee-sign</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                        $7220.50
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text"
                        >Market Cap $151.458</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <v-img src="wallet.png"></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card color="orange darken-1" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="orange lighten-2" elevation="0">
                          <v-icon color="white">fas fa-pound-sign</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                        $350.50
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text"
                        >Market Cap $151.458</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <v-img src="wallet.png"></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-title>Website visitor</v-card-title>

            <v-spacer></v-spacer>
            <v-btn color="deep-purple " class="white--text mx-2">Weekly</v-btn>
            <v-btn color="deep-purple lighten-4" class="deep-purple--text"
              >Monthly</v-btn
            >

            <v-sparkline
              :fill="fill"
              :line-width="width"
              :padding="padding"
              :smooth="radius || false"
              :value="value"
              auto-draw
              color="deep-purple"
            ></v-sparkline>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-title> Sales Ranking </v-card-title>
            <v-list two-line>
              <template v-for="(item, i) in rankings">
                <v-list-item :key="i">
                  <v-list-item-avatar tile width="70">
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-spacer :key="item.title"></v-spacer>
                  <span>{{ item.ranking }}</span>
                  <v-icon
                    v-if="item.ranking > 0"
                    :key="i"
                    color="green"
                    class="ml-2"
                    >fas fa-long-arrow-alt-up</v-icon
                  >
                  <v-icon v-else :key="i" color="red" class="ml-2"
                    >fas fa-long-arrow-alt-down</v-icon
                  >
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card height="260px">
            <v-card-title> Revenue </v-card-title>
            <v-row>
              <v-col cols="12" sm="4">
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1 black--text">
                      2.5578 $
                    </v-list-item-title>
                    <v-list-item-subtitle class="grey--text"
                      >Last 24 hours</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="8">
                <v-sparkline
                  :value="value"
                  :smooth="radius || false"
                  :padding="padding"
                  :line-width="width"
                  :stroke-linecap="lineCap"
                  :fill="fills"
                  :type="type"
                  :auto-line-width="autoLineWidth"
                  auto-draw
                  color="red"
                >
                </v-sparkline>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card height="260px">
            <v-card-title>
              Noctification
              <v-spacer></v-spacer>
              <v-btn @click="postNotification(content, userList)"
                ><v-icon> mdi-bell-ring-outline</v-icon></v-btn
              >
            </v-card-title>
            <v-card-title>
              <v-autocomplete
                prepend-icon="mdi-send"
                clearable
                dense
                :items="users"
                item-text="email"
                item-value="_id"
                chips
                multiple
                v-model="userList"
              >
                <template v-slot:selection="data">
                  <v-chip
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="remove(data.item)"
                  >
                    {{ data.item.email }}
                  </v-chip>
                </template>
              </v-autocomplete>
            </v-card-title>
            <v-form ref="form" class="px-4">
              <v-textarea
                v-model="content"
                outlined
                label="Content"
                height="90"
              ></v-textarea>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card>
            <v-toolbar-title class="title black--text pl-0 ml-2">
              Recently user
            </v-toolbar-title>
            <v-data-table
              :headers="headers"
              item-key="name"
              :items="users"
              disable-sort
              hide-default-footer
              :items-per-page="5"
            >
              <template v-slot:[`item.status`]="{ item }">
                <v-chip :color="getColor(item.status)" dark small>
                  {{ item.status }}
                </v-chip>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card>
            <v-toolbar-title class="title black--text pl-0 ml-2">
              Orders status
            </v-toolbar-title>
            <v-data-table
              :headers="oHeaders"
              item-key="name"
              :items="orders"
              disable-sort
              hide-default-footer
            >
              <template v-slot:[`item.status`]="{ item }">
                <v-chip :color="getColor(item.status)" dark small>
                  {{ item.status }}
                </v-chip>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Dashboard",
  data: () => ({
    content: null,
    userList: null,
    tab: null,
    text: "center",
    fill: true,
    padding: 8,
    radius: 10,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 2,
    lineCap: "round",
    type: "trend",
    autoLineWidth: false,
    fills: false,
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    selected: [],
    dialog: false,
    //singleSelected: false,
    rankings: [
      {
        avatar:
          "https://cdn.shopify.com/s/files/1/2695/0984/products/new-main.png?v=1611181256",
        title: "Zero Theme PRO",
        subtitle: "12.98$",
        ranking: 1,
      },
      {
        avatar:
          "https://cdn.shopify.com/s/files/1/2695/0984/products/main_1ce7d3ed-f3bd-4357-b8d9-420adb7680d9.png?v=1591233287",
        title: "Flairo Theme PRO",
        subtitle: "9.83$",
        ranking: -1,
      },
      {
        avatar:
          "https://cdn.shopify.com/s/files/1/2695/0984/products/alpha-main.png?v=1582695312",
        title: "Alpha Theme Bundle",
        subtitle: "4.18$",
        ranking: 3,
      },
    ],

    headers: [
      {
        text: "Name",
        value: "name",
      },
      {
        text: "Email",
        value: "email",
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
    ],
    oHeaders: [
      {
        text: "OrderID",
        value: "orderId",
      },
      {
        text: "Item",
        value: "item",
      },
      {
        text: "Status",
        value: "status",
        align: "center",
      },
      {
        text: "Total",
        value: "total",
      },
    ],
    orders: [
      {
        orderId: 1,
        item: "Product Name",
        status: "Pending",
        total: 11.3,
      },
      {
        orderId: 2,
        item: "Product Name",
        status: "Paid",
        total: 11.3,
      },
      {
        orderId: 3,
        item: "Product Name",
        status: "Pending",
        total: 11.3,
      },
      {
        orderId: 4,
        item: "Product Name",
        status: "Pending",
        total: 11.3,
      },
      {
        orderId: 5,
        item: "Product Name",
        status: "Paid",
        total: 11.3,
      },
    ],
    roles: ["Teacher", "Student", "Worker"],
    status: ["Active", "Teaching", "Absent"],
    itemsNoc: [
      {
        action: "15 min",
        headline: "Brunch this weekend?",
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        title: "Ali Connors",
      },
    ],
  }),
  watch: {},
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    users() {
      return this.$store.state.users.users.allUser;
    },
  },
  methods: {
    postNotification(content, userList) {
      this.$store.dispatch("postNotice", { content, userList });
    },
    close() {
      this.dialog = false;
    },
    getColor(status) {
      if (status == "Banned") return "red";
      else if (status == "Morderate" || status == "Pending") return "orange";
      else return "green";
    },
    remove(item) {
      console.log(item)
      const index = this.users.indexOf(item._id);
      if (index >= 0) this.user.splice(index, 1);
    },
    ...mapActions(["getUsers"]),
  },
  mounted() {
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
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
<style scoped>
.border {
  border-right: 1px solid grey;
}
</style>

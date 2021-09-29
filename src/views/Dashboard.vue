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
            <v-app-bar flat color="rgba(0,0,0,0)">
              <v-toolbar-title class="title black--text pl-0 ml-2">
                Website visitors
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn color="deep-purple" class="white--text mr-2">Weekly</v-btn>
              <v-btn color="deep-purple lighten-4" class="deep-purple--text"
                >Monthly</v-btn
              >
            </v-app-bar>
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
              <template v-for="item in rankings">
                <v-list-item :key="item.title">
                  <v-list-item-avatar tile>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-spacer :key="item.title"></v-spacer>
                  <v-icon color="red" class="ml-2"
                    >fas fa-long-arrow-alt-down</v-icon
                  >
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card height="200px">
            <v-row>
              <v-col cols="12" sm="4">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">Revenue</div>
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
                <v-card-actions class="justify-end">
                  <v-btn text color="green">
                    <v-icon class="mt-n2 pr-2">fas fa-sort-down</v-icon> 8.5
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card height="200px">
            <v-row>
              <v-col cols="12" sm="6" class="border">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">Your Portfolio</div>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-progress-circular
                          rotate="360"
                          size="100"
                          width="15"
                          value="70"
                          color="teal"
                        >
                          70%
                        </v-progress-circular>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-list-item-subtitle class="grey--text mt-8"
                          >2.5578 BTC</v-list-item-subtitle
                        >
                        <v-list-item-subtitle class="grey--text"
                          >2500 USD</v-list-item-subtitle
                        >
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6" align="center">
                <v-list-item two-line class="mt-10">
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1 black--text">
                      $8520.50
                    </v-list-item-title>
                    <v-list-item-subtitle class="grey--text"
                      >Pending Balance</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
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
export default {
  name: "TrungTam",
  data: () => ({
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
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash;`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> `,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle: '<span class="text--primary">Sandra Adams</span> ',
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
    users: [
      {
        name: "A",
        email: "a@a.a",
        status: "Active",
        role: "User",
      },
      {
        name: "B",
        email: "a@a.a",
        status: "Active",
        role: "User",
      },
      {
        name: "C",
        email: "a@a.a",
        status: "Active",
        role: "User",
      },
      {
        name: "D",
        email: "a@a.a",
        status: "Active",
        role: "User",
      },
      {
        name: "E",
        email: "a@a.a",
        status: "Active",
        role: "User",
      },
      {
        name: "F",
        email: "a@a.a",
        status: "Active",
        role: "Admin",
      },
    ],
  }),
  watch: {},
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  methods: {
    close() {
      this.dialog = false;
    },
    getColor(status) {
      if (status == "Banned") return "red";
      else if (status == "Morderate" || status == "Pending") return "orange";
      else return "green";
    },
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

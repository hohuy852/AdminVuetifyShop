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
            <v-card-text v-if="visitor"> 
              <div class="d-flex ">
                <div>
                  <p class="text-h5 font-bold text--primary">Daily</p>
                </div>
                <div class="ml-auto">
                  <p class="text-h5 font-bold text--primary">{{visitor[0].count}}</p>
                </div>
              </div>
               <div class="d-flex ">
                <div>
                  <p class="text-h5 font-bold text--primary">Weekly</p>
                </div>
                <div class="ml-auto">
                  <p class="text-h5 font-bold text--primary">{{visitor[1].count}}</p>
                </div>
              </div>
               <div class="d-flex ">
                <div>
                  <p class="text-h5 font-bold text--primary">Monthly</p>
                </div>
                <div class="ml-auto">
                  <p class="text-h5 font-bold text--primary">{{visitor[2].count}}</p>
                </div>
              </div>
              <v-divider></v-divider>
                <div class="d-flex mt-5 justify-center align-center">
                <div>
                  <p class="text-h5 font-bold text--primary">Total:</p>
                </div>
                <div class="ml-auto">
                  <p class="text-h5 font-bold text--primary">{{totalVisitor}}</p>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-title> Sales Ranking </v-card-title>
            <v-list two-line>
              <template v-for="(item, i) in rankings">
                <v-list-item :key="i">
                  <v-list-item-avatar tile width="70">
                    <v-img :src="item.img"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-spacer :key="item.title"></v-spacer>
                  <span>Sold: {{ item.count }}</span>
                  <v-icon v-if="i == 0" :key="i" color="orange" class="ml-2"
                    >mdi-trophy</v-icon
                  >
                  <v-icon
                    v-else-if="i == 1"
                    :key="i"
                    color="#cfc8c6"
                    class="ml-2"
                    >mdi-trophy</v-icon
                  >

                  <v-icon v-else :key="i" color="#CD7F32" class="ml-2"
                    >mdi-trophy</v-icon
                  >
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card class="d-flex flex-column flex-grow-1 h-full">
            <div class="d-flex flex-column flex-grow-1">
              <v-card-title>Revenue</v-card-title>
              <div
                class="d-flex flex-column flex-grow-1"
                style="position: relative"
              >
                <div class="px-2 pb-2">
                  <div class="d-flex align-center">
                    <div class="text-h4 pl-2">{{ revenue }}$</div>
                    <v-spacer></v-spacer>
                    <div class="d-flex flex-column text-right">
                      <div class="font-weight-bold green--text">
                        <v-icon color="green">mdi mdi-arrow-top-right</v-icon
                        >3.4%
                      </div>
                      <div class="caption">vs last month</div>
                    </div>
                  </div>
                </div>
                <v-spacer></v-spacer>
                <div style="min-height: 60px">
                  <apexchart
                    height="200px"
                    ref="chart"
                    type="area"
                    :options="options"
                    :series="series"
                  ></apexchart>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card height="315px">
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
                height="140"
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
      </v-row>
    </v-container>
    <v-snackbar v-model="notification" timeout="1500">{{ message }}</v-snackbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Dashboard",
  data: () => ({
    notification: false,
    message: null,
    content: null,
    userList: null,
    revenue: null,
    visitor: null,
    tab: null,
    text: "center",
    fill: true,
    padding: 8,
    radius: 10,
    categories: ["1 Feb", "2 Feb", "3 Feb", "4 Feb", "5 Feb", "6 Feb", "7 Feb"],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    options: {
      chart: {
        id: "vuechart-example",
        height: "200px",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      xaxis: {
        categories: [
          "1 Feb",
          "2 Feb",
          "3 Feb",
          "4 Feb",
          "5 Feb",
          "6 Feb",
          "7 Feb",
        ],
      },
      stroke: {
        curve: "smooth",
      },
      tooltip: {
        enabled: true,
      },
      grid: {
        show: false,
      },
      // dataLabels: {
      //   enabled: false,
      // },
    },
    series: [
      {
        name: "Revenue",
        data: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
    width: 2,
    selected: [],
    dialog: false,
    //singleSelected: false,
    rankings: null,
    //[
    //   {
    //     avatar:
    //       "https://cdn.shopify.com/s/files/1/2695/0984/products/new-main.png?v=1611181256",
    //     title: "Zero Theme PRO",
    //     subtitle: "12.98$",
    //     ranking: 1,
    //   },
    //   {
    //     avatar:
    //       "https://cdn.shopify.com/s/files/1/2695/0984/products/main_1ce7d3ed-f3bd-4357-b8d9-420adb7680d9.png?v=1591233287",
    //     title: "Flairo Theme PRO",
    //     subtitle: "9.83$",
    //     ranking: -1,
    //   },
    //   {
    //     avatar:
    //       "https://cdn.shopify.com/s/files/1/2695/0984/products/alpha-main.png?v=1582695312",
    //     title: "Alpha Theme Bundle",
    //     subtitle: "4.18$",
    //     ranking: 3,
    //   },
    // ],

    headers: [
      {
        text: "ID",
        value: "_id",
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
        value: "_id",
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
    totalVisitor(){
        return this.visitor.reduce((pre, cur) => {
            return  parseFloat(pre) + parseFloat(cur.count)
        },0)
    },
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    users() {
      return this.$store.state.users.users.allUser;
    },
    orders() {
      return this.$store.state.orders.orders.allOrder;
    },
    timeFrom() {
      let X = 7;
      var dates = [];
      for (let I = 0; I < Math.abs(X); I++) {
        dates.push(
          new Date(
            new Date().getTime() -
              (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000
          ).toLocaleString()
        );
      }
      return dates;
    },
  },
  methods: {
    postNotification(content, userList) {
      if (this.userList == null) {
        this.$store.dispatch("postBanner", content).then(
          () => {
            this.content = null;
            this.message = "Notification post banner sucessful !";
            this.notification = true;
          },
          (err) => {
            this.content = null;
            this.message = "Notification post banner fail !";
            this.notification = true;
            console.log(err.response.data);
          }
        );
      } else {
        this.$store.dispatch("postNotice", { content, userList }).then(
          () => {
            this.content = null;
            this.message = "Notification post sucessful !";
            this.notification = true;
          },
          (err) => {
            this.content = null;
            this.message = "Notification post fail !";
            this.notification = true;
            console.log(err.response.data);
          }
        );
      }
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
      const index = this.users.indexOf(item._id);
      if (index >= 0) this.user.splice(index, 1);
    },
    updateChart() {
      let dataSeries = this.$store.getters.revenueByWeek.orders;
      let tempData = [];
      for (let i = 0; i < dataSeries.length; i++) {
        tempData.push({
          x: dataSeries[i]._id,
          y: dataSeries[i].total,
        });
      }
      this.$apexcharts.exec("vuechart-example", "updateSeries", [
        {
          data: tempData,
        },
      ]);
       console.log(tempData);
    },
    getRanking() {
      let products = this.$store.getters.products;
      let topProduct = products.sort((a, b) =>
        a.count < b.count ? 1 : a.count > b.count ? -1 : 0
      );
      this.rankings = topProduct.slice(0, 3);
    },
    ...mapActions([
      "getUsers",
      "getOrders",
      "getProducts",
      "getRevenueByWeek",
      "getVisitor",
    ]),
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
    this.getOrders().then(
      () => {
        this.loading = false;
      },
      (err) => {
        console.log(err.response.data);
        this.loading = false;
      }
    );
    this.getRevenueByWeek().then(
      () => {
        this.revenue = this.$store.getters.revenueByWeek.sum;
        this.updateChart();
      },
      (err) => {
        console.log(err.response.data);
      }
    );

    this.getProducts().then(
      () => {
        this.getRanking();
      },
      (err) => {
        console.log(err.response.data);
      }
    );
    this.getVisitor().then(
      () => {
        this.visitor = this.$store.getters.visitor;
      },
      (err) => {
        console.log(err.response.data);
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

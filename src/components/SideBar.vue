<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item class="px-2">
          <v-img src="logo.jpg"></v-img>
        </v-list-item>
        <v-list nav>
          <v-list-item link v-for="item in NavItems" :key='item.title' :to="item.route"> 
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab text to="/login">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({
    NavItems:[
      {
        title: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        route: '/'
      },
       {
        title: 'Products',
        icon: 'fas fa-box',
        route: '/products'
      },
       {
        title: 'Users',
        icon: 'fas fa-address-card',
        route: '/users'
      },
       {
        title: 'Orders',
        icon: 'fas fa-truck',
        route: '/orders'
      }
    ],

    drawer: true,
  }),
};
</script>

<style>
</style>
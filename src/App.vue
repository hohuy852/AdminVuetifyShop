<template>
  <v-app>
   <SideBar v-if="loggedIn" />
    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from './components/SideBar';
//import SinhVien from './views/SinhVien.vue'
export default {
  name: 'App',

  components: {
    SideBar,
   // SinhVien
  },

  data: () => ({
    
  }),
  computed:{
    loggedIn(){
      return this.$store.state.auth.status.loggedIn
    }
  }
};
</script>

<template>
  <v-app>
   <SideBar />
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
    //
  }),
};
</script>

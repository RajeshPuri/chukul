<template>
  <!-- <q-page class="flex flex-center">
    <welcome />
     <datatable />
     
  </q-page> -->

  <!-- <datatable /> -->

  <!-- <sector />  -->
  <!-- <todo /> -->
 
  <!-- <sectors /> -->
  <profile />
  <stock />
  <anm />
  
 

 
 
  
</template>

<script>
import Welcome from "components/Welcome.vue";
import Sector from "./Sector.vue";
import Todo from "src/components/todo.vue";
import Datatable from "src/components/Datatable.vue";
import Stock from "src/components/stock.vue";
import Sectors from "src/components/Sectors.vue";
import Profile from "src/components/Profile.vue";
import Anm from "src/components/anm.vue";


export default {
  name: "Dashboard",
  components: {
    //Welcome,
    //Sector,
    // Todo,
    //Datatable,
    Stock,
     Profile,
    Anm
},
};
</script>

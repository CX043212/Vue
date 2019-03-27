<template>
  <div>
    <header-com/>
    <div class="container">
      <TabBar-com/>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import Header from "./header.vue";
import TabBar from "./tabBar.vue";
import Vuex from "vuex";
export default {
  created() {
    this.handleData();
  },
  components: {
    "header-com": Header,
    "TabBar-com": TabBar
  },
  methods: {
    ...Vuex.mapActions({
      handleData: "handleData"
    })
  }
};
</script>

<style>
.container {
  display: flex;
}
.page {
  width: 80%;
}
</style>
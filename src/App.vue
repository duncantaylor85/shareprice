<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        SharePrices
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn tile color="orange" to="/">Home</v-btn>
      <v-btn tile color="orange" to="/portfolio">Portfolio</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view> </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

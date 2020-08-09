<template>
  <div class="portfolio">
    <v-container>
      <h1 class="text-center mb-4">Share Prices</h1>
      <ShareChart></ShareChart>
      <amplify-sign-out class="text-center"></amplify-sign-out>
    </v-container>
  </div>
</template>

<script>
import ShareChart from "../components/ShareChart.vue";

// @ is an alias to /src

export default {
  name: "Portfolio",
  components: { ShareChart },
};
</script>

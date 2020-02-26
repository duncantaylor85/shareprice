<template>
  <div class="portfolio">
    <h1>Portfolio</h1>

    <div>
      <h2>Share Prices</h2>

      <div>
        <ShareChart></ShareChart>
      </div>
    </div>
    <amplify-sign-out></amplify-sign-out>
  </div>
</template>

<script>
import ShareChart from "../components/ShareChart.vue";

// @ is an alias to /src

export default {
  name: "Portfolio",
  components: { ShareChart }
};
</script>

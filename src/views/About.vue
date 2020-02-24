<template>
  <div class="about">
    <h1>This is an about page</h1>

    <amplify-sign-out></amplify-sign-out>
    <div>
      <h1>Share Prices</h1>
      <button @click="showInfo()">Show Info</button>
      <div v-if="info">
        <Chart :dates="this.dates" :close="this.close" :prices="this.prices" />
        <p>{{info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import Chart from "../components/Chart.vue";

// @ is an alias to /src

export default {
  data() {
    return {
      info: "",
      dates: [],
      close: [],
      prices: []
    };
  },
  methods: {
    async showInfo() {
      let config = {
        headers: {
          Accept: "application/json"
        }
      };
      await this.$http
        .get(
          "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=demo",
          config
        )
        .then(response => (this.info = response.data["Weekly Time Series"]));
      let i = 0;
      for (let key in this.info) {
        this.dates.push(key);
        this.prices.push(this.info[key]);
        this.close.push(this.info[key]["4. close"]);
        i++;
        if (i > 9) {
          break;
        }
      }
    }
  },
  mounted() {
    AmplifyEventBus.$on("authState", info => {
      console.log("auth", info);
      if (info === "signedOut") {
        this.$router.push("/");
      }
    });
  },
  name: "About",
  components: { Chart }
};
</script>

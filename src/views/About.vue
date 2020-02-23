<template>
  <div class="about">
    <h1>This is an about page</h1>

    <amplify-sign-out></amplify-sign-out>
    <div>
      <h1>Share Prices</h1>
      <button @click="showJoke()">Show Joke</button>
      <div v-if="info">
        <p>{{info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";

// @ is an alias to /src

export default {
  data() {
    return {
      info: ""
    };
  },
  methods: {
    async showJoke() {
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
      let dates = [];
      let value = "";
      let i = 0;
      for (let key in this.info) {
        dates.push(key);
        value = this.info[key]["4. close"];
        console.log(key);
        console.log(value);
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
  components: {}
};
</script>

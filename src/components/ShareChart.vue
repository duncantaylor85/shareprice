<template>
  <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
</template>

<script>
import { Plotly } from "vue-plotly";

export default {
  data() {
    return {
      info: "",
      data: [
        {
          x: [],
          y: [],
          type: "scatter",
          mode: "lines+markers",
          marker: {
            color: "rgb(102,0,0)",
            size: 2,
            opacity: 0.4
          }
        }
      ],
      layout: {
        title: "MSFT"
      }
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
      let stockChartXValues = [];
      let stockChartYValues = [];
      for (let key in this.info) {
        stockChartXValues.push(key);
        stockChartYValues.push(this.info[key]["4. close"]);

        i++;
        if (i > 99) {
          break;
        }
      }
      this.data.push({
        x: stockChartXValues,
        y: stockChartYValues,
        type: "scatter",
        mode: "lines+markers",
        marker: {
          color: "red"
        }
      });
    }
  },
  mounted() {
    this.showInfo();
  },

  name: "ShareChart",
  components: { Plotly }
};
</script>
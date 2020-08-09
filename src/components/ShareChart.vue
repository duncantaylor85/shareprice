<template>
  <div class="sharechart">
    <h1>{{ title }}</h1>
    <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
  </div>
</template>

<script>
import { Plotly } from "vue-plotly";

export default {
  data() {
    return {
      info: "",
      title: "",
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
        title: "MSFT",
        paper_bgcolor: "rgb(224, 224, 209)",
        plot_bgcolor: "rgb(224, 224, 209)"
      }
    };
  },
  methods: {
    async fetchStockData() {
      let config = {
        headers: {
          Accept: "application/json"
        }
      };
      const response = await this.$http.get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=demo",
        config
      );
      this.info = response.data["Weekly Time Series"];
      let stockChartYValues = [];
      const stockChartXValues = Object.keys(this.info).slice(0, 100);
      stockChartXValues.forEach(key =>
        stockChartYValues.push(this.info[key]["4. close"])
      );

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
    this.fetchStockData();
  },

  name: "ShareChart",
  components: { Plotly }
};
</script>

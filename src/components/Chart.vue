<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["dates", "close", "prices"],
  mounted() {
    this.renderChart({
      labels: this.dates,
      datasets: [
        {
          label: "Data Prices",
          backgroundColor: "#f87979",
          data: this.close
        }
      ]
    });
  }
};
</script>

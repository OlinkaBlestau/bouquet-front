<template>
  <div class="cont m-auto">
    <h1 class="text-center" style="margin-bottom: 60px">
      {{ $t("statistics.statistics") }}
    </h1>
    <div
      v-if="isMonth === true"
      style="
        padding: 20px;
        height: 700px;
        border-radius: 5px;
        background-color: #ffdede;
      "
    >
      <Bar :data="monthChartData" :options="options" />
    </div>
    <div
      v-else
      style="
        padding: 20px;
        height: 700px;
        border-radius: 5px;
        background-color: #ffdede;
      "
    >
      <Bar :data="yearChartData" :options="options" />
    </div>
    <div class="d-flex btn-group">
      <button
        class="mb-5"
        style="
          width: 15%;
          height: 65px;
          font-size: 1.3vw;
          position: relative;
          left: 815px;
          border-radius: 20px;
        "
        :style="{
          backgroundColor: isMonth === true ? '#3a0000' : 'rgba(0, 0, 0, 0)',
          borderColor: isMonth === true ? '#3a0000' : '#3a0000',
          color: isMonth === true ? '#fff' : '#3a0000',
        }"
        @click="show('month')"
      >
        {{ $t("statistics.month") }}
      </button>
      <button
        class="mb-5"
        style="
          position: relative;
          left: 200px;
          width: 15%;
          height: 65px;
          color: #ffffff;
          font-size: 1.3vw;
          border-radius: 20px;
        "
        :style="{
          backgroundColor: isMonth === false ? '#3a0000' : 'rgba(0, 0, 0, 0)',
          borderColor: isMonth === false ? '#3a0000' : '#3a0000',
          color: isMonth === false ? '#fff' : '#3a0000',
        }"
        @click="show('year')"
      >
        {{ $t("statistics.year") }}
      </button>
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from "chart.js";
import { Bar } from "vue-chartjs";
import { getSaleStatistic } from "@/api/api_request";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement
);

export default {
  name: "StatisticPage",
  components: {
    Bar,
  },
  data() {
    return {
      salesByMonth: [],
      salesByYear: [],
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      isMonth: true,
    };
  },
  methods: {
    show(type) {
      console.log(type);
      if (type === "month") {
        this.isMonth = true;
      } else {
        this.isMonth = false;
      }
    },
  },
  beforeMount() {
    getSaleStatistic({
      period: "month",
    }).then((response) => {
      this.salesByMonth = response.data;
    });

    getSaleStatistic({
      period: "year",
    }).then((response) => {
      this.salesByYear = response.data;
    });
  },
  mounted() {
    document.body.style.background =
      "linear-gradient(to left, #F5B9FF, #B6CFD3)";
  },
  computed: {
    monthChartData() {
      return {
        labels: Object.keys(this.salesByMonth),
        datasets: [
          {
            label: this.$t("statistics.sales"),
            data: this.salesByMonth,
            fill: true,
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0, 0, 0, 160);

              gradient.addColorStop(0, "#e1225d");
              gradient.addColorStop(0.5, "#e1225d");
              gradient.addColorStop(1, "#e1225d");

              return gradient;
            },
            tension: 0.25,
          },
        ],
      };
    },
    yearChartData() {
      return {
        // eslint-disable-next-line no-unused-vars
        labels: Object.keys(this.salesByYear),
        datasets: [
          {
            label: this.$t("statistics.sales"),
            data: this.salesByYear,
            fill: true,
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0, 0, 0, 160);

              gradient.addColorStop(0, "#e1225d");
              gradient.addColorStop(0.5, "#e1225d");
              gradient.addColorStop(1, "#e1225d");
              return gradient;
            },
            tension: 0.25,
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
.cont {
  width: 80%;
  position: relative;
  top: 50px;
}
h1 {
  color: #3a0000;
  font-family: "Marmelad", sans-serif;
}
.btn-group {
  margin-top: 50px;
}
</style>

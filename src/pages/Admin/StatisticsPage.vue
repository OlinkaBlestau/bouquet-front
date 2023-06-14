<template>
  <div class="cont m-auto">
    <h2
      class="text-center"
      style="
        color: white;
        font-size: 2.2vw;
        letter-spacing: 2px;
        margin-bottom: 30px;
      "
    >
      {{ $t("statistics.statistics") }}
    </h2>
    <div class="d-flex justify-content-evenly">
      <button
        class="mb-5"
        style="width: 20%; height: 50px; font-size: 1.3vw; margin-top: 0"
        :style="{
          backgroundColor: isMonth === true ? '#000000' : 'rgba(0, 0, 0, 0)',
          borderColor: isMonth === true ? '#000000' : '#000000',
          color: isMonth === true ? '#fff' : '#fff',
        }"
        @click="show('month')"
      >
        {{ $t("statistics.month") }}
      </button>
      <button
        class="mb-5"
        style="
          width: 20%;
          height: 50px;
          color: #ffffff;
          font-size: 1.3vw;
          margin-top: 0;
        "
        :style="{
          backgroundColor: isMonth === false ? '#000000' : 'rgba(0, 0, 0, 0)',
          borderColor: isMonth === false ? '#000000' : '#000000',
          color: isMonth === false ? '#fff' : '#fff',
        }"
        @click="show('year')"
      >
        {{ $t("statistics.year") }}
      </button>
    </div>
    <div
      v-if="isMonth === true"
      style="
        padding: 20px;
        height: 700px;
        border-radius: 40px;
        background-color: rgba(255, 255, 255, 0.85);
      "
    >
      <Bar :data="monthChartData" :options="options" />
    </div>
    <div
      v-else
      style="
        padding: 20px;
        height: 700px;
        border-radius: 40px;
        background-color: rgba(255, 255, 255, 0.85);
      "
    >
      <Bar :data="yearChartData" :options="options" />
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
  computed: {
    monthChartData() {
      return {
        // eslint-disable-next-line no-unused-vars
        labels: Object.keys(this.salesByMonth),
        datasets: [
          {
            label: "Sales",
            data: this.salesByMonth,
            borderColor: ["#000000"],
            fill: true,
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0, 0, 0, 160);

              gradient.addColorStop(0, "#000000");
              gradient.addColorStop(0.5, "#000000");
              gradient.addColorStop(1, "#c6c6c6");

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
            label: "Sales",
            data: this.salesByYear,
            borderColor: ["#000000"],
            fill: true,
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0, 0, 0, 160);

              gradient.addColorStop(0, "#000000");
              gradient.addColorStop(0.5, "#000000");
              gradient.addColorStop(1, "#c6c6c6");
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
.chart {
  height: 500px;
}
</style>

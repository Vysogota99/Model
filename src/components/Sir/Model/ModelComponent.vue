<template>
  <v-container>
    <v-row class="d-flex align-start justify-center">
      <v-col lg="4" md="4" sm="11" class="p-0">
        <v-card class="mr-2 card_height">
          <v-card-title style="color: #B0B0B0">{{sir_R0}}</v-card-title>
          <v-card-text class="text--primary">
            <p style="font-size: 50px">{{r_0_values}}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4" md="4" sm="11" class="p-0">
        <v-card class="mr-2 card_height">
          <v-card-title style="color: #B0B0B0">{{sir_D}}</v-card-title>
          <v-card-text class="text--primary">
            <p style="font-size: 50px">{{d_value}}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4" md="4" sm="11" class="p-0">
        <v-card class="mr-2 card_height">
          <v-card-title style="color: #B0B0B0">{{sir_pob}}</v-card-title>
          <v-card-text class="text--primary">
            <p style="font-size: 50px">{{prob}} %</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex align-start justify-center">
      <v-col lg="8" md="8" sm="11">
        <v-card>
          <line-chart
            :chart-data="datacollection"
            :options="{responsive: true, maintainAspectRatio: true}"
            :width="200"
            :height="100"
          ></line-chart>
        </v-card>
      </v-col>
      <v-col lg="4" md="4" sm="11" class="p-0">
        <v-row>
          <v-col lg="12">
            <v-card>
              <v-card-title>&beta;</v-card-title>
              <v-card-actions>
                <v-slider
                  v-model="betta"
                  class="align-center"
                  :max="max"
                  :min="min"
                  :step="step"
                  hide-details
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="betta"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="number"
                    ></v-text-field>
                  </template>
                </v-slider>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>&gamma;</v-card-title>
              <v-card-actions>
                <v-slider
                  v-model="gamma"
                  class="align-center"
                  :max="max"
                  :min="min"
                  :step="step"
                  hide-details
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="gamma"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="number"
                    ></v-text-field>
                  </template>
                </v-slider>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>{{Susceptible}}</v-card-title>
              <v-card-actions>
                <v-form ref="form">
                  <h2>{{s0}}</h2>
                </v-form>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>{{Infected}}</v-card-title>
              <v-card-actions>
                <v-slider
                  v-model="i0"
                  class="align-center"
                  :max="s0"
                  :min="0"
                  :step="1"
                  hide-details
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="i0"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="number"
                    ></v-text-field>
                  </template>
                </v-slider>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>{{Recovered}}</v-card-title>
              <v-card-actions>
                <v-slider
                  v-model="r0"
                  class="align-center"
                  :max="s0"
                  :min="0"
                  :step="1"
                  hide-details
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="r0"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="number"
                    ></v-text-field>
                  </template>
                </v-slider>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LineChart from "../../Charts/LineChart/LineChart";
// import {createNamespacedHelpers} from 'vuex'
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
// const {mapActions, mapGetters} = createNamespacedHelpers('sir');

export default {
  components: {
    LineChart
  },
  name: "ModelComponent",
  data: () => ({
    datacollection: {},
    valid: true,
    min: 0,
    max: 1,
    step: 0.01
  }),
  computed: {
    ...mapGetters([
      "Susceptible",
      "Infected",
      "Recovered",
      "sir_R0",
      "sir_D",
      "sir_pob"
    ]),
    d_value: function() {
      return (1 / this.gamma).toFixed(1);
    },
    r_0_values: function() {
      return (this.betta / this.gamma).toFixed(1);
    },
    prob: function() {
      return (this.betta * 100).toFixed(0);
    },
    ...mapGetters({
      x_series: "sir/get_x_series",
      y_series_S: "sir/get_y_series_S",
      y_series_I: "sir/get_y_series_I",
      y_series_R: "sir/get_y_series_R"
    }),
    s0: {
      get() {
        return this.$store.getters["sir/get_S0"];
      },
      set(value) {
        this.$store.commit("sir/update_s0", value);
      }
    },
    i0: {
      get() {
        return this.$store.getters["sir/get_I0"];
      },
      set(value) {
        this.$store.commit("sir/update_i0", value);
      }
    },
    r0: {
      get() {
        return this.$store.getters["sir/get_R0"];
      },
      set(value) {
        this.$store.commit("sir/update_r0", value);
      }
    },
    betta: {
      get() {
        return this.$store.getters["sir/get_betta"];
      },
      set(value) {
        this.$store.commit("sir/update_betta", value);
      }
    },
    gamma: {
      get() {
        return this.$store.getters["sir/get_gamma"];
      },
      set(value) {
        this.$store.commit("sir/update_gamma", value);
      }
    }
  },
  methods: {
    ...mapActions({
      linear_chart: "sir/plot"
    }),
    fillData() {
      this.datacollection = {
        labels: this.x_series,
        datasets: [
          {
            borderColor: "#1467e3dd",
            label: this.Susceptible,
            backgroundColor: "#1467e39e",
            data: this.y_series_S,
            pointRadius: 2
          },
          {
            borderColor: "#e8278ee1",
            label: this.Infected,
            backgroundColor: "#e8278eab",
            data: this.y_series_I,
            pointRadius: 2,
            pointStyle: "rect"
          },
          {
            borderColor: "#1ef7e9eb",
            label: this.Recovered,
            backgroundColor: "#1ef7e9a7",
            data: this.y_series_R,
            pointRadius: 2,
            pointStyle: "star"
          }
        ]
      };
    },
    async build_chart() {
      await this.linear_chart();
      this.fillData();
    }
  },

  mounted() {
    this.build_chart();
  },
  watch: {
    betta: function() {
      this.build_chart();
    },
    gamma: function() {
      this.build_chart();
    },
    i0: function() {
      this.build_chart();
    },
    r0: function() {
      this.build_chart();
    },
    Susceptible: function() {
      this.build_chart();
    },
    Infected: function() {
      this.build_chart();
    },
    Recovered: function() {
      this.build_chart();
    }
  }
};
</script>

<style scoped>
.card_height {
  height: 150px;
}
.p-0 {
  padding: 6px 3px;
}
</style>
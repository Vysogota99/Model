<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
      <v-list dense>
        <v-list-group
                sub-group
                value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>SIR</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
                  v-for="(item, i) in storage"
                  :key="i"
                  link
                  :to="item[2]"
          >
            <v-list-item-icon>
              <v-icon v-text="item[1]"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item[0]"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item
                link
                to="/seir"
        >
          <v-list-item-action>
            <v-icon>mdi-chart-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Covid-19 и SEIR</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-switch
                    v-model="lang"
                    :label="`Rus: ${lang.toString()}`"
            ></v-switch>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/" style="color: #fff; text-decoration: none">
          {{Title}}
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
              style="height: 100%; padding: 0;"
              fluid
      >
        <v-row>
          <v-col cols="12" style="padding: 0;">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020 Лапшин Иван Александрович</span>
    </v-footer>
  </v-app>
</template>


<script>
import {mapGetters} from 'vuex'
  export default {
    components: {

    },
    props: {
      source: String,
    },
    computed: {
      ...mapGetters(['MatModel', 'ModelDesc', 'Sample', 'Title']),
      lang: {
        get() {
          return this.$store.getters["isRus"]
        },
        set(value) {
          this.$store.commit('change_lang', value)
        }
      },
      storage: function () {
        return [
          [this.MatModel, 'mdi-calculator-variant', '/sir/model'],
          [this.ModelDesc, 'mdi-book-open-outline', '/sir/theory'],
          [this.Sample, 'mdi-bacteria', '/sir/example'],
        ]
      },
    },
    data: () => ({
      drawer: false,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
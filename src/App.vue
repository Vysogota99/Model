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

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/" style="color: #fff; text-decoration: none">
          Модели распространения эпидемий
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

  export default {
    components: {

    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
      storage: [
        ['Математическия модель', 'mdi-calculator-variant', '/sir/model'],
        ['Описание модели', 'mdi-book-open-outline', '/sir/example'],
        ['Пример использования', 'mdi-bacteria', '/sir/theory'],
      ],
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
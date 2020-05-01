<template>
  <v-app id="inspire">
    <sidebar :drawer="drawer" />

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Testing System</span>
      </v-toolbar-title>
       
        <v-spacer />
        <v-btn icon>
            <v-icon>mdi-apps</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-btn
        icon
        large
        >
        <v-avatar
            size="32px"
            item>
            <v-img
                src="https://image.flaticon.com/icons/svg/1077/1077012.svg"
                alt="Vuetify"
            />
        </v-avatar>
        </v-btn>
    </v-app-bar>
    <v-content>
        <v-container fluid>
            <router-view />
        </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Navigation/Sidebar';

export default {
    props: {
        source: String,
    },
    data: () => ({
        dialog: false,
        drawer: true,
    }),
    components: {
        Sidebar
    }
}
</script>
<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      color="cyan darken-1"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="teal lighten-2">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <h3 class="mr-4">Correo</h3>
      <!-- MODAL -->
      <Modal />
      <v-btn @click="LogOut">
        <!-- {{$store.state.sesion.usuario ? $store.state.sesion.usuario.email}} -->
        <v-icon>
          mdi-logout
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Modal from "./Modal.vue";
import Firebase from "firebase";

export default {
  name: "Navbar",
  components: {
    Modal,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Login",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Registrate",
          to: "/Registro",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Plataforma usuarios registrados",
          to: "/Home",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Cursos Alfa",
    };
  },
  methods: {
    logOut() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push("Login");
        });
    },
  },
};
</script>

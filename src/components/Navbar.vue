<template>
  <v-app>
    <Sidebar v-if="$store.state.sesion.usuario" />
    <v-app-bar app color="teal lighten-2">
      <v-toolbar-title v-text="title" class="mr-3" />
      <EditarCurso v-if="$store.state.sesion.usuario" />
      <v-spacer />
      <!-- CORREO -->
      <h3 class="mr-4" v-show="$store.state.sesion.usuario">
        {{ $store.state.sesion.usuario.email }}
      </h3>
<!-- MODAL -->
      <ModalRegistro v-show="!$store.state.sesion.usuario" />
<!-- BOTON CERRAR SESION -->
      <BtnCerrarSesion v-show="$store.state.sesion.usuario" />
    </v-app-bar>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import EditarCurso from "../views/EditarCurso.vue";
import Sidebar from "./Sidebar.vue";
import ModalRegistro from "./ModalRegistro.vue";
import BtnCerrarSesion from "./BtnCerrarSesion";
// import Firebase from "firebase";

export default {
  name: "Navbar",
  components: {
    ModalRegistro,
    Sidebar,
    BtnCerrarSesion,
    EditarCurso,
  },
  data: () => ({
    title: "Cursos Alfa Web",
  }),
  methods: {},
};
</script>

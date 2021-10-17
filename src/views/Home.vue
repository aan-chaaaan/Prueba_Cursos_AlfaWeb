<template>
  <v-app>
    <v-container class="mt-5"></v-container>
    <v-container class="mt-5 text-center">
      <h1>LISTA DE CURSOS</h1>
    </v-container>
    <v-container class="mt-5">
      <v-row>
        <v-col
          v-for="curso in $store.state.cursos.cursos"
          :key="curso.id"
          cols="12"
          sm="3"
          md="4"
        >
          <v-card class="mx-auto" max-width="344">
            <v-img :src="curso.imagen" height="200px"></v-img>

            <v-card-title class="justify-center">{{
              curso.nombre
            }}</v-card-title>

            <v-card-subtitle>{{ curso.descripcion }}</v-card-subtitle>
            <!-- <v-card-text>Costo: {{ curso.costo }} </v-card-text>
            <v-card-text>Duracion: {{ curso.duracion }}</v-card-text>
            <v-card-text>Cupos: {{ curso.cupos }}</v-card-text> -->
            <v-card-text>
              <v-chip-group
                column   
              >
                <v-chip class="teal lighten-4"> Duracion: {{ curso.duracion }} </v-chip>
                <v-chip class="light-blue lighten-2"> Cupos: {{ curso.cupos }} </v-chip>
                <v-chip class="deep-purple accent-1"> Costo: {{ curso.costo }} </v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <br />
    <br />
    <!-- VISTA ADMINISTRAR CURSOS -->
    <v-container class="mt-5">
      <h1 class="text-center">ADMINISTRAR</h1>
      <!-- Boton para ir a vista de agregar curso -->
      <AgregarCurso class="text-end" />
      <v-data-table :items="$store.state.cursos.cursos" :headers="headers">
        <!-- costo -->
        <template v-slot:[`item.costo`]="{ item }">
          <v-chip color="success">${{ item.costo.toLocaleString() }}</v-chip>
        </template>
        <!-- estado -->
        <template v-slot:[`item.estado`]="{ item }">
          <v-chip :color="item.estado ? 'info' : 'grey'">
            {{ item.estado ? "Si" : "No" }}
          </v-chip>
        </template>
        <!-- fecha creacion -->
        <template v-slot:[`item.fecha_creacion`]="{ item }">
          <v-chip>
            {{ item.fecha_creacion ? item.fecha_creacion : "Sin informacion" }}
          </v-chip>
        </template>
        <!-- fecha creacion -->
        <template v-slot:[`item.acciones`]="{ item }">
          <div>
            <v-btn icon @click="CambiarVistaAEdit(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="EliminarCurso(item)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import AgregarCurso from "./AgregarCurso.vue";

export default {
  components: {
    AgregarCurso,
  },
  data: () => ({
    headers: [
      { text: "Curso", value: "nombre" },
      { text: "Cupos", value: "cupos" },
      { text: "Inscritos", value: "inscritos" },
      { text: "Duración", value: "duracion" },
      { text: "Costo", value: "costo" },
      { text: "Terminado", value: "estado" },
      { text: "Fecha", value: "fecha_creacion" },
      { text: "Acciones", value: "acciones" },
    ],
  }),
  mounted() {
    this.$store.dispatch("cursos/TodosLosCursos");
  },
  methods: {
    CambiarVistaAEdit(item) {
      this.$router.push(`/cursos/${item.id}`);
    },
    EliminarCurso(item) {
      console.log("eliminar el item => ", item);
    },
    AgregarCurso() {
      this.$router.push(`/Home/AgregarCurso`);
    },
  },
};
</script>
<style>

</style>

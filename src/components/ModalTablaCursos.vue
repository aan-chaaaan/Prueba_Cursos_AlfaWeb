<template>
  
  <v-dialog>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Tabla de cursos
      </v-btn>
    </template>
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
  </v-dialog>
</template>
<script>
export default {
  name: "TablaCursos",
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
  methods: {
    CambiarVistaAEdit(item) {
      this.$router.push(`/cursos/${item.id}`)
    },
    EliminarCurso(item) {
      console.log("eliminar el item => ", item);
    },
  },
};
</script>

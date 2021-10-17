<template>
  <v-dialog>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Editar curso
      </v-btn>
    </template>
    <v-card>
      <h1>Editar curso: {{ $route.params.id }}</h1>
      <v-container>
        <v-form @submit.prevent="GuardarDatos" ref="form">
          <v-text-field v-model="curso.nombre" label="Nombre"></v-text-field>
          <v-text-field
            v-model.number="curso.cupos"
            type="number"
            label="Cupos"
          ></v-text-field>
          <v-text-field
            v-model.number="curso.inscritos"
            type="number"
            label="Inscritos"
          ></v-text-field>
          <v-text-field
            v-model="curso.duracion"
            label="Duracion"
          ></v-text-field>
          <v-text-field
            v-model.number="curso.costo"
            type="number"
            label="Costo"
          ></v-text-field>
          <v-switch v-model.number="curso.estado" label="Estado"></v-switch>
          <v-btn type="submit" color="success">Guardar datos</v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import Firebase from "firebase";


export default {
  BeforeRouteEnter(to, from, next) {
    Firebase.firestore()
      .collection("usuarios")
      .doc(to.params.id)
      .get()
      .then((document) => {
        next((vm) => {
          vm.curso = { id: document.id, ...document.cursos() };
        });
      });
  },
  data: () => ({
    curso: {},
  }),
  mounted(){
    console.log(this.$refs.formulario)
  },
  methods: {
    GuardarDatos() {
      if (this.$refs.formulario.validate()) {
        console.log("formulario valido")
        Firebase.firestore().collection("usuarios").doc(this.curso.id).update(this.curso).then(() => {
          
        })
      }
    },
  },
};
</script>

<!-- cuando ingresa el usuario -->
<template>
  <v-container class="fluid mt-5" >
    <v-card
      class="mx-auto"
      max-width="344"
      v-for="curso in cursos"
      :key="curso.id"
    >
      <v-img height="200px"></v-img>

      <v-card-title></v-card-title>

      <v-card-subtitle></v-card-subtitle>
      <v-card-text></v-card-text>
    </v-card>
  </v-container>
</template>

<!-- <v-container>
      <pre>{{ cursos }}</pre>
    </v-container> -->

<script>
import Firebase from "firebase";
export default {
  components: {},
  name: "Home",
  data: () => ({
    cursos: [],
  }),
  mounted() {
    Firebase.firestore()
      .collection("usuarios")
      .get()
      .then((documents) => {
        documents.forEach((document) => {
          this.cursos.push({ id: document.id, ...document.data() });
          console.log(this.cursos[0].nombre);
        });
      });
  },
};
</script>
<style></style>

<template>
  <!-- pantalla login -->
  <v-app>
    <v-container class="text-center">
      <h1>¡Bienvenido a cursos Alfa Web!</h1>
      <h3>Ingresa con tus credenciales o registrate</h3>
    </v-container>

    <v-form ref="form" @submit.prevent="validarForm" lazy-validation class="container"  >
      <v-text-field
        v-model="email"
        :counter="10"
        :rules="emailRules"
        label="Correo"
        required
        
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Contraseña"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4 mt-4"
        type="submit"
        @click="validate"
      >
        Ingresar
      </v-btn>

      <v-btn color="error" class="mr-4 mt-4" @click="reset">
        Eliminar datos formulario
      </v-btn>

      <v-btn color="warning" class="mt-4" @click="resetValidation">
        Resetear validación
      </v-btn>
    </v-form>
  </v-app>
</template>
<script>
//user1@gmail.com | 123456

import Firebase from "firebase";

export default {
  data: () => ({
    valid: true,
    email: null,
    emailRules: [
      (v) => !!v || "Correo es requerido",
      (v) => /.+@.+\..+/.test(v) || "Correo debe ser válido",
    ],
    password: null,
    passwordRules: [
      (v) => !!v || "Contraseña es requerida",
      (v) =>
        (v && v.length <= 8) || "Contraseña debe ser de minimo 8 caracteres",
    ],
    checkbox: false,
  }),

  methods: {
    validarForm() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("Home");
          this.$store.dispatch("sesion/configurarUsuario", Firebase.auth().currentUser)
        })
        .catch((response) => {
          console.error(response);
        });
    },

    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style scoped>
div {
  margin-top: 50px;
}
</style>

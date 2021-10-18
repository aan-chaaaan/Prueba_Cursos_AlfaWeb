<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Registrate aqui
      </v-btn>
    </template>
    <v-card>
      <v-form
        ref="form"
        @submit.prevent="RegistrarUsuario"
        lazy-validation
        class="container"
      >
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
          class="mr-4"
          type="submit"
          @click="validate"
        >
          Registrarse
        </v-btn>

        <v-btn color="blue darken-1" text @click="dialog = false">
          Cerrar
        </v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import Firebase from "firebase";
export default {
  name: "ModalRegistro",
  data: () => ({
    dialog: false,
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
    validate() {
      this.$refs.form.validate();
    },
    RegistrarUsuario() {
      Firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
         console.log(userCredential)
         alert("Registro exitoso")
        })
        .catch((error) => {
          console.log(error)
        });
    },
  },
};
</script>

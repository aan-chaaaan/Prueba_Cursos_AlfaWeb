<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Registrate aqui
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-center" >
        <span >Ingresa tu correo y contraseña</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Contraseña*"
                type="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Cerrar
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Registrarse
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "Modal",
  data: () => ({
    dialog: false,
  }),
};
</script>

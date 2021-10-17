<template>
    <v-btn @click="$store.dispatch(`sesion/logOut`)">
        <v-icon>
          mdi-logout
        </v-icon>
      </v-btn>
</template>
<script>
export default {
 
}
</script>

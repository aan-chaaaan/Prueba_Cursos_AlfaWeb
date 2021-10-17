<template>
  <v-card>
    <v-navigation-drawer permanent expand-on-hover app>
      <v-divider></v-divider>
      <v-list nav dense>
        <!-- <v-list-item link v-for="(link, index) in links" router :key="index" :to="link.to" > -->
        <v-list-item v-for="(link, index) in links" :key="index" link router @click="$router.push({ path: links.to })">
          <v-icon>{{ link.icon }}</v-icon>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      links: [
         {
          title: "inicio",
          icon: "mdi-account-multiple",
          to: "/Home",
        },
        {
          title: "Administrar cursos",
          icon: "mdi-account-multiple",
          to: "/AdministrarCursos",
          name: "Administracion",
        },
      ],
    };
  },
};
</script>

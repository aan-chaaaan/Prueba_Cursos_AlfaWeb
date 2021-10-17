import Vue from "vue";
import VueRouter from "vue-router";
import Firebase from "firebase";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "*",
      redirect: "/Login",
    },
    {
      path: "/",
      redirect: "/Login",
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import('../views/Login.vue')
    },
    {
      path: "/AdministrarCursos",
      name: "Administrar",
      component: () => import('../views/AdministrarCursos.vue')
    },
    {
      path: "/AdministrarCursos/AgregarCursos",
      name: "Agregar",
      component: () => import('../views/AdministrarCursos.vue')
    },
    {
      path: "/AdministrarCursos/:id",
      name: "Editar",
      component: () => import('../views/EditarCurso.vue')
    },
    {
      path: "/Home",
      name: "Home",
      component: () => import('../views/Home.vue'),
      meta: {
        Login: true,
      },
    },
  ],
});

 router.beforeEach((to, from, next) => {
  let email = Firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.Login);
  if (!email && authRequired) {
    next("Login");
  } else if (email && !authRequired) {
    next("Home", "AdministrarCursos");
  } else {
    next();
  }
});
export default router;

//  router = new VueRouter({
//     mode: "history",
//     base: process.env.BASE_URL,
//     routes,
//   })

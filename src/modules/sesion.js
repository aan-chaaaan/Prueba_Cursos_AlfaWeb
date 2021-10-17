import Firebase from "firebase";

export const ModuloSesion = {
  namespaced: true,
  state: {
    usuario: "",
  },
  mutations: {
    SET_USUARIO(state, nuevoUsuario) {
      state.usuario = nuevoUsuario;
    },
  },
  actions: {
    configurarUsuario(context, usuario) {
      context.commit("SET_USUARIO", usuario);
    },
    subscribeToAuth(context) {
      Firebase.auth().onAuthStateChanged((usuario) => {
        context.commit("SET_USUARIO", usuario || "");
      });
    },
    async InicioSesion(_context, credenciales) {
      await Firebase.auth().signInWithEmailAndPassword(
        credenciales.email,
        credenciales.password
      );
    },
    async logOut() {
      await Firebase.auth().signOut();
    },
  },
};

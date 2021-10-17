import Firebase from "firebase";

export const ModuloCursos = {
  namespaced: true,
  state: {
    cursos: [],
  },
  mutations: {
    SET_CURSOS(state, nuevoCurso) {
      state.cursos = nuevoCurso;
    },
  },
  actions: {
    TodosLosCursos(context) {
      Firebase.firestore()
        .collection("usuarios")
        .get()
        .then((documents) => {
            const cursos = [];
          documents.forEach((document) => {
            cursos.push({ id: document.id, ...document.data()});
            context.commit("SET_CURSOS", cursos)
          });
        });
        
    },
  },
};

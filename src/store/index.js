import Vue from 'vue'
import Vuex from 'vuex'

import { ModuloSesion } from "../modules/sesion"
import { ModuloCursos } from "../modules/cursos"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    sesion: ModuloSesion,
    cursos: ModuloCursos
  }
})

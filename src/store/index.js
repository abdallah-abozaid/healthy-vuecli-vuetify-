import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    thedrawer: true,
    window:0,
  },
  mutations: {
    open(state){
      state.thedrawer = true;
     
    },
    close(state){
      state.thedrawer = false;
     
    },
    move(state){
      state.window = state.window +1
    },
    move2(state){
      state.window = state.window -1
    }
  },
  actions: {},
  modules: {},
});

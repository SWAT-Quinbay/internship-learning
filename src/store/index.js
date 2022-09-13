import Vue from "vue";
import Vuex from "vuex";

import task from "@/store/modules/task.store"

Vue.use(Vuex);


export default new Vuex.Store({
    modules : {
     task
    }
  });
  
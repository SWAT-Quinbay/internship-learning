import Vue from "vue";
import Vuex from "vuex";

import task from "@/store/modules/task.store";
import user from "@/store/modules/user.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    task,
    user,
  },
});

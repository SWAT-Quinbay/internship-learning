import {getTokenRole} from "../../utils/storage"

export default {
  state: {
    user: {
      id: "",
      role: getTokenRole(),
      verified: false,
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user.id = user.id;
      state.user.role = user.role;
    },
  },
  actions: {
    SET_USER: ({ commit }, user) => {
      commit("setUser", user);
    },
  },
};

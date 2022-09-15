export default {
  state: {
    user: {
      id: "",
      name: "",
      role: "USER",
      verified: false,
      email: "",
    },
  },
  getters: {
    getUserFromState: (state) => {
      return state.user;
    },
  },
  mutations: {},
  actions: {},
};

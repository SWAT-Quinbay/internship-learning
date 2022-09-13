export default {
  state: {
    user: {
      id: "",
      name: "",
      role: "ADMIN",
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

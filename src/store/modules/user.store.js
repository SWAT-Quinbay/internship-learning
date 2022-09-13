export default {
  state: {
    user: {
      id: "",
      name: "",
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

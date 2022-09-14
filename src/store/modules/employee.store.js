import { getEmployeeList } from "@/service/employee.service";

export default {
  state: {
    employeeList: [],
  },
  getters: {
    getEmployeeList: (state) => {
      return state.employeeList;
    },
  },
  mutations: {
    setEmployeeList(state, value) {
      return (state.employeeList = value);
    },
  },
  actions: {
    GET_EMPLOYEE_LIST({ commit }) {
      getEmployeeList({
        success: (res) => {
          console.log(res);
          commit("setEmployeeList", res.data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    },
  },
};

import {
  getEmployeeList,
  getEmployeeDetails,
  assignTrainingToEmployee,
  getTrainingByEmployeeId,
} from "@/service/employee.service";

export default {
  state: {
    employeeList: [],
    employeeDetails: {},
    myTrainingList: [],
  },
  getters: {
    getEmployeeList: (state) => {
      return state.employeeList;
    },
    getEmployeeDetails: (state) => {
      return state.employeeDetails;
    },
    getMyTrainingList: (state) => {
      return state.myTrainingList;
    },
  },
  mutations: {
    setEmployeeList(state, value) {
      return (state.employeeList = value);
    },
    setEmployeeDetails(state, value) {
      return (state.employeeDetails = value);
    },
    setMyTrainingList(state, value) {
      return (state.myTrainingList = value);
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

    GET_EMPLOYEE_DETAIL_BY_ID({ commit }, employeeId) {
      getEmployeeDetails({
        employeeId,
        success: (res) => {
          console.log(res);
          commit("setEmployeeDetails", res.data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    },

    ASSIGN_TRAINING_TO_EMPLOYEE(context, { trainingId, employeeId }) {
      assignTrainingToEmployee({
        trainingId,
        employeeId,
        success: (res) => {
          console.log(res);
          alert("Training Assigned Successfully");
        },
        error: (err) => {
          console.log(err);
        },
      });
    },

    GET_TRAININGS_BY_EMPLOYEE_ID({ commit }, employeeId) {
      getTrainingByEmployeeId({
        employeeId,
        success: (res) => {
          console.log(res);
          commit("setMyTrainingList", res.data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    },
  },
};

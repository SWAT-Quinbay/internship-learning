import {
  getEmployeeList,
  getEmployeeDetails,
  assignTrainingToEmployee,
  getTrainingByEmployeeId,
  getUsersIdByTrainingId,
  revokeTrainingFromEmployee,
} from "@/service/employee.service";

export default {
  state: {
    employeeList: [],
    employeeDetails: {},
    myTrainingList: [],
    usersIdByTrainingId: [],
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
    getUsersIdByTrainingId: (state) => {
      return state.usersIdByTrainingId;
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
    setUsersIdByTrainingId(state, value) {
      return (state.usersIdByTrainingId = value);
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

    ASSIGN_TRAINING_TO_EMPLOYEE({ dispatch }, { trainingId, employeeId }) {
      assignTrainingToEmployee({
        trainingId,
        employeeId,
        success: (res) => {
          console.log(res);
          dispatch("GET_USERS_ID_BY_TRAINING_ID", trainingId);
        },
        error: (err) => {
          console.log(err);
        },
      });
    },

    REVOKE_TRAINING_FROM_EMPLOYEE({ dispatch }, { trainingId, employeeId }) {
      revokeTrainingFromEmployee({
        trainingId,
        employeeId,
        success: (res) => {
          console.log(res);
          dispatch("GET_USERS_ID_BY_TRAINING_ID", trainingId);
        },
        error: (err) => {
          console.log(err);
        },
      });
    },

    GET_USERS_ID_BY_TRAINING_ID({ commit, dispatch }, trainingId) {
      getUsersIdByTrainingId({
        trainingId,
        success: (res) => {
          console.log(res);
          commit("setUsersIdByTrainingId", res.data);
          dispatch("GET_EMPLOYEE_LIST");
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

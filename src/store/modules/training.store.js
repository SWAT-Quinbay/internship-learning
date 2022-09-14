import {
  getTraining,
  createTraining,
  getTrainingById,
  createDayAndTasks,
} from "@/service/training.service";
export default {
  state: {
    trainingList: [],
    trainingDayList: [],
  },
  getters: {
    getTrainingList(state) {
      return state.trainingList;
    },
    getTrainingDayList(state) {
      return state.trainingDayList;
    },
  },
  mutations: {
    setTrainingList(state, value) {
      state.trainingList = value;
    },
    setTrainingDayList(state, value) {
      state.trainingDayList = value;
    },
  },
  actions: {
    CREATE_TRAINING(context, { successCallback, errorCallback, trainingdata }) {
      createTraining({
        trainingdata,
        success: (res) => {
          successCallback && successCallback(res);
        },
        error: (err) => {
          errorCallback && errorCallback(err);
        },
      });
    },
    ADD_TASK_TO_DAY(context, { successCallback, errorCallback, payload }) {
      createDayAndTasks({
        payload,
        success: (res) => {
          successCallback && successCallback(res);
        },
        error: (err) => {
          errorCallback && errorCallback(err);
        },
      });
    },
    SET_TRAINING_LIST({ commit }, payload) {
      commit("setTrainingDayList", payload);
    },
    GET_TRAINING_LIST({ commit }) {
      getTraining({
        success: (res) => {
          commit("setTrainingList", res.data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    },
    GET_TRAINING_BY_ID(
      context,
      { successCallback, errorCallback, trainingId }
    ) {
      getTrainingById({
        trainingId,
        success: (res) => {
          successCallback && successCallback(res);
        },
        error: (err) => {
          errorCallback && errorCallback(err);
        },
      });
    },
  },
};

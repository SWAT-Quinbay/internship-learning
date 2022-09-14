import {
  getTraining,
  createTraining,
  getTrainingById,
  createDayAndTasks,
  getTrainingByDayId,
} from "@/service/training.service";
export default {
  state: {
    trainingList: [],
    trainingDayList: [],
    trainingDayTaskList: [],
  },
  getters: {
    getTrainingList(state) {
      return state.trainingList;
    },
    getTrainingDayList(state) {
      return state.trainingDayList;
    },
    getTrainingDayTaskList(state) {
      return state.trainingDayTaskList;
    },
  },
  mutations: {
    setTrainingList(state, value) {
      state.trainingList = value;
    },
    setTrainingDayList(state, value) {
      state.trainingDayList = value;
    },
    setTrainingDayTaskList(state, value) {
      state.trainingDayTaskList = value.tasks;
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
    SET_TRAINING_DAY_TASK_LIST({ commit }, payload) {
      commit("setTrainingDayTaskList", payload);
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
    GET_TASK_BY_DAY_AND_TRAINING_ID(
      context,
      { successCallback, errorCallback, trainingId, dayId }
    ) {
      getTrainingByDayId({
        trainingId,
        dayId,
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

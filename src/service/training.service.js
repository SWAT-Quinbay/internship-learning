import axios from "axios";
import { BASE_TRAINGING_URL } from "@/constants/url.constant.js";

export const getTraining = ({ success, error }) => {
  axios
    .get(`${BASE_TRAINGING_URL}/all-training`)
    .then((res) => {
      success && success(res);
    })
    .catch((err) => {
      error && error(err);
    });
};

export const createTraining = ({ success, error, trainingdata }) => {
  axios
    .post(`${BASE_TRAINGING_URL}/training`, trainingdata)
    .then((res) => {
      success && success(res);
    })
    .catch((err) => {
      error && error(err);
    });
};

export const createDayAndTasks = ({ success, error, payload }) => {
  axios
    .post(`${BASE_TRAINGING_URL}/day`, payload)
    .then((res) => {
      success && success(res);
    })
    .catch((err) => {
      error && error(err);
    });
};

export const getTrainingById = ({ success, error, trainingId }) => {
  axios
    .get(`${BASE_TRAINGING_URL}/training/${trainingId}`)
    .then((res) => {
      success && success(res);
    })
    .catch((err) => {
      error && error(err);
    });
};

export const getTrainingByDayId = ({ success, error, trainingId, dayId }) => {
  axios
    .get(`${BASE_TRAINGING_URL}/training/${trainingId}/day/${dayId}`)
    .then((res) => {
      success && success(res);
    })
    .catch((err) => {
      error && error(err);
    });
};

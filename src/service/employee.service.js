import axios from "axios";
import {
  BASE_EMPLOYEE_URL,
  BASE_TRAINGING_URL,
} from "@/constants/url.constant.js";

export const getEmployeeList = ({ success, error }) => {
  axios
    .get(`${BASE_EMPLOYEE_URL}/user/get/details`)
    .then((res) => {
      success && success(res);
    })
    .catch((err) => {
      error && error(err);
    });
};

export const getEmployeeDetails = ({ success, error, employeeId }) => {
  console.log(employeeId);
  axios
    .get(`${BASE_EMPLOYEE_URL}/user/get/details/${employeeId}`)
    .then((res) => {
      success && success(res);
    })
    .catch((err) => {
      error && error(err);
    });
};

export const assignTrainingToEmployee = ({
  success,
  error,
  employeeId,
  trainingId,
}) => {
  console.log("trainingId", trainingId);
  console.log("employeeId", employeeId);
  axios
    .post(`${BASE_TRAINGING_URL}/assign/${employeeId}/${trainingId}`)
    .then((res) => {
      success && success(res);
    })
    .catch((err) => {
      error && error(err);
    });
};

export const getTrainingByEmployeeId = ({ success, error, employeeId }) => {
  axios
    .get(`${BASE_TRAINGING_URL}/user-training/${employeeId}`)
    .then((res) => {
      success && success(res);
    })
    .catch((err) => {
      error && error(err);
    });
};

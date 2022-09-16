import { getEmployeeList,getEmployeeDetails } from "@/service/employee.service";

export default {
  state: {
    employeeList: [],
    employeeDetails:{}
  },
  getters: {
    getEmployeeList: (state) => {
      return state.employeeList;
    },
    getEmployeeDetails: (state) => {
      return state.employeeDetails;
    },
  },
  mutations: {
    setEmployeeList(state, value) {
      return (state.employeeList = value);
    },
    setEmployeeDetails(state, value) {
      return (state.employeeDetails = value);
    },
  },
  actions: {
    GET_EMPLOYEE_LIST({ commit }) {
      getEmployeeList({
        success: (res) => {
          // console.log(res);
          commit("setEmployeeList", res.data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    },

    GET_EMPLOYEE_DETAIL_BY_ID({commit},employeeId){
      getEmployeeDetails({
        employeeId,
        success:(res)=>{
          console.log(res);
          commit("setEmployeeDetails",res.data)
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }
  },
};

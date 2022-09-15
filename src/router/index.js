import Vue from "vue";
import Router from "vue-router";

import LoginPage from "@/views/LoginPage";
import ErrorPage from "@/views/ErrorPage.vue";
import Register from "@/views/Register";
import CreateTraining from "@/views/Training/CreateTraining";
import TrainingDashboard from "@/views/Training/TrainingDashboard";
import TrainingDetailPage from "@/views/Training/TrainingDetailPage";
import TrainingDayDetailPage from "@/views/Training/TrainingDayDetailPage";
import CreateDay from "@/views/Training/CreateDay";
import TrainingDashboardRouter from "@/views/Training/TrainingDashboardRouter";
import TrainingDetailRouter from "@/views/Training/TrainingDetailRouter";
import OtpPage from "../views/OtpPage"
import EmployeeDashboardRouter from "@/views/Employee/EmployeeDashboardRouter";
import EmployeeDashboard from "@/views/Employee/EmployeeDashboard";

import AdminRouterPage from "@/views/Admin/AdminRouterPage";

import Employee from "@/views/Admin/Employee";
import EmployeeRouter from "@/views/Admin/EmployeeRouter";
import EmployeeProfile from "@/views/Admin/EmployeeProfile.vue";

// import { getToken } from "@/utils/storage";

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: () => {
        return { name: "LoginPage" };
      },
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/verify",
      name: "OtpPage",
      component: OtpPage,
    },
    {
      path: "/mytrainings",
      component: EmployeeDashboardRouter,
      children: [
        {
          path: "",
          name: "EmployeeDashboard",
          component: EmployeeDashboard,
        },
      ],
    },

    {
      path: "/admin",
      component: AdminRouterPage,
      children: [
        {
          path: "training",
          component: TrainingDashboardRouter,
          children: [
            {
              path: "",
              name: "TrainingDashboard",
              component: TrainingDashboard,
            },
            {
              path: "create",
              name: "CreateTraining",
              component: CreateTraining,
            },
            {
              path: ":trainingId",
              component: TrainingDetailRouter,
              children: [
                {
                  path: "",
                  name: "TrainingDetailPage",
                  component: TrainingDetailPage,
                },
                {
                  path: "create",
                  name: "CreateDay",
                  component: CreateDay,
                },
                {
                  path: ":dayId",
                  name: "TrainingDayDetailPage",
                  component: TrainingDayDetailPage,
                },
              ],
            },
          ],
        },
        {
          path: "employee",
          component: EmployeeRouter,
          children: [
            {
              path: "",
              name: "Employee",
              component: Employee,
            },
            {
              path: ":employeeId",
              name: "EmployeeProfile",
              component: EmployeeProfile,
            },
          ],
        },
      ],
      // beforeEnter: (to, from, next) => {
      //   checkValidation("ADMIN", next);
      // },
    },
    {
      path: "*",
      name: "ErrorPage",
      component: ErrorPage,
    },
  ],
});

// const checkValidation = (role, next) => {
//   const token = getToken();
//   if (token) {
//     const user = JSON.parse(btoa(token.split(".")[1]));
//     if (user.role === role) {
//       next();
//     } else {
//       next({ name: "ErrorPage" });
//     }
//   } else {
//     next({ name: "LoginPage" });
//   }
// }

// router.afterEach((to) => {
//   const token = getToken();
//   if (token) {
//     if (to.name !== "LoginPage") {
//       router.replace("/");
//     }
//   }
// });

export default router;

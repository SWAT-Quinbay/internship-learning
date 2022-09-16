import Vue from "vue";
import Router from "vue-router";

import LoginPage from "@/views/LoginPage";
import ErrorPage from "@/views/ErrorPage.vue";
import RegisterComponent from "@/views/RegisterComponent";
import CreateTraining from "@/views/Training/CreateTraining";
import TrainingDashboard from "@/views/Training/TrainingDashboard";
import TrainingDetailPage from "@/views/Training/TrainingDetailPage";
import TrainingDayDetailPage from "@/views/Training/TrainingDayDetailPage";
import CreateDay from "@/views/Training/CreateDay";
import TrainingDashboardRouter from "@/views/Training/TrainingDashboardRouter";
import TrainingDetailRouter from "@/views/Training/TrainingDetailRouter";
import EmployeeDashboardRouter from "@/views/Employee/EmployeeDashboardRouter";
import EmployeeDashboard from "@/views/Employee/EmployeeDashboard";
import EmployeeTrainingDetailRouter from "@/views/Employee/EmployeeTrainingDetailRouter";
import EmployeeTrainingDetailPage from "@/views/Employee/EmployeeTrainingDetailPage";
import EmployeeTrainingDayDetailPage from "@/views/Employee/EmployeeTrainingDayDetailPage";

import AdminRouterPage from "@/views/Admin/AdminRouterPage";

import Employee from "@/views/Admin/Employee";
import EmployeeRouter from "@/views/Admin/EmployeeRouter";
import EmployeeProfile from "@/views/Admin/EmployeeProfile.vue";

import {
  getTokenRole,
  getTokenAuth,
  getTokenUserId,
  // deleteTokenAuth,
  // deleteTokenRole,
  // deleteTokenUserId,
} from "@/utils/storage";
import redirectWithRole from "@/utils/redirectWithRole";

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "RegisterComponent",
      component: RegisterComponent,
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
        {
          path: ":trainingId",
          component: EmployeeTrainingDetailRouter,
          children: [
            {
              path: "",
              name: "EmployeeTrainingDetailPage",
              component: EmployeeTrainingDetailPage,
            },
            {
              path: ":dayId",
              name: "EmployeeTrainingDayDetailPage",
              component: EmployeeTrainingDayDetailPage,
            },
          ],
        },
      ],
      beforeEnter: (to, from, next) => {
        checkValidation("USER", next);
      },
    },

    {
      path: "/admin",
      component: AdminRouterPage,
      redirect: "/admin/training",
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
      beforeEnter: (to, from, next) => {
        checkValidation("ADMIN", next);
      },
    },
    {
      path: "*",
      name: "ErrorPage",
      component: ErrorPage,
    },
  ],
});

const checkValidation = (role, next) => {
  if (getTokenAuth() == "true" && getTokenRole() == role) {
    next();
  } else if (getTokenAuth() == "true" && getTokenRole() != role) {
    redirectWithRole(getTokenRole());
  } else {
    next({ name: "LoginPage" });
  }
};

router.afterEach((to, next) => {
  if (getTokenUserId() && getTokenAuth() == "true") {
    if (to.name === "LoginPage") {
      redirectWithRole(getTokenRole());
    }
  } else {
    next({ name: "LoginPage" });
  }
});

export default router;

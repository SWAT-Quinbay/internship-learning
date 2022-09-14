import Vue from "vue";
import Router from "vue-router";

import LoginPage from "@/views/LoginPage";
// import TaskHomeRoute from "@/views/TaskHomeRoute";
// import TaskPage from "@/views/TaskPage";
// import TaskList from "@/views/TaskList";
// import ReportPage from "@/views/ReportPage";
import ErrorPage from "@/views/ErrorPage.vue";
import Register from "@/views/SignupPage";
// import HomePage from "@/views/HomePage";
// import TimerModal from "../components/TimerModal";

// import TrainingRouterPage from "@/views/Training/TrainingRouterPage";
import CreateTraining from "@/views/Training/CreateTraining";
import TrainingDashboard from "@/views/Training/TrainingDashboard";
import TrainingDetailPage from "@/views/Training/TrainingDetailPage";
import TrainingDayDetailPage from "@/views/Training/TrainingDayDetailPage";
import CreateDay from "@/views/Training/CreateDay"
import TrainingDashboardRouter from "@/views/Training/TrainingDashboardRouter";
import TrainingDetailRouter from "@/views/Training/TrainingDetailRouter";

import AdminRouterPage from "@/views/Admin/AdminRouterPage";

import Employee from "@/views/Admin/Employee";
import EmployeeRouter from "@/views/Admin/EmployeeRouter";
import EmployeeProfile from "@/views/Admin/EmployeeProfile.vue";

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
    // {
    //   path: "/home",
    //   name: "HomePage",
    //   component: HomePage,
    // },
    // {
    //   path: "/timer",
    //   name: "TimerModal",
    //   component: TimerModal,
    // },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    // {
    //   path: "/createtask",
    //   component: TaskHomeRoute,
    //   children: [
    //     {
    //       path: "",
    //       name: "TaskPage",
    //       component: TaskPage,
    //     },
    //     {
    //       path: "tasks",
    //       name: "TaskList",
    //       component: TaskList,
    //     },
    //   ],
    // },

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
    },
    {
      path: "*",
      name: "ErrorPage",
      component: ErrorPage,
    },
  ],
});

export default router;

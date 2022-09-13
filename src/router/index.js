import Vue from "vue";
import Router from "vue-router";

import LoginPage from "@/view/LoginPage";
import TaskHomeRoute from "@/view/TaskHomeRoute";
import TaskPage from "@/view/TaskPage";
import TaskList from "@/view/TaskList";
import ReportPage from "@/view/ReportPage";
import ErrorPage from "@/view/ErrorPage.vue";
import SignupPage from "@/view/SignupPage";
import HomePage from "@/view/HomePage";
import TimerModal from "../components/TimerModal";

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/timer",
      name: "TimerModal",
      component: TimerModal,
    },
    {
      path: "/signup",
      name: "SignupPage",
      component: SignupPage,
    },
    {
      path: "/createtask",
      component: TaskHomeRoute,
      children: [
        {
          path: "",
          name: "TaskPage",
          component: TaskPage,
        },
        {
          path: "tasks",
          name: "TaskList",
          component: TaskList,
        },
      ],
    },

    {
      path: "/viewreport",
      name: "ReportPage",
      component: ReportPage,
    },
    {
      path: "*",
      name: "ErrorPage",
      component: ErrorPage,
    },
  ],
});

export default router;

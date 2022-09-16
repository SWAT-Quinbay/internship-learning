import { getTokenUserId } from "@/utils/storage";

export const NavBarAdminRoutes = {
  role: "ADMIN",
  routes: [
    {
      pushData: { name: "TrainingDashboard" },
      label: "Training",
    },
    {
      pushData: { name: "Employee" },
      label: "Employee",
    },
    {
      pushData: { path: `/profile/${getTokenUserId()}` },
      label: "Profile",
    },
  ],
};
export const NavBarUserRoutes = {
  role: "USER",
  routes: [
    {
      pushData: { name: "EmployeeDashboard" },
      label: "Training",
    },
    {
      pushData: { path: `/profile/${getTokenUserId()}` },
      label: "Profile",
    },
  ],
};

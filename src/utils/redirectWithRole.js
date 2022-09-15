import router from "@/router";

export default (role) => {
  if (role === "USER") {
    router.replace({ path: "/mytrainings" });
  } else if (role === "ADMIN") {
    router.replace({ path: "/admin/training" });
  }
};

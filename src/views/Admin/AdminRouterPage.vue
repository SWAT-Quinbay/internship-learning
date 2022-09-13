<template>
  <div>
    <NavBar :navBarData="user.role === 'ADMIN' ? adminRoute : userRoute" />
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import { NavBarAdminRoutes, NavBarUserRoutes } from "@/utils/NavBarRoutes";
import { mapGetters } from "vuex";
export default {
  name: "AdminRouterPage",
  data() {
    return {
      adminRoute: NavBarAdminRoutes,
      userRoute: NavBarUserRoutes,
    };
  },
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters({
      user: "getUserFromState",
    }),
  },
};
</script>
<style scoped></style>

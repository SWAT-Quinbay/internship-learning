<template>
  <nav class="navbar navbar-expand-lg" id="NavBar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> Quinbay Training</a>
      <button
        class="navbar-toggler btn--toggle"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item me-4">
            <BadgeComponent
              :label="'Name : ' + user.name"
              class="badge--success--outline badge--outline--sm"
            />
          </li> -->
          <li
            class="nav-item me-4"
            v-for="(data, index) in navBarData.routes"
            :key="index"
          >
            <router-link
              :to="data.pushData"
              class="nav--link"
              active-class="active"
              >{{ data.label }}</router-link
            >
          </li>
        </ul>
        <div class="d-flex">
          <ButtonComponent
            label="Logout"
            class="btn--primary"
            @onClick="logout()"
            type="button"
          />
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { deleteAllToken } from "@/utils/storage";
import { mapGetters } from "vuex";
// import BadgeComponent from "@/components/BadgeComponent.vue";

export default {
  name: "NavBar",
  data() {
    return {
      navLink: [
        {
          name: "HomePage",
          label: "Home",
        },
        {
          name: "TaskPage",
          label: "TaskPage",
        },
      ],
    };
  },
  props: {
    navBarData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    ButtonComponent,
    // BadgeComponent,
  },
  computed: {
    ...mapGetters({
      user: "getUser",
    }),
  },
  methods: {
    logout() {
      deleteAllToken();
      this.$router.replace("/login");
    },
  },
};
</script>
<style scoped>
#NavBar {
  /* box-shadow: 0 5px 20px rgb(0 41 112 / 10%); */
  border-bottom: 1px solid #c7c7c7;
  background-color: #ffffff;
}
.nav--link {
  color: black;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}
.btn--toggle {
  border: none;
  outline: none;
  background-color: transparent;
}

.active {
  color: #ffffff;
  border-radius: 15px;
  padding: 3px 10px;
  font-size: 13px;
  background-color: #625afa;
}

@media screen and (max-width: 600px) {
  .nav-item {
    margin: 10px 10px 0px 10px !important;
  }
}
</style>

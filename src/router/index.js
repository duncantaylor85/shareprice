import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Portfolio from "@/views/Portfolio.vue";

Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
      if (data && data.signInUserSession) {
        user = data;
        next()
      }
    }).catch((e) => {
      console.log(e)
    });
    if (!user) {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

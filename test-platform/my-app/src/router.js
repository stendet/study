import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "create",
      component: () =>
        import(/* webpackChunkName: "create" */ "./views/Create.vue")
    },
    {
      path: "/List",
      name: "list",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "list" */ "./views/List.vue")
    }
  ]
});

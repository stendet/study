import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Chat",
      component: () => import(/* webpackChunkName: "chat" */ "./views/Chat.vue")
    }
  ]
});

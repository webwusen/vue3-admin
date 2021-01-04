import router from "./router";

const whiteList = ["/login"];

router.beforeEach((to) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    return true;
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      return true;
    }
    return "/login";
  }
});

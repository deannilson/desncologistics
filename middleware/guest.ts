export default defineNuxtRouteMiddleware(() => {
  const user = useCookie("cpanelex_user");
  if (user.value) navigateTo({ path: "/extranet" });
});

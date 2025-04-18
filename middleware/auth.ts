export default defineNuxtRouteMiddleware(() => {
  const user = useCookie("cpanelex_user");
  if (!user.value) return navigateTo({ path: "/login" });
});

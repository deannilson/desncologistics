export const useCart: any = () =>
  useState("cart", () =>
    localStorage.cart ? JSON.parse(localStorage.cart) : []
  );

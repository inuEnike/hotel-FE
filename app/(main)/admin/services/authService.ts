// services/authService.ts
import { Axios } from "@/lib/axios";
import { toast } from "react-toastify";

export const AuthService = {
  loginUser: async (dispatch: any, credentials: any) => {
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await Axios.post("/auth/signin", credentials);
      const data = res.data.data;

      localStorage.setItem("token", data);
      toast("Login Success");
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data,
      });
      window.location.replace("/admin/dashboard");
    } catch (err: any) {
      const message = err.response?.data?.message || "Something went wrong";

      dispatch({
        type: "LOGIN_ERROR",
        payload: message,
      });

      toast.error(message);
    }
  },

  logoutUser: (dispatch: any) => {
    localStorage.removeItem("token");
    toast("Logout Success");
    alert("Logout Success");
    dispatch({
      type: "LOGOUT",
    });
    window.location.replace("/admin/auth/signin");
  },
};

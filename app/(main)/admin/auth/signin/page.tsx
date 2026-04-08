"use client";
import React, { useContext, useState } from "react";
import Logo from "@/components/header/Logo";
import { images } from "@/utils/images";
import MainBtn from "@/components/buttons/MainBtn";
import { AuthContext } from "@/hooks/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { AuthService } from "../../services/authService";

const Signin = () => {
  const { dispatch, loading, error } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    AuthService.loginUser(dispatch, form);
  };

  return (
    <section className="flex not-md:flex-col w-full justify-center md:justify-between h-screen">
      <div className="main md:w-[50%] w-full">
        <div className="w-full">
          <div className="flex items-center flex-col justify-center h-screen gap-3">
            <div className="flex items-center justify-center gap-4">
              <Logo src={images.Logo} />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold uppercase text-center">
              Howdy Admin, Welcome back!{" "}
            </h2>
            <p className="text-sm">
              Please input your correct credentials to continue
            </p>
            <form
              className="flex flex-col py-7 md:px-3 px-7 lg:w-[80%] xl:w-[50%] w-full"
              onSubmit={handleSubmit}
            >
              <div className="w-full flex itedms-center flex-col my-4">
                <label htmlFor="email" className={"text-sm"}>
                  Email:
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  placeholder={"Enter your email"}
                  className="shadow-md focus:outline-0 w-full px-2 py-3 rounded-sm text-sm"
                />
              </div>

              <div className="w-full flex itedms-center flex-col my-4">
                <label htmlFor="password" className={"text-sm"}>
                  Password:
                </label>
                <input
                  type="password"
                  value={form.password}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, password: event.target.value })
                  }
                  placeholder={"Enter your password"}
                  className="shadow-md focus:outline-0 w-full px-2 py-3 rounded-sm text-sm"
                />
              </div>
              <div className="my-3" >
                {loading ? (
                  <MainBtn text={"Loading"} radius={"rounded-md"} />
                ) : (
                  <MainBtn text={"Login"} radius={"rounded-md"} />
                )}
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
      <div className="not-md:hidden signin w-[50%] "></div>
    </section>
  );
};

export default Signin;

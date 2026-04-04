import React from 'react';
import Logo from "@/components/header/Logo";
import {images} from "@/utils/images";
import MainBtn from "@/components/buttons/MainBtn";

const Signin = () => {
    return (
        <section className="flex w-full justify-between h-screen">
            <div className="main w-[50%]">
                <div className="w-full">
                    <div className="flex items-center flex-col justify-center h-screen gap-3">

                        <div className="flex items-center justify-center gap-4">
                            <Logo src={images.Logo}/>
                        </div>
                        <h2 className="text-2xl font-semibold uppercase">Howdy Admin, Welcome back! </h2>
                        <p className="text-sm">Please input your correct credentials to continue</p>
                        <form className="flex flex-col py-7 px-3 w-[50%]">
                            <div className="w-full flex itedms-center flex-col my-4">
                                <label htmlFor="fullName" className={"text-sm"}>Full Name:</label>
                                <input type="text" placeholder={"Enter your full name"}
                                       className="shadow-md focus:outline-0 w-full px-2 py-3 rounded-sm text-sm"/>
                            </div>

                            <div className="w-full flex itedms-center flex-col my-4">
                                <label htmlFor="email" className={"text-sm"}>Email:</label>
                                <input type="email" placeholder={"Enter your email"}
                                       className="shadow-md focus:outline-0 w-full px-2 py-3 rounded-sm text-sm"/>
                            </div>

                            <div className="w-full flex itedms-center flex-col my-4">
                                <label htmlFor="password" className={"text-sm"}>Password:</label>
                                <input type="text" placeholder={"Enter your password"}
                                       className="shadow-md focus:outline-0 w-full px-2 py-3 rounded-sm text-sm"/>
                            </div>
                            <div className="my-3">

                                <MainBtn text={"Login"} radius={"rounded-md"}/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div className="signin w-[50%] ">
            </div>
        </section>
    );
};

export default Signin;
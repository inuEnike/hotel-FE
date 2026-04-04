import React from "react";

interface IBtn {
    text: string;
    radius: string;
}

const MainBtn = ({text, radius}: IBtn) => {
    return (
        <button
            className={`bg-main w-38.25 md:w-41.25 h-13.75 text-white hover:text-main hover:bg-background hover:border-main hover:border ${radius} font-semibold transition-all ease-in-out duration-1000 cursor-posinter cursor-pointer`}
        >
            {text}
        </button>
    );
};

export default MainBtn;

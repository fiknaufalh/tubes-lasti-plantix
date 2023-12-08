/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "./Logo";
// import { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";

export default function Sidebar(props: any) {
    // const navigate = useNavigate();
    // const [params] = useSearchParams();
    // const returnUrl = params.get("returnUrl");

    // useEffect(() => {
    //     if (!user) navigate("/role");
    //     // returnUrl ? navigate(returnUrl) : navigate("/");
    // }, [user]);

    const menuItems = Array.from({ length: props.number }, (_, index) => (
        <li key={index} className="flex flex-col px-10 py-3.5">
            {
                <button
                    type="button"
                    className="flex text-plantix-light-green bg-white hover:bg-plantix-light-green hover:text-white font-medium rounded-2xl p-4 inline-flex group"
                >
                    <div className="flex flex-col w-52">
                        <a
                            href={props[`page${index + 1}`]}
                            className="flex items-center rounded-lg group"
                        >
                            <div className="absolute group text-plantix-light-green">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 35 35"
                                    className="h-auto w-7 text-plantix-light-green group-hover:hidden"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d={props[`path${index + 1}`]}
                                        fill="currentcolor"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 35 35"
                                    className="h-auto w-7 text-white hidden group-hover:block group-hover:shadow-xl"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d={props[`path${index + 1}`]}
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                            <span className="flex ms-14 whitespace-nowrap text-xl text-left">
                                {props[`menu${index + 1}`]}
                            </span>
                        </a>
                    </div>
                </button>
            }
        </li>
    ));

    menuItems.splice(
        props.current - 1,
        1,
        <li key={props.current - 1} className="flex flex-col px-10 py-3.5">
            {
                <button
                    type="button"
                    className="flex text-white bg-plantix-light-green font-medium rounded-2xl p-4 inline-flex"
                >
                    <div className="flex w-52">
                        <a
                            href={props[`page${props.current}`]}
                            className="flex items-center rounded-lg group"
                        >
                            <div className="absolute group text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 35 35"
                                    className="h-auto w-7 text-white"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d={props[`path${props.current}`]}
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                            <span className="flex-1 ms-14 whitespace-nowrap text-xl text-left">
                                {props[`menu${props.current}`]}
                            </span>
                        </a>
                    </div>
                </button>
            }
        </li>,
    );

    return (
        <div>
            <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-md text-gray-500 rounded-lg lg:hidden"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>
            <div className="fixed top-0 left-0 flex flex-col bg-white w-1/5 h-screen md:flex-col md:max-w-1/5 transition-transform -translate-x-full lg:translate-x-0 overflow-y-auto">
                <div className="flex flex-col items-center">
                    <div className="flex items-center h-48 mb-4">
                        <Logo height="48" width="48" default={props.default} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <ul className="flex flex-col space-y-2 font-medium text-xl text-plantix-light-green">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
}

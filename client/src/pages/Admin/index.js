import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Tabs, message } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminExperiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";
import AdminCourses from "./AdminCourses";
import AdminContact from "./AdminContact";
import { useCookies } from "react-cookie";
import axios from "axios";

function Admin() {
    const { portfolioData } = useSelector((state) => state.root);
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
                window.location.href = "/auth/admin-login";
            }
            const { data } = await axios.post(
                "/auth",
                {},
                { withCredentials: true }
              );
            const { success, user } = data;
            console.log(data)
            setUsername(user);
            return success
                ? message.success("Login successful!")
                : (removeCookie("token"),
                  (window.location.href = "/auth/admin-login"));
        };
        verifyCookie();
    }, [cookies, removeCookie]);
    const Logout = () => {
        removeCookie("token");
        window.location.href("/");
    };

    const tabs = [
        {
            label: "Intro",
            key: "1",
            children: <AdminIntro />,
        },
        {
            label: "About",
            key: "2",
            children: <AdminAbout />,
        },
        {
            label: "Experiences",
            key: "3",
            children: <AdminExperiences />,
        },
        {
            label: "Projects",
            key: "4",
            children: <AdminProjects />,
        },
        {
            label: "Courses",
            key: "5",
            children: <AdminCourses />,
        },
        {
            label: "Contact",
            key: "6",
            children: <AdminContact />,
        },
    ];

    return (
        <div className="bg-primary dark:bg-dark-primary h-screen">
            <Header />
            <div className="flex gap-10 items-center px-5 pt-2 justify-between bg-primary dark:bg-dark-primary">
                <div className="flex items-center gap-10">
                    <h1 className="text-3xl dark:text-white">Admin Panel</h1>
                    <div className="w-60 h-[1px] bg-gray-500"></div>
                </div>
                <h1
                    className="undeline text-primary text-xl cursor-pointer"
                    onClick={() => {
                        localStorage.removeItem("token");
                        window.location.href = "/auth/admin-login";
                    }}
                >
                    Logout
                </h1>
            </div>
            <hr />
            {portfolioData && (
                <div className="mt-5 px-5">
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition="left"
                        items={tabs}
                        className="dark:text-white"
                    ></Tabs>
                </div>
            )}
        </div>
    );
}

export default Admin;

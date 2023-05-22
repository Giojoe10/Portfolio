import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminExperiences from "./AdminExperiences";

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);
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
  ];

  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="mt-5 p-5">
          <Tabs defaultActiveKey="1" tabPosition="left" items={tabs}></Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;

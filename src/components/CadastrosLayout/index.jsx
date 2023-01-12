import React from "react";
import "./cadastros.css";
import SidebarContent from "../SidebarContent/SidebarContent";

const CadastroLayout = ({ children }) => {
  return (
    <div className="container">
      <SidebarContent />
      {children}
    </div>
  );
};

export default CadastroLayout;

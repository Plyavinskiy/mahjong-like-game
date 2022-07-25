import React from "react";
import Header from "../Header/Header";
import "./PageLayout.scss";

interface IPageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => (
  <div className="page-layout">
    <Header title="Mahjong-like Game" />
    <div className="page-layout__content">{children}</div>
  </div>
);

export default PageLayout;

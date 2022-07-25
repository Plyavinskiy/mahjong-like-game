import React, { ReactNode } from "react";
import "./CardsContainer.scss";

interface ICardsContainerProps {
  children: ReactNode;
}

const CardsContainer: React.FC<ICardsContainerProps> = ({ children }) => (
  <div className="cards-container">{children}</div>
);

export default CardsContainer;

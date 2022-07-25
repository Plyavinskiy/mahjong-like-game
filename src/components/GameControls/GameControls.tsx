import React from "react";

interface IGameControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
}

const GameControls: React.FC<IGameControlsProps> = ({
  children,
  className,
}) => <div className={className}>{children}</div>;

export default GameControls;

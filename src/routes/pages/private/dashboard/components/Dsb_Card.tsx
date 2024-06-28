import React from "react";

type Props = {
  onClick: () => void;
  image: string;
  title: string;
  bgColor: string;
};

const Dsb_Card = ({ onClick, image, title }: Props) => {
  return (
    <button
      className="w-full h-32"
      style={{ background: `#ffffff url(${image}) no-repeat center center` }}
      onClick={onClick}
    >
      <img className="w-full h-full object-cover">{title}</img>
    </button>
  );
};

export default Dsb_Card;

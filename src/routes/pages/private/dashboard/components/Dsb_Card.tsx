import React from "react";

type Props = {
  onClick: () => void;
  image: string;
  title: string;
  bgColor: string;
};

const Dsb_Card = ({ onClick, image, title, bgColor }: Props) => {
  return (
    <button
      className="w-full h-32 rounded-xl"
      style={{ background: `${bgColor}  no-repeat center center` }}
      onClick={onClick}
    >
      <img src={image} className="w-full h-full object-cover rounded-xl" />
      {title}
    </button>
  );
};

export default Dsb_Card;

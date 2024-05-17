import React from "react";

const Card = ({name,url,desc}) => {
  return (
    <a href={url} target="_blank">
      <div className="md:w-52 w-44 md:h-36 h-32 border-2 border-white hover:scale-110 duration-700 hover:rounded-xl">
        <h1 className="capitalize text-center font-semibold text-white text-lg">{name}</h1>
        <p className="text-center py-2 overflow-y-scroll w-full h-3/4 text-gray-300 text-sm">
          {desc}
        </p>
      </div>
    </a>
  );
};

export default Card;

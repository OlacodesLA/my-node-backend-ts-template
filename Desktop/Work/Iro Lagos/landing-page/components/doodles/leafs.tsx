import React from "react";

type Props = {};

const Leafs = (props: Props) => {
  return (
    <>
      {" "}
      <img
        src="/assets/leaf-3.png"
        className="absolute -top-52 w-[500px]  object-cover"
        alt=""
      />
      <img
        src="/assets/leaf-2.png"
        className="absolute -top-52 right-0 w-[500px]  object-cover"
        alt=""
      />
    </>
  );
};

export default Leafs;

import React from "react";
import Image from "next/image";
import Leafs from "./leafs";

type Props = {};

const Doodles = (props: Props) => {
  return (
    <div className="relative z-30">
      <Leafs />
    </div>
  );
};

export default Doodles;

import { useState } from "react";

export default function useToggle(initval) {
  const [toggle, setToggle] = useState(initval);

  const updateToggle = () => {
    setToggle(!toggle);
  };
  return [toggle, updateToggle];
}

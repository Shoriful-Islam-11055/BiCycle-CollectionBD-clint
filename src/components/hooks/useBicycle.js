import { useEffect, useState } from "react"

const useBicycle = () => {
  const [biCycles, setBiCycles] = useState([]);

  useEffect(() => {
    fetch('https://stormy-beach-91164.herokuapp.com/user')
      .then(res => res.json())
      .then(data => setBiCycles(data));
  }, []);
  return [biCycles, setBiCycles];
};

export default useBicycle;

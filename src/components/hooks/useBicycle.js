import { useEffect, useState } from "react"

const useBicycle = () => {
  const [biCycles, setBiCycles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setBiCycles(data));
  }, []);
  return [biCycles, setBiCycles];
};

export default useBicycle;

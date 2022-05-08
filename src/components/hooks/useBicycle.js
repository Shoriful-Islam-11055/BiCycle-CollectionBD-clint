import { useEffect, useState } from "react"

const useBicycle = () => {
  const [biCycles, setBiCycles] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Shoriful-Islam-11055/guns-jsonData/main/ServicesFakeData.json')
      .then(res => res.json())
      .then(data => setBiCycles(data));
  }, []);
  return [biCycles, setBiCycles];
};

export default useBicycle;

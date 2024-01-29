import { useEffect, useState } from "react";

const indigos = [
  "rgb(199 210 254)",
  "rgb(165 180 252)",
  "rgb(129 140 248)",
  "rgb(99 102 241)",
  "rgb(79 70 229)",
  "rgb(67 56 202)",
  "rgb(55 48 163)",
  "rgb(49 46 129)",
  "rgb(30 27 75)",
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const randomBetween = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Test = () => {
  const [colors, setColors] = useState([...indigos]);

  useEffect(() => {
    shuffleArray(indigos);
    setColors(indigos);

    const myInterval = setInterval(handleBackgroundGradient, 2000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  const handleBackgroundGradient = () => {
    shuffleArray(indigos);
    setColors([...indigos]);
  };

  const allMyInit = () => {
    const obj = {};
    // color initialization
    for (let i = 1; i <= indigos.length; i++) {
      obj[`--my-color-${i}`] = colors[i - 1];
    }
    obj["--my-angle-1"] = `${randomBetween(0, 360)}deg`;
    obj["--my-angle-2"] = `${randomBetween(0, 360)}deg`;

    return obj;
  };

  const allMyTransitions = () => {
    const arr = [];
    // transitions on colors
    for (let i = 1; i <= indigos.length; i++) {
      arr.push(`--my-color-${i} 2s`);
    }
    // transitions on angles
    arr.push(`--my-angle-1 2s`);
    arr.push(`--my-angle-2 2s`);
    return arr;
  };

  return (
    <div
      className="h-screen w-screen"
      style={{
        ...allMyInit(),
        transition: allMyTransitions(),
        background: [
          "linear-gradient(var(--my-angle-1), var(--my-color-1), var(--my-color-2))",
        ],
      }}
    ></div>
  );
};

export default Test;

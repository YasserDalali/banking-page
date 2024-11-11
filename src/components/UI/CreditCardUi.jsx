import React from "react";
export default function CreditCardUi({ color }) {
  const flip = (e) => {
    console.log("clicked")
    let card = e.target;
    
    card.classList.toggle("animate-rotateY180");
  };
  return (
    <div>
      <div
        className={`pe-40 p-6 w-60 md:w-80 h-80  md:h-[30rem]  transition-all cursor-pointer text-white text-8xl md:text-9xl font-bold rounded-3xl
        ${color}`} onClick={(e) => flip(e)}
      >
        *
      </div>
    </div>
  );
}

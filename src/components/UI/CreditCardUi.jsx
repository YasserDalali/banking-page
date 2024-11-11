import React from "react";
export default function CreditCardUi({ color }) {
  return (
    <div>
      <div
        className={`pe-40 p-6 w-60 md:w-80 h-80 md:h-[30rem] text-white text-8xl md:text-9xl font-bold rounded-3xl
        ${color}`}
      >
        *
      </div>
    </div>
  );
}

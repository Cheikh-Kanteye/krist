import React from "react";

const CounterBox = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-center justify-center aspect-square rounded-md border">
      <h2 className="section-title">{value}</h2>
      <p className="capitalise text-base lg:text-lg">{label}</p>
    </div>
  );
};

const Deals = () => {
  return (
    <section className="grid-container grid lg:grid-cols-2 py-12">
      <div>
        <h2 className="section-title">Deals of the Month</h2>
        <p className="text-black/70 my-2">
          It is a long established fact that a reader Will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters
        </p>
        <div className="grid grid-cols-4 max-w-sm  gap-3 py-4">
          <CounterBox label="days" value="120" />
          <CounterBox label="hours" value="18" />
          <CounterBox label="mins" value="15" />
          <CounterBox label="secs" value="10" />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Deals;

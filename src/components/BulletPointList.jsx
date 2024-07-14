import React from "react";

function BulletPointList({ dispatch }) {
  const options = [
    {
      value: "1",
      label: "Opcja pierwsza",
    },
    {
      value: "2",
      label: "Opcja druga",
    },
    {
      value: "3",
      label: "Opcja losowa",
    },
  ];

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    dispatch({ type: "setCurrentOption", payload: selectedValue });
  };

  return (
    <section className="list">
      <h3 className="block-title">BLOK PIERWSZY</h3>
      <div className="list__container">
        {options.map((option) => (
          <div className="list__container__radio" key={option.value}>
            <input
              className="list__container__radio__element"
              name="options"
              type="radio"
              value={option.value}
              onChange={handleChange}
            />
            <label
              className="list__container__radio__label"
              htmlFor={option.value}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BulletPointList;

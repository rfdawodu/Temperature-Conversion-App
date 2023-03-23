import React, { useState } from "react";

function Inputs() {
  const [degrees, setDegrees] = useState("");
  const [type, setType] = useState("type");
  const [result, setResult] = useState("");

  const temperatureChange = () => {
    let temperature;
    if (type === "Farhanrent") {
      temperature = ((parseFloat(degrees) - 32) * 5) / 9;
      //   setType(celsius.toFixed(2));
      console.log(type);
    } else if (type === "celsius") {
      temperature = (parseFloat(degrees) * 9) / 5 + 32;
      //   setType(Farhanrent.toFixed(2));
      console.log(type);
    }
    setResult(temperature);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    temperatureChange();
  };

  const clearResult = () => {
    setResult("");
  };

  return (
    <div className="input">
      <fieldset>
        <form className="form" onSubmit={handleSubmit}>
          <label className="degree">Degree</label>
          <br></br>
          <input
            type="number"
            placeholder="20"
            value={degrees}
            onChange={(e) => setDegrees(e.target.value)}
          />
          <div className="field">
            <label className="type">
              Type <sup>💧</sup>
            </label>
            <br></br>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="type">Type</option>
              <option value="Farhanrent" id="inputFahrenheit" type="number">
                Farhanrent
              </option>
              <option value="celsius">Celsius</option>
            </select>
          </div>
          <button type="submit" onClick={clearResult}>
            Convert
          </button>
        </form>
        <div className="result">
          <h3>Result:</h3>
          <p>
            {result} <sup>o</sup>c
          </p>
        </div>
      </fieldset>
    </div>
  );
}

export default Inputs;

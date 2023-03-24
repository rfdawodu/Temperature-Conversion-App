import React, { useState } from "react";

function Inputs() {
  const [degrees, setDegrees] = useState("");
  const [fromValue, setFromValue] = useState(0);
  const [type, setType] = useState("type");
  const [result, setResult] = useState("");

  const temperatureChange = () => {
    let temperature;
    if (fromValue === "fahrenheit" && type === "celsius") {
      temperature = ((parseFloat(degrees) - 32) * 5) / 9;

      console.log(type);
    } else if (fromValue === "celsius" && type === "fahrenheit") {
      temperature = (parseFloat(degrees) * 9) / 5 + 32;

      console.log(type);
    }
    setFromValue(temperature);
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
          <div className="input-number">
            <label className="degree">Degree</label>
            <br></br>
            <input
              type="number"
              placeholder="20"
              value={degrees}
              onChange={(e) => setDegrees(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="change">Convert</label>
            <br></br>
            <select
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
            >
              <option value="">select...</option>
              <option value="fahrenheit" id="inputFahrenheit" type="number">
                Farhanrent
              </option>
              <option value="celsius">Celsius</option>
            </select>

            <label className="  type">
              To... Choose Type <sup>💧</sup>
            </label>
            <br></br>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="type"> Type</option>
              <option value="fahrenheit" id="inputFahrenheit" type="number">
                Farhanrent
              </option>
              <option value="celsius" type="number">
                Celsius
              </option>
            </select>
          </div>
          <button type="submit" onClick={clearResult}>
            Convert
          </button>
        </form>
        <div className="result">
          <h3>Result:</h3>
          <p>
            {result} <sup>o</sup>
          </p>
        </div>
      </fieldset>
    </div>
  );
}

export default Inputs;

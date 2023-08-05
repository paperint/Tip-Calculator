import React from "react";
import { useState } from "react";
import "../App.css";

function Homepage() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState("");
  const [checkPeople, setCheckPeople] = useState(false);
  const [billError, setBillError] = useState(false);
  const [selectOption, setSelectOption] = useState("");
  const [custom, setCustom] = useState("");

  const handlerChangeCustom = (e) => {
    const customValue = e.target.value;
    setCustom(customValue);
    setTip(customValue / 100);
    setSelectOption("custom");
  };

  const handleTipSelection = (e) => {
    setTip(e.target.value);
    setSelectOption(e.target.value);
  };

  const handleReset = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
    setSelectOption("");
    setCustom("");
  };

  const handleBillChange = (e) => {
    const amount = e.target.value;
    setBill(amount);

    if (Number(amount) === 0) {
      setBillError(true);
    } else {
      setBillError(false);
    }
  };

  const handlerCheckPeople = (e) => {
    const number = e.target.value;
    setPeople(number);

    if (Number(number) === 0) {
      setCheckPeople(true);
    } else {
      setCheckPeople(false);
    }
  };

  const tipAmount = () => {
    let tips = 0;
    if (bill > 0 && people > 0) {
      tips = (Number(bill) * Number(tip)) / Number(people);
    }
    return parseFloat(tips).toFixed(2);
  };

  const totalPaid = () => {
    let paid = 0;
    if (bill > 0 && people > 0) {
      paid = (Number(bill) + Number(bill) * Number(tip)) / Number(people);
    }
    return parseFloat(paid).toFixed(2);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-teal-100">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl gap-11">
        <div>
          <h1 className="tracking-widest">SPLI</h1>
          <h1 className="tracking-widest">TTER</h1>
        </div>
        <div className="flex flex-col sm:flex-row p-6 bg-white rounded-t-3xl sm:rounded-lg shadow-xl gap-10 min-h-[400px]">
          <div className="flex flex-col justify-between flex-1">
            <div className="flex flex-col gap-2">
              <label htmlFor="bill">
                Bill
                {billError && (
                  <span className="float-right text-xs text-right text-red-600">
                    Can't be zero
                  </span>
                )}
              </label>
              <input
                type="number"
                name="bill"
                id="bill"
                placeholder="0"
                value={bill}
                // onChange={(e) => setBill(e.target.value)}
                onChange={handleBillChange}
                className={
                  billError
                    ? "w-full h-10 p-2 text-right bg-gray-200 rounded-md border-2 border-red-500"
                    : "w-full h-10 p-2 text-right bg-gray-200 rounded-md focus:border-2 active:border-blue-500 focus:border-blue-600"
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Select Tip %</p>
              <div className="grid grid-cols-3 grid-rows-2 gap-4">
                <div className="flex">
                  <input
                    type="radio"
                    id="%5"
                    name="tabs"
                    class="appearance-none"
                    value={0.05}
                    // onChange={(e) => setTip(e.target.value)}
                    checked={selectOption === "0.05"}
                    onChange={handleTipSelection}
                  />
                  <label
                    for="%5"
                    class="w-full table-cell align-middle text-center cursor-pointer bg-cyan-950 text-white p-4 rounded-md"
                  >
                    5%
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    id="%10"
                    name="tabs"
                    class="appearance-none"
                    value={0.1}
                    // onChange={(e) => setTip(e.target.value)}
                    checked={selectOption === "0.1"}
                    onChange={handleTipSelection}
                  />
                  <label
                    for="%10"
                    class="w-full table-cell align-middle text-center cursor-pointer bg-cyan-950 text-white p-4 rounded-md"
                  >
                    10%
                  </label>
                </div>

                <div className="flex">
                  <input
                    type="radio"
                    id="%15"
                    name="tabs"
                    class="appearance-none"
                    value={0.15}
                    // onChange={(e) => setTip(e.target.value)}
                    checked={selectOption === "0.15"}
                    onChange={handleTipSelection}
                  />
                  <label
                    for="%15"
                    class="w-full table-cell align-middle text-center cursor-pointer bg-cyan-950 text-white p-4 rounded-md"
                  >
                    15%
                  </label>
                </div>

                <div className="flex">
                  <input
                    type="radio"
                    id="%25"
                    name="tabs"
                    class="appearance-none"
                    value={0.25}
                    // onChange={(e) => setTip(e.target.value)}
                    checked={selectOption === "0.25"}
                    onChange={handleTipSelection}
                  />
                  <label
                    for="%25"
                    class="w-full table-cell align-middle text-center cursor-pointer bg-cyan-950 text-white p-4 rounded-md"
                  >
                    25%
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    id="%50"
                    name="tabs"
                    class="appearance-none"
                    value={0.5}
                    // onChange={(e) => setTip(e.target.value)}
                    checked={selectOption === "0.5"}
                    onChange={handleTipSelection}
                  />
                  <label
                    for="%50"
                    class="w-full table-cell align-middle text-center cursor-pointer bg-cyan-950 text-white p-4 rounded-md"
                  >
                    50%
                  </label>
                </div>
                <div>
                  <input
                    type="number"
                    name="custom-tip"
                    id="custom-tip"
                    placeholder="Custom"
                    value={selectOption === "custom" ? custom : ""}
                    onChange={handlerChangeCustom}
                    className="table-cell w-full p-4 text-right align-middle rounded-md text-cyan-700 bg-teal-50 placeholder:text-cyan-700 placeholder:text-center"
                  />
                </div>
                {/* <button className="p-2 rounded-md text-cyan-700 bg-teal-50">
                  Custom
                </button> */}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="people" className="w-full text-left">
                Number of People
                {checkPeople && (
                  <span className="float-right text-xs text-right text-red-600">
                    Can't be zero
                  </span>
                )}
              </label>
              <input
                type="number"
                name="people"
                id="people"
                placeholder="0"
                value={people}
                // onChange={(e) => setPeople(e.target.value)}
                onChange={handlerCheckPeople}
                className={
                  checkPeople
                    ? "w-full h-10 p-2 text-right bg-gray-200 rounded-md border-2 border-red-500"
                    : "w-full h-10 p-2 text-right bg-gray-200 rounded-md focus:border-2 focus:border-teal-600"
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between flex-1 w-full p-6 rounded-lg bg-cyan-950 w-96">
            <div className="flex flex-col w-full gap-5">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-lg text-white">Tip Amount</h1>
                  <p className="text-sm text-white opacity-50">/ person</p>
                </div>
                <div>
                  <h1 className="text-3xl font-extrabold text-teal-500">
                    {tipAmount()}
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-lg text-white">Total</h1>
                  <p className="text-sm text-white opacity-50">/ person</p>
                </div>
                <div>
                  <h1 className="text-3xl font-extrabold text-teal-500">
                    ${totalPaid()}
                  </h1>
                </div>
              </div>
            </div>

            <button
              className="w-full p-2 bg-teal-800 rounded-md"
              onClick={() => {
                handleReset();
              }}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

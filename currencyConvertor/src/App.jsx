import { useState } from "react";
import {InputBox} from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    if (currencyInfo[toCurrency]) {
      setConvertedAmount(amount * currencyInfo[toCurrency]);
    }
  };

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div className="min-h-screen  flex justify-center items-center bg-gray-200">
      <div className="bg-slate-800 p-8 rounded-xl w-[500px] text-white">

        <h1 className="text-3xl font-bold text-center mb-6">
          Currency Converter
        </h1>

        <InputBox
          label="From"
          amount={amount}
          currencyOption={options}
          onAmountChange={setAmount}
          onCurrencyChange={setFromCurrency}
          selectCurrency={fromCurrency}
        />

        <div className="flex justify-center my-4">
          <button
            onClick={swap}
            className="bg-blue-700 px-5 py-2 rounded-md hover:opacity-80 active:text-black transition-all duration-100"
          >
            Swap
          </button>
        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOption={options}
          onCurrencyChange={setToCurrency}
          selectCurrency={toCurrency}
          amountDisable
        />

        <button
          onClick={convert}
          className="w-full text-md bg-green-500 mt-6 py-2 font-bold rounded-md hover:opacity-80 active:text-black transition-all duration-100"
        >
          Convert {fromCurrency.toUpperCase()} to{" "}
          {toCurrency.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
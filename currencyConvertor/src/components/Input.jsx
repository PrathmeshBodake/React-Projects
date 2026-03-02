import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white/70 p-4 rounded-lg flex ${className}`}>
      
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black font-bold block mb-2 italic text-lg"
        >
          {label} :
        </label>

        <input
          id={amountInputId}
          type="number"
          className="outline-none w-full bg-gray-800 border px-2 py-1 rounded-md text-white font-bold"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      
      <div className="w-1/2 text-right">
        <p className="text-black/60 font-bold mb-2">Currency</p>

        <select
          className="rounded-md px-2 py-1 bg-gray-900 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
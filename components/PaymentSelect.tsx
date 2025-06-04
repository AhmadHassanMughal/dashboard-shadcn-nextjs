"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currencies } from "@/lib/data";

interface PaymentSelectProps {
  onCurrencyChange: (currency: { locale: string; currency: string }) => void;
}

export function PaymentSelect({ onCurrencyChange }: PaymentSelectProps) {
  const [value, setValue] = useState(
    `${currencies[0].locale}-${currencies[0].currency}`
  );

  const handleValueChange = (newValue: string) => {
    console.log("New value selected:", newValue);
    setValue(newValue);

    // Split the value at the last hyphen to separate locale and currency
    const lastHyphenIndex = newValue.lastIndexOf("-");
    const locale = newValue.substring(0, lastHyphenIndex);
    const currency = newValue.substring(lastHyphenIndex + 1);

    console.log("Split values - Locale:", locale, "Currency:", currency);

    const selectedCurrency = currencies.find(
      (c) => c.locale === locale && c.currency === currency
    );

    if (selectedCurrency) {
      onCurrencyChange({
        locale: selectedCurrency.locale,
        currency: selectedCurrency.currency,
      });
    }
  };

  return (
    <div className="flex items-center gap-4">
      <h1 className="font-semibold">Currency</h1>
      <Select value={value} onValueChange={handleValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select currency" />
        </SelectTrigger>
        <SelectContent>
          {currencies.map((currency) => (
            <SelectItem
              key={`${currency.locale}-${currency.currency}`}
              value={`${currency.locale}-${currency.currency}`}
            >
              {currency.name} ({currency.currency})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

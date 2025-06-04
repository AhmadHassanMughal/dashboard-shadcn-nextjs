"use client";

import { getData } from "@/lib/data";
import { createColumns, type Payment } from "./columns";
import { useEffect, useState, useMemo } from "react";
import { PaymentSelect } from "@/components/PaymentSelect";
import { DataTable } from "./data-table";
import { AppBreadCrumb } from "@/components/AppBreadCrumb";

const breadcrumbs = [
  {
    title: "Dashboard",
    href: "/",
  },
  {
    title: "Payments",
    href: null,
  },
];

export default function PaymentsPage() {
  const [data, setData] = useState<Payment[]>([]);
  const [currency, setCurrency] = useState({
    locale: "en-PK",
    currency: "PKR",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  const handleCurrencyChange = (newCurrency: {
    locale: string;
    currency: string;
  }) => {
    console.log("Currency change in page:", newCurrency);
    setCurrency(newCurrency);
  };

  const columns = useMemo(() => {
    console.log("Creating columns with currency:", currency);
    return createColumns({ currency });
  }, [currency]);

  return (
    <div>
      <AppBreadCrumb data={breadcrumbs} />
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-8 px-4 py-2 bg-secondary rounded-md">
          <h1 className="text-2xl font-bold">Payments</h1>
          <PaymentSelect onCurrencyChange={handleCurrencyChange} />
        </div>
        <DataTable columns={columns} data={data} currency={currency} />
      </div>
    </div>
  );
}

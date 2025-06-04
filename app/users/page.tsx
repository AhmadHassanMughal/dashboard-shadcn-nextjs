"use client";

import { getData } from "@/lib/data";
import { useEffect, useState, useMemo } from "react";
import { createColumns, User } from "./columns";
import { DataTable } from "../payments/data-table";
import { AppBreadCrumb } from "@/components/AppBreadCrumb";

const breadcrumbs = [
  {
    title: "Dashboard",
    href: "/",
  },
  {
    title: "Users",
    href: null,
  },
];

export default function UsersPage() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  const columns = useMemo(() => createColumns(), []);

  return (
    <div>
      <AppBreadCrumb data={breadcrumbs} />
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-8 px-4 py-2 bg-secondary rounded-md">
          <h1 className="text-2xl font-bold">Users</h1>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

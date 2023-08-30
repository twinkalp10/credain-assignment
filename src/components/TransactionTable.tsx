import React, { useState } from "react";
import dummyData from "../dummyData";

const TransactionTable = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortedColumn, setSortedColumn] = useState<string>("");

  const sortColumn = (col: string) => {
    if (col === sortedColumn) {
      setSortOrder(sortOrder === "asc" ? ("asc" ? "desc" : "asc") : "asc");
    } else {
      setSortedColumn(col);
      setSortOrder(sortOrder === "asc" ? ("asc" ? "desc" : "asc") : "asc");
    }
  };

  const sortedData = [...dummyData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortedColumn as keyof typeof a] >
        b[sortedColumn as keyof typeof b]
        ? 1
        : -1;
    } else {
      return a[sortedColumn as keyof typeof a] <
        b[sortedColumn as keyof typeof b]
        ? 1
        : -1;
    }
  });

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
      />
    </svg>
  );

  return (
    <div className="mt-8">
      <table className="w-full border rounded-md border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider cursor-pointer"
              onClick={() => sortColumn("transactionDate")}
            >
              <p className="flex justify-center gap-2 items-center">
                Transaction Date
                {svg}
              </p>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider cursor-pointer"
              onClick={() => sortColumn("invoiceNumber")}
            >
              <p className="flex justify-center gap-2 items-center">
                Invoice No.
                {svg}
              </p>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider cursor-pointer"
              onClick={() => sortColumn("payer")}
            >
              <p className="flex justify-center gap-2 items-center">
                Payer
                {svg}
              </p>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider cursor-pointer"
              onClick={() => sortColumn("payee")}
            >
              <p className="flex justify-center gap-2 items-center">
                Payee
                {svg}
              </p>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider cursor-pointer"
              onClick={() => sortColumn("invoiceNumber")}
            >
              <p className="flex justify-center gap-2 items-center">
                Amount
                {svg}
              </p>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider cursor-pointer"
              onClick={() => sortColumn("amount")}
            >
              <p className="flex justify-center gap-2 items-center">
                USD Equivalent
                {svg}
              </p>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider cursor-pointer"
              onClick={() => sortColumn("status")}
            >
              <p className="flex justify-center gap-2 items-center">
                Status
                {svg}
              </p>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((transaction, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  {transaction.transactionDate.toLocaleDateString()}{" "}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  {transaction.invoiceNumber}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  {transaction.payer}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  {transaction.payee}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  {transaction.amount}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  USD
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  {transaction.status}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  Action
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;

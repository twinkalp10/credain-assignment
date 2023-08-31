import React, { useEffect, useState } from "react";
import dummyData from "../dummyData";
import { Link } from "react-router-dom";
import { TransactionDataType } from "../../types/type";
import { useDataContextValues } from "./context/DataContext";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { fetchExchangeRates } from "./api/rateApi";

const TransactionTable = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortedColumn, setSortedColumn] = useState<string>("");
  const { sortedData, setSortedData, editedUser } = useDataContextValues();
  const [usdToInrRate, setUsdToInrRate] = useState<number>(0);
  const sortColumn = (col: string) => {
    if (col === sortedColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(col);
      setSortOrder("asc");
    }
  };

  // useEffect(() => {
  //   const getExchangeRate = async () => {
  //     const rate = await fetchExchangeRates();
  //     setUsdToInrRate(rate);
  //   };
  //   getExchangeRate();
  // }, []);

  useEffect(() => {
    const sortedDummyData: TransactionDataType[] = [...dummyData].sort(
      (a, b) => {
        const aValue = a[sortedColumn as keyof typeof a];
        const bValue = b[sortedColumn as keyof typeof b];

        if (sortOrder === "asc") {
          if (sortedColumn === "amount") {
            return +aValue - +bValue; // Compare as numbers
          } else {
            return aValue > bValue ? 1 : -1;
          }
        } else {
          if (sortedColumn === "amount") {
            return +bValue - +aValue; // Compare as numbers
          } else {
            return aValue < bValue ? 1 : -1;
          }
        }
      }
    );
    setSortedData(sortedDummyData);
  }, [sortOrder, sortedColumn]);

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

  const statusBar = <div className="w-6 h-1 bg-black rounded"></div>;

  return (
    <div className="mt-8">
      <table className="border rounded-md border-gray-200">
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
              onClick={() => sortColumn("amount")}
            >
              <p className="flex justify-center gap-2 items-center">
                Amount
                {svg}
              </p>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider cursor-pointer"
              onClick={() => sortColumn("usd")}
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
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider hover:font-bold">
                  <Link to={`/transaction/${transaction.invoiceNumber}`}>
                    {transaction.transactionDate?.toLocaleDateString()}{" "}
                  </Link>
                </td>

                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  {transaction.invoiceNumber}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  {transaction.invoiceNumber === editedUser?.invoiceNumber
                    ? editedUser?.payer
                    : transaction.payer}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  {transaction.invoiceNumber === editedUser?.invoiceNumber
                    ? editedUser?.payee
                    : transaction.payee}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  {transaction.invoiceNumber === editedUser?.invoiceNumber
                    ? editedUser?.amount
                    : transaction.amount}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  USD
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  {transaction.status === "First" ? (
                    <div>{statusBar}</div>
                  ) : transaction.status === "Second" ? (
                    <div className="flex gap-2">
                      {statusBar}
                      {statusBar}
                    </div>
                  ) : (
                    transaction.status === "Third" && (
                      <div className="flex gap-2">
                        {statusBar}
                        {statusBar}
                        {statusBar}
                      </div>
                    )
                  )}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 bg-gray-200 rounded-full p-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                          />
                        </svg>
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content
                        className="min-w-[120px] bg-white cursor-pointer  border border-gray-300"
                        sideOffset={5}
                      >
                        <DropdownMenu.Item className=" text-[13px] text-center leading-none text-gray-800 rounded-[3px] flex items-center justify-center h-[25px] px-[5px]  outline-none data-[highlighted]:bg-violet-100 data-[highlighted]:text-violet-800">
                          Edit
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className=" text-[13px] leading-none text-gray-800 rounded-[3px] flex items-center justify-center h-[25px] px-[5px] outline-none data-[highlighted]:bg-violet-100 data-[highlighted]:text-violet-800">
                          Delete
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className=" text-[13px] leading-none text-gray-800 rounded-[3px] flex items-center justify-center h-[25px] px-[5px]   outline-none data-[highlighted]:bg-violet-100 data-[highlighted]:text-violet-800">
                          Archive
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>

                  {/* <select>
                    <option></option>
                    <option value="approve">Approve</option>
                    <option value="reject">Reject</option>
                    <option value="pending">Pending</option>
                  </select> */}
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

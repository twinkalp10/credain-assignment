import React from "react";
import CardNumTransactions from "./cards/CardNumTransactions";
import CardTotalAmount from "./cards/CardTotalAmount";
import CardThirdState from "./cards/CardThirdState";
import TransactionTable from "./TransactionTable";

const Dashboard = () => {
  return (
    <div className="max-w-5xl mx-auto p-3 mt-9">
      <h1 className="text-2xl font-semibold mb-4">Transaction Dashboard</h1>
      <div className="flex justify-between items-center">
        <CardNumTransactions />
        <CardTotalAmount />
        <CardThirdState />
      </div>
      <TransactionTable />
    </div>
  );
};

export default Dashboard;

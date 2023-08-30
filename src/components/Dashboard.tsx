import React from "react";
import CardNumTransactions from "./cards/CardNumTransactions";
import CardTotalAmount from "./cards/CardTotalAmount";
import CardThirdState from "./cards/CardThirdState";
import TransactionTable from "./TransactionTable";

const Dashboard = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 ">Transaction Dashboard</h1>
      <div className="grid grid-cols-3 gap-8">
        <CardNumTransactions />
        <CardTotalAmount />
        <CardThirdState />
      </div>
      <TransactionTable />
    </div>
  );
};

export default Dashboard;

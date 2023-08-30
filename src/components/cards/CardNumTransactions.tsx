import React from "react";

interface CardNumTransactionsProps {
  numTransactions?: number;
}

const CardNumTransactions = ({ numTransactions }: CardNumTransactionsProps) => {
  return (
    <div className="bg-violet-100 p-8 w-[300px] rounded shadow">
      <div className="text-lg font-semibold">Number of Transactions</div>
      <div className="mt-2">
        <div className="mb-2">numTransactions</div>
      </div>
    </div>
  );
};

export default CardNumTransactions;

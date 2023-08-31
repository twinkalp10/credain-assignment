import React from "react";

interface CardThirdStateProps {
  NoOfthirdStateTransactions: number;
}

const CardThirdState = ({
  NoOfthirdStateTransactions,
}: CardThirdStateProps) => {
  return (
    <div className="bg-gray-200 p-8 w-[300px] rounded shadow">
      <div className="text-lg font-semibold">Third State Transactions</div>
      <div className="mt-2">
        <div className="mb-2">{NoOfthirdStateTransactions}</div>
      </div>
    </div>
  );
};

export default CardThirdState;

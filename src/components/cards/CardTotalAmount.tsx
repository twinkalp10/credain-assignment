import React from "react";

interface CardTotalAmountProps {
  totalAmount?: number;
}

const CardTotalAmount = ({ totalAmount }: CardTotalAmountProps) => {
  return (
    <div className="bg-slate-100 p-8 w-[300px] rounded shadow">
      <div className="text-lg font-semibold">Total Amount</div>
      <div className="mt-2">
        <div className="mb-2">{totalAmount} USD</div>
      </div>
    </div>
  );
};

export default CardTotalAmount;

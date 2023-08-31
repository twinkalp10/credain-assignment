import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDataContextValues } from "./context/DataContext";

const TransactionDetails = () => {
  const { transactionId } = useParams();
  const { sortedData, setSortedData } = useDataContextValues();
  const transaction = sortedData.find(
    (data) => data.invoiceNumber === transactionId
  );

  const [editedTransaction, setEditedTransaction] = useState(transaction);

  if (!transaction) {
    return (
      <div className="flex justify-center items-center">
        No Transaction found with selected invoice number...
      </div>
    );
  }

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    setEditedTransaction((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSave = () => {
    if (editedTransaction) {
      const updatedData = sortedData.map((data) =>
        data.invoiceNumber === editedTransaction.invoiceNumber
          ? editedTransaction
          : data
      );
      setSortedData([...updatedData]);
      console.log(sortedData);
    }
  };

  console.log(editedTransaction);

  return (
    <div className="mx-auto max-w-3xl flex flex-col gap-8">
      <h2>Transaction details</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="transactionDate">Transaction Date: </label>
        <p>Date is: {transaction.transactionDate?.toLocaleDateString()}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="invoiceNumber">Invoice Number: </label>
        <p>
          Invoice number is:
          {transaction.invoiceNumber}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="payer">Payer: </label>
        <p>
          Payer is:
          {editedTransaction?.payer}
        </p>
        <input
          type="text"
          name="payer"
          value={editedTransaction?.payer}
          className="border border-gray-200 w-56"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="payee">Payee: </label>
        <p>
          Payee is:
          {editedTransaction?.payee}
        </p>
        <input
          type="text"
          name="payee"
          value={editedTransaction?.payee}
          className="border border-gray-200 w-56"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount">Amount: </label>
        <p>
          Amount is:
          {editedTransaction?.amount}
        </p>
        <input
          type="text"
          name="amount"
          value={editedTransaction?.amount}
          className="border border-gray-200 w-56"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="status">Status: </label>
        <p>
          Status is:
          {editedTransaction?.status}
        </p>
        <input
          type="text"
          name="status"
          value={editedTransaction?.status}
          className="border border-gray-200 w-56"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button onClick={handleSave}>save</button>
      </div>
    </div>
  );
};

export default TransactionDetails;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDataContextValues } from "./context/DataContext";

const TransactionDetails = () => {
  const { transactionId } = useParams();
  const navigate = useNavigate();
  const { sortedData, setSortedData, editedUser, setEditedUser } =
    useDataContextValues();
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
    setEditedUser((prevData) => {
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
      if (editedTransaction.invoiceNumber === transactionId) {
        setEditedUser(editedTransaction);
      }
    }
    navigate("/");
  };

  return (
    <div className="mx-auto max-w-3xl mt-8 flex items-start justify-center flex-col gap-8">
      <h2 className="text-2xl font-bold">Transaction details</h2>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <label htmlFor="transactionDate">
            <span className="font-bold mr-4">Transaction Date:</span>
            {transaction.transactionDate?.toLocaleDateString()}
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="invoiceNumber">
          <span className="font-bold mr-4">Invoice number:</span>
          {transaction.invoiceNumber}
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="payer">
          <span className="font-bold mr-4">Payer:</span>
          {editedUser?.payer ?? editedTransaction?.payer}{" "}
        </label>

        <input
          type="text"
          name="payer"
          value={editedUser?.payer ?? editedTransaction?.payer}
          className="border border-gray-200 w-56 px-2 py-1"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="payee">
          <span className="font-bold mr-4">Payee:</span>
          {editedUser?.payee ?? editedTransaction?.payee}
        </label>

        <input
          type="text"
          name="payee"
          value={editedUser?.payee ?? editedTransaction?.payee}
          className="border border-gray-200 w-56 px-2 py-1"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount">
          <span className="font-bold mr-4">Amount:</span>
          {editedUser?.amount ?? editedTransaction?.amount}
        </label>

        <input
          type="text"
          name="amount"
          value={editedUser?.amount ?? editedTransaction?.amount}
          className="border border-gray-200 w-56 px-2 py-1"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="status">
          <span className="font-bold mr-4">Status:</span>
          {editedUser?.status ?? editedTransaction?.status}
        </label>
      </div>
      <div>
        <button
          onClick={handleSave}
          className="bg-black px-3 py-2 text-white rounded"
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default TransactionDetails;

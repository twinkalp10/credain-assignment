## Furrl Assignment

This Project demonstrate the assignment completed for Credain's interview.

## Live Demo

[Credain](https://credain-task.vercel.app/)

## Technology used

- React.js
- Typescript
- Tailwind CSS
- Deployment to [Vercel](https://vercel.com/)

## How to install this project locally?

```bash
git clone https://github.com/twinkalp10/credain-assignment.git
npm install
npm run start
```

## Technical Planning

- `Card` component with three cards.
  - `CardNumTransactions.tsx` to show the total number of transactions
  - `CardThirdState.tsx` to show the total number of the transactions with third state
  - `CardTotalAmount.tsx` to show the total amount of the transactions
- `api` folder to define api fetchers
- `TransactionDetails.tsx` shows the transaction details after clicking on the transaction invoice number
- `TransactionTable.tsx` shows the table of transactions

## Key test cases

- Clicking on invoice number opens new page with transaction details
- Clicking on action icon opens dropdown menu
- Click save button to save the edited information on transaction details page

## Additional Information

![ScreenShot of credain](/screenshot/Credain-task.png)

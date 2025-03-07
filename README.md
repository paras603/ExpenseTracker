# ExpenseTracker

Expense Tracker App 📊💰

A React Native application for tracking daily expenses, allowing users to add, view, and manage their transactions efficiently.

Features 🚀
✔ User Authentication – Sign in and log out functionality.
✔ Dashboard Overview – Displays all transactions in a list format.
✔ Add Transactions – Users can add new transactions with date, amount, description, location, type, and category.
✔ View Transaction Details – Tap on a transaction to view more details.
✔ Categorization & Filtering – Transactions include type (Credit, Debit, Refund) and category (Shopping, Travel, Utility).
✔ State Management – Context API for handling transactions.
✔ React Navigation – Multi-screen navigation for smooth user experience.

Screens & Navigation 📱
1️⃣ Sign In Screen – Allows users to log in.
2️⃣ Dashboard Screen – Displays all transactions with an "Add Transaction" button.
3️⃣ Add Transaction Screen – Users can input transaction details.
4️⃣ Transaction Detail Screen – Shows full details of a selected transaction.

Tech Stack 🛠
React Native – Core framework
React Navigation – Handles app navigation
Context API – State management for transactions
Async Storage (optional) – For local data persistence
react-native-picker/picker – Dropdown for type & category selection
react-native-modal-datetime-picker – Date picker for transactions
Installation & Setup ⚙️
1️⃣ Clone the Repository

git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
2️⃣ Install Dependencies

npm install
3️⃣ Run the App
For Android:

npx react-native run-android
For iOS:

npx pod-install
npx react-native run-ios
Folder Structure 📂
/expense-tracker
│-- /src
│ │-- /screens
│ │ ├── DashboardScreen.js
│ │ ├── AddTransactionScreen.js
│ │ ├── TransactionDetailScreen.js
│ │-- /context
│ │ ├── TransactionContext.js
│ │-- /navigation
│ │ ├── AppNavigator.js
│-- App.js
│-- package.json
│-- README.md

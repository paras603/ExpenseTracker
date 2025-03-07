import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionDetailScreen = ({ route }) => {
  // Retrieve the transaction object passed from the Dashboard
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{transaction.date}</Text>

        <Text style={styles.label}>Amount:</Text>
        <Text style={[styles.value, styles.amount]}>
          ${transaction.amount.toFixed(2)}
        </Text>

        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{transaction.category}</Text>

        <Text style={styles.label}>Type:</Text>
        <Text
          style={[
            styles.value,
            transaction.type === "Credit" ? styles.credit : styles.debit,
          ]}
        >
          {transaction.type}
        </Text>

        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{transaction.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 4, // For shadow on Android
    shadowColor: "#000", // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#555",
  },
  value: {
    fontSize: 18,
    color: "#333",
  },
  amount: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007BFF",
  },
  credit: {
    color: "green",
    fontWeight: "bold",
  },
  debit: {
    color: "red",
    fontWeight: "bold",
  },
});

export default TransactionDetailScreen;

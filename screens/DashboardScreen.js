import React from "react";
import { 
  View, Text, FlatList, TouchableOpacity, StyleSheet 
} from "react-native";
import { useTransactions } from "../context/TransactionContext";
import { Ionicons } from "@expo/vector-icons"; // Import icons

const DashboardScreen = ({ navigation }) => {
  const { transactions } = useTransactions();  

  const handleTransactionPress = (transaction) => {
    navigation.navigate("TransactionDetail", { transaction });
  };

  const handleLogout = () => {
    navigation.replace("SignIn");
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="red" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      {transactions.length === 0 ? (
        <Text style={styles.emptyText}>No transactions yet. Start adding!</Text>
      ) : (
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.transactionCard} 
              onPress={() => handleTransactionPress(item)}
            >
              <View style={styles.transactionRow}>
                <Ionicons name="wallet-outline" size={24} color="#4CAF50" />
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionCategory}>{item.category}</Text>
                  <Text style={styles.transactionDate}>{item.date}</Text>
                </View>
                <Text style={[styles.transactionAmount, item.type === "Debit" ? styles.debit : styles.credit]}>
                  ${item.amount}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => navigation.navigate("AddTransaction")}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 50,
  },
  transactionCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  transactionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionCategory: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  transactionDate: {
    fontSize: 14,
    color: "#777",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  debit: {
    color: "red",
  },
  credit: {
    color: "green",
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#4CAF50",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  logoutButton: {
    marginRight: 20,
  },
});

export default DashboardScreen;

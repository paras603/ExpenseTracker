import React, { useState } from "react";
import { 
  View, Text, TextInput, StyleSheet, Alert, TouchableOpacity 
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTransactions } from "../context/TransactionContext";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from "@expo/vector-icons"; // Import icons for better UI

const AddTransactionScreen = ({ navigation }) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Debit");
  const [category, setCategory] = useState("Shopping");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const { addTransaction } = useTransactions();

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (selectedDate) => {
    const formattedDate = new Date(selectedDate).toISOString().split("T")[0];
    setDate(formattedDate);
    hideDatePicker();
  };

  const handleAddTransaction = () => {
    if (!date || !amount || !description || !location) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }
    
    if (isNaN(amount) || parseFloat(amount) <= 0) {
      Alert.alert("Validation Error", "Please enter a valid amount.");
      return;
    }

    const newTransaction = {
      id: Math.random().toString(),
      date,
      amount: parseFloat(amount),
      description,
      location,
      type,
      category,
    };

    addTransaction(newTransaction);

    Alert.alert("Success", "Transaction added successfully.");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>

      {/* Date Picker */}
      <TouchableOpacity style={styles.datePicker} onPress={showDatePicker}>
        <Ionicons name="calendar-outline" size={20} color="#007BFF" />
        <Text style={styles.dateText}>
          {date ? date : "Select Date"}
        </Text>
      </TouchableOpacity>

      {/* Amount Input */}
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      {/* Description Input */}
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      {/* Location Input */}
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />

      {/* Type Picker */}
      <Text style={styles.label}>Transaction Type:</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={type} onValueChange={setType} style={styles.picker}>
          <Picker.Item label="Debit" value="Debit" />
          <Picker.Item label="Credit" value="Credit" />
          <Picker.Item label="Refund" value="Refund" />
        </Picker>
      </View>

      {/* Category Picker */}
      <Text style={styles.label}>Category:</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={category} onValueChange={setCategory} style={styles.picker}>
          <Picker.Item label="Shopping" value="Shopping" />
          <Picker.Item label="Travel" value="Travel" />
          <Picker.Item label="Utility" value="Utility" />
        </Picker>
      </View>

      {/* Add Transaction Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddTransaction}>
        <Text style={styles.addButtonText}>Add Transaction</Text>
      </TouchableOpacity>

      {/* Date Picker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
  datePicker: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  addButton: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddTransactionScreen;

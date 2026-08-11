import React, { useState } from "react";
import { Text, TextInput, Button, View, ScrollView } from "react-native";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]); 

  const handleCalculate = () => {
    const parts = input.split(" ");
    if (parts.length !== 3) {
      setResult("Invalid input. Please use the format: a + b");
      return;
    }

    const a = parseFloat(parts[0]);
    const operator = parts[1];
    const b = parseFloat(parts[2]);

    if (isNaN(a) || isNaN(b)) {
      setResult("Invalid numbers. Please try again.");
      return;
    }

    let calculation;
    switch (operator) {
      case "+":
        calculation = a + b;
        break;
      case "-":
        calculation = a - b;
        break;
      case "*":
        calculation = a * b;
        break;
      case "/":
        calculation = b !== 0 ? a / b : "Error: Division by zero";
        break;
      default:
        setResult("Invalid operator. Use +, -, *, or /");
        return;
    }

    const equation = `${a} ${operator} ${b} = ${calculation}`;
    setResult(equation);

    // Update history (store only last 10 equations)
    setHistory((prevHistory) => {
      const newHistory = [...prevHistory, equation];
      if (newHistory.length > 10) newHistory.shift(); // Keep only 10 items
      return newHistory;
    });

    setInput(""); // Clear input after calculation
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Simple Calculator
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
          fontSize: 16,
        }}
        placeholder="Enter equation (e.g., 5 + 3)"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button title="Calculate" onPress={handleCalculate} />
      {result !== "" && (
        <Text style={{ marginTop: 20, fontSize: 18 }}>Result: {result}</Text>
      )}
      <ScrollView style={{ marginTop: 20, maxHeight: 200 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>History:</Text>
        {history.map((eq, index) => (
          <Text key={index} style={{ fontSize: 16 }}>
            {index + 1}. {eq}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Calculator;
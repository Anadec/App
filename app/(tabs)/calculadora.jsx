import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  const handlePress = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResultado('');
  };

  const calculateResult = () => {
    try {
      setResultado(eval(input));
    } catch {
      setResultado('Error');
    }
  };

  const handleMouseEnter = (index) => {
    setActiveButton(index);
  };

  const handleMouseLeave = () => {
    setActiveButton(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.visor}>{input || '0'}</Text>
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
      {[['1', '2', '3', '+'], ['4', '5', '6', '-'], ['7', '8', '9', '*'], ['=', '0', '/', 'C']].map((row, rowIndex) => (
        <View key={rowIndex} style={styles.buttonRow}>
          {row.map((value, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.button, activeButton === `${rowIndex}-${index}` && styles.shadow]}
              onPress={() => (value === 'C' ? clearInput() : value === '=' ? calculateResult() : handlePress(value))}
              onMouseEnter={() => handleMouseEnter(`${rowIndex}-${index}`)}
              onMouseLeave={handleMouseLeave}
            >
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  visor: {
    fontSize: 40,
    backgroundColor: '#e0e0e0',
    width: '80%',
    textAlign: 'right',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  resultado: {
    fontSize: 30,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    width: '18%',
    backgroundColor: '#ddd',
    padding: 20,
    alignItems: 'center',
    margin: 5,
    borderRadius: 50,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default App;


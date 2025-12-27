import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
import { generateMealPlan } from '../services/aiService';

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handlePlanMeal = async () => {
    setLoading(true);
    setError('');
    setResult('');
    try {
      const plan = await generateMealPlan();
      setResult(plan);
    } catch (err) {
      setError('Failed to generate meal plan. Please check your API key and internet connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Grocery Assistant</Text>
        <Text style={styles.subtitle}>Finnish Family Meal Planner</Text>

        <View style={styles.resultContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#007AFF" />
          ) : error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : result ? (
            <ScrollView style={styles.scrollView}>
              <Text style={styles.resultText}>{result}</Text>
            </ScrollView>
          ) : (
            <Text style={styles.placeholderText}>
              Tap the button below to generate a seasonal meal plan and shopping list.
            </Text>
          )}
        </View>

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handlePlanMeal}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Planning...' : 'Plan Meal & Shop'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  resultContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scrollView: {
    flex: 1,
  },
  resultText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 50,
  },
  errorText: {
    fontSize: 16,
    color: '#ff3b30',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

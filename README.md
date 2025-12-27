# Grocery Assistant App

A simple mobile app that acts as an efficient grocery-shopping assistant for a Finnish family. It uses AI to plan a meal, select seasonal produce, and create a shopping list.

## Setup

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Configure API Key:**
    Create a `.env` file in the root directory and add your OpenAI API key:

    ```bash
    AI_API_KEY=sk-...
    ```

3.  **Run the App:**
    ```bash
    npx expo start
    ```
    - Scan the QR code with your phone (using Expo Go app) or press `i` to run on iOS simulator / `a` for Android emulator.

## Features

- **AI-Powered Meal Planning:** Uses AI to select a seasonal recipe and plan a shopping list.
- **Simple Interface:** One-tap generation of meal plans.
- **Structured Output:** Returns a clear list of ingredients and the chosen recipe.

## Tech Stack

- React Native (Expo)
- TypeScript
- Vercel AI SDK (OpenAI)

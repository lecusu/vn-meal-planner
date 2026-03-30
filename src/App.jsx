import React, { useState } from 'react';
import InputForm from './components/InputForm';
import MealPlanDisplay from './components/MealPlanDisplay';
import ShoppingListDisplay from './components/ShoppingListDisplay';
import { generateMealPlan, generateShoppingList } from './utils/mealPlanner';

function App() {
  const [mealPlan, setMealPlan] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  const handleGenerate = (days) => {
    const plan = generateMealPlan(days);
    const list = generateShoppingList(plan);
    setMealPlan(plan);
    setShoppingList(list);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Vietnamese Meal Planner</h1>
        <p>Plan your authentic meals and get a shopping list instantly.</p>
      </header>

      <main className="main-content">
        <section className="control-panel">
          <InputForm onGenerate={handleGenerate} />
        </section>

        <div className="results-container">
          <section className="plan-section">
            <MealPlanDisplay plan={mealPlan} />
          </section>

          <section className="list-section">
            <ShoppingListDisplay items={shoppingList} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

import recipes from '../data/recipes.json';

export const generateMealPlan = (days) => {
    const plan = [];
    const savoryDishes = [...recipes.savory];
    const soups = [...recipes.soup];

    // Shuffle arrays
    savoryDishes.sort(() => 0.5 - Math.random());
    soups.sort(() => 0.5 - Math.random());

    for (let i = 0; i < days; i++) {
        plan.push({
            day: i + 1,
            savory: savoryDishes[i % savoryDishes.length],
            soup: soups[i % soups.length],
            staple: recipes.staple[0]
        });
    }
    return plan;
};

export const generateShoppingList = (mealPlan) => {
    const ingredientsMap = {};

    const normalizeUnit = (unit) => {
        const lower = unit.toLowerCase().trim();
        // Simple plural to singular mapping
        const map = {
            'stalks': 'stalk',
            'cloves': 'clove',
            'bulbs': 'bulb',
            'blocks': 'block',
            'cans': 'can',
            'pcs': 'pc',
            'pieces': 'pc',
            'cups': 'cup'
        };
        return map[lower] || lower;
    };

    mealPlan.forEach(meal => {
        [meal.savory, meal.soup, meal.staple].forEach(dish => {
            dish.ingredients.forEach(ing => {
                // Normalize: remove text in parens, trim, lowercase
                const cleanName = ing.name.replace(/\s*\(.*?\)\s*/g, '').trim();
                const key = cleanName.toLowerCase();

                if (!ingredientsMap[key]) {
                    ingredientsMap[key] = {
                        name: cleanName,
                        units: {}
                    };
                }

                // Aggregate by normalized unit
                const unit = normalizeUnit(ing.unit);
                if (!ingredientsMap[key].units[unit]) {
                    ingredientsMap[key].units[unit] = 0;
                }
                ingredientsMap[key].units[unit] += ing.amount;
            });
        });
    });

    // Flatten to array
    const finalList = [];
    Object.values(ingredientsMap).forEach(item => {
        Object.entries(item.units).forEach(([unit, amount]) => {
            finalList.push({
                name: item.name,
                amount: parseFloat(amount.toFixed(2)),
                unit: unit
            });
        });
    });

    return finalList.sort((a, b) => a.name.localeCompare(b.name));
};

import React from 'react';

const MealPlanDisplay = ({ plan }) => {
    if (!plan || plan.length === 0) return null;

    return (
        <div className="meal-plan-display">
            <h2>Meal Plan</h2>
            <div className="meal-grid">
                {plan.map((dayPlan) => (
                    <div key={dayPlan.day} className="meal-card">
                        <div className="day-header">Day {dayPlan.day}</div>
                        <div className="dish-group">
                            <span className="dish-type">Savory</span>
                            <span className="dish-name">{dayPlan.savory.name}</span>
                        </div>
                        <div className="dish-group">
                            <span className="dish-type">Soup</span>
                            <span className="dish-name">{dayPlan.soup.name}</span>
                        </div>
                        <div className="dish-group">
                            <span className="dish-type">Staple</span>
                            <span className="dish-name">{dayPlan.staple.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealPlanDisplay;

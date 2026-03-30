import React, { useState } from 'react';

const InputForm = ({ onGenerate }) => {
    const [days, setDays] = useState(3);

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerate(parseInt(days));
    };

    return (
        <form onSubmit={handleSubmit} className="input-form">
            <div className="form-group">
                <label htmlFor="days">Number of Days</label>
                <input
                    type="number"
                    id="days"
                    min="1"
                    max="7"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                />
            </div>
            <button type="submit" className="btn-primary">
                Generate Plan
            </button>
        </form>
    );
};

export default InputForm;

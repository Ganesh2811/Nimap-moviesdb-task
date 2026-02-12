import React, { useReducer } from 'react';

// Initial State
const initialScore = [
    {
        id: 1,
        score: 0,
        name: "John",
    },
    {
        id: 2,
        score: 0,
        name: "Sally",
    },
];

// Reducer Function
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return state.map((player) =>
                player.id === action.id
                    ? { ...player, score: player.score + 1 }
                    : player
            );
        default:
            return state;
    }
};

const DemoPage = () => {
    const [score, dispatch] = useReducer(reducer, initialScore);

    const handleIncrease = (player) => {
        dispatch({ type: "INCREASE", id: player.id });
    };

    return (
        <>
            {score.map((player) => (
                <div key={player.id}>
                    <label>
                        <input
                            type="button"
                            onClick={() => handleIncrease(player)}
                            value={player.name}
                        />
                        {" "}Score: {player.score}
                    </label>
                </div>
            ))}
        </>
    );
};

export default DemoPage;

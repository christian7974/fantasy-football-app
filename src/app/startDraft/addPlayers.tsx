"use client"
import { useState } from "react";

export default function AddPlayers() {
    const [numPlayers, setNumPlayers] = useState(0);
    function handleAddPlayers() {
        setNumPlayers(numPlayers + 1);
    }
    function handleRemovePlayers() {
        setNumPlayers(numPlayers - 1);
    }
    return (
        <>
            <h1>Add Players</h1>
            <button onClick={handleAddPlayers}>+</button>
            <button onClick={handleRemovePlayers}>-</button>
            <h1>{numPlayers}</h1>
        </>
    );
}
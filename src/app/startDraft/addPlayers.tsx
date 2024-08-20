"use client"
import { useState, useContext } from "react";

import { DraftContext } from "../contexts/draftContext";

export default function AddPlayers() {
    // use the DraftContext here
    const { draftData, setDraftData } = useContext(DraftContext);
    function handleAddPlayers() {
        if (draftData.numTeams === 12) return; // Maximum amount of teams is 12
        setDraftData((prev) => ({
            ...prev,
            numTeams: prev.numTeams + 1,
        }));
    }
    function handleRemovePlayers() {
        if (draftData.numTeams === 0) return; // Minimum amount of teams is 0
        setDraftData((prev) => ({
            ...prev,
            numTeams: prev.numTeams - 1,
        }));
    }
    return (
        <>
            <h1>Add Players</h1>
            <button onClick={handleAddPlayers}>+</button>
            <button onClick={handleRemovePlayers}>-</button>
            <h1>{draftData.numTeams}</h1>
        </>
    );
}
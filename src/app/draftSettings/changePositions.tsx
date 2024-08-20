"use client"
import { useState, useContext } from "react";

import { DraftContext, DraftDataType } from "../contexts/draftContext";

export default function ChangePositions() {

    const listOfPositions = ["QB", "RB", "WR", "TE", "FLX", "SuperFLX", "DST", "K", "Bench"];
    const listOfMaxes = [2, 5, 5, 3, 4, 4, 2, 2, 10];
    const { draftData, setDraftData } = useContext(DraftContext);

    function handleButtonClick(position: string, operation: string, maxOfPos: number = 0) {
        if (operation === "-" && draftData[position as keyof DraftDataType] === 0 || operation === "+" && draftData[position as keyof DraftDataType] === maxOfPos
        ) {
            return;
        }
        setDraftData((prev) => ({
            ...prev,
            [position]: operation === "+" ? (prev[position as keyof DraftDataType] as number) + 1  : (prev[position as keyof DraftDataType] as number) - 1,
        }));
    }

    return (
        <>
            {listOfPositions.map((position, index) => {
                return (
                <div key={position}>
                    <h1>{position}</h1>
                    <button onClick={() => handleButtonClick(`num${position}`, "+", listOfMaxes[index])}>+</button>
                    <button onClick={() => handleButtonClick(`num${position}`, "-")}>-</button>
                    <h1>{draftData[`num${position as string}` as keyof DraftDataType]}</h1>
                </div>)
            })}
        </>
    );
}
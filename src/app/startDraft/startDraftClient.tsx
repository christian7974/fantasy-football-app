"use client"

import { useState } from "react";
import AddPlayers from "./addPlayers";
import ChangePositions from "./changePositions";

export default function StartDraftClient() {

    return (
        <>
            <h1>Start Draft</h1>
            <AddPlayers />
            <ChangePositions />
        </>
    );
}
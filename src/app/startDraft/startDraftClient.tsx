"use client"

import { useState } from "react";
import AddPlayers from "./addPlayers";

export default function StartDraftClient() {

    return (
        <>
            <h1>Start Draft</h1>
            <AddPlayers />
        </>
    );
}
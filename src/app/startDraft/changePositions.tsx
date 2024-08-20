"use client"
import { useState, useContext } from "react";

import { DraftContext } from "../contexts/draftContext";

export default function ChangePositions() {
    // use the DraftContext here
    const { draftData, setDraftData } = useContext(DraftContext);
    function handleAddPos(position: string) {

    }
    return (
        <>
        </>
    );
}
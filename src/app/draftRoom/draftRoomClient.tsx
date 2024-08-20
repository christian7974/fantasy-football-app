"use client"
import { useContext } from "react";
import Link from 'next/link';

import { DraftContext } from "../contexts/draftContext";
import TeamsDrafted from "./TeamsDrafted";

interface Team {
    qbs: string[];
    rbs: string[];
    wrs: string[];
    tes: string[];
    flxs: string[];
    supflxs: string[];
    dsts: string[];
    ks: string[];
    bench: string[];
}

export default function DraftRoomClient() {
    const { draftData } = useContext(DraftContext);

    const rosterSize = draftData.numQB + draftData.numRB + draftData.numWR + draftData.numTE + draftData.numFLX + draftData.numSuperFLX + draftData.numDST + draftData.numK + draftData.numBench;

    const totalNumPicks = draftData.numTeams * rosterSize;

    return (
        <div>
            <h1>Draft Room</h1>
            <h2>Number of Teams: {draftData.numTeams}</h2>
            <h2>Roster Size: {rosterSize}</h2>
            <h2>Number of Picks: {draftData.numTeams} teams * {rosterSize} players per team = {totalNumPicks}</h2>
            <TeamsDrafted />
            <Link href="/draftSettings">Settings</Link>
        </div>
    );
}
"use client"
import { useState, createContext, ReactNode } from "react";

// Define the type for the draft data
export interface DraftDataType {
    numTeams: number;
    ptsSystem: string;
    numQB: number;
    numRB: number;
    numWR: number;
    numTE: number;
    numFLX: number;
    numSuperFLX: number;
    numDST: number;
    numK: number;
    numBench: number;
    timeToPick: number;
}

// Define the context type
interface DraftContextType {
    draftData: DraftDataType;
    setDraftData: React.Dispatch<React.SetStateAction<DraftDataType>>;
}

export const DraftContext = createContext<DraftContextType>({
    draftData: {
        numTeams: 4,
        ptsSystem: "PPR",
        numQB: 1,
        numRB: 2,
        numWR: 2,
        numTE: 1,
        numFLX: 1,
        numSuperFLX: 0,
        numDST: 1,
        numK: 1,
        numBench: 7,
        timeToPick: 30,
    },
    setDraftData: () => {},
});

export const DraftProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [draftData, setDraftData] = useState<DraftDataType>({
        numTeams: 4,
        ptsSystem: "PPR",
        numQB: 1,
        numRB: 2,
        numWR: 2,
        numTE: 1,
        numFLX: 1,
        numSuperFLX: 0,
        numDST: 1,
        numK: 1,
        numBench: 7,
        timeToPick: 30,
    });

    return (
        <DraftContext.Provider value={{ draftData, setDraftData }}>
            {children}
        </DraftContext.Provider>
    );
};
"use client"
import { useContext } from "react";

import { DraftContext } from "../contexts/draftContext";

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

export default function TeamsDrafted() {

    const { draftData } = useContext(DraftContext);

    const teamsArray: Team[] = [];

    for (var i = 0; i < draftData.numTeams; i++) { 
        teamsArray.push({
            qbs: [],
            rbs: [],
            wrs: [],
            tes: [],
            flxs: [],
            supflxs: [],
            dsts: [],
            ks: [],
            bench: []
        })
    }

    return (
        <>
        <div className="grid-container">
                {teamsArray.map((team, index) => {
                    return (
                        <div key={index} className="team-column">
                            <h3>Team {index + 1}</h3>
                            <h4>QBs</h4>
                            {team.qbs.map((player, idx) => (
                                <p key={idx}>{player}</p>
                            ))}
                            <h4>RBs</h4>
                            {team.rbs.map((player, idx) => (
                                <p key={idx}>{player}</p>
                            ))}
                            <h4>WRs</h4>
                            {team.wrs.map((player, idx) => (
                                <p key={idx}>{player}</p>
                            ))}
                            <h4>TEs</h4>
                            {team.tes.map((player, idx) => (
                                <p key={idx}>{player}</p>
                            ))}
                            <h4>FLXs</h4>
                            {team.flxs.map((player, idx) => (
                                <p key={idx}>{player}</p>
                            ))}
                            <h4>Super FLXs</h4>
                            {team.supflxs.map((player, idx) => (
                                <p key={idx}>{player}</p>
                            ))}
                            <h4>DSTs</h4>
                            {team.dsts.map((player, idx) => (
                                <p key={idx}>{player}</p>
                            ))}
                            <h4>Ks</h4>
                            {team.ks.map((player, idx) => (
                                <p key={idx}>{player}</p>
                            ))}
                            <h4>Bench</h4>
                            {team.bench.map((player, idx) => (
                                <p key={idx}>{player}</p>
                            ))}
                        </div>
                    );
                })}
            </div>

            <style jsx>{`
                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(${draftData.numTeams}, 1fr);
                    gap: 10px;
                }
                .team-column {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
                .team-column h3, .team-column h4, .team-column p {
                    margin: 0;
                }
                .team-column h3 {
                    margin-bottom: 10px;
                }
                .team-column h4 {
                    margin-top: 10px;
                }
                .team-column p {
                    padding: 5px;
                    border: 1px solid #000;
                    text-align: center;
                }
            `}</style>
        </>
    )
}
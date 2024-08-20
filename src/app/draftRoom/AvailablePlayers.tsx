import fs from 'fs';
import Papa from 'papaparse';

interface Player {
    RK: string;
    TIERS: string;
    'PLAYER NAME': string;
    TEAM: 'string';
    POS: string;
    'BYE WEEK': string;
    'SOS SEASON': string;
    'ECR VS. ADP': string;

}

export default async function AvailablePlayers() {
    const fileContent = fs.readFileSync("./src/app/draftRoom/player_rankings.csv", 'utf-8');
    
    // Parse the CSV file
    const parsedData = Papa.parse(fileContent, { header: true });
    const players: Player[] = parsedData.data as Player[];
    return (
        <div>
            <h1>Available Players</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Rank</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Tier</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Name</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Team</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Position</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>Bye Week</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>SOS Season</th>
                        <th style={{ border: '1px solid #ccc', padding: '10px' }}>ECR vs. ADP</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{player.RK}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{player.TIERS}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{player['PLAYER NAME']}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{player.TEAM}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{player.POS}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{player['BYE WEEK']}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{player['SOS SEASON']}</td>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{player['ECR VS. ADP']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
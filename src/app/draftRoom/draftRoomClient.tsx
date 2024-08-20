import Link from 'next/link';

import TeamsDrafted from "./TeamsDrafted";
import AvailablePlayers from "./AvailablePlayers";

export default function DraftRoomClient() {

    return (
        <div>
            <h1>Draft Room</h1>
            <TeamsDrafted />
            <AvailablePlayers />
            <Link href="/draftSettings">Settings</Link>
        </div>
    );
}
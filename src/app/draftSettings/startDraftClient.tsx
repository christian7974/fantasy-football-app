import Link from 'next/link';

import AddPlayers from "./addPlayers";
import ChangePositions from "./changePositions";

export default function StartDraftClient() {
    return (
        <>
            <AddPlayers />
            <ChangePositions />
            <Link href="/draftRoom">Enter Draft Room</Link>
        </>
    )
}
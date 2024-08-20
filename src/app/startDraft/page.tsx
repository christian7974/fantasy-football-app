import StartDraftClient from "./startDraftClient";
import { DraftProvider } from "../contexts/draftContext";

export default function StartDraft() {
    return (
        <DraftProvider>
            <StartDraftClient />
        </DraftProvider>
    );
}
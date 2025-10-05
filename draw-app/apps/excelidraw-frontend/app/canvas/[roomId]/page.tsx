

// export default function CanvasPage({ params }: { params: { roomId: string } }) {
//     return (
//         <div>
//             <h1>Canvas Room ID: {params.roomId}</h1>
//         </div>
//     );
// }

import { RoomCanvas } from "@/components/RoomCanvas";

export default async function CanvasPage({ params }: {
    params: {
        roomId: string
    }
}) {
    const roomId = (await params).roomId;

    return <RoomCanvas roomId={roomId} />

}
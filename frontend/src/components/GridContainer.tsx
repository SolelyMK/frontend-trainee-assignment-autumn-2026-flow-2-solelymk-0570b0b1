import { Suspense } from "react"
import RoomCard from "./RoomCard"

function GridContainer() {
    return (
        <div className="p-[40px] flex flex-col gap-[32px]">
            <span className="text-[22px] font-[800] text-[#0F172A]">Доступные переговорные в этом офисе</span>
            <div className="grow grid gap-[24px] grid-cols-3 grid-rows-2">
                <Suspense>
                    <RoomCard id="room-everest" officeId="office-moscow" name="Эверест" floor={4} capacity="Вместимость: до 12 человек" taken="Занята до 15:30" state={false} />
                </Suspense>
            </div>
        </div>
    )
}

export default GridContainer
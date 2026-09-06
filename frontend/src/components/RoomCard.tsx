type RoomCardPropsType = {
    id: string,
    officeId: string
    name: string,
    floor: number,
    capacity: string,
    taken: string,
    state: boolean
}

function RoomCard(props: RoomCardPropsType) {
    return (
        <div className="flex flex-col bg-white rounded-[16px] p-[20px] border border-[#E2E8F0] gap-[16px]">
            <div className="flex flex-col gap-[4px]">
                <span className="text-[18px] font-[700] text-[#0F172A]">{ props.name }</span>
                <span className="text-[13px] font-[400] text-[#475569]">{ props.floor } этаж</span>
            </div>
            <div className="flex flex-col gap-[8px] text-[13px] text-[#475569] font-[400]">
                <span className="flex gap-[8px] items-center">
                    <img src="src/assets/users.svg" alt="" />
                    <span>{ props.capacity }</span>
                </span>
                <span className="flex gap-[8px] items-center">
                    <img src="src/assets/clock.svg" className="size-[16px]" alt="" />
                    <span>{ props.taken }</span>
                </span>
            </div>
            { props.state ? <AvailableBlock /> : <UnavailableBlock /> }
            <div className="flex gap-[12px]">
                <button className="p-[10px_16px] font-[600] text-[14px] text-[#0D9488] select-none grow cursor-pointer">Подробнее</button>
                <button className="p-[10px_16px] bg-[#E2E8F0] opacity-60 font-[600] text-[14px] text-[#94A3B8] rounded-[8px] grow select-none cursor-pointer">Забронировать</button>
            </div>
        </div>
    )
}

function AvailableBlock() {
    return (
        <div className="flex gap-[8px] bg-[#CCFBF1] p-[10px] rounded-[8px] items-center">
            <div className="bg-[#0F766E] size-[6px] rounded-full"></div>
            <span className="font-[600] text-[#0F766E] text-[12px]">Доступно на выбранное время</span>
        </div>
    )
}

function UnavailableBlock() {
    return (
        <div className="flex gap-[8px] bg-[#E2E8F0] p-[10px] rounded-[8px] items-center">
            <div className="bg-[#475569] size-[6px] rounded-full"></div>
            <span className="font-[600] text-[#475569] text-[12px]">Недоступно на выбранное время</span>
        </div>
    )
}

export default RoomCard
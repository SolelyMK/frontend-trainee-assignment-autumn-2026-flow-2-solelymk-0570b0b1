type RightScheduleColumnPropsType = {
    date: string
}

function RightScheduleColumn(props: RightScheduleColumnPropsType) {
    return (
        <div className="flex flex-col bg-white p-[32px] rounded-[16px] border border-[#E2E8F0] gap-[24px] grow">
            <div className="flex justify-between">
                <div className="flex flex-col gap-[4px]">
                    <span className="text-[20px] text-[#0F172A] font-[800]">Расписание на день</span>
                    <span className="text-[14px] text-[#475569] font-[400]">{ props.date }</span>
                </div>
            </div>
            <Timeline />
            <div className="flex py-[12px]">
                <button className="ml-auto bg-[#0D9488] p-[10px_24px] rounded-[8px] cursor-pointer text-white text-[14px] font-[600]">Забронировать комнату</button>
            </div>
        </div>
    )
}

function Timeline() {
    const timeArray = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

    return (
        <div className="flex flex-col">
            { timeArray.map((i) => 
                <div className="basis-[48px] flex">
                    <div className="text-[13px] text-[#475569] font-[400] basis-[60px]">{i}</div>
                    <div className="border-b border-b-[#E2E8F0] grow"></div>
                </div>)
            }
        </div>
    )
}

export default RightScheduleColumn;
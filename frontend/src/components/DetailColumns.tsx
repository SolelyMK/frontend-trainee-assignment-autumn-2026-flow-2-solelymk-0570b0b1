import RightScheduleColumn from "./RightScheduleColumn";

type RoomInfoPropsType = {
    roomName: string,
    officeName: string,
    address: string,
    capacity: number,
    features: Array<{ code: string, name: string }>
}

function DetailColumns(props: RoomInfoPropsType) {
    return (
        <div className="p-[0_40px_48px] flex gap-[32px]">
            <LeftInfoColumn {...props} />
            <RightScheduleColumn date="Четверг, 24 октября" />
        </div>
    )
}

function LeftInfoColumn(props: RoomInfoPropsType) {
    const features = props.features.map((i) => 
        <span className="flex gap-[12px] items-center">
            <img src="" className="w-[15px] h-[13.5px]" alt="" />
            <span>{ i.name }</span>
        </span>
    );

    return (
        <div className="bg-white p-[24px] flex flex-col rounded-[16px] border border-[#E2E8F0] gap-[20px] h-min">
            <div className="flex flex-col gap-[8px]">
                <span className="text-[24px] text-[#0F172A] font-[800]">{ props.roomName }</span>
                <span className="text-[14px] text-[#475569] font-[400]">{ props.officeName } · { props.address }</span>
            </div>
            <div className="border-b border-[#E2E8F0] w-[372px]"></div>
            <div className="flex flex-col gap-[12px] text-[14px] text-[#0F172A] font-[400]">
                <span className="flex gap-[12px] items-center">
                    <img src="/src/assets/users-green.svg" className="w-[15px] h-[13.5px]" alt="" />
                    <span>Вместимость: до { props.capacity } человек</span>
                </span>
                { features }
            </div>
        </div>
    )
}

export default DetailColumns
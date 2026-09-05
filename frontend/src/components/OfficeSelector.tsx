type SelectionTriggerPropsType = {
    officeType: string
}

type OfficeMetaPropsType = {
    adress: string,
    localTime: string,
}

function OfficeSelector() {
    return (
        <div className="bg-white basis-[72px] border-b border-b-[#E2E8F0] flex p-[24px_40px]">
            <div className="flex flex-col gap-[4px] grow cursor-pointer">
                <SelectionTrigger officeType="Офис Москва" />
                <OfficeMeta adress="ул. Лесная 7" localTime="Местное время: 14:35 MSK" />
            </div>
        </div>
    )
}

function SelectionTrigger(props: SelectionTriggerPropsType) {
    return (
        <div className="flex gap-[8px] items-center">
            <span className="text-[18px] font-[700]">{ props.officeType }</span>
            <img src="src/assets/chevron-down.svg" className="size-[16px]" alt="" />
        </div>
    )
}

function OfficeMeta(props: OfficeMetaPropsType) {
    return (
        <div className="flex gap-[12px] text-[#475569] text-[13px] font-[400] items-center">
            <span>{props.adress}</span>
            <div className="bg-[#94A3B8] size-[4px] rounded-full"></div>
            <span>{props.localTime}</span>
        </div>
    )
}

export default OfficeSelector;
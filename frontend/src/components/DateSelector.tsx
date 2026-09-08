type DateSelectorPropsType = {
    date?: string
}

function DateSelector(props: DateSelectorPropsType) {
    return (
        <div className="flex flex-col gap-[6px]">
            <span className="text-[#94A3B8] text-[11px] font-[700] uppercase">Дата</span>
            <div className="border border-[#E2E8F0] p-[10px_14px] rounded-[9px] flex gap-[8px] items-center cursor-pointer">
                <img src="src/assets/calendar.svg" alt="" />
                <span className="text-[#0F172A] text-[14px] font-[400] select-none">{ props.date ?? 'Выбрать дату' }</span>
            </div>
        </div>
    )
}

export default DateSelector;
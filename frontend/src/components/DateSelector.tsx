type DateSelectorPropsType = {
    date?: string
}

function DateSelector(props: DateSelectorPropsType) {
    return (
        <div className="border border-[#E2E8F0] p-[10px_14px] rounded-[9px] flex gap-[8px] items-center cursor-pointer h-min">
            <img src="/src/assets/calendar.svg" alt="" />
            <span className="text-[#0F172A] text-[14px] font-[400] select-none">{ props.date ?? 'Выбрать дату' }</span>
        </div>
    )
}

export default DateSelector;
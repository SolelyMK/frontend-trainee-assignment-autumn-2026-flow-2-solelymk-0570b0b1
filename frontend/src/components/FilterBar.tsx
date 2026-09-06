type DateSelectorPropsType = {
    date: string
}

type StartTimeSelectorPropsType = {
    time?: string
}

type DurationSelectorPropsType = {
    dur?: string
}

type CapacitySelectorPropsType = {
    cap?: string
}

function FilterBar() {
    return (
        <div className="basis-[min-content] bg-white p-[20px_40px] border-b border-b-[#E2E8F0] flex gap-[16px]">
            <DateSelector date="24 Октября, Чт" />
            <StartTimeSelector />
            <DurationSelector />
            <CapacitySelector />
        </div>
    )
}

function DateSelector(props: DateSelectorPropsType) {
    return (
        <div className="flex flex-col gap-[6px]">
            <span className="text-[#94A3B8] text-[11px] font-[700] uppercase">Дата</span>
            <div className="border border-[#E2E8F0] p-[10px_14px] rounded-[9px] flex gap-[8px] items-center cursor-pointer">
                <img src="src/assets/calendar.svg" alt="" />
                <span className="text-[#0F172A] text-[14px] font-[400] select-none">{ props.date }</span>
            </div>
        </div>
    )
}

function StartTimeSelector(props: StartTimeSelectorPropsType) {
    function HandleInputClick(): void {
        const input = document.querySelector<HTMLInputElement>('#time-input')!;

        input.focus();
    }

    function HandleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
        const input = e.target as HTMLInputElement;
        const { key } = e;
        
        if (isNaN(Number(key)) && key.length === 1) {
            e.preventDefault();
        } else {
            if (input.value.length === 2 && key !== 'Backspace') {
                input.value = input.value + ':'
            }
        }
    }

    return (
        <div className="flex flex-col gap-[6px]">
            <span className="text-[#94A3B8] text-[11px] font-[700] uppercase">Время начала</span>
            <div className="border border-[#E2E8F0] p-[10px_14px] rounded-[9px] flex gap-[8px] items-center cursor-pointer" onClick={HandleInputClick}>
                <img src="src/assets/clock.png" className="size-[13.33px]" alt="" />
                <input id="time-input" type="text" className="text-[#B3B3B3] text-[14px] font-[400] w-[25px] outline-0 cursor-pointer" maxLength={5} placeholder="--:--" onKeyDown={(e) => HandleInputKeyDown(e)} />
            </div>
        </div>
    )
}

function DurationSelector(props: DurationSelectorPropsType) {
    return (
        <div className="flex flex-col gap-[6px]">
            <span className="text-[#94A3B8] text-[11px] font-[700] uppercase">Дата</span>
            <div className="border border-[#E2E8F0] p-[10px_14px] rounded-[9px] flex gap-[8px] items-center cursor-pointer">
                <span className="text-[#0F172A] text-[14px] font-[400] select-none">{ props.dur ?? '15 мин' }</span>
                <img src="src/assets/chevron-down.svg" alt="" />
            </div>
        </div>
    )
}

function CapacitySelector(props: CapacitySelectorPropsType) {
    return (
        <div className="flex flex-col gap-[6px]">
            <span className="text-[#94A3B8] text-[11px] font-[700] uppercase">Дата</span>
            <div className="border border-[#E2E8F0] p-[10px_14px] rounded-[9px] flex gap-[8px] items-center cursor-pointer">
                <img src="src/assets/users.svg" alt="" />
                <span className="text-[#0F172A] text-[14px] font-[400] select-none">Мин. { props.cap ?? '2 чел.' }</span>
                <img src="src/assets/chevron-down.svg" alt="" />
            </div>
        </div>
    )
}

export default FilterBar
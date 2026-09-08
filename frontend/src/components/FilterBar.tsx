import { useEffect, useState } from "react"
import DateSelector from "./DateSelector"

type StartTimeSelectorPropsType = {
    time?: string
}

type DurationSelectorPropsType = {
    dur?: string
}

type CapacitySelectorPropsType = {
    cap?: number
}

function FilterBar() {
    return (
        <div className="basis-[min-content] bg-white p-[20px_40px] border-b border-b-[#E2E8F0] flex gap-[16px]">
            <div className="flex flex-col gap-[6px]">
            <span className="text-[#94A3B8] text-[11px] font-[700] uppercase">Дата</span>
                <DateSelector />
            </div>
            <StartTimeSelector />
            <DurationSelector />
            <CapacitySelector />
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
            <span className="text-[#94A3B8] text-[11px] font-[700] uppercase">Длительность</span>
            <div className="border border-[#E2E8F0] p-[10px_14px] rounded-[9px] flex gap-[8px] items-center cursor-pointer">
                <span className="text-[#0F172A] text-[14px] font-[400] select-none">{ props.dur ?? '15 мин' }</span>
                <img src="src/assets/chevron-down.svg" alt="" />
            </div>
        </div>
    )
}

function CapacitySelector(props: CapacitySelectorPropsType) {
    const capacityArray = [2, 4, 6, 8, 10, 12];

    const [value, SetValue] = useState<number>(props.cap ?? capacityArray[0]);

    function CapacitySelectorClick(): void {
        const checkbox = document.querySelector<HTMLInputElement>('#capacity-checkbox')!;
        checkbox.checked = !checkbox.checked;
    }

    function CapSelect(e: React.MouseEvent<HTMLDivElement, MouseEvent>, n: number): void {
        const checkbox = document.querySelector<HTMLInputElement>('#capacity-checkbox')!;
        const div = e.target as HTMLDivElement;

        document.querySelectorAll<HTMLDivElement>('#capacity-dropdown > *')!.forEach((i) => {
            i.style.backgroundColor = '#ffffff';
            const img = i.children[1] as HTMLImageElement;
            img.style.opacity = '0%';
        });
        checkbox.checked = !checkbox.checked;
        div.style.backgroundColor = '#CCFAF1';

        const img = div.children[1] as HTMLImageElement;
        img.style.opacity = '100%';

        SetValue(n);
    }

    useEffect(() => {
        const div = document.querySelector<HTMLDivElement>('#capacity-dropdown')!.children[capacityArray.indexOf(value)] as HTMLDivElement;
        const img = div.children[1] as HTMLImageElement;

        div.style.backgroundColor = '#CCFAF1';
        img.style.opacity = '100%';
    });
    return (
        <>
            <div className="flex flex-col gap-[6px] select-none">
                <span className="text-[#94A3B8] text-[11px] font-[700] uppercase">Дата</span>
                <div id="capacity-selector" onClick={CapacitySelectorClick} className="border border-[#E2E8F0] p-[10px_14px] rounded-[9px] flex gap-[8px] items-center cursor-pointer">
                    <img src="src/assets/users.svg" alt="" />
                    <span className="text-[#0F172A] text-[14px] font-[400] select-none">Мин. { value } чел.</span>
                    <img src="src/assets/chevron-down.svg" alt="" />
                </div>
            </div>
            <input hidden type="checkbox" name="" id="capacity-checkbox" />
            <div id="capacity-dropdown" className="flex flex-col rounded-[12px] border border-[#E5E7EB] bg-white gap-[4px] font-[400] text-[14px] text-[#0F1729] p-[8px]">
                {
                    capacityArray.map((i) => 
                    <div onClick={(e) => CapSelect(e, i)} key={i} className="p-[8px_12px] cursor-pointer select-none rounded-[6px] flex justify-between">
                        <span>{ i } чел.</span>
                        <img className="opacity-0" src="/src/assets/check.svg" alt="" />
                    </div>)
                }
            </div>
        </>
    )
}

export default FilterBar
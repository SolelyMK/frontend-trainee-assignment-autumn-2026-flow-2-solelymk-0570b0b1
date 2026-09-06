import FilterBar from "./FilterBar";
import OfficeSelector from "./OfficeSelector";

function RoomSelectionArea() {
    return (
        <div className="grow flex flex-col">
            <OfficeSelector />
            <FilterBar />
        </div>
    )
}

export default RoomSelectionArea;
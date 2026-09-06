import FilterBar from "./FilterBar";
import GridContainer from "./GridContainer";
import OfficeSelector from "./OfficeSelector";

function RoomSelectionArea() {
    return (
        <div className="grow flex flex-col">
            <OfficeSelector />
            <FilterBar />
            <GridContainer />
        </div>
    )
}

export default RoomSelectionArea;
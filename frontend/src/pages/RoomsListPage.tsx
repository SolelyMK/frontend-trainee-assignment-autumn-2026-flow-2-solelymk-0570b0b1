import Header from "../components/Header";
import RoomSelectionArea from "../components/RoomSelectionArea";

function RoomsListPage() {
    return (
        <div className="absolute inset-0 size-full bg-[#F8FAFC] flex flex-col">
            <Header location="/" />
            <RoomSelectionArea />
        </div>
    );
}

export default RoomsListPage;
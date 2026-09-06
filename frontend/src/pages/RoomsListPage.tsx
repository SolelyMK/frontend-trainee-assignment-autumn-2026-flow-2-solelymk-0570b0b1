import Header from "../components/Header";
import RoomSelectionArea from "../components/RoomSelectionArea";

function RoomsListPage() {
    return (
        <div className="absolute inset-0 size-full bg-[#F8FAFC] flex flex-col min-h-[1024px]">
            <Header location="/" />
            <RoomSelectionArea />
        </div>
    );
}

export default RoomsListPage;
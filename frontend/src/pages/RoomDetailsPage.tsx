import { useParams } from "react-router-dom"
import Header from "../components/Header"
import DetailColumns from "../components/DetailColumns";

type RootBarPropsType = {
    officeName: string,
    roomName: string
}

function RoomDetailsPage() {
    const { roomId } = useParams();

    return (
        <div className="absolute inset-0 size-full bg-[#F8FAFC] flex flex-col min-h-[1024px]">
            <Header location="/" />
            <RootBar officeName="Офис Москва" roomName="Эверест" />
            <DetailColumns roomName="Эверест" officeName="Офис Москва" address="ул. Лесная 7" capacity={12} features={[{ code: 'display', name: 'Проектор и ТВ-панель 4К' },{ code: 'whiteboard', name: 'Маркерная доска' },{ code: 'video', name: 'Система видеоконференций' }]} />
        </div>
    )
}

function RootBar(props: RootBarPropsType) {
    return (
        <div className="flex p-[24px_40px_12px] gap-[8px] text-[#475569] text-[14px] font-[400] items-center">
            <span>Переговорные</span>
            <img src="/src/assets/chevron-right.svg" className="w-[3.5px] h-[7px]" alt="" />
            <span>{ props.officeName }</span>
            <img src="/src/assets/chevron-right.svg" className="w-[3.5px] h-[7px]" alt="" />
            <span className="text-[#0F172A] font-[600]">Комната '{ props.roomName }'</span>
        </div>
    )
}

export default RoomDetailsPage
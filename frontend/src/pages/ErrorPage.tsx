import { Link } from "react-router-dom"
import Header from "../components/Header"

function ErrorPage() {
    return (
        <div className="absolute inset-0 size-full bg-[#F8FAFC] flex flex-col min-h-[1024px]">
            <Header location="/" />
            <div className="grow py-[120px] gap-[32px] flex flex-col items-center">
                <div className="flex flex-col gap-[12px] items-center">
                    <span className="text-[120px] text-[#0D9488] font-[800]">404</span>
                    <span className="text-[28px] text-[#0F172A] font-[800]">Страница не найдена</span>
                    <span className="text-[16px] text-[#475569] font-[400] text-wrap w-[480px] text-center tracking-[0]">Запрашиваемая страница не существует, была удалена или перенесена на другой адрес.</span>
                </div>
                <Link className="bg-[#0D9488] p-[14px_28px] rounded-[8px] flex gap-[8px]" to="/rooms">
                    <img src="src/assets/home.svg" alt="" />
                    <span className="font-[700] text-[15px] text-white text-nowrap">Вернуться к переговорным</span>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage
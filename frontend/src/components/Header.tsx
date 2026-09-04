import { useEffect } from "react"
import { Link } from "react-router-dom"

type HeaderPropsType = {
    location: "/" | "/bookings"
}

function Header(props: HeaderPropsType) {
    useEffect(() => {
        const nav = document.querySelector('nav')!;

        const link = nav.children[props.location === '/' ? 0 : 1] as HTMLAnchorElement;
        link.style.color = '#0D9488';
        link.style.borderBottom = '2px solid #0D9488';
    });

    return (
        <header className="basis-[72px] bg-white border-b border-b-[#E2E8F0] flex px-[40px] justify-between">
            <Title />
            <nav className="flex gap-[32px]">
                <Link className="link" to="/">Переговорные</Link>
                <Link className="link" to="/bookings">Мои бронирования</Link>
            </nav>
            <Profile />
        </header>
    )
}

function Title() {
    return (
        <div className="flex gap-[12px] items-center">
            <div className="bg-[#0D9488] size-[36px] rounded-[10px] flex">
                <img src="src/assets/BookRoomIcon.svg" alt="" className="h-[15px] w-[13.5px] m-auto"/>
            </div>
            <div className="text-[20px] font-[800] text-[#0F172A]">
                <span>BookRoom</span>
            </div>
        </div>
    )
}

function Profile() {
    return (
        <div className="flex gap-[12px] items-center">
            <div className="text-[#0F172A] gap-[2px] text-[14px] font-[600]">
                <span>Константин К.</span>
            </div>
            <div className="flex justify-center items-center size-[40px] rounded-full bg-[#5478D9] border border-[#E2E8F0] text-[14px] text-white font-[600]">
                <span>KK</span>
            </div>
        </div>
    )
}

export default Header
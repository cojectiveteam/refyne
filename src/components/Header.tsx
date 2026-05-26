import PrimaryButton from "./ui/PrimaryButton";
const nav = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about-us",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Reviews",
        href: "/reviews",
    },

]
export default function Header() {
    return (
        <header className="absolute top-0 w-full left-0 right-0 z-50 pointer-events-none">
            <div className="flex justify-between items-center fpx max-container py-6">
                <div className="flex lg:hidden flex-col gap-2 ">
                    <span className="w-8 2xl:w-10 h-0.5 2xl:h-1 bg-white rounded-full"></span>
                    <span className="w-8 2xl:w-10 h-0.5 2xl:h-1 bg-white rounded-full"></span>
                    <span className="w-8 2xl:w-10 h-0.5 2xl:h-1 bg-white rounded-full"></span>
                </div>
                <h1 className="hidden lg:block text-2xl font-bold text-white pointer-events-auto">Refyne</h1>
                <nav className="hidden lg:block  pointer-events-auto">
                    <ul className="flex gap-6">
                        {nav.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="text-base text-[#F8F8F8] leading-none bg-[#3984FF] px-4 py-2 rounded-full">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <PrimaryButton buttonText="Get a free quote" className="hidden lg:block pointer-events-auto" />

            </div>
        </header>
    )
}
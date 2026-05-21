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
                <h1 className="text-2xl font-bold text-white pointer-events-auto">Refyne</h1>
                <nav className="pointer-events-auto">
                    <ul className="flex gap-6">
                        {nav.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="text-base text-[#F8F8F8] leading-none bg-[#3984FF] px-4 py-2 rounded-full">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <PrimaryButton buttonText="Get a free quote" className="pointer-events-auto" />

            </div>
        </header>
    )
}
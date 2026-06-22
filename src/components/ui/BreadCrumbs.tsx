interface BreadCrumbsProps {
    title: string;
    description?: string;
}

export default function BreadCrumbs({ title, description }: BreadCrumbsProps) {
    return (
        <section className="bg-primary overflow-hidden">
            <div className=" text-white relative flex flex-col items-center justify-center gap-2 pt-25 mlg:pt-30 md:pt-40 fpx fpb max-container">

                <div className="flex justify-center gap-1.5 f-base">
                    <p>Home</p>
                    /
                    <p>{title}</p>
                </div>
                <div className="f-h2 font-black uppercase">{title}</div>
                {description && (
                    <div className="text-sm pb-3 text-gray-200" dangerouslySetInnerHTML={{ __html: description }} />
                )}

            </div>
        </section>
    )
}
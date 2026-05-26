interface PillProps {
    text: string;
    bg?: string;
    color?: string;
    className?: string;
}

export default function Pill({ text, bg = "bg-primary", color = "text-white", className }: PillProps) {
    return (
        <h5 className={`f-xs mlg:f-sm ${color} ${bg} px-5 py-2 mlg:py-3 rounded-full w-fit ${className}`}>{text}</h5>
    );
}
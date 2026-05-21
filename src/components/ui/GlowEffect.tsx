interface GlowEffectProps {
    size: number;
    color?: string;
    className?: string;
    blur?: number;
}

export default function GlowEffect({ size, color = "bg-white", className, blur = 100 }: GlowEffectProps) {
    return (
        <div className={`absolute ${color} rounded-full ${className}`} style={{ width: `${size}px`, height: `${size}px`, filter: `blur(${blur}px)` }} />
    )
}
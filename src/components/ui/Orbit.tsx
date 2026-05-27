export interface ResponsiveSize {
    default: number | string;
    sm?: number | string;
    md?: number | string;
    lg?: number | string;
    xl?: number | string;
    '2xl'?: number | string;
}

interface OrbitProps {
    size: number | string | ResponsiveSize;
    className?: string;
    circleClassName?: string;
    dotClassName?: string;
}

const dots = [
    { circle: 1, angle: 300 },
    { circle: 1, angle: 100 },
    { circle: 2, angle: 30 },
    { circle: 2, angle: 250 },
    { circle: 3, angle: 330 },
    { circle: 3, angle: 100 }
]

const circles = [
    { id: 1, size: "76%", opacity: "25%" },
    { id: 2, size: "88%", opacity: "15%" },
    { id: 3, size: "100%", opacity: "10%" }
]

export default function Orbit({ size, className, circleClassName = "border-text-light", dotClassName = "bg-text-light/25" }: OrbitProps) {
    const isResponsive = typeof size === "object";

    const inlineStyles = isResponsive
        ? ({
            "--orbit-sz-default": typeof size.default === "number" ? `${size.default}px` : size.default,
            "--orbit-sz-sm": size.sm !== undefined ? (typeof size.sm === "number" ? `${size.sm}px` : size.sm) : undefined,
            "--orbit-sz-md": size.md !== undefined ? (typeof size.md === "number" ? `${size.md}px` : size.md) : undefined,
            "--orbit-sz-lg": size.lg !== undefined ? (typeof size.lg === "number" ? `${size.lg}px` : size.lg) : undefined,
            "--orbit-sz-xl": size.xl !== undefined ? (typeof size.xl === "number" ? `${size.xl}px` : size.xl) : undefined,
            "--orbit-sz-2xl": size["2xl"] !== undefined ? (typeof size["2xl"] === "number" ? `${size["2xl"]}px` : size["2xl"]) : undefined,
          } as React.CSSProperties)
        : {
            width: size,
            height: size,
          };

    const responsiveClasses = isResponsive
        ? "w-[var(--orbit-sz-default)] h-[var(--orbit-sz-default)]" +
          (size.sm !== undefined ? " sm:w-[var(--orbit-sz-sm)] sm:h-[var(--orbit-sz-sm)]" : "") +
          (size.md !== undefined ? " md:w-[var(--orbit-sz-md)] md:h-[var(--orbit-sz-md)]" : "") +
          (size.lg !== undefined ? " lg:w-[var(--orbit-sz-lg)] lg:h-[var(--orbit-sz-lg)]" : "") +
          (size.xl !== undefined ? " xl:w-[var(--orbit-sz-xl)] xl:h-[var(--orbit-sz-xl)]" : "") +
          (size["2xl"] !== undefined ? " 2xl:w-[var(--orbit-sz-2xl)] 2xl:h-[var(--orbit-sz-2xl)]" : "")
        : "";

    return (
        <div className={`${className} aspect-square ${responsiveClasses}`} style={inlineStyles}>

            {circles.map((circle) => (
                <div key={circle.id} className={`absolute border   rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${circleClassName}`} style={{ width: circle.size, height: circle.size, opacity: circle.opacity }}></div>
            ))}

            {dots.map((dot, index) => {
                const circle = circles.find((c) => c.id === dot.circle);
                if (!circle) return null;

                return (
                    <div
                        key={index}
                        className="absolute top-1/2 left-1/2 pointer-events-none"
                        style={{
                            width: circle.size,
                            height: circle.size,
                            // Translate centers the wrapper, rotate spins it to the correct angle
                            transform: `translate(-50%, -50%) rotate(${dot.angle}deg)`
                        }}
                    >
                        {/* The dot is placed at the top center of this rotated wrapper, which perfectly aligns it on the circle */}
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2  rounded-full ${dotClassName}`}></div>
                    </div>
                );
            })}

        </div>
    );
}
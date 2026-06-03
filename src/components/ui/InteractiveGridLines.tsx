"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function InteractiveGridLines() {
    const gridRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        const dot = cursorDotRef.current;
        if (!grid || !dot) return;

        const parent = grid.parentElement;
        if (!parent) return;

        // Force parent to have relative/absolute positioning so absolute elements fill it
        const parentComputed = window.getComputedStyle(parent);
        if (parentComputed.position === "static") {
            parent.style.position = "relative";
        }

        // Hide default mouse cursor inside this section to make room for our custom glowing cursor
        parent.style.cursor = "none";

        // Set up GSAP quickTo setters for lagging/delay effect on grid highlight (duration: 1.2s for slow fluid float)
        const xTo = gsap.quickTo(grid, "--x", { duration: 1.2, ease: "power2.out" });
        const yTo = gsap.quickTo(grid, "--y", { duration: 1.2, ease: "power2.out" });
        const opacityTo = gsap.quickTo(grid, "opacity", { duration: 0.4, ease: "power1.out" });

        // Set up GSAP quickTo setters for custom cursor follower dot with smooth trailing lag (duration: 1.5s)
        const dotXTo = gsap.quickTo(dot, "x", { duration: 1, ease: "power3.out" });
        const dotYTo = gsap.quickTo(dot, "y", { duration: 1, ease: "power3.out" });
        const dotOpacityTo = gsap.quickTo(dot, "opacity", { duration: 0.3, ease: "power1.out" });

        // Coordinates cache to update positions during scrolls when the mouse doesn't move relative to the viewport
        let lastClientX = 0;
        let lastClientY = 0;
        let mouseInParent = false;

        const updatePositions = (clientX: number, clientY: number) => {
            const rect = parent.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            xTo(x);
            yTo(y);
            opacityTo(1);

            dotXTo(x);
            dotYTo(y);
            dotOpacityTo(1);
        };

        const handleMouseMove = (e: MouseEvent) => {
            lastClientX = e.clientX;
            lastClientY = e.clientY;
            mouseInParent = true;
            updatePositions(lastClientX, lastClientY);
        };

        const handleMouseLeave = () => {
            mouseInParent = false;
            opacityTo(0);
            dotOpacityTo(0);
        };

        // Recalculate and set coordinates instantly during scroll to keep the cursor follower glued to screen coordinates
        const handleScroll = () => {
            if (mouseInParent) {
                const rect = parent.getBoundingClientRect();
                const x = lastClientX - rect.left;
                const y = lastClientY - rect.top;

                // Sync position instantly to avoid lag drifting relative to the scroll offset
                gsap.set(dot, { x, y });
                gsap.set(grid, { "--x": `${x}px`, "--y": `${y}px` });

                // Sync the quickTo targets so they start their next mouseMove from this new position
                dotXTo(x);
                dotYTo(y);
                xTo(x);
                yTo(y);
            }
        };

        // Custom scale up/color change animations when hovering interactive child elements
        const handleLinkEnter = () => {
            gsap.to(dot, {
                scale: 2.2,
                backgroundColor: "rgba(129, 221, 255, 0.2)",
                borderColor: "#81DDFF",
                boxShadow: "0 0 15px rgba(129, 221, 255, 0.8)",
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleLinkLeave = () => {
            gsap.to(dot, {
                scale: 1,
                backgroundColor: "#FCFCFC",
                borderColor: "rgba(1, 105, 255, 0.4)",
                boxShadow: "0 0 8px rgba(252, 252, 252, 0.8), 0 0 16px rgba(1, 105, 255, 0.5)",
                duration: 0.3,
                ease: "power2.out"
            });
        };

        parent.addEventListener("mousemove", handleMouseMove);
        parent.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Bind hover effects to interactive children
        const interactiveElements = parent.querySelectorAll("a, button, [role='button'], .cursor-pointer");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleLinkEnter);
            el.addEventListener("mouseleave", handleLinkLeave);
        });

        return () => {
            parent.removeEventListener("mousemove", handleMouseMove);
            parent.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("scroll", handleScroll);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleLinkEnter);
                el.removeEventListener("mouseleave", handleLinkLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={gridRef}
                className="absolute inset-0 w-full h-full grid-lines pointer-events-none z-0 opacity-0"
                style={{
                    transition: "none",
                    "--x": "0px",
                    "--y": "0px",
                } as React.CSSProperties}
            />
            {/* Custom glowing/color-changing cursor follower dot */}
            <div
                ref={cursorDotRef}
                className="absolute w-3.5 h-3.5 rounded-full border pointer-events-none z-50 opacity-0 top-0 left-0"
                style={{
                    backgroundColor: "#FCFCFC",
                    borderColor: "rgba(1, 105, 255, 0.4)",
                    boxShadow: "0 0 8px rgba(252, 252, 252, 0.8), 0 0 16px rgba(1, 105, 255, 0.5)",
                    transform: "translate(-50%, -50%)", // Center dot on coordinates
                    willChange: "transform",
                }}
            />
        </>
    );
}

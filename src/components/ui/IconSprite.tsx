import React from 'react';


// 1. Add new icon names here to get autocomplete!
export type IconName = 'arrow-right' | 'check-mark-gradient' | 'check-mark' | 'check-mark-rounded' | 'arrow-right-boxed';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    width?: number | string;
    height?: number | string;
    className?: string;
}

// 2. Use this component anywhere in your app: <Icon name="location-pin" className="text-red-500 hover:text-blue-500" />
export default function Icon({ name, width = 24, height = 24, className = '', ...props }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            className={`shrink-0 fill-current transition-colors duration-300 ${className}`}
            {...props}
        >
            <use href={`#icon-${name}`} />
        </svg>
    );
}

// 3. Add new <symbol> entries here for future SVGs! 
// IMPORTANT: Make sure to remove hardcoded 'fill' parameters on the path so that 'currentColor' works flawlessly.
export function SpriteInjector() {
    return (
        <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>


            <symbol id="icon-arrow-right" viewBox="0 0 17 14" >
                <path d="M10.75 12.4166L15.75 6.58329M15.75 6.58329L10.75 0.749961M15.75 6.58329L0.750002 6.58329" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>

            <symbol id="icon-check-mark-gradient" viewBox="0 0 32 32">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.22897 0L23.771 0C28.2961 0 32 3.70237 32 8.22862V23.7714C32 28.2963 28.2961 32 23.771 32L8.22897 31.9987C3.70388 31.9987 0 28.2963 0 23.7701L0 8.22865C0 3.70241 3.70388 0 8.22897 0ZM22.8026 8.72207C18.7356 11.2943 15.5579 15.2245 13.0842 19.5348L9.4591 15.9099C8.8762 15.3244 7.92622 15.3244 7.33938 15.9099C6.75254 16.4954 6.75254 17.4453 7.33938 18.0308L12.3815 23.0714C13.0907 23.7806 14.3012 23.6096 14.771 22.7017C17.1262 18.1677 20.2749 13.8533 24.3958 11.2524C25.0945 10.8129 25.305 9.88927 24.8668 9.19062C24.4247 8.49198 23.5024 8.28147 22.8037 8.72224L22.8026 8.72207Z" fill="url(#paint0_linear_601_1261)" />
                <defs>
                    <linearGradient id="paint0_linear_601_1261" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#474747" />
                        <stop offset="1" stopColor="#131313" />
                    </linearGradient>
                </defs>
            </symbol>
            <symbol id="icon-check-mark" viewBox="0 0 32 32">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.22897 0L23.771 0C28.2961 0 32 3.70237 32 8.22862V23.7714C32 28.2963 28.2961 32 23.771 32L8.22897 31.9987C3.70388 31.9987 0 28.2963 0 23.7701L0 8.22865C0 3.70241 3.70388 0 8.22897 0ZM22.8026 8.72207C18.7356 11.2943 15.5579 15.2245 13.0842 19.5348L9.4591 15.9099C8.8762 15.3244 7.92622 15.3244 7.33938 15.9099C6.75254 16.4954 6.75254 17.4453 7.33938 18.0308L12.3815 23.0714C13.0907 23.7806 14.3012 23.6096 14.771 22.7017C17.1262 18.1677 20.2749 13.8533 24.3958 11.2524C25.0945 10.8129 25.305 9.88927 24.8668 9.19062C24.4247 8.49198 23.5024 8.28147 22.8037 8.72224L22.8026 8.72207Z" fill="currentColor" />
            </symbol>

            <symbol id="icon-check-mark-rounded" viewBox="0 0 19 19" >
                <path fillRule="evenodd" clipRule="evenodd" d="M10.0292 18.7272C11.2574 18.6413 12.4566 18.3143 13.5584 17.765C14.6602 17.2157 15.643 16.4547 16.4507 15.5256C17.2584 14.5964 17.8752 13.5173 18.2658 12.3497C18.6565 11.1822 18.8133 9.94918 18.7274 8.72103C18.6416 7.49289 18.3146 6.29369 17.7653 5.19189C17.2159 4.0901 16.455 3.1073 15.5258 2.2996C14.5967 1.49189 13.5175 0.875112 12.35 0.484465C11.1825 0.093818 9.94945 -0.0630435 8.7213 0.0228366C6.24096 0.196279 3.9311 1.34793 2.29987 3.22445C0.66864 5.10096 -0.150335 7.54862 0.0231076 10.029C0.19655 12.5093 1.3482 14.8192 3.22472 16.4504C5.10123 18.0816 7.54889 18.9006 10.0292 18.7272ZM9.39869 13.1743L14.1584 6.5762L12.4692 5.35772L8.37586 11.031L5.90205 8.87961L4.53546 10.4517L7.87084 13.3511L8.73137 14.0991L9.39869 13.1743Z" fill="currentColor" />
            </symbol>
            <symbol id="icon-arrow-right-boxed" viewBox="0 0 60 60" >
                <rect width="60" height="60" rx="4" transform="matrix(-1 0 0 1 60 0)" fill="currentColor" />
                <path d="M24.1156 41.6157C23.9995 41.7318 23.9074 41.8697 23.8445 42.0214C23.7816 42.1731 23.7493 42.3358 23.7493 42.5C23.7493 42.6643 23.7816 42.8269 23.8445 42.9786C23.9074 43.1304 23.9995 43.2683 24.1156 43.3844C24.2318 43.5005 24.3696 43.5927 24.5214 43.6555C24.6731 43.7184 24.8357 43.7507 25 43.7507C25.1642 43.7507 25.3269 43.7184 25.4786 43.6555C25.6304 43.5927 25.7682 43.5005 25.8844 43.3844L38.3844 30.8844C38.5006 30.7683 38.5928 30.6304 38.6557 30.4787C38.7186 30.327 38.751 30.1643 38.751 30C38.751 29.8358 38.7186 29.6731 38.6557 29.5213C38.5928 29.3696 38.5006 29.2317 38.3844 29.1156L25.8844 16.6156C25.6498 16.3811 25.3317 16.2493 25 16.2493C24.6683 16.2493 24.3502 16.3811 24.1156 16.6156C23.8811 16.8502 23.7493 17.1683 23.7493 17.5C23.7493 17.8317 23.8811 18.1498 24.1156 18.3844L35.7328 30L24.1156 41.6157Z" fill="var(--arrow-color, #0169FF)" />
            </symbol>













        </svg>
    );
}


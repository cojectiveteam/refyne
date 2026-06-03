"use client";
import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { usePopup } from "@/app/context/PopupContext";
import { useLenis } from "lenis/react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function PopupForm() {
    const { isOpen, closePopup } = usePopup();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const lenis = useLenis();

    // Reset form state when popup opens
    useEffect(() => {
        if (isOpen) {
            setError(null);
        }
    }, [isOpen]);

    // Disable background scrolling (both standard CSS and Lenis) when popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            lenis?.stop();
        } else {
            document.body.style.overflow = 'unset';
            lenis?.start();
        }
        return () => {
            document.body.style.overflow = 'unset';
            lenis?.start();
        };
    }, [isOpen, lenis]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formElement = e.currentTarget;
        const formData: FormData = {
            name: (formElement.elements.namedItem('name') as HTMLInputElement).value,
            email: (formElement.elements.namedItem('email') as HTMLInputElement).value,
            phone: (formElement.elements.namedItem('phone') as HTMLInputElement).value,
            message: (formElement.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        try {
            // Securely POST to our Next.js API route
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed. Please check your credentials.');
            }

            closePopup();
            router.push('/thank-you');
        } catch (err: any) {
            console.error('Form submission error:', err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <section className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/60 transition-all duration-300">
            <div className="relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[45%] flex flex-col gap-3 mlg:gap-6  p-6 md:p-10 bg-primary backdrop-blur-lg border border-t-[#81DDFF] border-l-[#81DDFF]/60 border-b-[#81DDFF]/30 border-r-[#81DDFF]/40 shadow-xl text-text-light rounded-2xl  max-h-[90vh] overflow-y-auto ">

                {/* Close Button */}
                <button
                    onClick={closePopup}
                    type="button"
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 text-white/70 hover:text-white hover:scale-110 active:scale-95 transition-all p-1.5 rounded-full hover:bg-white/10 cursor-pointer z-10"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="flex flex-col items-center gap-2 mt-2 md:mt-0">
                    <h2 className="f-h4 sm:f-h3 font-sans font-semibold text-center text-white tracking-tight">
                        Request a Free Consultation
                    </h2>
                    <p className="text-center f-sm sm:f-base text-white/85 max-w-md">
                        Provide your details below to schedule a consultation.
                    </p>
                </div>

                {/* Form */}
                <form
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6"
                    onSubmit={handleSubmit}
                >
                    {error && (
                        <div className="col-span-1 sm:col-span-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200 text-sm flex items-center gap-2">
                            <svg className="w-5 h-5 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>{error}</span>
                        </div>
                    )}

                    <div className="flex flex-col gap-1.5 mlg:gap-2 f-sm sm:f-base">
                        <label htmlFor="name" className="font-sans font-medium text-white/95">
                            Name <span className="text-red-400 font-bold">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="bg-white/95 text-secondary placeholder:text-text-dark/60 border border-white/20 rounded-lg p-2.5 mmd:p-3 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white focus:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed f-sm sm:f-base font-sans"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="flex flex-col gap-1.5 mlg:gap-2 f-sm sm:f-base">
                        <label htmlFor="email" className="font-sans font-medium text-white/95">
                            Email <span className="text-red-400 font-bold">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            className="bg-white/95 text-secondary placeholder:text-text-dark/60 border border-white/20 rounded-lg p-2.5 mmd:p-3 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white focus:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed f-sm sm:f-base font-sans"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="flex flex-col gap-1.5 mlg:gap-2 f-sm sm:f-base col-span-1 sm:col-span-2">
                        <label htmlFor="phone" className="font-sans font-medium text-white/95">
                            Phone Number <span className="text-red-400 font-bold">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            inputMode="numeric"
                            pattern="[0-9]{10}"
                            title="Phone number must be 10 digits only"
                            maxLength={10}
                            placeholder="Phone Number (10 digits)"
                            required
                            className="bg-white/95 text-secondary placeholder:text-text-dark/60 border border-white/20 rounded-lg p-2.5 mmd:p-3 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white focus:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed f-sm sm:f-base font-sans"
                            disabled={isSubmitting}
                            onInput={(e) => {
                                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                            }}
                        />
                    </div>

                    <div className="flex flex-col gap-1.5 mlg:gap-2 f-sm sm:f-base col-span-1 sm:col-span-2">
                        <label htmlFor="message" className="font-sans font-medium text-white/95">
                            Message <span className="text-red-400 font-bold">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="How can we help you?"
                            required
                            rows={3}
                            className="bg-white/95 text-secondary placeholder:text-text-dark/60 border border-white/20 rounded-lg p-2.5 mmd:p-3 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white focus:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed f-sm sm:f-base font-sans resize-none"
                            disabled={isSubmitting}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="col-span-1 sm:col-span-2 f-base text-accent font-semibold text-center bg-button px-6 py-4 mt-4 rounded-full cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-[#0452B4]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Submitting...</span>
                            </>
                        ) : 'Submit Request'}
                    </button>
                </form>
            </div>
        </section>
    );
}
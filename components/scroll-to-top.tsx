'use client';

import { Icons } from "./icons";
import { ButtonPrimary } from "./ui/buttonprimary";

export default function ScrollToTopButton() {

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    const scrollToTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <button
            className="w-6 h-6" onClick={scrollToTop}>
            <Icons.arrowUp />
        </button>
    );
}
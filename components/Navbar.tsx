import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="px-[15%] fixed top-0 w-full backdrop-blur-md z-50 mx-auto px-6 py-4 bg-[var(--color-blue)] font-sans">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-[var(--color-white)] hover:text-[var(--color-orange-alt)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                </Link>
                <ul className="flex items-center gap-8">
                    <li>
                        <Link href="/about" className="text-[var(--color-white)] hover:text-[var(--color-orange-alt)] transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="text-[var(--color-white)] hover:text-[var(--color-orange-alt)] transition-colors">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-[var(--color-white)] hover:text-[var(--color-orange-alt)] transition-colors">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-[var(--color-white)] hover:text-[var(--color-orange-alt)] transition-colors">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
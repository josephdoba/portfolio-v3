import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="fixed top-0 w-full backdrop-blur-md z-50 mx-auto px-6 py-4 border-b border-gray-200 bg-[var(--color-blue)]">
            <div className="flex items-center justify-between">
                <ul className="flex items-center gap-8 font-sans">
                    <li>
                        <Link href="/" className="text-[var(--color-white)] hover:text-[var(--color-orange-alt)] transition-colors">
                            Home
                        </Link>
                    </li>
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
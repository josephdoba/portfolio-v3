import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 py-8 mt-auto bg-[var(--color-blue)] font-sans">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/joseph-aj-doba/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-white)] hover:text-[var(--color-orange-alt)] transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/josephdoba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-white)] hover:text-[var(--color-orange-alt)] transition-colors"
                    >
                        GitHub
                    </a>

                    <Link
                        href="/contact"
                        className="text-[var(--color-white)] hover:text-[var(--color-orange-alt)] transition-colors"
                    >
                        Email
                    </Link>
                </div>
            </div>
        </footer>
    );
}
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center gap-6">
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/josephdoba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        GitHub
                    </a>

                    <Link
                        href="/contact"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Email
                    </Link>
                </div>
            </div>
        </footer>
    );
}
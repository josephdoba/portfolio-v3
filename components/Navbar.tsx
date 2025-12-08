import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="fixed top-0 w-full bg-white backdrop-blur-md z-50 mx-auto px-6 py-4 border-b border-gray-200 ">
            <div className="flex items-center justify-between">
                <ul className="flex items-center gap-8">
                    <li>
                        <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="text-gray-700 hover:text-gray-900 transition-colors">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
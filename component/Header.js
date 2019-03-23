import Link from 'next/link';

const Header = () => (
    <div className="navbar navbar-expanded bg-dark text-light">
        <ul className="nav">
            <li className="nav-item">
            <Link href="/">
            <a className="nav-link">Home</a>
        </Link>
            </li>
            <li className="nav-item">
            <Link href="/about">
            <a className="nav-link">About</a>
        </Link>
            </li>
        </ul>
    </div>
)

export default Header

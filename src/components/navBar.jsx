import './navBar.css';
export default function NavBar() {
    return (
        <nav class='nav'>
            <a href='/' className="site-title">MediHub</a>
            <ul>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
}
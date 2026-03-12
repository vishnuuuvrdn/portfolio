import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navBar'>
        <a href='#home'> Home </a>
        <a href='#about'> About </a>
        <a href='#projects'> Projects </a>
        <a href='#contact'> Contact </a>
    </nav>
  );
}
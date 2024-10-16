export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/images/nike.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>

          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </>
  );
}

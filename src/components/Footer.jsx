import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="app-footer">
      &copy; {new Date().getFullYear()} Aviv Adgah. All rights reserved.
    </footer>
  );
}

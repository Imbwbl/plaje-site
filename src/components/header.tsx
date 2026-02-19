import styles from "./header.module.css";

function Header() {
  return (
    <header class={styles.header}>
      <a href="/">Home</a>
      <a href="/calendar">Calendar</a>
      <a href="/contact">Contact</a>
    </header>
  );
}

export default Header;

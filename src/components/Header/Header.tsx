type HeaderProps = {
  onMenu: () => void;
};

export default function Header({
  onMenu,
}: HeaderProps) {
  return (
    <header className="header">

      <button
        className="menu-btn"
        onClick={onMenu}
      >
        ☰
      </button>

      <div className="logo">
      <img
  src="/hero1.png"
  alt="Examiner"
  style={{
    width: "120px",
    maxWidth: "100%",
    display: "block",
    margin: "0 auto 0px",
  }}
/>
      </div>

    </header>
  );
}
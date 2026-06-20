type DrawerProps = {
    open: boolean;
    onClose: () => void;
  };
  
  export default function Drawer({
    open,
    onClose,
  }: DrawerProps) {
    return (
      <>
        {open && (
          <div
            className="drawer-overlay"
            onClick={onClose}
          />
        )}
  
        <aside className={`drawer ${open ? "open" : ""}`}>
  
        <img
  src="/hero.png"
  alt="Examiner"
  style={{
    width: "180px",
    maxWidth: "100%",
    display: "block",
    margin: "0 auto 5px",
  }}
/>
  
          <nav className="drawer-menu">
  
            <a href="/">
              خانه
            </a>
  
            <a href="/course/massage">
              آزمون کاربر ماساژ
            </a>
  
            <a href="/about">
              درباره برنامه
            </a>

        
  
          </nav>
  
        </aside>
      </>
    );
  }
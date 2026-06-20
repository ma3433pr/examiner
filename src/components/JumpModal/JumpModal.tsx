type Props = {
    total: number;
    onClose: () => void;
    onJump: (questionNumber: number) => void;
  };
  
  import { useState } from "react";
  
  export default function JumpModal({
    total,
    onClose,
    onJump,
  }: Props) {
    const [value, setValue] = useState("");
  
    const handleSubmit = () => {
      const target = Number(value);
  
      if (
        Number.isNaN(target) ||
        target < 1 ||
        target > total
      ) {
        return;
      }
  
      onJump(target);
    };
  
    return (
      <div className="resume-overlay">
        <div className="resume-modal">
  
          <h2>رفتن به سوال</h2>
  
          <p className="resume-subtitle">
            شماره سوال را وارد کنید
            <br />
            (1 تا {total})
          </p>
  
          <input
            type="number"
            min={1}
            max={total}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            className="jump-input"
            autoFocus
          />
  
          <button
            className="primary-btn"
            onClick={handleSubmit}
          >
            رفتن
          </button>
  
          <button
            className="resume-restart"
            onClick={onClose}
          >
            انصراف
          </button>
  
        </div>
      </div>
    );
  }
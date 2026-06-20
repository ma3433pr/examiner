import { useLocation, useNavigate } from "react-router-dom";

import { remove } from "../../utils/storage";

const STORAGE_KEY = "massage-exam";

type ResultState = {
  total: number;
  correct: number;
  wrong: number;
  percent: number;
};

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const result = location.state as ResultState | undefined;

  if (!result) {
    navigate("/course/massage");
    return null;
  }

  const handleRestart = () => {
    remove(STORAGE_KEY);
    navigate("/course/massage");
  };

  return (
    <div className="page">

      <section className="hero">

        <h2>آزمون به پایان رسید 🎉</h2>

        <p>
          نتیجه آزمون شما
        </p>

      </section>

      <section className="feature-card">

        <div className="feature-item">
          <div className="feature-title">
            <span>{result.correct} پاسخ صحیح</span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-title">
            <span>{result.wrong} پاسخ غلط</span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-title">
            <span>{result.percent}% درصد موفقیت</span>
            <span className="dot"></span>
          </div>
        </div>

      </section>

      <button
        className="primary-btn"
        onClick={handleRestart}
      >
        شروع مجدد آزمون
      </button>

    </div>
  );
}
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
      <img
  src="/hero.png"
  alt="Examiner"
  style={{
    width: "180px",
    maxWidth: "100%",
    display: "block",
    margin: "0 auto 9px",
  }}
/>

        <p>
          شبیه ساز آزمون‌های سازمان
          
         فنی و حرفه‌ای کشور
        </p>
      </section>

      <section className="feature-card">

        <div className="feature-item">
          <div className="feature-title">
            <span>آزمون بر اساس نمونه سوالات رسمی</span>
            <span className="dot"></span>
          </div>

        </div>

        <div className="feature-item">
          <div className="feature-title">
          <span>بررسی پاسخ‌های صحیح و تحلیل عملکرد</span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-title">
          <span>مشاهده نتیجه بلافاصله پس از پایان آزمون</span>
            <span className="dot"></span>
          </div>

        </div>

      </section>

      <Link
        to="/course/massage"
        className="primary-btn"
      >
        مشاهده آزمون‌ها
      </Link>
    </>
  );
}
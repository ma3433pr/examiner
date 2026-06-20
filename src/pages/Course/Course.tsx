import { Link } from "react-router-dom";

export default function Course() {
  return (
    <>
      <section className="hero">
        <h2>دوره کاربر ماساژ</h2>

        <p>کد استاندارد: 325530470010001</p>

        <p>آمادگی خود را قبل از آزمون اصلی بسنجید.</p>
      </section>

      {/* مطالعه */}

     

   

      {/* آزمون */}

      <section
        className="feature-card"
        style={{ marginTop: 26 }}
      >

        <div className="feature-item">
          <div className="feature-title">
            <span>۳۰۰ سوال چهار گزینه‌ای</span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-title">
            <span>نمایش پاسخ صحیح پس از هر تست</span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-title">
            <span>اعلام نتیجه و درصد کسب شده</span>
            <span className="dot"></span>
          </div>
        </div>

      </section>

      <Link
        to="/study/massage"
        className="primary-btn"
        style={{
          background:
            "linear-gradient(135deg,#16a34a,#15803d)",
        }}
      >
        مطالعه سوالات
      </Link>

      <Link
        to="/exam/massage"
        className="primary-btn"
      >
        شروع آزمون
      </Link>

    </>
  );
}
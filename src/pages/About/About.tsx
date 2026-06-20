import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function About() {
    return (
      <div className="page">
  
        <div className="question-card">
  
          <h2
            style={{
              textAlign: "right",
              marginBottom: "24px",
            }}
          >
           درباره ما:
          </h2>
  
          <p className="about-text">
            Examiner یک شبیه‌ساز آزمون آموزشی است که با هدف کمک به
            هنرجویان و متقاضیان شرکت در آزمون‌های سازمان آموزش فنی و
            حرفه‌ای کشور طراحی شده است.
          </p>
  
          <p className="about-text">
            نسخه فعلی این برنامه به صورت آزمایشی و کاملاً رایگان برای
            دوره «کاربر ماساژ» توسعه یافته و در اختیار کاربران قرار
            گرفته است. در صورت استقبال و دریافت بازخورد مناسب از سوی
             کاربران، توسعه و پشتیبانی برنامه برای رشته‌ درخواستی شما و سایر
            دوره‌های آموزشی سازمان آموزش فنی و حرفه‌ای کشور نیز ادامه
            خواهد یافت.
          </p>
  
         
  
          <h3 style={{ marginTop: "24px" }}>
  ارتباط با توسعه‌دهنده:
</h3>

<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    direction: "ltr",
    marginTop: "12px",
  }}
>
  <FaTelegramPlane
    size={20}
    color="#229ED9"
  />

  <a
    href="https://t.me/ma3433"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#229ED9",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: "16px",
    }}
  >
    @ma3433
  </a>
</div>

<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    direction: "ltr",
    marginTop: "12px",
  }}
>
  <MdEmail
    size={20}
    color="#EA4335"
  />

  <a
    href="mailto:ma3433@gmail.com"
    style={{
      color: "#EA4335",
      textDecoration: "none",
      fontWeight: 500,
      fontSize: "16px",
    }}
  >
    ma3433@gmail.com
  </a>
</div>
  
          <br></br>
  
          <p
  style={{
    textAlign: "center",
    fontSize: "12px",
    color: "#9ca3af",
    marginTop: "8px",
    letterSpacing: ".3px",
  }}
>
  طراح و برنامه نویس: محمد عرب احمدی
</p>
  
        </div>
  
      </div>
    );
  }
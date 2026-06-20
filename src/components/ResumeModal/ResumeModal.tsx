type Props = {
    question: number;
    onContinue: () => void;
    onRestart: () => void;
  };
  
  export default function ResumeModal({
    question,
    onContinue,
    onRestart,
  }: Props) {
    return (
      <div className="resume-overlay">
  
        <div className="resume-modal">
  
          <div className="resume-icon">
            📖
          </div>
  
          <h2>
            ادامه آزمون
          </h2>
  
          <p className="resume-text">
            شما تا
            <strong> سؤال {question} </strong>
            پیش رفته‌اید.
          </p>
  
          <p className="resume-subtitle">
            در صورت ادامه، آزمون از همان سؤال ادامه پیدا می‌کند.
          </p>
  
          <p className="resume-warning">
            شروع مجدد باعث حذف پاسخ‌های قبلی خواهد شد.
          </p>
  
          <button
            className="primary-btn"
            onClick={onContinue}
          >
            ادامه آزمون
          </button>
  
          <button
            className="resume-restart"
            onClick={onRestart}
          >
            شروع مجدد
          </button>
  
        </div>
  
      </div>
    );
  }
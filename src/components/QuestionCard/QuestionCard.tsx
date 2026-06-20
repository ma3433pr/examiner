type Props = {
  question: {
    id: number;
    question: string;
    options: string[];
    answer: number;
  };

  current: number;
  total: number;

  selected: number | null;
  locked: boolean;

  mode?: "exam" | "study";

  onSelect: (index: number) => void;
  onNext: () => void;

  onPrevious?: () => void;
  onFinishStudy?: () => void;
};

export default function QuestionCard({
  question,
  current,
  total,
  selected,
  locked,
  mode = "exam",
  onSelect,
  onNext,
  onPrevious,
  onFinishStudy,
}: Props) {

  const progress = ((current + 1) / total) * 100;

  const getQuestionFontSize = () => {
    const len = question.question.length;

    if (len > 180) return "12px";
    if (len > 120) return "14px";
    if (len > 80) return "16px";

    return "16px";
  };

  const getOptionFontSize = (text: string) => {
    if (text.length > 90) return "12px";
    if (text.length > 60) return "14px";

    return "14px";
  };

  const getClassName = (index: number) => {

    if (mode === "study") {
      return index === question.answer
        ? "option correct"
        : "option";
    }

    if (!locked) return "option";

    if (index === question.answer) {
      return "option correct";
    }

    if (
      selected !== null &&
      selected === index &&
      selected !== question.answer
    ) {
      return "option wrong";
    }

    return "option";
  };

  return (
    <>
      <h2 className="question-counter">
        سوال {current + 1} از {total}
      </h2>

      <div className="progress">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="question-card">

        <h3
          className="question-title"
          style={{
            fontSize: getQuestionFontSize(),
          }}
        >
          {question.question}
        </h3>

        <div className="options">

          {question.options.map((option, index) => (
            <button
              key={index}
              type="button"
              className={getClassName(index)}
              disabled={locked || mode === "study"}
              onClick={() => onSelect(index)}
              style={{
                fontSize: getOptionFontSize(option),
              }}
            >
              {option}
            </button>
          ))}

        </div>

        {mode === "exam" && locked && (
          <button
            type="button"
            className="next-btn"
            onClick={onNext}
          >
            {current === total - 1
              ? "مشاهده نتیجه"
              : "سوال بعدی"}
          </button>
        )}

        {mode === "study" && (
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 0,
            }}
          >

            <button
              type="button"
              className="next-btn"
              onClick={onPrevious}
              disabled={current === 0}
              style={{
                flex: 1,
                opacity: current === 0 ? .5 : 1,
              }}
            >
              سوال قبلی
            </button>

            <button
              type="button"
              className="next-btn"
              style={{
                flex: 1,
              }}
              onClick={
                current === total - 1
                  ? onFinishStudy
                  : onNext
              }
            >
              {current === total - 1
                ? "ورود به آزمون"
                : "سوال بعدی"}
            </button>

          </div>
        )}

      </div>
    </>
  );
}
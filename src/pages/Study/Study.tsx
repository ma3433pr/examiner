import { useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../../data/massage.json";

import QuestionCard from "../../components/QuestionCard/QuestionCard";
import JumpModal from "../../components/JumpModal/JumpModal";

export default function Study() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showJumpModal, setShowJumpModal] =
    useState(false);

  const question = questions[currentQuestion];

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      navigate("/exam/massage");
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion((prev) => prev - 1);
  };

  return (
    <div className="page">
      <QuestionCard
        question={question}
        current={currentQuestion}
        total={questions.length}
        selected={question.answer}
        locked={true}
        mode="study"
        onSelect={() => {}}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onFinishStudy={() =>
          navigate("/exam/massage")
        }
      />




      <button
        type="button"
        className="next-btn"
        onClick={() => setShowJumpModal(true)}
        style={{
          marginTop: 12,
          width: "100%",
          height:"44px",
        }}
      >
        رفتن به سوال دلخواه
      </button>

      {showJumpModal && (
        <JumpModal
          total={questions.length}
          onClose={() =>
            setShowJumpModal(false)
          }
          onJump={(questionNumber) => {
            setCurrentQuestion(
              questionNumber - 1
            );

            setShowJumpModal(false);
          }}
        />
      )}
    </div>
  );
}
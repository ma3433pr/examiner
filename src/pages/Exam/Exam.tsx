import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../../data/massage.json";

import QuestionCard from "../../components/QuestionCard/QuestionCard";
import ResumeModal from "../../components/ResumeModal/ResumeModal";

import { load, remove, save } from "../../utils/storage";

const STORAGE_KEY = "massage-exam";

type ExamState = {
  currentQuestion: number;
  score: number;
  answers: number[];
};

export default function Exam() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);

  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const [loaded, setLoaded] = useState(false);

  const [showResumeModal, setShowResumeModal] = useState(false);
  const [savedExam, setSavedExam] = useState<ExamState | null>(null);

  const question = questions[currentQuestion];

  useEffect(() => {
    const exam = load<ExamState>(STORAGE_KEY);

    if (exam) {
      setSavedExam(exam);
      setShowResumeModal(true);
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    save(STORAGE_KEY, {
      currentQuestion,
      score,
      answers,
    });
  }, [currentQuestion, score, answers, loaded]);

  const handleSelect = (index: number) => {
    if (locked) return;

    setSelected(index);
    setLocked(true);

    const nextAnswers = [...answers];
    nextAnswers[currentQuestion] = index;
    setAnswers(nextAnswers);

    if (index === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    const finalScore = score;

    if (currentQuestion === questions.length - 1) {
      remove(STORAGE_KEY);

      navigate("/result", {
        replace: true,
        state: {
          total: questions.length,
          correct: finalScore,
          wrong: questions.length - finalScore,
          percent: Number(
            ((finalScore / questions.length) * 100).toFixed(2)
          ),
        },
      });

      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelected(null);
    setLocked(false);
  };

  const handleContinue = () => {
    if (!savedExam) return;

    setCurrentQuestion(savedExam.currentQuestion);
    setScore(savedExam.score);
    setAnswers(savedExam.answers);

    setSelected(null);
    setLocked(false);

    setShowResumeModal(false);
    setSavedExam(null);
  };

  const handleRestart = () => {
    remove(STORAGE_KEY);

    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);

    setSelected(null);
    setLocked(false);

    setShowResumeModal(false);
    setSavedExam(null);
  };

  if (!loaded) return null;

  return (
    <div className="page">
      <QuestionCard
        question={question}
        current={currentQuestion}
        total={questions.length}
        selected={selected}
        locked={locked}
        onSelect={handleSelect}
        onNext={handleNext}
      />

      {showResumeModal && savedExam && (
        <ResumeModal
          question={savedExam.currentQuestion + 1}
          onContinue={handleContinue}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
export function calculateScore(correct: number, total: number) {
    return Math.round((correct / total) * 100);
  }
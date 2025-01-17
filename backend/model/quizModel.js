const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  type: String,
  difficulty: String,
  category: String,
  question: String,
  correct_answer: String,
  incorrect_answers: [String],
});

module.exports = mongoose.model('Question', questionSchema);







// const QuizSchema = new mongoose.Schema({
//   type: {
//     type: String,
//     required: true,
//     enum: ['multiple'] // Only allows "multiple" as a valid value
//   },
//   difficulty: {
//     type: String,
//     required: true,
//     enum: ['easy', 'medium', 'hard'] // Difficulty levels
//   },
//   category: {
//     type: String,
//     required: true
//   },
//   question: {
//     type: String,
//     required: true
//   },
//   correct_answer: {
//     type: String,
//     required: true
//   },
//   incorrect_answers: {
//     type: [String], // Array of strings
//     required: true,
//     validate: [arrayLimit, '{PATH} must have at least one incorrect answer'] // Custom validation
//   }
// });

// const quizModel = mongoose.model("Quiz", QuizSchema);

// module.exports = {quizModel}

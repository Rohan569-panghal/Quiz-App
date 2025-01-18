const express = require('express');
const router = express.Router();
const Question = require('../model/quizModel');

// Get all questions
router.get('/', async (req, res) => {
  try {
    const { difficulty, type, limit } = req.query;

    // Build the query object dynamically
    const query = {};
    if (difficulty) query.difficulty = difficulty; // Include difficulty filter if provided
    if (type) query.type = type; // Include type filter if provided

    // Fetch data with default limit (10) if not specified
    const questions = await Question.find(query).limit(parseInt(limit) || 5);

    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

data = 
// Add new questions (optional for initial data population)
router.post('/', async (req, res) => {
  // try {
  //   const newQuestion = new Question(req.body);
  //   const savedQuestion = await newQuestion.save();
  //   res.status(201).json(savedQuestion);
  // } catch (err) {
  //   res.status(400).json({ error: 'Bad Request' });
  // }
  // try {
  //   Question.insertMany(data.results)
  // .then(() => {
  //   console.log('Data saved successfully');
  //   mongoose.connection.close();
  // })
  // .catch((error) => {
  //   console.error('Error saving data:', error);
  //   mongoose.connection.close();
  // });
  // } catch (error) {
  //  console.log(error);
    
  // }

  try {
    const { results } = req.body; // Extract the `results` array
    if (!Array.isArray(results)) {
      return res.status(400).json({ error: 'Invalid data format. "results" should be an array.' });
    }

    // Save the `results` array into the database
    const result = await Question.insertMany(results);
    res.status(201).json({ message: 'Data inserted successfully', insertedCount: result.length });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button } from 'semantic-ui-react';
import { useDarkMode } from '../DarkModeContext/DarkModeProvider';
import ShareButton from '../ShareButton';
import { calculateScore, calculateGrade, timeConverter } from '../../utils';

const Stats = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  replayQuiz,
  resetQuiz,
}) => {
  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(timeTaken);
  const { darkMode } = useDarkMode();
  const style = {
    backgroundColor: darkMode ? '#1e1e1e' : 'white',
    color: darkMode ? '#f5f5f5' : 'black',
    padding: '0px',
    transition: 'all 0.3s ease-in-out',
  };
  return (
    <Segment style={style}>
      <Header as="h1" textAlign="center" block style={style}>
        {remarks}
      </Header>
      <Header as="h2" textAlign="center" block style={style}>
        Grade: {grade}
      </Header>
      <Header as="h3" textAlign="center" block style={style}>
        Total Questions: {totalQuestions}
      </Header>
      <Header as="h3" textAlign="center" block style={style}>
        Correct Answers: {correctAnswers}
      </Header>
      <Header as="h3" textAlign="center" block style={style}>
        Your Score: {score}%
      </Header>
      <Header as="h3" textAlign="center" block style={style}>
        Passing Score: 60%
      </Header>
      <Header as="h3" textAlign="center" block style={style}>
        Time Taken:{' '}
        {`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}
      </Header>
      <div style={{ marginTop: 35 }}>
        <Button
          primary
          content="Play Again"
          onClick={replayQuiz}
          size="big"
          icon="redo"
          labelPosition="left"
          style={{ marginRight: 15, marginBottom: 8 }}
        />
        <Button
          color="teal"
          content="Back to Home"
          onClick={resetQuiz}
          size="big"
          icon="home"
          labelPosition="left"
          style={{ marginBottom: 8 }}
        />
        <ShareButton />
      </div>
    </Segment>
  );
};

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired,
};

export default Stats;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Menu } from 'semantic-ui-react';
import { useDarkMode } from '../DarkModeContext/DarkModeProvider';

import Stats from './Stats';
import QNA from './QNA';

const Result = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  questionsAndAnswers,
  replayQuiz,
  resetQuiz,
}) => {
  const { darkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState('Stats');

  const style = {
    backgroundColor: darkMode ? '#1e1e1e' : 'white',
    color: darkMode ? '#f5f5f5' : 'black',
    minHeight: '100vh',
    padding: '0px',
    transition: 'all 0.3s ease-in-out',
  };
  const style1 = {
    backgroundColor: darkMode ? '#1e1e1e' : 'white',
    color: darkMode ? '#f5f5f5' : 'black',
    padding: '0px',
    transition: 'all 0.3s ease-in-out',
  };

  const handleTabClick = (e, { name }) => {
    setActiveTab(name);
  };

  return (
    <Container style={style}>
      <Menu fluid widths={2}>
        <Menu.Item
          style={style1}
          name="Stats"
          active={activeTab === 'Stats'}
          onClick={handleTabClick}
        />
        <Menu.Item
          style={style1}
          name="QNA"
          active={activeTab === 'QNA'}
          onClick={handleTabClick}
        />
      </Menu>
      {activeTab === 'Stats' && (
        <Stats
          
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          timeTaken={timeTaken}
          replayQuiz={replayQuiz}
          resetQuiz={resetQuiz}
        />
      )}
      {activeTab === 'QNA' && <QNA  questionsAndAnswers={questionsAndAnswers} />}
      <br />
    </Container>
  );
};

Result.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  questionsAndAnswers: PropTypes.array.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired,
};

export default Result;

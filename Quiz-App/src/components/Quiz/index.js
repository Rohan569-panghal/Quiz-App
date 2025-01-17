import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../DarkModeContext/DarkModeProvider';
import PropTypes from 'prop-types';
import {
  Container,
  Segment,
  Item,
  Divider,
  Button,
  Icon,
  Message,
  Menu,
  Header,
} from 'semantic-ui-react';
import he from 'he';

import Countdown from '../Countdown';
import { getLetter } from '../../utils';

const Quiz = ({ data, countdownTime, endQuiz }) => {
  const { darkMode } = useDarkMode();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userSelectedAns, setUserSelectedAns] = useState(null);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [timeTaken, setTimeTaken] = useState(null);

  const style = {
    backgroundColor: darkMode ? '#1e1e1e' : 'white',
    color: darkMode ? '#f5f5f5' : 'black',
    padding: '8px',
    transition: 'all 0.3s ease-in-out',
  };

  useEffect(() => {
    if (questionIndex > 0) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [questionIndex]);

  const handleItemClick = (e, { name }) => {
    setUserSelectedAns(name);
  };

  const handleNext = () => {
    let point = 0;
    if (userSelectedAns === he.decode(data[questionIndex].correct_answer)) {
      point = 1;
    }

    const qna = [...questionsAndAnswers];
    qna[questionIndex] = {
      question: he.decode(data[questionIndex].question),
      user_answer: userSelectedAns,
      correct_answer: he.decode(data[questionIndex].correct_answer),
      point,
    };

    if (questionIndex === data.length - 1) {
      return endQuiz({
        totalQuestions: data.length,
        correctAnswers: correctAnswers + point,
        timeTaken,
        questionsAndAnswers: qna,
      });
    }

    setCorrectAnswers(correctAnswers + point);
    setQuestionIndex(questionIndex + 1);
    setUserSelectedAns(null);
    setQuestionsAndAnswers(qna);
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setUserSelectedAns(questionsAndAnswers[questionIndex - 1]?.user_answer || null);
    }
  };

  const timeOver = (timeTaken) => {
    return endQuiz({
      totalQuestions: data.length,
      correctAnswers,
      timeTaken,
      questionsAndAnswers,
    });
  };

  return (

    <Item.Header style={style}>
      <Container style={style}>
        <Segment style={style}>
          <Item.Group divided style={style}>
            <Item style={style}>
              <Item.Content style={style}>
                <Item.Extra style={style}>
                  <Header as="h1" block floated="left" style={style}>
                    <Icon name="info circle"  />
                    <Header.Content style={style}>
                      {`Question No.${questionIndex + 1} of ${data.length}`}
                    </Header.Content>
                  </Header>
                  <Countdown
                    countdownTime={countdownTime}
                    timeOver={timeOver}
                    
                    setTimeTaken={setTimeTaken}
                  />
                </Item.Extra>
                <br />
                <Item.Meta style={style}>
                  <Message size="huge" floating style={style}>
                    <b>{`Q. ${he.decode(data[questionIndex].question)}`}</b>
                  </Message>
                  <br />
                  <Item.Description>
                    <h3>Please choose one of the following answers:</h3>
                  </Item.Description>
                  <Divider />
                  <Menu vertical fluid size="massive" style={style}>
                    {data[questionIndex].options.map((option, i) => {
                      const letter = getLetter(i);
                      const decodedOption = he.decode(option);
                      const isSelected = userSelectedAns === decodedOption;

                      return (
                        <Menu.Item
                          key={decodedOption}
                          name={decodedOption}
                          active={isSelected}
                          onClick={handleItemClick}
                          style={{
                            backgroundColor: isSelected ? '#d4edda' : 'transparent',
                            color: isSelected ? '#155724' : 'inherit',
                            fontWeight: isSelected ? 'bold' : 'normal',
                          }}
                        >
                          <b style={{ marginRight: '8px' }}>{letter}</b>
                          {decodedOption}
                          {isSelected && <Icon name="check" color="green" />}
                        </Menu.Item>
                      );
                    })}
                  </Menu>
                </Item.Meta>
                <Divider />
                <Item.Extra>
                  <Button
                    secondary
                    content="Previous"
                    onClick={handlePrevious}
                    floated="left"
                    size="big"
                    icon="left chevron"
                    labelPosition="left"
                    disabled={questionIndex === 0}
                  />
                  <Button
                    primary
                    content="Next"
                    onClick={handleNext}
                    floated="right"
                    size="big"
                    icon="right chevron"
                    labelPosition="right"
                    disabled={!userSelectedAns}
                  />
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <br />
      </Container>
    </Item.Header>

  );
};

Quiz.propTypes = {
  data: PropTypes.array.isRequired,
  countdownTime: PropTypes.number.isRequired ,
  endQuiz: PropTypes.func.isRequired,
};

export default Quiz;

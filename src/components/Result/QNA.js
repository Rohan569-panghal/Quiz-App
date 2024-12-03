import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { useDarkMode } from '../DarkModeContext/DarkModeProvider';

const QNA = ({ questionsAndAnswers }) => {

  const { darkMode } = useDarkMode();
  const style = {
    backgroundColor: darkMode ? '#1e1e1e' : 'white',
    color: darkMode ? '#f5f5f5' : 'black',
    padding: '0px',
    transition: 'all 0.3s ease-in-out',
  };
  return (
    <Table celled striped selectable size="large" style={style}>
      <Table.Header >
        <Table.Row >
          <Table.HeaderCell style={style}>No.</Table.HeaderCell >
          <Table.HeaderCell style={style}>Questions</Table.HeaderCell>
          <Table.HeaderCell style={style}>Your Answers</Table.HeaderCell>
          <Table.HeaderCell style={style}>Correct Answers</Table.HeaderCell>
          <Table.HeaderCell style={style}>Points</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {questionsAndAnswers.map((item, i) => (
          <Table.Row key={i + 1} >
            <Table.Cell >{i + 1}</Table.Cell>
            <Table.Cell>{item.question}</Table.Cell>
            <Table.Cell>{item.user_answer}</Table.Cell>
            <Table.Cell>{item.correct_answer}</Table.Cell>
            <Table.Cell>{item.point}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

QNA.propTypes = {
  questionsAndAnswers: PropTypes.array.isRequired,
};

export default QNA;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Popup } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { useDarkMode } from '../DarkModeContext/DarkModeProvider';
import { timeConverter } from '../../utils';

const Countdown = ({ countdownTime, timeOver, setTimeTaken }) => {
  const { darkMode } = useDarkMode();
  const totalTime = countdownTime * 1000;
  const [timerTime, setTimerTime] = useState(totalTime);
  const { hours, minutes, seconds } = timeConverter(timerTime);

  const style = {
    backgroundColor: darkMode ? '#1e1e1e' : 'white',
    color: darkMode ? '#f5f5f5' : 'black',
    padding: '0px',
    transition: 'all 0.3s ease-in-out',
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = timerTime - 1000;

      if (newTime >= 0) {
        setTimerTime(newTime);
      } else {
        clearInterval(timer);

        Swal.fire({
          icon: 'info',
          title: `Oops! Time's up.`,
          text: 'See how you did!',
          confirmButtonText: 'Check Results',
          timer: 5000,
          willClose: () => timeOver(totalTime - timerTime),
        });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      setTimeTaken(totalTime - timerTime + 1000);
    };

    // eslint-disable-next-line
  }, [timerTime]);

  return (
    <div >
      <Button.Group size="massive" basic floated="right"  >
        <Popup
          
          content="Hours"
          trigger={<Button active ><div style={style}>{ hours }</div></Button>}
          position="bottom left"
        />
        <Popup
          
          content="Minutes"
          trigger={<Button active><div style={style}>{minutes}</div></Button>}
          position="bottom left"
        />
        <Popup 
        
        content="Seconds"
        trigger={<Button active><div style={style}>{seconds}</div></Button>}
        position="bottom left"
        />
      </Button.Group>
    </div>
  );
};

Countdown.propTypes = {
  countdownTime: PropTypes.number.isRequired,
  timeOver: PropTypes.func.isRequired,
  setTimeTaken: PropTypes.func.isRequired,
};

export default Countdown;

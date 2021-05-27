import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../../context/Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  console.log('[NOTIFICATIONS] PARAMS: ','\n',
              'call.isReceivingCall: ',call.isReceivingCall,'\n',
              'callAccepted: ', callAccepted,'\n',
              '------------[NOTIFICATIONS]'
              )



  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;

import React, { useState } from 'react';
import * as mdb from 'mdb-ui-kit'; // lib
import 'mdb-ui-kit/css/mdb.min.css';

function Form() {
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [copyText, setCopyText] = useState('');

  function handleClick(event) {
    console.log('Click Happened!' + startDate + ' ' + startTime + ' ' + endDate + ' ' + endTime);
    event.preventDefault();
  }

  const outlookText = `Start Date: ${startDate} Start Time: ${startTime} End Date: ${endDate} End Time: ${endTime} `;

  const yahooText = `Start Date: ${startDate} Start Time: ${startTime} End Date: ${endDate} End Time: ${endTime} `;

  const googleText = `Start Date: ${startDate} Start Time: ${startTime} End Date: ${endDate} End Time: ${endTime} `;

  return (
    <div>
      <h1>Calender Date Generator</h1>
      <div className='form-outline'>
        <div className={'p-3 row'}>
          <div className={'col-3'}>
            Start Date: <input id={'startDate'} className={'form-control'} type='date' value={startDate.value} onChange={e => setStartDate(e.target.value)} />
          </div>
          <div className={'col-3'}>
            Start Time: <input id={'startTime'} className={'form-control'} type='time' value={startTime.value} onChange={e => setStartTime(e.target.value)} />
          </div>
        </div>
        <br />
        <div className={'p-3 row'}>
          <div className={'col-3'}>
            End Date: <input id={'endDate'} className={'form-control'} type='date' value={endDate.value} onChange={e => setEndDate(e.target.value)} />
          </div>
          <div className={'col-3'}>
            End Time: <input id={'endTime'} className={'form-control'} type='time' value={endTime.value} onChange={e => setEndTime(e.target.value)} />
          </div>
        </div>
      </div>

      {/*<button type={"button"} onClick={handleClick}> submit</button>*/}

      {/*<div className={'output'}>*/}
      {/*  <div id={'outlook'}>*/}
      {/*    Outlook: {outlookText}*/}
      {/*    <button type={'button'}*/}
      {/*            className={'btn btn-primary'}*/}
      {/*            onClick={() => navigator.clipboard.writeText(outlookText)}> copy*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*  */}
      {/*  <div id={'yahoo'}>*/}
      {/*    Yahoo: {yahooText}*/}
      {/*    <button type={'button'}*/}
      {/*            className={'btn btn-primary'}*/}
      {/*            onClick={() => navigator.clipboard.writeText(yahooText)}> copy*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*  <br/>*/}
      {/*  <div id={'google'}>*/}
      {/*    Google: {googleText}*/}
      {/*    <button type={'button'}*/}
      {/*            className={'btn btn-primary'}*/}
      {/*            onClick={() => navigator.clipboard.writeText(googleText)}> copy*/}
      {/*    </button>*/}
      {/*  </div>*/}

      <div className={'output'}>
        <button type={'button'} className={'btn btn-primary m-1'} onClick={() => navigator.clipboard.writeText(outlookText)}>
          {' '}
          Outlook
        </button>

        <button type={'button'} className={'btn btn-primary m-1'} onClick={() => navigator.clipboard.writeText(yahooText)}>
          {' '}
          Yahoo
        </button>

        <button type={'button'} className={'btn btn-primary m-1'} onClick={() => navigator.clipboard.writeText(googleText)}>
          {' '}
          Google
        </button>
      </div>
    </div>
  );
}

export default Form;

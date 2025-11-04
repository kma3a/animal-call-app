import { useEffect, useState } from 'react';

const CallPage
 = () => {
  const [callData, setCallData] = useState();

  const fetchCallData = (): void => {
    const callDataList = window?.electron?.sendSync('get-callCounts');
    console.log("CALL DATA", callDataList);
    setCallData(callDataList);
  }


  useEffect(() => {
    fetchCallData(); 
  }, []);

  return <>
    <h1> CALLS PAGE</h1>
    <ul >
      {
        callData ? callData.map((calls)=> <li key={"item_"+ calls.year}>{calls.year + " | " + calls.callCount}</li>) : "No callData"
      }


    </ul>
    </>;
}

export {
  CallPage
  ,
}
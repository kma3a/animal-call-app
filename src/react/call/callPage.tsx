import { useEffect, useState } from 'react';
import { LineGraph } from '../graph/lineGraph/lineGraph';

const CallPage
 = () => {
  const [callData, setCallData] = useState([]);

  const fetchCallData = (): void => {
    const callDataList = window?.electron?.sendSync('get-callCounts');
    setCallData(callDataList);
  }


  useEffect(() => {
    fetchCallData(); 
  }, []);

  return <>
    <h1> CALLS PAGE</h1>
    { callData ? <LineGraph data={callData}/> : <div> There is currently no call data found</div>}
    </>;
}

export {
  CallPage
  ,
}
import { useEffect } from 'react';

const UseEffectTest = () => {
  useEffect(() => {
    console.log('UseEffect1 Ran');
  });

  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>UseEffectTest Component</h1>
    </div>
  );
};

export default UseEffectTest;

import { useCallback, useRef } from 'react';

export const RefSample2 = () => {
  // const [count, changeCount] = useState(0);
  const count = useRef(0);

  const addCount = useCallback(() => {
    // changeCount((prevCount) => prevCount + 1);
    count.current += 1;
  }, []);

  // const showLog = useCallback(() => {
  //   console.log(count);
  // }, [count]);
  const showLog = useCallback(() => {
    console.log(count.current);
  }, []);

  return (
    <>
      <button onClick={addCount}>add count</button>
      <button onClick={showLog}>show log</button>
    </>
  );
};

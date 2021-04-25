import { useCallback, useState } from 'react';
import { Button } from './Button';
import { Count } from './Count';
import { Title } from './Title';

export const MemoSample = () => {
  const [firstCountState, setFirstConutState] = useState(0);
  const [secondCountState, setSecondConutState] = useState(10);

  // const incrementFirstCounter = () => setFirstConutState(firstCountState + 1);
  // const incrementSecondCounter = () => setSecondConutState(secondCountState + 10);
  // 親 Component が再レンダリングされたタイミングで、関数が再生性されないように useCallback でラッピングする
  const incrementFirstCounter = useCallback(
    () => setFirstConutState(firstCountState + 1),
    [firstCountState]
  );
  const incrementSecondCounter = useCallback(
    () => setSecondConutState(secondCountState + 10),
    [secondCountState]
  );
  return (
    <>
      <Title />
      <Count text="+ 1 button" countState={firstCountState} />
      <Count text="+ 10 button" countState={secondCountState} />
      <Button handleClick={incrementFirstCounter} value={'+1 button'} />
      <Button handleClick={incrementSecondCounter} value={'+10 button'} />
    </>
  );
};

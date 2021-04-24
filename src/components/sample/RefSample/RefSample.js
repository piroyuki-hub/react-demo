import { useCallback, useRef, useState } from 'react';

export const RefSample = () => {
  const inputEl = useRef(null);
  // const [tmpText, changeTmpText] = useState('');
  const [text, changeText] = useState('');
  // const handleClick = useCallback(() => {
  //   changeText(tmpText);
  // }, [tmpText]);
  const handleClick = useCallback(() => {
    changeText(inputEl.current.value);
  }, []);

  return (
    <>
      <p>text: {text}</p>
      {/* <input
        type="text"
        onChange={(e) => changeTmpText(e.target.value)}
        value={tmpText}
      /> */}
      {/* ref を使用することで、tmpText 更新時の Component 再描画のコストを無くせる */}
      <input ref={inputEl} type="text" />
      <button onClick={handleClick} type="button">
        set text
      </button>
    </>
  );
};

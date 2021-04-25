// export const Button = ({ handleClick, value }) => {
//   console.log('Button child component', value);
//   return (
//     <button onClick={handleClick} type="button">
//       {value}
//     </button>
//   );
// };

// Memo 化して無駄な再レンダリングを防ぐ
import React from 'react';

export const Button = React.memo(({ handleClick, value }) => {
  console.log('Button child component', value);
  return (
    <button onClick={handleClick} type="button">
      {value}
    </button>
  );
});

// export const Count = ({ text, countState }) => {
//   console.log('Count child component');
//   return (
//     <p>
//       {text}:{countState}
//     </p>
//   );
// };

// Memo 化して無駄な再レンダリングを防ぐ
import React from 'react';

export const Count = React.memo(({ text, countState }) => {
  console.log('Count child component', text);
  return (
    <p>
      {text}:{countState}
    </p>
  );
});

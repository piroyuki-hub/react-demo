// export const Title = () => {
//   console.log('Title Component');
//   return <h2>useMemo and useCallback Test</h2>;
// };

// Memo 化して無駄な再レンダリングを防ぐ
import React from 'react';

export const Title = React.memo(() => {
  console.log('Title Component');
  return <h2>useMemo and useCallback Test</h2>;
});

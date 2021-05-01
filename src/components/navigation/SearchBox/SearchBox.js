import { useState } from 'react';
import cn from 'classnames/bind';
import style from './style.module.scss';

const cx = cn.bind(style);

export const SearchBox = () => {
  const [extend, setExtend] = useState(false);
  const [value, setValue] = useState('');

  const searchStyle = cx({
    search: true,
    active: extend,
  });

  const handleExtend = () => setExtend(!extend);
  const handleClear = () => setValue('');

  return (
    <div className={searchStyle}>
      <div className={style.icon} onClick={handleExtend} />
      <div className={style.input}>
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <span className={style.clear} onClick={handleClear}></span>
    </div>
  );
};

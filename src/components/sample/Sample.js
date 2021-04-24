import style from './style.module.scss';

export const Sample = ({ children }) => {
  return <p className={style.sample}>{children}</p>;
};

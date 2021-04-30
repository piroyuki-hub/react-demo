import style from './style.module.scss';
import cn from 'classnames';

export const Sample = ({ children }) => {
  const styles = [style.sample];
  styles.push(style.blink);

  return <p className={cn(styles)}>{children}</p>;
};

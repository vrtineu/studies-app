import { ReactNode } from 'react';
import style from './Button.module.scss';

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children?: ReactNode;
}

function Button({ type = 'button', onClick, children }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {children}
    </button>
  );
}

export default Button;

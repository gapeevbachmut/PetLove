// src/components/Button.tsx

import clsx from 'clsx';
import css from './Button.module.css';
import { useState } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  text: string;
}

export default function Button({ variant, text }: ButtonProps) {
  // let clicks = 0;
  const [clicks, setClicks] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setClicks(clicks + 1);
    console.log(clicks);
    console.log('Clicked!', event); // Об'єкт події
    console.log('Target:', event.target); // сам <button>
  };

  return (
    <button
      className={clsx(css.button, variant && css[variant])}
      onClick={handleClick}
    >
      {text} :- {clicks}
    </button>
  );
}

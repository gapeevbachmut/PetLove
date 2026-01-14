// src/components/Button.tsx

import clsx from 'clsx';
import css from './Button.module.css';
// import { useState } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  text: string;
  onClickBtn?: () => void;
}

export default function Button({ variant, text, onClickBtn }: ButtonProps) {
  return (
    <button
      className={clsx(css.button, variant && css[variant])}
      onClick={onClickBtn}
    >
      {text}
    </button>
  );
}

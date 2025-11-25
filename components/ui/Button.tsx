import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, className = '', ...props }: Props) {
  return (
    <button
      className={`rounded-lg py-2 font-semibold transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

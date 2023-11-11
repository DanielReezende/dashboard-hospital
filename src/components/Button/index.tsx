import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;

}

export function Button({ text, ...rest }: ButtonProps) {
  const [countClick, setCountClick] = React.useState(0);

  function handleCountClick() {
    setCountClick((prevState) => prevState + 1);
  }

  return (
    <button {...rest} onClick={handleCountClick}>
      {text} - {countClick}
    </button>
  );
}

import { InputHTMLAttributes, useState } from "react";
import { IMaskInput } from "react-imask";

import { Control, Controller } from "react-hook-form";

import styles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<any>;
  name: string;
  mask?: string;
  error?: string;
  label: string;
}

export function Input({
  control,
  name,
  mask,
  error,
  label,
  ...rest
}: InputProps) {
  const [inputHasValue, setInputHasValue] = useState(false);

  function handleOnBlur(event: React.FocusEvent<HTMLInputElement, Element>) {
    if (event.target.value.length > 0) {
      setInputHasValue(true);
    } else {
      setInputHasValue(false);
    }
  }

  return (
    <div className={styles.container}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return mask ? (
            <IMaskInput
              mask={mask}
              unmask={true}
              onAccept={field.onChange}
              ref={field.ref}
              value={field.value}
              {...rest}
              id={name}
              onBlur={(event) => handleOnBlur(event)}
            />
          ) : (
            <input
              {...rest}
              type="text"
              onChange={field.onChange}
              ref={field.ref}
              value={field.value}
              name={name}
              id={name}
              onBlur={(event) => handleOnBlur(event)}
            />
          );
        }}
      />
      <label
        className={
          inputHasValue
            ? `${styles["label-input"]} ${styles.label}`
            : `${styles["label-input"]}`
        }
        htmlFor={name}
      >
        {label}
      </label>
      {error && <span>{error}</span>}
    </div>
  );
}

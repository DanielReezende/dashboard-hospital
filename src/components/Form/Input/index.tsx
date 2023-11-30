import { InputHTMLAttributes } from "react";
import { IMaskInput } from "react-imask";

import { Control, Controller, FieldValues } from "react-hook-form";

import styles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<FieldValues>;
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
            />
          );
        }}
      />
      <label htmlFor={name}>{label}</label>
      {error && <span>{error}</span>}
    </div>
  );
}

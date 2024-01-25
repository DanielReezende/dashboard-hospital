import { SelectHTMLAttributes, useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

import { Option } from "../../../@types/app";

import styles from "./select.module.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  control: Control<FieldValues>;
  name: string;
  error?: string;
  options: Option[];
  label: string;
  altText: string;
}

export function Select({
  control,
  name,
  error,
  options,
  id,
  label,
  altText,
  ...rest
}: SelectProps) {
  const [selectHasValue, setSelectHasValue] = useState(false);

  function handleOnBlur(event: React.FocusEvent<HTMLSelectElement, Element>) {
    if (event.target.value) {
      setSelectHasValue(true);
    } else {
      setSelectHasValue(false);
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={
          error
            ? `${styles["select-container"]} ${styles.error}`
            : `${styles["select-container"]}`
        }
      >
        <Controller
          name={name}
          control={control}
          render={({ field: { value, name, ref, onChange } }) => (
            <select
              id={id}
              name={name}
              onChange={onChange}
              ref={ref}
              {...rest}
              value={value}
              onBlur={(event) => handleOnBlur(event)}
            >
              <option value="">{altText}</option>
              {options?.map((option) => (
                <option key={String(option.value)} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          )}
        />

        <label
          className={
            selectHasValue
              ? `${styles["label-select"]} ${styles.label}`
              : `${styles["label-select"]}`
          }
          htmlFor={id}
        >
          {label}
        </label>
      </div>

      {error && <span>{error}</span>}
    </div>
  );
}

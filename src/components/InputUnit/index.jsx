import React, { useImperativeHandle, useRef } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

const InputUnit = React.forwardRef(
  (
    { id, label, type, name, value, onChange, icon, autoFocus, invalid },
    ref
  ) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
    }));

    let inputComponent = (
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={clsx(styles.input, invalid && styles.invalid)}
        autoFocus={autoFocus}
        ref={inputRef}
      />
    );

    if (type === "number") {
      inputComponent = (
        <input
          id={id}
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          min={0}
          step="any"
          className={clsx(styles.input, invalid && styles.invalid)}
          autoFocus={autoFocus}
          ref={inputRef}
        />
      );
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.group}>
          {/* <span className={clsx("material-icons", styles.icon)}>{icon}</span> */}
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        </div>
        {inputComponent}
      </div>
    );
  }
);

export default InputUnit;

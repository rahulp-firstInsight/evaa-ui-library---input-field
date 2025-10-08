import React from "react";
import "./TextField.scss";

export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label = "Label",
  placeholder = "Placeholder",
  value,
  onChange,
  type = "text",
  disabled = false,
  error = false,
  helperText,
}) => {
  return (
    <div className="text-field" data-model-id="668:7692">
      {label && <div className="description">{label}</div>}

      <input
        className={`input ${error ? "error" : ""}`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />

      {helperText && (
        <div className={`helper-text ${error ? "error" : ""}`}>
          {helperText}
        </div>
      )}
    </div>
  );
};

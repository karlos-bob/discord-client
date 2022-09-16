import { forwardRef } from "react";

type TextInputProps = {
  name: string;
  label: string;
  type?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  error?: boolean;
  onBlur?: () => void | undefined;
  onChange?: () => void | undefined;
  onFocus?: () => void | undefined;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const {
    label,
    name,
    type = "text",
    className,
    required,
    ...inputProps
  } = props;

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={name}
          className="block text-xs text-header-secondary font-helvetica font-medium uppercase mb-2"
        >
          {label}
          {required && <span className="text-status-danger"> *</span>}
        </label>
      )}
      <input
        name={name}
        type={type}
        ref={ref}
        className="block w-full bg-input text-black outline-0 rounded p-2"
        {...inputProps}
      />
    </div>
  );
});

TextInput.displayName = "TextInput";

TextInput.defaultProps = {
  type: "text",
  value: "",
  placeholder: "",
  disabled: false,
  required: false,
  className: "",
  error: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
};

export default TextInput;

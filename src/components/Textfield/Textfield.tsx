import { Typography } from "../Typography";

export interface TypographyComponentProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  inputClassName?: React.HTMLProps<HTMLElement>["className"];
  disabled?: boolean;
  endAdornment?: JSX.Element | string;
  startAdornment?: JSX.Element | string;
  type?: string;
  pillInfo?: { variant: "warning" | "success"; title: string };
}

export const TextField = (props: TypographyComponentProps) => {
  const {
    label = "",
    onChange,
    placeholder,
    value,
    inputClassName,
    disabled = false,
    endAdornment,
    type,
    startAdornment,
    pillInfo,
  } = props;
  return (
    <div className="relative">
      {pillInfo?.title ? (
        <div
          className={`absolute top-0 -translate-y-7 font-semibold text-xs right-0 left-0 px-2 py-1 ${pillInfo.variant === "warning"
              ? "bg-warning-primary"
              : "bg-success-primary"
            } rounded-full text-white`}
        >
          {pillInfo.title}
        </div>
      ) : null}
      {label ? (
        <Typography
          className="text-black block text-left mb-1 text-xs font-medium"
          Component="label"
        >
          {label}
        </Typography>
      ) : null}
      <div
        className={`rounded-lg ${inputClassName} border-disabled-gray-border relative overflow-hidden flex  border-2   ${disabled ? "bg-disabled-gray  text-gray-400" : "text-black bg-white"
          }`}
      >
        {startAdornment ? (
          <span className="flex items-center justify-center min-w-4">
            {startAdornment}
          </span>
        ) : null}
        <input
          type={type}
          disabled={disabled}
          value={value}
          className="bg-inherit p-2 w-full justify-self-stretch block focus:outline-none"
          placeholder={placeholder}
          onChange={onChange}
        />
        {endAdornment ? (
          <span className="flex items-center justify-center min-w-4">
            {endAdornment}
          </span>
        ) : null}
      </div>
    </div>
  );
};

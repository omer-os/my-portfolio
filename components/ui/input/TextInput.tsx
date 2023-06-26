import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  State: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, State, setState, startIcon, endIcon, ...props }, ref) => {
    return (
      <div className="relative">
        {startIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {startIcon}
          </div>
        )}

        <input
          type="text"
          className={`bg-black border border-zinc-500 rounded-md px-3 py-2 text-white focus:outline-none ${
            startIcon ? "pl-10" : ""
          } ${endIcon ? "pr-10" : ""} ${className}`}
          ref={ref}
          value={State}
          onChange={(e) => setState(e.target.value)}
          {...props}
        />

        {endIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {endIcon}
          </div>
        )}
      </div>
    );
  }
);
TextInput.displayName = "Input";

export default TextInput;

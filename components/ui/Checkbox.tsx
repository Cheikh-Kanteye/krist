import React from "react";

interface CheckboxProps {
  id: string;
  name: string;
  value: string;
  color?: string;
  fill?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  value,
  color = "#000",
  fill,
  checked = false,
  onChange,
  children,
}) => {
  return (
    <div className="inline-flex items-center">
      <div className="relative flex items-center rounded-full cursor-pointer">
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-700 before:opacity-0 before:transition-opacity hover:before:opacity-10"
          style={{
            borderColor: checked || fill ? color : undefined, // Couleur dynamique pour la bordure
            backgroundColor: checked || fill ? color : undefined, // Couleur dynamique pour l'arrière-plan
          }}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <label
        className="mt-px ml-2 font-normal text-gray-800 cursor-pointer select-none"
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;

import { ButtonProps } from "./types";

export const Button = ({ event, data, className }: ButtonProps) => {
  return (
    <button
      className={`btn ${className} btn-primary btn-md rounded-full shadow-md transition duration-300 ease-in-out active:shadow-inner`}
      onClick={event.click}
    >
      {data.name}
    </button>
  );
};

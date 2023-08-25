import { LandingCardProps } from "./types";

export const LandingCard = ({
  description,
  icon,
  title,
  className,
  index,
}: LandingCardProps) => {
  return (
    <div
      className={`${className} rounded-box relative flex w-full flex-col gap-2 p-5 shadow-md backdrop-blur-md`}
    >
      <div className="absolute bottom-5 right-5 text-9xl text-base-content/20">
        {index}
      </div>
      <div className="text-6xl">{icon}</div>
      <div className="text-xl font-bold">{title}</div>
      <div>{description}</div>
    </div>
  );
};

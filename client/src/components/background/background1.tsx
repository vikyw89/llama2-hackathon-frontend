import { BackgroundProps } from "./types";
import styles from "./styles.module.scss";

export const Background1 = ({ className }: BackgroundProps) => {
  return <div className={`${className} ${styles.background} `}></div>;
};

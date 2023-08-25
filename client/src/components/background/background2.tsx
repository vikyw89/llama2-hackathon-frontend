import styles from "./styles.module.scss";
import { BackgroundProps } from "./types";

export const Background2 = ({ className }: BackgroundProps) => {
  return <div className={styles.animatedBackground}></div>;
};

import { FC } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import styles from "./CheckButton.module.css";

const boxVariants = {
  checked: {
    borderColor: "#78c1b0",
    transition: { duration: 0.1 },
  },
  unchecked: {
    borderColor: "#e6e6e6",
    transition: { duration: 0.1 },
  },
};

const checkVaiants = {
  initial: {
    color: "#78c1b0",
  },
  checked: {
    pathLength: 1,
  },
  uncheked: {
    pathLength: 0,
  },
};

type CheckButtonProps = {
  checked: boolean;
  handleCheck: () => void;
};

const CheckButton: FC<CheckButtonProps> = ({ checked, handleCheck }) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.div
      className={styles.svgBox}
      variants={boxVariants}
      animate={checked ? "checked" : "unchecked"}
      onClick={handleCheck}
    >
      <motion.svg
        className={styles.svg}
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={checkVaiants}
          animate={checked ? "checked" : "unchecked"}
          style={{ pathLength, opacity }}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
};

export default CheckButton;

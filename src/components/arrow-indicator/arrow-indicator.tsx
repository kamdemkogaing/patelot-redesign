import classNames from "classnames";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";

type IArrowIndicator = {
  visible: boolean;
  className?: string;
};

export const ArronIndicator = ({ visible, className }: IArrowIndicator) => {
  <AnimatePresence>
    {visible && (
      <LazyMotion features={domAnimation}>
        <m.div
          key="arrow-indicator"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          transition={{
            ease: [0.87, -0.41, 0.19, 1.44],
            duration: 0.6,
          }}
          variants={{
            open: { bottom: -22, opacity: 1 },
            collapsed: { bottom: -32, opacity: 0 },
          }}
          layoutId="arrow-indicator"
          className={classNames(
            "absolute left-0 right-0 mx-auto border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white w-0 h-0",
            className
          )}
        />
      </LazyMotion>
    )}
  </AnimatePresence>;
};

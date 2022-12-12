export const variants = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "string",
      mass: 0.4,
      damping: 8,
    },
  },
  exit: {
    y: -1000,
    transition: {
      duration: 0.5,
    },
  },
};

export const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

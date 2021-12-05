export const fadeAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
    },
  },
};

export const buttonHoverAnim = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "83%",
    transition: {
      duration: 1,
    },
  },
};

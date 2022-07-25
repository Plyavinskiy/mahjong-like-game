const mix = <T>(array: Array<T>): Array<T> => {
  const clone = [...array];

  return clone.sort(() => Math.random() - 0.5);
};

export default mix;

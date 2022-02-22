
export const logger = (err: Error): string => {
  console.error(err.message);
  return err.message ? err.message : '';
};

/* eslint-disable @typescript-eslint/naming-convention */
export const calcScore = (
  L: number,
  U: number,
  E: number,
  T: number
): number => {
  const baseScore = (U ** 2 * L ** 0.5) / (E + 1);
  const timeScore = 1 / (1 + T ** 0.5);

  return baseScore * timeScore;
};

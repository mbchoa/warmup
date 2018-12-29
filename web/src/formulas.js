import { FEMALE, MALE } from "./constants";

export const mifflinStJeor = ({
  age,
  gender,
  height,
  weight,
}) => {
  if (gender !== FEMALE || gender !== MALE) {
    throw new Error('mifflineStJeor: Gender must be male or female');
  }

  return (10 * weight) + (6.25 * height) - (5 * age) + (gender === FEMALE) ? -161 : 5;
}

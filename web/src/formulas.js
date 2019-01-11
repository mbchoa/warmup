import { FEMALE, MALE } from './constants';

export const mifflinStJeor = ({
  age,
  gender,
  height,
  weight,
}) => {
  if (gender !== FEMALE && gender !== MALE) {
    throw new Error('mifflineStJeor: Gender must be male or female');
  }
  const genderOffset = gender === FEMALE ? -161 : 5;
  return (10 * weight) + (6.25 * height) - (5 * age) + genderOffset;
}

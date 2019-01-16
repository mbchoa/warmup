import { map } from 'lodash';

export const round5 = number => Math.round(number * .2) * 5;

export const lbToKg = lbs => lbs / 2.2046;

export const kgToLb = kg => kg * 2.2046;

export const inchToCm = inches => inches * 2.54;

export const getPlates = (availablePlates, targetWeight) => {
  if (targetWeight === 0) return [];

  const targetPlatesOnlyWeight = Math.round(targetWeight) - 45;
  if (targetPlatesOnlyWeight <= 0) return [];

  const oneSideTargetWeight = targetPlatesOnlyWeight * 0.5;
  const mapping = {}
  let remainder = oneSideTargetWeight
  let currentPlateIndex = 0;

  while (remainder > 0 && currentPlateIndex < availablePlates.length) {
    const currentPlateWeight = availablePlates[currentPlateIndex];
    if (remainder - currentPlateWeight >= 0) {
      remainder -= currentPlateWeight;
      mapping[currentPlateWeight] = mapping[currentPlateWeight]+1 || 1;
    } else {
      currentPlateIndex++;
    }
  }

  const outputMap = map(mapping, (numPlates, plateType) => {
    return [+plateType, numPlates];
  })

  return remainder === 0 ? outputMap : [];
}

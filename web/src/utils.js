import { map } from 'lodash';

export const round5 = number => Math.round(number * .2) * 5;

export const lbToKg = lbs => lbs / 2.2046;

export const kgToLb = kg => kg * 2.2046;

export const inchToCm = inches => inches * 2.54;

export const getPlates = (availablePlates, targetWeight) => {
  const output = []
  if (targetWeight === 0) return output;

  const targetPlatesOnlyWeight = Math.round(targetWeight) - 45;
  if (targetPlatesOnlyWeight <= 0) return output;

  const oneSideTargetWeight = targetPlatesOnlyWeight * 0.5;

  let remainder = oneSideTargetWeight
  let currentPlateIndex = 0;

  while (remainder > 0 && currentPlateIndex < availablePlates.length) {
    const currentPlateWeight = availablePlates[currentPlateIndex];
    if (remainder - currentPlateWeight >= 0) {
      remainder -= currentPlateWeight;
      output.push(currentPlateWeight);
    } else {
      currentPlateIndex++;
    }
  }

  return remainder === 0 ? output : [];
}

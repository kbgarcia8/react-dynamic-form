export type ColorString = string & { __brand: 'color' };

// Runtime validator + cast
export const isColor = (value: string): boolean => {
  const hex = /^#([0-9A-Fa-f]{3}){1,2}$/;
  const rgb = /^rgb(a)?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/;
  return hex.test(value) || rgb.test(value) || CSS.supports('color', value);
};

export const asColor = (value: string): ColorString => {
  if (!isColor(value)) throw new Error(`Invalid color: ${value}`);
  return value as ColorString;
};
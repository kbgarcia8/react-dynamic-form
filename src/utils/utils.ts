import { css } from "styled-components";
import { v } from "../styles/variables";

//! Execution is asColor -> isColor is run -> if no error type is returned as ColorString
//* Branding - for compile time safety
export type ColorString = string & { __brand: 'color' };

//* Runtime validator + cast
export const isColor = (value: string): boolean => {
  const hex = /^#([0-9A-Fa-f]{3}){1,2}$/;
  const rgb = /^rgb(a)?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/;
  return hex.test(value) || rgb.test(value) || CSS.supports('color', value);
};

//* executes on compile time and runs validator
export const asColor = (value: string): ColorString => {
  if (!isColor(value)) throw new Error(`Invalid color: ${value}`);
  return value as ColorString;
}; 

type MediaFn = (...args: Parameters<typeof css>) => ReturnType<typeof css>;
type Breakpoint = keyof typeof v.breakpoints;

export const media = Object.keys(v.breakpoints).reduce((acc, label) => {
    const typedLabel = label as Breakpoint;

    acc[typedLabel] = (...args) => css`
    @media (min-width: ${v.breakpoints[typedLabel]}) {
        ${css(...args)}
        }
    `;
    return acc;
}, {} as Record<Breakpoint, MediaFn>
);
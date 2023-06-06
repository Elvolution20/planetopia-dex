import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "cursor";
};


const rocket = `"data:image/png;base64,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"`;


const rocketFire = `"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK+SURBVHgBjVRLSFVhEJ75z+ve9D58m48USSqlNqk7K6qVQYQomVQUvVZC1KpdUK2CaBntIkIyqNy0LSJQgiKoJAOhMJUL0vGK13PP65/mHK/kPT5qzuL8zP/PN/N9M/+PsIURASICheuhnYaZsa4h0iUATLBrhvdup5K1o/jwg7sag9TfruOzr85GgJlT1TWG1IYIsY3Ru9lVGc2JgHcluI/Ln2a+BA5honl1/kzTniiYeaI5bZDSSEJMgQSTXUsBQNEhDD66qIB2JTvY0Bq6zIH6e/wb4ApGCMQ4oU9IeJDp9HB4UzQRKgRKwgMRkyBdBGEQ+JawPFN/MSdT5zHbXzcoBT6B/zAl7YJRlwfU5V/OnmCeBM5s3PHmS7pU1Vbe2HFaZO2TmyIhgJp0QZT4QDLgWXAnmVO9A5RDMAxLJyHPKncmF5fy7YlSpti9YVUpD+ItOVArHVAYEFWm3O4Bxhlshw9KG9Pf64Ky2wPFFEJwNrLs2ANOOxsFE9skGI1WEcXQEgzakwfRwcORLuzxWdFhp0Wwrh+dmnZ9OMYz8A3WiK/X5kE6GNJca/57DeQnHWBZFPc9JZeLTuZ6m7bbqnefqz3OGzFksSmYNK5Qr7HDpgS+VV3FLqbZwTNdylVyYnc89gijNOnmIfX3xOQRBbGPL0onu/athHNjKlzQq2zAmL9yWGPQVtaznEfohyqXxlL9ahRwbvJ7ehuKXl7WMWAS+f6ttpUsAb4tQDEk30n2c3FyQg0lceZiYwsTxqt1FQZmnWtuzlvuCC87121yhFZpg1bthPr5C6xnXslZmfiBquc/P24IGFZzeb+WzWauszo3/jGjOZDidNnI9MtCvs0tIJs92djiIx1WSHaxBGXM1SCioxzIbca3vqBbFcMzr7HQ7y0Bo5a90FDu56CP3xiVr9u7suFfnzHyYPwB2bAQ6QAXwmsAAAAASUVORK5CYII="`;

const getBaseThumbStyles = ({ disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  background-image: url(${rocket});
  background-color: transparent;
  box-shadow: none;
  border: 0;
  cursor: ${getCursorStyle};
  margin-top: 17px;
  margin-left: -3px;
  width: 60px;
  height: 40px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translate(-2px, -2px);
  transition: 200ms transform;
  &:hover {
    transform: ${disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)"};
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const BunnyButt = styled.div<DisabledProp>`
  background: url(${rocketFire}) no-repeat;
  margin-top: 15px;
  height: 20px;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  position: absolute;
  margin-left: -2px;
  width: 35px;
  
`;

export const BunnySlider = styled.div`
  position: absolute;
  left: 14px;
  width: calc(100% - 14px);
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;
  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }
  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }
  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? "textDisabled" : "inputSecondary"]};
  height: 2px;
  position: absolute;
  top: 18px;
  width: 100%;
`;

export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.primary};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 10px;
  position: absolute;
  top: 18px;
`;

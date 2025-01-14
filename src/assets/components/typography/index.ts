// Libs
import styled from "styled-components";

// Types
import { TypographyProps } from "./types";

export const Typography = styled.span<TypographyProps>`
  color: ${({ color = "#fff" }) => color};
  font-size: ${({ fontSize = "1rem" }) => fontSize};
  font-weight: ${({ fontWeight = "400" }) => fontWeight};
  font-family: ${({ fontFamily = "Poppins" }) => fontFamily};
`;

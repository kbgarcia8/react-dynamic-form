// ! declare module is TypeScript’s way of adding or modifying types for an existing module — without modifying the module’s source code.

import "styled-components";
import type { Theme } from "@type/ConstantTypes";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

// src/custom.d.ts or src/svg.d.ts

declare module "*.svg" {
  const content: string; // or `const content: any;` if you prefer to keep it loose
  export default content;
}

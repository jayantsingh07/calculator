import { Operator } from "@/types/calculator";

export function calculate(
  a: number,
  b: number,
  op: Operator
): number {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "×": return a * b;
    case "÷": return b === 0 ? 0 : a / b;
    default: return b;
  }
}

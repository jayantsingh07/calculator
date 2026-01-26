"use client";

import { useState } from "react";
import Display from "./display";
import Key from "./key";
import { calculate } from "@/lib/math";
import { Operator } from "@/types/calculator";
import { Card } from "@/components/ui/card";

export default function Calculator() {
  const [current, setCurrent] = useState("0");
  const [prev, setPrev] = useState<string | null>(null);
  const [op, setOp] = useState<Operator | null>(null);

  const inputNumber = (n: string) => {
    setCurrent(current === "0" ? n : current + n);
  };

  const inputOperator = (o: Operator) => {
    setPrev(current);
    setOp(o);
    setCurrent("0");
  };

  const equals = () => {
    if (!prev || !op) return;
    const result = calculate(Number(prev), Number(current), op);
    setCurrent(result.toString());
    setPrev(null);
    setOp(null);
  };

  const clear = () => {
    setCurrent("0");
    setPrev(null);
    setOp(null);
  };

  return (
    <Card className="w-85 rounded-3xl bg-black p-4 shadow-2xl">
      <Display value={current} />

      <div className="grid grid-cols-4 grid-flow-row gap-3 mt-4">
        <Key label="AC" onPress={clear} variant="secondary" span={2} />
        <Key label="⌫" onPress={() => setCurrent(current.slice(0, -1) || "0")} variant="secondary" />
        <Key label="÷" onPress={() => inputOperator("÷")} variant="accent" />

        <Key label="7" onPress={() => inputNumber("7")} />
        <Key label="8" onPress={() => inputNumber("8")} />
        <Key label="9" onPress={() => inputNumber("9")} />
        <Key label="×" onPress={() => inputOperator("×")} variant="accent" />

        <Key label="4" onPress={() => inputNumber("4")} />
        <Key label="5" onPress={() => inputNumber("5")} />
        <Key label="6" onPress={() => inputNumber("6")} />
        <Key label="-" onPress={() => inputOperator("-")} variant="accent" />

        <Key label="1" onPress={() => inputNumber("1")} />
        <Key label="2" onPress={() => inputNumber("2")} />
        <Key label="3" onPress={() => inputNumber("3")} />
        <Key label="+" onPress={() => inputOperator("+")} variant="accent" />

        <Key label="0" onPress={() => inputNumber("0")} span={2} />
        <Key label="=" onPress={equals} variant="accent" span={2} />
      </div>
    </Card>
  );
}

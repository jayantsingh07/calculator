import { Button } from "@/components/ui/button";

type Props = {
  label: string;
  onPress: () => void;
  variant?: "default" | "secondary" | "accent";
  span?: 1 | 2;
};

export default function Key({
  label,
  onPress,
  variant = "default",
  span = 1,
}: Props) {
  const styles = {
    default: "bg-neutral-800 text-white",
    secondary: "bg-neutral-500 text-black",
    accent: "bg-orange-500 text-white",
  };

  const spanClass =
    span === 2 ? "col-span-2" : "col-span-1";

  return (
    <Button
      onClick={onPress}
      className={`h-16 text-2xl rounded-full ${styles[variant]} ${spanClass}`}
    >
      {label}
    </Button>
  );
}

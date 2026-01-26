import { Button } from "@/components/ui/button";

type Props = {
  label: string;
  onPress: () => void;
  variant?: "default" | "secondary" | "accent";
  span?: number;
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

  return (
    <Button
      onClick={onPress}
      className={`h-16 text-2xl rounded-full ${styles[variant]} col-span-${span}`}
    >
      {label}
    </Button>
  );
}

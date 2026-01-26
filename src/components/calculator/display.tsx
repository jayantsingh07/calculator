type Props = {
  value: string;
};

export default function Display({ value }: Props) {
  return (
    <div className="h-24 flex items-end justify-end px-4 pb-2 text-5xl font-light tracking-tight text-white">
      {value}
    </div>
  );
}

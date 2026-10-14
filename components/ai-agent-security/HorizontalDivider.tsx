export default function HorizontalDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-[1px] w-full bg-[linear-gradient(90deg,rgba(226,232,240,0)_0%,rgba(226,232,240,1)_50%,rgba(226,232,240,0)_100%)] ${className}`}
    />
  );
}

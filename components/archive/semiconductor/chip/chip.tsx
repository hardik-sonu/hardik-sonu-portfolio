import CopperPad from "./CopperPad";

export default function Chip() {
  return (
    <div className="relative h-full w-full">
      {/* Package */}
      <div
        className="
          absolute
          inset-0
          rounded-[36px]
          border
          border-neutral-300
          bg-white
          shadow-2xl
          dark:border-neutral-700
          dark:bg-neutral-900
        "
      />

      <CopperPad />

      {/* Silicon Die */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-40
          w-40
          -translate-x-1/2
          -translate-y-1/2
          rounded-xl
          bg-gradient-to-br
          from-neutral-200
          to-neutral-400
          dark:from-neutral-700
          dark:to-neutral-900
        "
      />
    </div>
  );
}
export default function CopperPad() {
  const pads = [
    { left: "12%", top: "28%" },
    { left: "12%", top: "42%" },
    { left: "12%", top: "56%" },
    { left: "12%", top: "70%" },

    { right: "12%", top: "28%" },
    { right: "12%", top: "42%" },
    { right: "12%", top: "56%" },
    { right: "12%", top: "70%" },

    { top: "12%", left: "30%" },
    { top: "12%", left: "50%" },
    { top: "12%", left: "70%" },

    { bottom: "12%", left: "30%" },
    { bottom: "12%", left: "50%" },
    { bottom: "12%", left: "70%" },
  ];

  return (
    <>
      {pads.map((style, index) => (
        <div
          key={index}
          style={style}
          className="
            absolute
            h-2
            w-6
            rounded-full
            bg-gradient-to-r
            from-[#B87333]
            via-[#D28A3D]
            to-[#B87333]
            shadow-sm
          "
        />
      ))}
    </>
  );
}
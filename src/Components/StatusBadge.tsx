const StatusBadge = ({ text, bgColor, textColor }: { text: string; bgColor: string; textColor: string }) => {
  return (
    <span
      className="rounded-full px-3 py-1 text-xs font-semibold mb-2 inline-block border bg-white"
      style={{ borderColor: bgColor, color: textColor }}
    >
      {text}
    </span>
  );
};

export default StatusBadge;
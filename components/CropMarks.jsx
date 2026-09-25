const CropMarks = ({ tone = "light" }) => {
  const line = tone === "light" ? "border-parchment/25" : "border-ink/25";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-3 hidden md:block">
      <span className={`absolute left-0 top-0 h-4 w-4 border-l border-t ${line}`} />
      <span className={`absolute right-0 top-0 h-4 w-4 border-r border-t ${line}`} />
      <span className={`absolute bottom-0 left-0 h-4 w-4 border-b border-l ${line}`} />
      <span className={`absolute bottom-0 right-0 h-4 w-4 border-b border-r ${line}`} />
    </div>
  );
};

export default CropMarks;

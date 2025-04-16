const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3.5 border border-gray-300 py-2 rounded-full !w-fit  text-secondary text-sm font-medium">
    {children}
  </span>
);

export default Chip;
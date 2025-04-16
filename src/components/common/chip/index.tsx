const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3.5 border border-gray-300 py-2 rounded-full  text-secondary text-sm font-medium mr-2 mb-2">
    {children}
  </span>
);

export default Chip;
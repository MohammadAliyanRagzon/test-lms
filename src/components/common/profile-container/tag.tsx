interface propTypes {
  title: string;
}

const Tag = ({ title }: propTypes) => {
  return (
    <div className="p-2.5 border border-primary-border rounded-[51px] text-xs text-secondary">
      {title}
    </div>
  );
};

export default Tag;

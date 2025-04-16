interface propTypes {
  label: string;
  children: React.ReactNode;
}

const ProfileContainer = ({ label, children }: propTypes) => {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      <label className="text-sm !font-family-barlow text-secondary font-bold">
        {label}
      </label>
      <div className="w-full border border-primary-border px-3.5 py-2.5 rounded">
        {children}
      </div>
    </div>
  );
};

export default ProfileContainer;

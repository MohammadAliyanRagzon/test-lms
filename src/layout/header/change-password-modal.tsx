import Button from "../../components/common/button";
import FormInput from "../../components/common/form-input";

const ChangePasswordModal = () => {
  return (
    <div className="w-full">
      <div className="py-5 px-5 sm:px-7 flex items-center justify-between border-b border-primary-border">
        <h1 className="text-xl font-bold !font-family-barlow text-secondary">
          Update Your Password
        </h1>
      </div>
      <div className="py-4 px-5 sm:px-7">
        <form className="flex flex-col gap-5">
          <FormInput
            label="Old Password"
            props={{
              placeholder: "****",
            }}
            customStyling="!py-2.5 !px-6 !border !border-primary-border focus:!border-primary-border hover:!border-primary-border focus:!shadow-sm focus:!shadow-primary/20"
          />
          <FormInput
            label="New Password"
            props={{
              placeholder: "Enter New Password",
            }}
            customStyling="!py-2.5 !px-6 !border !border-primary-border focus:!border-primary-border hover:!border-primary-border focus:!shadow-sm focus:!shadow-primary/20"
          />
          <FormInput
            label="Confirm Password"
            props={{
              placeholder: "Confirm Password",
            }}
            customStyling="!py-2.5 !px-6 !border !border-primary-border focus:!border-primary-border hover:!border-primary-border focus:!shadow-sm focus:!shadow-primary/20"
          />
          <Button
            variant="secondary"
            size="md"
            className="!w-fit self-end !rounded !px-7"
          >
            Update Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;

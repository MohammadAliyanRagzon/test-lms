import styled from "@emotion/styled";
import { Input, InputProps } from "antd";
import TextArea, { TextAreaProps } from "antd/es/input/TextArea";

interface propTypes {
  label?: string;
  props?: InputProps | TextAreaProps;
  isTextArea?: boolean;
  secondary?: boolean;
  customStyling?: string;
}

const FormInput = ({
  label,
  props,
  isTextArea,
  customStyling,
  secondary,
}: propTypes) => {
  return isTextArea ? (
    <div className="flex flex-col gap-4 w-full">
      {label && (
        <label className="text-base text-secondary font-semibold">
          {label}
        </label>
      )}
      <TextArea
        {...(props && { ...(props as TextAreaProps), prefix: undefined })}
        className={
          customStyling
            ? customStyling
            : "px-5 py-2.5 rounded !border !border-secondary focus:!border-secondary hover:!border-secondary focus:!shadow-sm focus:!shadow-primary/20"
        }
        autoSize={{ minRows: 4, maxRows: 5 }}
      />
    </div>
  ) : secondary ? (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-center w-full">
      {label && (
        <label className="text-base text-secondary font-semibold w-56">
          {label}
        </label>
      )}
      <StyledSecondaryInput
        {...(props && { ...(props as InputProps), onChange: undefined })}
        className={customStyling ? customStyling : ""}
      />
    </div>
  ) : (
    <div className="flex flex-col gap-4">
      {label && (
        <label className="text-base text-secondary font-semibold">
          {label}
        </label>
      )}
      <Input
        {...(props && { ...(props as InputProps), onChange: undefined })}
        className={
          customStyling
            ? customStyling
            : "px-5 py-2.5 rounded !border !border-secondary focus:!border-secondary hover:!border-secondary focus:!shadow-sm focus:!shadow-primary/20"
        }
      />
    </div>
  );
};

export default FormInput;

const StyledSecondaryInput = styled(Input)`
  .ant-input {
    padding: 8px 20px;
    border-color: var(--primary-border);
  }

  .ant-input:hover {
    border-color: var(--primary-border);
  }

  .ant-input:focus {
    border-color: var(--primary-border);
    box-shadow: 0 0 0 2px var(--primary-table-header);
  }
`;

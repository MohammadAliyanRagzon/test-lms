import { InputProps, Select, SelectProps } from "antd";
import styled from "@emotion/styled";

interface propTypes {
  label?: string;
  props?: InputProps;
  options?: { value: string; label: string }[];
}

const FormSelect = ({ label, props, options }: propTypes & SelectProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {label && (
        <label className="text-base sm:text-lg text-secondary font-semibold">
          {label}
        </label>
      )}
      <StyledSelect
        {...(props as SelectProps)}
        options={options}
        className="py-2.5"
      />
    </div>
  );
};

export default FormSelect;

const StyledSelect = styled(Select)`
  .ant-select-selector {
    border: 1px solid var(--secondary) !important;
    box-shadow: none !important;
  }
`;

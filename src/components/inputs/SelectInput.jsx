import React from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { Controller } from "react-hook-form";

const SelectInput = ({
  label,
  control,
  errors,
  errorStyle = {},
  errorClass = "text-xs text-[#ff0000] pt-1.5 block",
  translation = false,
  placeholder,
  optionFilterProp,
  optionRender,
  onChange,
  onSearch,
  options,
  disabled,
  value,
  defaultValue,
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <Controller
        name={label}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            showSearch={true}
            disabled={disabled}
            value={value}
            size="large"
            dropdownStyle={{
              borderRadius: "0rem",
              borderBlock: "1px solid #ccc",
            }}
            onChange={onChange}
            onSearch={onSearch}
            options={options}
            optionFilterProp={"label"}
            placeholder={
              <div className="text-[15px] font-medium text-black/30">
                {placeholder}
              </div>
            }
            labelRender={({ label }) => (
              <div className="text-sm font-medium text-black/60">{label}</div>
            )}
            {...props}
            popupClassName="rounded-md"
            variant="borderless"
            style={{
              ...props.style,
              borderRadius: "none",
              ...(errors?.[label] ? errorStyle : {}),
            }}
          />
        )}
      />
      {errors?.[label] && (
        <span className={errorClass}>
          {translation ? t(errors?.[label]?.message) : errors?.[label]?.message}
        </span>
      )}
    </div>
  );
};

export default SelectInput;

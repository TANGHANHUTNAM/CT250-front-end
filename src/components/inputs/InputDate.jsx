import React from "react";
import { Controller } from "react-hook-form";
import { DatePicker } from "antd";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs"; // Import dayjs nếu bạn đang sử dụng dayjs

const InputDate = ({
  label,
  control,
  errors,
  valueAsNumber = true,
  errorStyle = {},
  errorClass = "text-xs text-[#ff0000] pt-1.5 block",
  translation = false,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Controller
        name={label}
        control={control}
        rules={{ required: "This field is required" }}
        render={({ field }) => (
          <DatePicker
            {...field}
            format="DD/MM/YYYY"
            value={field.value ? dayjs(field.value, "DD/MM/YYYY") : null} // Sử dụng dayjs để khởi tạo giá trị ngày
            onChange={(date, dateString) => field.onChange(dateString)}
            className={`mt-2 w-full rounded-md border border-tertiary px-4 py-[10px] text-2xl text-secondary outline-none ${errors?.[label] ? errorClass : ""}`}
            placeholder="dd/mm/yyyy"
            {...props}
          />
        )}
      />
      {errors?.[label] && (
        <span className={errorClass} style={errors?.[label] ? errorStyle : {}}>
          {translation ? t(errors?.[label]?.message) : errors?.[label]?.message}
        </span>
      )}
    </div>
  );
};

export default InputDate;

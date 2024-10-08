import { useTranslation } from "react-i18next";

const Input = ({
  label,
  register = () => {},
  errors,
  errorStyle = {},
  errorClass = "text-xs text-[#ff0000] pt-1.5 block",
  translation = false,
  defaultValue,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <input
        {...register(label)}
        {...props}
        defaultValue={defaultValue}
        style={errors?.[label] ? errorStyle : {}}
      />

      {errors?.[label] && (
        <span className={errorClass}>
          {translation ? t(errors?.[label]?.message) : errors?.[label]?.message}
        </span>
      )}
    </div>
  );
};

export default Input;

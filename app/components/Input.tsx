import { FieldValues, UseFormRegister } from "react-hook-form";
interface Props {
  name: string;
  label: string;
  type?: string;
  dir?: "col" | "row";
  placeholder?: string;
  width: string;
  register: UseFormRegister<FieldValues>;
  error?: string;
}

const Input = ({
  name,
  label,
  type = "text",
  dir = "row",
  placeholder = "",
  width = "w-full",
  register,
  error,
}: Props) => {
  return (
    <label
      className={`${
        dir === "col" ? "flex-col" : "flex-row items-center justify-between"
      } w-full flex  gap-2 mb-4  relative`}
      htmlFor={name}
    >
      <span className=" text-left font-semibold">{label}</span>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={` border border-gray-400  rounded-md px-3 py-1 ${width}`}
        id={name}
      />
      {error && <p className="text-xs absolute top-8 text-red-600">{error}</p>}
    </label>
  );
};

export default Input;

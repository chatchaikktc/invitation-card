import Input, { InputProps } from "@/components/ui/Input";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import BaseInputMask from "react-input-mask";

interface InputMaskProps<T extends FieldValues> extends InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<T, any>;
  mask: string;
  name: Path<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules?: RegisterOptions<any>;
}

export default function InputMask<T extends FieldValues>({
  control,
  mask,
  name,
  rules,
  ref, // eslint-disable-line @typescript-eslint/no-unused-vars
  ...props
}: InputMaskProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <BaseInputMask
          mask={mask}
          maskPlaceholder={null}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
        >
          <Input {...props} />
        </BaseInputMask>
      )}
    />
  );
}

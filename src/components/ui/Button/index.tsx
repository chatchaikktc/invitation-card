import { twMerge } from "@/lib/twMerge";

type BaseButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  fluid?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type SolidButtonProps = {
  variant?: "solid";
  color?: "primary" | "gray";
} & BaseButtonProps;

type OutlineButtonProps = {
  variant: "outline";
  outlineColor?: "white" | "gray";
} & BaseButtonProps;

type ButtonProps = SolidButtonProps | OutlineButtonProps;

export default function Button(props: ButtonProps) {
  const { children, disabled, className, fluid, onClick, size = "sm" } = props;

  const baseClasses = twMerge(
    "tw-whitespace-pre-wrap tw-rounded-md tw-px-5 tw-text-sm tw-font-bold tw-leading-[21px] tw-text-white tw-transition-all tw-duration-300",
    disabled && "tw-pointer-events-none tw-cursor-not-allowed tw-opacity-30"
  );

  const fluidClasses = fluid && "tw-w-full";
  const sizeClasses = twMerge(
    size === "sm" && "tw-h-[24px] tw-text-sm",
    size === "md" && "tw-text-md tw-min-h-[40px]",
    size === "lg" && "tw-h-11 tw-text-lg",
    
  );

  return (
    <button
      className={twMerge(
        baseClasses,
        variantClasses(props),
        fluidClasses,
        sizeClasses,
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const variantClasses = (props: ButtonProps): string => {
  if (props.variant === "solid" || props.variant === undefined) {
    const { color = "primary" } = props;

    const colorClasses = twMerge(
      color == "primary" &&
        "tw-border-primary-red tw-bg-primary-red hover:tw-bg-primary-dark-red",
      color == "gray" &&
        "tw-border tw-border-outline-gray tw-bg-outline-gray tw-bg-opacity-10 tw-text-outline-gray"
    );

    return twMerge(colorClasses);
  }

  if (props.variant === "outline") {
    const { outlineColor = "white" } = props;

    const colorClasses = twMerge(
      outlineColor == "white" && "tw-bg-white hover:tw-text-black",
      outlineColor == "gray" &&
        "tw-border-outline-gray tw-text-outline-gray hover:tw-text-black"
    );

    return twMerge(
      "tw-border tw-bg-opacity-0 hover:tw-bg-opacity-100",
      colorClasses
    );
  }

  return "";
};

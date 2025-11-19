export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) {
  const baseStyles =
    "font-bold transition-all rounded-lg focus:outline-none";

  const variants = {
    primary:
      "bg-nature-700 text-earth-100 hover:bg-nature-800 shadow-lg shadow-nature-300/50",
    secondary:
      "border-2 border-nature-700 text-nature-800 hover:bg-nature-700 hover:text-earth-100",
    ghost: "text-nature-700 hover:text-nature-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

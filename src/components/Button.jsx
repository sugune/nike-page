const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 border px-7 py-4 rounded-full text-lg 
    capitalize  
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "border-coral-red bg-coral-red text-white"
      } ${fullWidth && 'w-full'}`}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="icon arrow right"
          className="w-5 h-5 pl-2 rounded-full "
        />
      )}
    </button>
  );
};

export default Button;

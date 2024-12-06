interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isLoading?: boolean;
  }
  
  export function Button({ children, className = "", isLoading = false, ...props }: ButtonProps) {
    return (
      <button
        className={`w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-800 text-white py-3 px-6 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#7C65C1] hover:bg-[#6952A3] ${className}`}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
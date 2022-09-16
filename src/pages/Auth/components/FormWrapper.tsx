import clsx from "clsx";

type FormWrapperType = {
  className?: string;
  children?: React.ReactNode;
};

const FormWrapper = ({ className, children }: FormWrapperType) => {
  return (
    <form
      className={`h-full w-full sm:h-auto max-w-full
        bg-mobile-primary
        text-white sm:rounded 
        before:absolute before:top-5 before:left-0 before:right-0 before:m-auto
        before:bg-discord before:w-[130px] before:h-[36px] 
        sm:before:hidden
        p-9 ${className}`}
    >
      {children}
    </form>
  );
};

FormWrapper.defaultProps = {
  className: "",
  children: null,
};

export default FormWrapper;

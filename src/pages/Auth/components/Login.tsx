import { Link } from "react-router-dom";
import FormWrapper from "./FormWrapper";
import TextInput from "../../../components/Form/TextInput";
import QrCodeWithOverlay from "../../../components/QrCodeWithOverlay";

const Login: React.FC = () => {
  return (
    <FormWrapper className="flex items-center sm:w-[480px] md:w-[768px]">
      <div className="flex flex-row basis-full">
        {/* LEFT */}
        <div className="basis-full md:basis-2/3">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-1">C возвращением!</h3>
            <div className="text-base text-header-secondary font-light mb-4">
              Мы так рады видеть вас снова!
            </div>
          </div>
          <TextInput
            name="email"
            type="email"
            label="Адрес электронной почты или номер телефона"
            className="mb-3"
            required
          />
          <TextInput name="password" type="password" label="Пароль" required />
          <button
            type="button"
            className="text-link text-xs font-medium hover:underline mb-5"
          >
            Забыли пароль?
          </button>
          <button
            type="submit"
            name="enter"
            className="block w-full py-2 bg-brand-experiment hover:bg-brand-experiment-500 rounded mb-3"
          >
            Вход
          </button>
          <div className="text-xs">
            <span className="text-grey-dark">Нужна учетная запись?</span>
            {/* <button
              type="button"
              name="registration"
              className="text-link font-medium hover:underline ml-1"
            >
              Зарегистрироваться
            </button> */}
            <Link
              to="/register"
              className="text-link font-medium hover:underline ml-1"
            >
              Зарегистрироваться
            </Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="hidden md:flex md:basis-1/3 flex-col items-center text-center ml-14">
          <QrCodeWithOverlay className="mb-7" />
          <h3 className="text-2xl font-bold mb-1">Войти с помощью QR-кода</h3>
          <div className="text-grey-dark text-xs leading-5">
            Отсканируйте код с помощью
            <strong> мобильного приложения Discord</strong>, чтобы сразу жевойти
            в систему.
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};

export default Login;

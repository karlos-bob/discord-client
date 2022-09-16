import FormWrapper from "./FormWrapper";
import TextInput from "../../../components/Form/TextInput";
import Select from "../../../components/Form/Select";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];
const Registration: React.FC = () => (
  <FormWrapper className="w-[480px]">
    <div className="text-center mb-3">
      <h3 className="text-2xl font-bold">Cоздать учетную запись</h3>
    </div>
    <TextInput
      name="email"
      type="email"
      label="e-mail"
      className="mb-3"
      required
    />
    <TextInput
      name="name"
      type="text"
      label="Имя пользователя"
      className="mb-3"
      required
    />
    <TextInput
      name="password"
      type="password"
      label="Пароль"
      className="mb-3"
      required
    />
    <div>
      <span className="block text-xs text-header-secondary font-helvetica font-medium uppercase mb-2">
        Дата рождения
      </span>
      <div className="flex flex-row">
        <Select className="basis-1/3" options={people} />
        <Select className="basis-1/3" options={people} />
        <Select className="basis-1/3" options={people} />
      </div>
    </div>
  </FormWrapper>
);

export default Registration;

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import ChevronDown from "../../assets/images/chevron-down.svg";

type SelectOption = {
  id: number | string;
  name: string;
};

type SelectProps = {
  options: SelectOption[];
  className?: string;
};

const Select: React.FC = ({ options, className }: SelectProps) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className={className}>
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="flex flex-row relative w-full">
          <span className="basis-2/3">{selected.name}</span>
          <span className="flex">
            <img src={ChevronDown} alt="chevron-down" />
          </span>
        </Listbox.Button>
        <Listbox.Options>
          {options.map((o) => (
            <Listbox.Option key={o.id} value={o}>
              {o.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

Select.defaultProps = {
  className: "",
};

export default Select;

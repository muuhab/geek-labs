import React, { useState } from 'react';
import Select, { components } from 'react-select';
import Check from '../../assets/check.png'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const { Option } = components;
const IconOption = props => (
    <Option  {...props} >
        <div className='flex flex-row items-center gap-2'>
        <img
            src={Check}
            className='size-[20px]'
            />
            {props.data.label}
            </div>
    </Option>
);
export default function App() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="App">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                components={{ Option: IconOption }}
                classNames={{
                    menuList: () => 'bg-main-light rounded-[8px] px-[12px] text-[14px] leading-[20px] placeholder:text-[#414141] m-[-2px] border border-border ',
                    valueContainer:()=>'bg-main-light rounded-[8px] border-black m-[-5px] overflow-hidden',
                    dropdownIndicator:()=>'bg-main-light rounded-[8px] border-none  outline-none ring-0 ring-offset-0 border-black m-[-1px]',
                    indicatorsContainer:()=>'border-none outline-none outline-0 ring-0 bg-main-light rounded-[8px] border-black ',
                    menu:()=>'bg-main-light '
                   
                }}
            />
        </div>
    );
}
import {ChangeEvent, JSX} from "react";

interface Props {
    label: string;
    icon: JSX.Element | JSX.Element[],

    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: boolean,
}

export default function Checkbox({label,icon,value,onChange}: Props) {
    return (
        <div className="form-item">
            <div className='label'>
                {icon}
                <label className='ml-2' htmlFor={label}>{label}</label>
            </div>
            <label className="inline-flex items-center cursor-pointer w-full mt-2 pl-8">
                <input id={label} type="checkbox" checked={value} onChange={e => onChange(e)} className="sr-only peer"/>
                <div
                    className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            </label>
        </div>
    );
}

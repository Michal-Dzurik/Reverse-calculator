import {ChangeEvent, JSX} from "react";

interface Props {
    label: string;
    icon: JSX.Element | JSX.Element[],
    children: string | JSX.Element | JSX.Element[],

    onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
    value: string,
}

export default function Select({label,icon,children,value,onChange}: Props) {
    return (
        <div className="form-item">
            <div className='label'>
                {icon}
                <span className='ml-2'>{label}</span>
            </div>
            <select className="select" onChange={e => onChange(e)} value={value}>
                {children}
            </select>
        </div>
    );
}

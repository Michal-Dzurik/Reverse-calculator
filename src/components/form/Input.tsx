import {ChangeEvent, JSX} from "react";

interface Props {
    label: string;
    icon: JSX.Element | JSX.Element[],
    hint: string;
    type: string;

    max?: number;
    min?: number;

    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: number | null,
}

export default function Input({label,icon,hint,max,min,value,type,onChange}: Props) {
    return (
        <div className="form-item">
            <div className='label'>
                {icon}
                <span className='ml-2'>{label}</span>
            </div>
            <input className='input' max={max} min={min} type={type} value={value || ''} onChange={e => onChange(e)} placeholder={hint}/>
        </div>
    );
}

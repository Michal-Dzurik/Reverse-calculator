import {ArrowUp01, Blend, Gauge, Puzzle, Sigma} from "lucide-react";
import {FormEvent, useState} from "react";
import Select from "../components/form/Select.tsx";
import Input from "../components/form/Input.tsx";

export default function Calculator() {
    const [complexity, setComplexity] = useState<string>('');
    const [mode, setMode] = useState<string>('');

    const [number, setNumber] = useState<number|null>(null);
    const [maxOperands, setMaxOperands] = useState<number|null>(5);
    const [maxPolynome, setMaxPolynome] = useState<number|null>(1);

    const handleOnSubmit = function (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <>
            <h1 className='heading text-3xl mb-5'>Calculator</h1>
            <form onSubmit={handleOnSubmit}>

                <Input label={"Result"} icon={<Sigma/>} hint={"None"} type={'number'} value={number} onChange={(e) => {
                    setNumber(e.target.value.trim() !== '' ? parseInt(e.target.value, 10) : null);
                }}/>

                <Select label='Mode' icon={<Blend/>} value={mode} onChange={(e) => {
                    setMode(e.target.value);
                }}>
                    <option selected>None</option>
                    <option value='number'>Numbers only</option>
                    <option value='quadratic'>Quadratic</option>
                </Select>

                <Select label='Complexity' icon={<Gauge/>} value={complexity} onChange={(e) => {
                    setComplexity(e.target.value);
                }}>
                    <option selected>None</option>
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </Select>

                <Input label={"Max polynome"} icon={<ArrowUp01/>} min={1} max={10} hint={""} type={'number'} value={maxPolynome} onChange={(e) => {
                    setMaxPolynome(e.target.value.trim() !== '' ? parseInt(e.target.value, 10) : null);
                }}/>

                <Input label={"Max operands"} icon={<Puzzle/>} min={2} max={20} hint={""} type={'number'} value={maxOperands} onChange={(e) => {
                    setMaxOperands(e.target.value.trim() !== '' ? parseInt(e.target.value, 10) : null);
                }}/>
                <button type="submit">😋 Gimme that stuff!</button>
            </form>
        </>
    );
}

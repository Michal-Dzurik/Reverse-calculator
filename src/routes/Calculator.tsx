import {ArrowUp01, Blend, Gauge, Puzzle, Sigma} from "lucide-react";
import {FormEvent, useState} from "react";
import Select from "../components/form/Select.tsx";
import Input from "../components/form/Input.tsx";
import {reverseCalculate} from "../untils/utils.ts";

export default function Calculator() {
    const [complexity, setComplexity] = useState<string>('low');
    const [mode, setMode] = useState<string>('numbers');

    const [number, setNumber] = useState<number|null>(0);
    const [maxOperands, setMaxOperands] = useState<number|null>(5);
    const [maxPolynome, setMaxPolynome] = useState<number|null>(1);

    const [output, setOutput] = useState<string>('');

    const handleOnSubmit = function (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setOutput(reverseCalculate(number || 0,maxOperands || 2,maxPolynome || 1,mode,complexity))
    }

    return (
        <>
            <h1 className='heading text-3xl mb-5'>Calculator</h1>
            <form onSubmit={handleOnSubmit}>

                <Input label={"Result"} icon={<Sigma/>} hint={"None"} type={'number'} value={number} onChange={(e) => {
                    setNumber(e.target.value.trim() !== '' ? parseFloat(e.target.value) : null);
                }}/>

                <Select label='Mode' icon={<Blend/>} value={mode} onChange={(e) => {
                    setMode(e.target.value);
                }}>
                    <option selected disabled hidden>None</option>
                    <option value='number'>Numbers only</option>
                    <option value='variables'>With Variable</option>
                </Select>

                <Select label='Complexity' icon={<Gauge/>} value={complexity} onChange={(e) => {
                    setComplexity(e.target.value);
                }}>
                    <option selected disabled hidden>None</option>
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </Select>

                <Input label={"Max polynome"} icon={<ArrowUp01/>} min={1} max={10} hint={""} type={'number'} value={maxPolynome} onChange={(e) => {
                    setMaxPolynome(e.target.value.trim() !== '' ? parseFloat(e.target.value) : null);
                }}/>

                <Input label={"Max operands"} icon={<Puzzle/>} min={2} max={20} hint={""} type={'number'} value={maxOperands} onChange={(e) => {
                    setMaxOperands(e.target.value.trim() !== '' ? parseFloat(e.target.value) : null);
                }}/>
                <button type="submit">😋 Gimme that stuff!</button>

                <article className=''>
                    { output !== '' ? (
                        output
                    ) : ''}
                </article>
            </form>
        </>
    );
}

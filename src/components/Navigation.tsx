import {Link} from "react-router-dom";
import {Calculator, Info} from "lucide-react";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>
                        <Info className='m-auto'/>
                        <span className='text-sm'>About</span>
                    </Link>
                </li>
                <li>
                    <Link to='/calculator'>
                        <Calculator className='m-auto'/>
                        <span className='text-sm'>Calculator</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

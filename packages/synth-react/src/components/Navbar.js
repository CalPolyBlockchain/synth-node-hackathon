import React from 'react';
import Logo from './Logo';
// import { ReactComponent as Logo } from '../../public/synth-logo.svg';
const nav_items = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Features',
        path: '#features',
    },
    {
        name: 'FAQ',
        path: '#faq',
    }
];

function NavItem(props) {
    return (
        <div className='px-4' key={props.i}>
            <div className="bg-yellow rounded-2xl nav-stack  hover:bg-opacity-70">
                <div className="bg-blue nav-stack  hover:bg-opacity-70">
                    <div className="bg-pink nav-stack text-center  hover:bg-opacity-70">
                        <p className="pt-1">{props.text}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}





export default function Navbar(props) {
    return (
        <div className="flex flex-auto text-white items-center justify-between p-4" >
            {/* NAV BAR LOGO  */}
                <Logo />
            {/* NAV BAR ITEMS */}
            
            <div className="flex flex-row items-center item justify-between p-3">
                {nav_items.map((item,i) => (
                
                    <NavItem text={item.name} i={i} />
                ))}
            </div>
            {/* OPEN APP BUTTON */}
            <button className='bg-transparent m-2  hover:bg-pink text-pink font-semibold hover:text-purple py-2 px-4 border border-pink hover:border-transparent rounded-2xl'>
                Launch app</button>
        </div>
    );
}

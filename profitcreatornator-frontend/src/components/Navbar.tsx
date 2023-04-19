import { Tab, Tabs, Divider } from '@mui/material';
import { TemplateIcon, ChartPieIcon, LibraryIcon, IdentificationIcon, BookmarkAltIcon, AdjustmentsIcon, LogoutIcon } from '@heroicons/react/outline';

interface NavbarProps {
    active: string
}

export default function Navbar({active}: NavbarProps) {

    var activeClass = "bg-gray-700 text-white flex items-center p-2 rounded-lg";
    var inactiveClass = " text-gray-400 flex items-center p-2 rounded-lg hover:bg-gray-600"

    return (
        <div className="sticky top-0 px-3 py-4 bg-gray-800 border-r" style={{width:'300px', height:'100vh', zIndex:1}}>
            <a href="/dashboard" className="flex items-center">
                <img src={"/logo.png"} alt="Logo" style={{height:'70px', marginBottom:'20px'}}/>
            </a>
            <ul className="font-medium">
                <li className="mb-4">
                    <a href="/dashboard" className={active === "Dashboard" ? activeClass : inactiveClass}>
                        <TemplateIcon className='w-6 h-6' />
                        <h1 className="ml-3">Dashboard</h1>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="/portfolio" className={active === "Portfolio" ? activeClass : inactiveClass}>
                        <IdentificationIcon className='w-6 h-6' />
                        <h1 className="flex-1 ml-3 whitespace-nowrap">Portolio</h1>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="/analytics" className={active === "Analytics" ? activeClass : inactiveClass}>
                        <ChartPieIcon className='w-6 h-6' />
                        <h1 className="flex-1 ml-3 whitespace-nowrap">Analytics</h1>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="/optionMarket" className={active === "Marketplace" ? activeClass : inactiveClass}>
                        <LibraryIcon className='w-6 h-6' />
                        <h1 className="flex-1 ml-3 whitespace-nowrap">Marketplace</h1>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className={active === "Watchlist" ? activeClass : inactiveClass}>
                        <BookmarkAltIcon className='w-6 h-6' />
                        <h1 className="flex-1 ml-3 whitespace-nowrap">Watchlist</h1>
                    </a>
                </li>
                <Divider className="mb-4 bg-slate-400" />
                <li className="mb-4">
                    <a href="#" className={active === "Settings" ? activeClass : inactiveClass}>
                        <AdjustmentsIcon className='w-6 h-6' />
                        <h1 className="flex-1 ml-3 whitespace-nowrap">Settings</h1>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="/login" className={active === "Logout" ? activeClass : inactiveClass}>
                        <LogoutIcon className='w-6 h-6' />
                        <h1 className="flex-1 ml-3 whitespace-nowrap">Logout</h1>
                    </a>
                </li>
            </ul>
        </div>
    )
}
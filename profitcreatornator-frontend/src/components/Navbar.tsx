import styles from "../styles/Navbar.module.scss";
import { Tab, Tabs, Divider } from '@mui/material';
import { TemplateIcon, ChartPieIcon, LibraryIcon, IdentificationIcon, BookmarkAltIcon, AdjustmentsIcon, LogoutIcon } from '@heroicons/react/outline';

interface NavbarProps {
    active: string
}

export default function Navbar({active}: NavbarProps) {

    var activeClass = "bg-purple-800 flex items-center p-2 rounded-lg text-white";
    var inactiveClass = "flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"

    return (
        <div className="sticky top-0 px-3 py-3 overflow-y-auto bg-white border" style={{width:'300px', height:'100vh', zIndex:1}}>
            <a href="/dashboard" className="flex items-center mb-4">
                <img src={"/logo.png"} className="w-39 h-16" alt="Logo" />
            </a>
            <Divider className="mb-4" />
            <ul className="font-medium text-grey-900 dark:text-gray-300">
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
                <Divider className="mb-4" />
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
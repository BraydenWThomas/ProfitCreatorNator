import styles from "../styles/Navbar.module.scss";
import { Tab, Tabs, Divider } from '@mui/material';
import { TemplateIcon, ChartPieIcon, LibraryIcon, IdentificationIcon, BookmarkAltIcon, AdjustmentsIcon, LogoutIcon } from '@heroicons/react/outline';

export default function Navbar() {

    return (
        <div className="px-3 py-3 overflow-y-auto bg-white border" style={{width:'600px', height:'100vh', zIndex:1}}>
            <a href="/dashboard" className="flex items-center mb-4">
                <img src={"/logo.png"} className="w-39 h-16" alt="Logo" />
            </a>
            <Divider className="mb-4" />
            <ul className="font-medium text-grey-900 dark:text-gray-300">
                <li className="mb-4">
                    <a href="/dashboard" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <TemplateIcon className='w-6 h-6' />
                        <h1 className="ml-3">Dashboard</h1>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <IdentificationIcon className='w-6 h-6' />
                        <h1 className="flex-1 ml-3 whitespace-nowrap">Portolio</h1>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="/analytics" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <ChartPieIcon className='w-6 h-6' />
                        <h1 className="flex-1 ml-3 whitespace-nowrap">Analytics</h1>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <LibraryIcon className='w-6 h-6' />
                        <h1 className="flex-1 ml-3 whitespace-nowrap">Marketplace</h1>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <BookmarkAltIcon className='w-6 h-6' />
                        <h1 className="flex-1 ml-3 whitespace-nowrap">Watchlist</h1>
                    </a>
                </li>
                <Divider className="mb-4" />
                <li className="mb-4">
                    <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <AdjustmentsIcon className='w-6 h-6' />
                        <h1 className="flex-1 ml-3 whitespace-nowrap">Settings</h1>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="/login" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <LogoutIcon className='w-6 h-6' />
                        <h1 className="flex-1 ml-3 whitespace-nowrap">Logout</h1>
                    </a>
                </li>
            </ul>
        </div>
    )
}
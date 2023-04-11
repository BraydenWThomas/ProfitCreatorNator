
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SettingsIcon from '@mui/icons-material/Settings';

import Image from 'next/image'

import pcn from '../logo.png';
import styles from '../styles/navbar.module.css';
import { SetStateAction, useState } from "react";
import { Tab, Tabs } from '@mui/material';

export default function Navbar() {
    const [value, setValue] = useState(0);

    const handleChange = (event: any, newValue: SetStateAction<number>) => {
        setValue(newValue);
      };

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Image src={pcn} alt="logo" height={80} width={160}/>
            </div>
            <div className={styles.links}>
                <Tabs orientation='vertical' sx={{width:'100%'}} value={value} onChange={handleChange} TabIndicatorProps={{ color:'#e7833a', sx: { left: 0, width: 7} }}>
                    <Tab sx={{alignSelf:'start'}}
                        icon={<DashboardIcon />} iconPosition="start"   
                        href='/dashboard'
                        label="Dashboard"
                    />
                    <Tab sx={{alignSelf:'start'}}
                        icon={<AccountBalanceWalletIcon />} iconPosition="start"
                        href='/portfolio'
                        label="Portfolio"
                    />
                    <Tab sx={{alignSelf:'start'}}
                        icon={<AnalyticsIcon />} iconPosition="start"
                        label="Analysis"
                    />
                    <Tab sx={{alignSelf:'start'}}
                        icon={<AccountBalanceIcon />} iconPosition="start"
                        label="Marketplace"
                    />
                    <Tab sx={{alignSelf:'start'}}
                        icon={<MarkEmailUnreadIcon />} iconPosition="start"
                        label="Notifications"
                    />
                    <Tab sx={{alignSelf:'start'}}
                        icon={<PlaylistAddIcon />} iconPosition="start"
                        label="Watchlist"
                    />
                    <Tab sx={{mt:35, alignSelf:'start'}}
                        icon={<SettingsIcon />} iconPosition="start"
                        label="Settings"
                    />
                    <Tab sx={{alignSelf:'start'}}
                        icon={<LogoutIcon />} iconPosition="start"
                        label="Logout"
                    />
                </Tabs>
            </div>
        </div>
    )
}
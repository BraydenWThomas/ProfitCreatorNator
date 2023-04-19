import React from 'react'
import { useTheme } from "next-themes";
import { Toggle, ToggleItem } from '@tremor/react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';


const themeToggle = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
            <Toggle color='zinc' defaultValue="1" onValueChange={() => theme == "dark" ? setTheme('light') : setTheme("dark")}>
                <ToggleItem value="1" text="Light" icon={SunIcon} />
                <ToggleItem value="2" text="Dark" icon={MoonIcon} />
            </Toggle>
    )
}

export default themeToggle;
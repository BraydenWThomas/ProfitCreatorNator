import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { Flex, Icon, Metric, Title, Toggle, ToggleItem } from '@tremor/react'
import ThemeToggle from './themeToggle';

type HeaderProps = {
  title: string
}
export default function Header({ title }: HeaderProps) {

  return (
    <div className="w-screen border-b bg-white" style={{ height: '90px' }}>
      <Flex style={{ paddingTop: '30px' }}>
        <Metric className='ml-6' style={{ fontSize: '60px' }}>{title}</Metric>
        <div style={{ paddingRight: 40 }}>
        <ThemeToggle/>
        </div>
      </Flex>
    </div>
  );

}
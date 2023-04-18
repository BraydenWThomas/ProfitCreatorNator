import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { Flex, Icon, Metric, Toggle, ToggleItem } from '@tremor/react'

type HeaderProps = {
  title: string
}
export default function Header({ title }: HeaderProps) {
  const themeChanger = () => {
    return(
          <Toggle color='zinc' defaultValue="1" onValueChange={(value) => console.log(value)}>
            <ToggleItem value="1" text="Light" icon={SunIcon} />
            <ToggleItem value="2" text="Dark" icon={MoonIcon} />
          </Toggle>
    )
  }

  return (
    <div className="w-screen border" style={{ height: '130px' }}>
      <Flex style={{ paddingTop: '50px' }}>
        <Metric className='ml-2' style={{ fontSize: '80px' }}>{title}</Metric>
        <div style={{ paddingRight: 40 }}>
          {themeChanger()}
        </div>
      </Flex>
    </div>
  );

}
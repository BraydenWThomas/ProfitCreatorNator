import { Metric } from '@tremor/react'

type HeaderProps = {
  title: string
}
export default function Header({ title }: HeaderProps)  {

    return (
        <div className="w-screen bg-white border" style={{ height: '130px' }}>
            <Metric className='ml-2' style={{fontSize:'80px', paddingTop:"50px"}}>{title}</Metric>
        </div>
     );
     
    }
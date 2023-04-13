import { Metric } from '@tremor/react'

export default function Header() {

    return (
        <div className="w-screen bg-white border" style={{ height: '130px' }}>
            <Metric className='ml-2' style={{fontSize:'80px', paddingTop:"50px"}}>Dashboard</Metric>
        </div>
    )
}
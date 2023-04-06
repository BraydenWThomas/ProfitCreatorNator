import '../transaction.css'

import Image from 'next/image'
export default function Balance() {
  const props = {
    type: "Earnings",
    value: "$350.40"
  }
  const prop = ["Google", "Holi", "Microsoft"]
  return (
    <main className="pageStyle" style={{ width: "20%" }}>

      <div className="recentTransactionBox">
    <div style={{display: "flex", padding: "5%"}}>
      <Image style={{paddingTop: "15%", paddingRight: "10%"}}
            src="/next.svg"
            alt="Vercel Logo"

            width={100}
            height={24}
            priority
          />


          <div ><h3>{props.type}</h3>
          <h1 style={{color: "black"}}>{props.value}</h1>
          </div>
      


          </div>
       
      </div>
    </main>
  )
}
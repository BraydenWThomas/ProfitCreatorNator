import '../transaction.css'
import Image from 'next/image'

export default function ExchangeBox(props: { value: string }) {
   
    return (
      <main className="pageStyle" style={{width: "100%"}}>
      
      <div className="recentTransactionBox">
    
      <h3>{props.value}</h3>
      <Image style={{paddingTop: "15%", paddingRight: "10%"}}
            src="/vercel.svg"
            alt="Vercel Logo"

            width={100}
            height={30}
            priority
          />
     
     
  

      </div>
    </main>
    )
  }
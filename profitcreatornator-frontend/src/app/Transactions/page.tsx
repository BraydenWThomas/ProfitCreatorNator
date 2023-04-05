import '../transaction.css'
export default function Transactions() {
  const prop = ["Google","Holi","Microsoft"]
    return (
      <main className="pageStyle" style={{width: "20%"}}>
        <h2>Recent Transactions</h2>
      <div className="recentTransactionBox">
    
      <ul style={{listStyleType: "none"}}>
      {prop.map((transaction) => (
         <li>
        {transaction}
         </li>
         
          
          
        ))}
     
     
  
    </ul>
      </div>
    </main>
    )
  }
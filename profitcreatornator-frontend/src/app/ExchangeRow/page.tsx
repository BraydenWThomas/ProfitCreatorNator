
import ExchangeBox from '../ExchangeBox/page'

export default function ExchangeRow() {
  const names = ["Google","Holi","Microsoft"]
    return (
    
    
      <ul style={{listStyleType: "none", paddingLeft: "0px", display: "flex", width: "100%"}}>
      {names.map((transaction) => (
         <li style={{width: "20%",marginRight: "5%"}} >
        <ExchangeBox value={transaction} />
         </li>
         
          
          
        ))}
     
     
  
    </ul>
     
    )
  }
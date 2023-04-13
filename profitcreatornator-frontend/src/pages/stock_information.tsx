import StockInfoList from "@/components/StockInfo/StockInfoList";
import StockPriceCard from "@/components/StockInfo/StockPriceCard"
export default function stock_information(){
    return(
        <div>
            <StockPriceCard 
            symbol="CBA" 
            deltaType="moderateIncrease"
            isIncreasePositive={true}
            stockPrice="$ 174.93"/>
            <StockInfoList 
            marketCap="572.187B" 
            previousClose="187.23"
            open="190.78"
            volume="148,418,050"
            dayRange="180.31 - 191.58"/>
        </div>
    );
}
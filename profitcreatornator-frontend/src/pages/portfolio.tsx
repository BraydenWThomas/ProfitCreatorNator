import StatBox from "@/components/Portfolio/StatBox";
import { CashIcon } from "@heroicons/react/outline";
import {ChartBarIcon} from  "@heroicons/react/outline";
import {ClockIcon} from  "@heroicons/react/outline";

export default function portfolio() {
    return(
        <div>
            <StatBox icon={CashIcon} 
            title={"Profit"} 
            total={"$834.95"}
            color="amber"/>
            <StatBox icon={ChartBarIcon} 
            title={"Earnings"} 
            total={"$350.51"}
            color="rose"/>
            <StatBox icon={ClockIcon} 
            title={"Pending Options"} 
            total={"4"}
            color="stone"/>
        </div>
    );
}
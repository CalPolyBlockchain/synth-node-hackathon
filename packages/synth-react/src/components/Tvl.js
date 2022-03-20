import StackedWrapper from '../components/StackedWrapper';
import CurrentPool from './CurrentPool';
import UserPositions from './UserPositions';
import format_tvl from '../functions/formating';

export default function Tvl(props) {
    return(
        <div className="m-10">
        <StackedWrapper>
            <div className="m-6 text-white text-center">
                <div className="text-4xl pb-4">
                    <p>TVL: {()=> format_tvl(props.stats.tvl_usd)}</p>
                </div>
                <p className="text-2xl">24h vol. {props.stats.vol_24h}</p>
                
                <p> Total Interest Earned : ${props.stats.total_interest}</p>
                </div>
                <div className="grid grid-cols-2 content-center">
                    <CurrentPool {...props.current_pool}/>
                    <UserPositions {...props.user}/>
                </div>

        </StackedWrapper>
        </div>
    );
}
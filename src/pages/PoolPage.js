import pool_data from '../pool_data';
import user_data from '../user_data';
import PoolBox from '../components/PoolBox';
import Tvl from '../components/Tvl';
export default function PoolPage(props) {

    return (
        <div className="m-6">


        <Tvl {...pool_data} user={user_data}/>
        {/* LIST OF POOLS TO DEPOSIT INTO */}
        
        <div className="">
        {pool_data.pools.map((pool, i) => {
            return ( <PoolBox key={i} {...pool} /> );
        })}
        </div>

        {/* YOUR ASSETS */}
        </div>
    );
}
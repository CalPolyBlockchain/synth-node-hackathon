import pool_data from '../pool_data';
import PoolBox from '../components/PoolBox';
import Tvl from '../components/Tvl';
export default function PoolPage(props) {

    return (
        <div className=" m-6">



        <Tvl {...pool_data.stats}/>
        {/* LIST OF POOLS TO DEPOSIT INTO */}
        {pool_data.pools.map((pool, i) => {
            return ( <PoolBox key={i} {...pool} /> );
        })}

        {/* YOUR ASSETS */}
        </div>
    );
}
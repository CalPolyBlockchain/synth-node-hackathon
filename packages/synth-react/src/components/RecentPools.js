export default function RecentPools(props) {
    return (
        <div>
            <p> Recent Pools</p>
            <div className="rounded-2xl p-3 m-3  text-white ">
                <div>
                    {/* create list of recent pools */}
                    {props.previous_pools.map((pool, i) => {
                        return (
                            <div key={i} className="flex flex-center bg-white bg-opacity-40 m-2  p-3 rounded-2xl">
                                <div className="flex flex-col px-2">
                                    <p>{pool.name}</p>
                                    {/* <p>name</p> */}
                                    <img src={`./tokens/asset_${props.symbol}.png`} alt=''/>
                                </div>
                                <div className="flex flex-col px-2">
                                    <p>{pool.duration}</p>
                                    <p>duration</p>
                                </div>
                                <div className="flex flex-col px-2">
                                    <p>{pool.avg_apr}%</p>
                                    <p>avg. apr</p>
                                </div>
                                <div className="flex flex-col px-2">
                                    <p>{pool.interest_accumulated}</p>
                                    <p>interest accum.</p>
                                </div>
                            </div>
                        )
                    })};
                </div>
            </div>
        </div>
    );
}
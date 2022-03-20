const pool_data = {
    stats:
        {
            tvl_usd: 1048930.22,
            tvl_change: 0.00,

            tvl_change_percent: 0.00,
            vol_24h: 10344.00,
            
            
            total_interest: 2312,
        },
        current_pool:{
            name: "Cusdt - CUSD",
            symbol: "CUSD",
            age: "1d",
            apr: "8.50",
        },
    pools:[
        {
            name: "UST (Allbridge)",
            symbols : ["cUSD","UST"],
            total_deposited: "$1,808,004",
            weekly_volume: "$1,813",
            apr: 0.279,
            tvl: 738040.33,
        },
        {
            name: "USDC (Optics V2)",
            symbols : ["cUSD","UST"],
            total_deposited: "$1,808,004",
            weekly_volume: "$1,813",
            apr: 0.279,
            tvl: 33330.00,
        },
        {
            name: "DAI (Optics V2)",
            symbols : ["cUSD","DAI"],
            total_deposited: "$2,880,004",
            weekly_volume: "$1,333",
            apr: 0.232,
            tvl: 1000000.00,
        }
    ]
}
export default pool_data;
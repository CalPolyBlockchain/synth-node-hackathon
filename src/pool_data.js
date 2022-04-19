const pool_data = {
    stats:
    {
        tvl_usd: 1048930.22,
        tvl_change: 0.00,
        tvl_change_percent: 0.00,
        vol_24h: 10344.00,
        total_interest: 2312,
    },
    current_pool: {
        name: "Cusdt - CUSD",
        symbol: "cUSD",
        duration: "1d",
        apr: "8.50",
    },
    bubble_data: {
        mobi_pools: [
            {
                "name": "UST (Allbridge)",
                "apr": "24.6% APR",
                "pair": ['cUSD' ,'UST'],
                "volume": "up to 39.5% w/ boost"
            },
            {
                "name": "USDC (Optics V2)",
                "apr": "19.9% APR",
                "pair": ['cUSD', 'cUSDC'],
                "volume": "up to 32.4% w/ boost"
            },
            {
                "name": "DAI (Optics V2)",
                "apr": "19.7% APR",
                "pair": ['cUSD','DAI'],
                "volume": "up to 25.5% w/ boost"
            },
           
        ]
    },

    previous_pools: [
        {
            name: "USDC (Optics V2",
            avg_apr: "8.99",
            interest_accumulated: "34.55",
            duration: "1d",
        },
        {
            name: "USDC (Optics V2",
            avg_apr: "8.99",
            interest_accumulated: "34.55",
            duration: "1d",

        },
        {
            name: "USDC (Optics V2",
            avg_apr: "8.99",
            interest_accumulated: "34.55",
            duration: "1d",

        },
        {
            name: "USDC (Optics V2",
            avg_apr: "8.99",
            interest_accumulated: "34.55",
            duration: "1d",

        }
    ],

    pools: [



        {
            name: "UST (Allbridge)",
            symbols: ["cUSD", "UST"],
            total_deposited: "$1,808,004",
            weekly_volume: "$1,813",
            apr: 0.279,
            tvl: 738040.33,
        },
        {
            name: "USDC (Optics V2)",
            symbols: ["cUSD", "UST"],
            total_deposited: "$1,808,004",
            weekly_volume: "$1,813",
            apr: 0.279,
            tvl: 33330.00,
        },
        {
            name: "DAI (Optics V2)",
            symbols: ["cUSD", "DAI"],
            total_deposited: "$2,880,004",
            weekly_volume: "$1,333",
            apr: 0.232,
            tvl: 1000000.00,
        }
    ],
    // stitch_0: {
    //     mobi_pools: 
    //         pools
    // }
}
export default pool_data;
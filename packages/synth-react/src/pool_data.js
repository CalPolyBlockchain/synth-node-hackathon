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
            name: "Synth",
            assets : [
                {
                    name: "ETH",
                    balance: 5.21,
                    
                },
                {
                    name: "DAI",
                    balance: 300.02,
                },
            ],
            description: "A stablecoin that can be used to buy and sell on the Ethereum blockchain.",
            apr: "0.00%",
            tvl: 1000000.00,
        }
    ]
}
export default pool_data;
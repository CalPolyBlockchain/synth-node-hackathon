import { FaClock, FaRandom, FaRegMoneyBillAlt, FaBroadcastTower, FaCoins, FaMobile, FaCompactDisc, } from "react-icons/fa";

const icon_class = "text-white text-3xl md:text-4xl";
const gateway_icon_class = " text-3xl md:text-4xl";




export const home_page_text = {
    hero_section1: {
        "main": "Simplified yield diversification and aggregation",
        "button_text": "Join Waitlist"
    },
   
    stack_section: {
        main: " Start capitalizing on your stablecoin assets",
        secondary: "Earn Astonishing APY on USDC, UST and more",
        filled_box: {
            color: 'purple',
            text: 'Synth savings has no minimum deposits, account freezes, or signup requirements - it can be used by anyone in the world with access to the internet.'
        },
        apy_text: [
            '  ',
            ' 10-20% APR at your fingertips'
        ]
    },

    filled_boxes: [
        {
            main: 'unstake at any time',
            emoji: '📈',
            color: 'purple'
        },
        {
            main: '“Cross chain deposit support”',
            secondary: 'Utilizing the lowest stable coin swaps to provide you the highest constant APY',
            emoji: '🔀',
            color: 'blue'
        },
        {
            main: 'Capitalizing on the power of compound interest',
            emoji: '💸',
            color: 'yellow'
        },
    ],
    outlined_boxes: [
        {
            main: '“Asolutely no market risk”',
            secondary: 'No liquidation risk, fixed interest rate, 100x traditional savings account interest rate',
            emoji: '📈',
            color: 'pink'
        },
        {
            main: '“Automated Pool Swaps”',
            secondary: 'Utilizing the highest yielding stablecoin pool to consistently deliver the highest APY',
            emoji: '👀',
            color: 'pink'
        },

    ],

    

    hero_section2: {
        main: "Reimagine Yield Farming",
        secondary: " Simply deposit your Defi Assets and begin earning between",
        gradient_text: "10% - 20% APR",
        button_text: "Launch App",
        boxes: [
            {
                text: "Unstake  at any time",
                icon: (<FaClock className={gateway_icon_class} />),
            },
            {
                text: "Cross chain deposit support",
                icon: (<FaRandom className={gateway_icon_class} />),
            },
            {
                text: "Capitalizing on the power of compound interest",
                icon: (<FaRegMoneyBillAlt className={gateway_icon_class} />),

            },

        ]
    },

    hero_section3: {
        main: "Gateways Galore",
        secondary: "Use our various gateways, to deposit, withdraw, and manage your stablecoin yields",


        boxes: [
            {
                main: "USSD",
                secondary: "Use your mobile phone to deposit and withdraw your stablecoin assets, even without data or internet access",
                icon: (<FaBroadcastTower className={icon_class} />),
                button_text: "view guide",
                button_color : "blue"
            },
            {
                main: "Mobile App",
                secondary: "alternativly, use our mobile app's simple dashboard to manage your assets",
                icon: (<FaMobile className={icon_class} />),
                button_text: "learn more",
                button_color : "pink"
            },
            {
                main: "Web App",
                secondary: "Connect with valora, metamask and other browser bassed wallets to simplify your yield management",
                icon: (<FaMobile className={icon_class} />),
                button_text: "launch app",
                button_color : "blue"
            },
        ],

    },
    apps:[
        {name:"ubeswap", description:"The mobile-first deFi exchange,Swaping and yeild solution", img_src:"./home/ubeswap.png"} ,
        {name:"mobius" , description:"Celos first cross-chain stableswap exchange", img_src:"./home/mobius.png"} ,
        {name:"pinnata", description:"leverage provider and yield farming pools ", img_src:"./home/pinnata.png"},
        {name:"moolaMarkets", description:"Democratizing access to credit and yield", img_src:"./public/home/moolaMarkets.png"},
    ],


            team : [
                {
                    emoji: '👲🏽',
                    name: "J. Kell",
                    roles: [
                        "Full Stack",
                        "Blockchain Dev",
                    ]

                },
                {
                    emoji: '👲🏽',
                    name: "M. Moha",
                    roles: [
                        "Full Stack",
                        "Blockchain Dev",
                    ]

                },
                {
                    emoji: '👲🏽',
                    name: "M. Bett",
                    roles: [
                        "Tech Writer",
                        "Blockchain Dev",
                    ]

                },

            ],

            // LABELED AS q and a respec.
            faq: [
                {
                    q: 'Why should I use Synth to manage my ?',
                    a: "",
                },
            ],
    
}
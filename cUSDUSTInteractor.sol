//cUSD/UST Address: 0x9F4AdBD0af281C69a582eB2E6fa2A594D4204CAe
//Mastermind Address: 0x107f94409746e8c8e6eff139a100d17d9ca7fdfe
//Vyper Address: 0x5f0200ca03196d5b817e2044a0bb0d837e0a7823

interface cUSDUSTWrapper{
    //This adds liquidity to the pool
    //Amounts is a array with 2 numbers each being which token to deposit liquidity to
    function addLiquidity(uint256[2] memory amounts, uint256 minToMint, uint256 deadline) external;
    function removeLiquidity(uint256 amount, uint256[] memory minAmounts, uint256 deadline) external;
}

interface masterMindWrapper{
    function deposit(uint256 _amount) external;
}

interface vyperContractWrapper{
    function mint(address gauge_addr) external;
}

contract cUSDUSTInteractor{

    cUSDUSTWrapper cUSDUSTContract;
    masterMindWrapper masterMindContract;
    vyperContractWrapper vyperContract;

    constructor(
        address cUSDUSTAddr,
        address masterMindAddr,
        address vyperAddr //This is the contract that has mint in it, it's named Vyper_contract according to Block explorer
    ){
        cUSDUSTContract = cUSDUSTWrapper(cUSDUSTAddr);
        masterMindContract = masterMindWrapper(masterMindAddr);
        vyperContract = vyperContractWrapper(vyperAddr);
    }

    //Add liquidity to pool, this gives you MobLP Tokens
    function addLiqTocUSDUST(uint256 amount, uint256 minToMint, uint256 deadline) public {
        cUSDUSTContract.addLiquidity([amount, 0], minToMint, deadline);
    }
}

import StackedWrapper from '../components/StackedWrapper';

export default function Tvl(props) {
    return(
        <StackedWrapper>
            <div className="m-6">
                <div className="flex flex-wrap -mx-3 mb-6">
                    {/* <p>TVL: {props.tvl_usd}</p> */}
                </div>
                {/* <p>24h vol. {props.24h_vol}</p> */}
                </div>
        </StackedWrapper>
    );
}
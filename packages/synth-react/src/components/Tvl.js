import StackedWrapper from '../components/StackedWrapper';

function format_tvl(tvl) {
  if (tvl === null) {
    return '-';
  }
    tvl = tvl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return "$" +tvl;
}

export default function Tvl(props) {
    return(
        <div className="m-10">
        <StackedWrapper>
            <div className="m-6 text-white text-center">
                <div className="text-4xl pb-4">
                    <p>TVL: {format_tvl(props.tvl_usd)}</p>
                </div>
                <p className="text-2xl">24h vol. {props.vol_24h}</p>
                <p>Total Interest Earned : </p>
                <p>{props.total_int}</p>
                </div>

        </StackedWrapper>
        </div>
    );
}
// import { useState, useEffect } from 'react';
// import pool_data from '../pool_data';



// const table_data_temp = {
//     "pools": [
//         {
//             "name": "UBSWAP",
//             "portion": "0.00",
//             "balance": "0.00",
//         }]

//     "stitch_0": {
//         pools
// }


export default function StatsSection(props) {
    return (
        <div className="p-4 m-6 text-blac ">
                <div className="overflow-x-auto w-full justify-center rounded-3xl ">
                    <table className="table w-full self-center">
                        <thead className="">
                            <tr>
                                <th>
                                    <label>
                                        Assets
                                    </label>
                                </th>
                                <th>Platform</th>
                                <th>Apr</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <th className="">
                                    <label>

                                    </label>
                                </th>
                                {props.assets.map((asset, index) => {
                                 return (<td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={`./assets_${asset.name}.png`} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{asset.name}</div>
                                            <div className="text-sm opacity-50">{asset.portion}</div>
                                        </div>
                                    </div>
                                </td>)})};

                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>

                        </tbody>
                        <tfoot>
                        </tfoot>

                    </table>
                </div>
        </div>
    );


}
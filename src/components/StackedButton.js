import React from "react";

export default function StackedButton(props) {
    return (
        <div className="text-4xl mt-12 text-center">
            <div className="bg-yellow rounded-2xl stack-item  hover:bg-opacity-70 ">
                <div className="bg-blue stack-item  hover:bg-opacity-70">
                    <div className="bg-purple stack-item hover:bg-opacity-70">
                        <p className="py-10">{props.text}</p>
                
                </div>
                </div>
            </div>
        </div>
    );
}
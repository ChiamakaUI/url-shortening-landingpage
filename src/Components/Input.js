import React from "react";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className="input-container">
            <div className="inner">
                <input type="text" placeholder="Shorten a link here... " ref={ref} />
                <button className="shortenBtn" onClick={props.clickFunc}>
                    Shorten It!
                </button>
        </div>
        </div>
    );
});

export default Input;

import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const QRCodeBuilder = ({text}) => {
    return (
        <div style={{ background: 'white', padding: '16px' }}>
            <QRCode value={text} />
        </div>
    )
}

export default QRCodeBuilder
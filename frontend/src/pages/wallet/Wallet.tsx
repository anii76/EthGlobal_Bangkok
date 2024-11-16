import React from 'react';
import { Row, Col } from 'antd';

export default function Wallet() {
    return (
        <Row justify="center" align="middle" style={{ minHeight: "calc(100vh - 100px)", overflow: 'auto' }}>
            <Col>
                <div style={{ margin: '0 auto', display: 'block', padding: '50px 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <button className='button' onClick={() => alert('Hi')}>
                            Add wallet
                        </button>
                    </div>
                </div>
            </Col>
        </Row >
    );
}
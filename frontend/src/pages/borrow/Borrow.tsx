import React from 'react';
import { Row, Col } from 'antd';

export default function Borrow() {
    return (
        <Row justify="center" align="middle" style={{ minHeight: "calc(100vh - 100px)", overflow: 'auto' }}>
            <Col>
                <div style={{ margin: '0 auto', display: 'block', padding: '50px 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        Borrow
                    </div>
                </div>
            </Col>
        </Row >
    );
}
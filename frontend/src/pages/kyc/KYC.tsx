import { Card, Col, Row, Timeline } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import "./KYC.scss";

export default function KYC() {
    return (
        <Row justify="center" align="middle" style={{ minHeight: "calc(100vh - 100px)", overflow: 'auto' }}>
            <Col>
                <Timeline>
                    <Timeline.Item pending={true}>ID Verification</Timeline.Item>
                    <Timeline.Item>Face Scan</Timeline.Item>
                    <Timeline.Item>Complete</Timeline.Item>
                </Timeline>
                <div>
                    <Link to="/profile">
                        <span className='button'>
                            Go to Profile
                            <RightCircleOutlined style={{ fontSize: '24px', verticalAlign: 'middle', margin: '-2px 0 0 40px' }} />
                        </span>
                    </Link>
                </div>
            </Col>
        </Row >
    );
};

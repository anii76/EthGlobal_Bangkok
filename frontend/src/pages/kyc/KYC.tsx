import { Card, Col, Row, Timeline } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { createKintoSDK, KintoAccountInfo } from 'kinto-web-sdk';

import "./KYC.scss";
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { connectKinto } from 'src/app/reducers/kinto.reducer';

export default function KYC() {
    const dispatch = useAppDispatch();
    const kintoState = useAppSelector((state) => state.kinto);
    const kintoAccount = kintoState.account;

    const kintoSDK = createKintoSDK('');

    async function kintoLogin() {
        try {
            dispatch(connectKinto());
            //const info = await kintoSDK.connect();
            //console.log('info:', info);
            //await kintoSDK.createNewWallet();
        } catch (error) {
            console.error('Failed to login/signup:', error);
        }
    }

    async function kintoInfo() {
        try {
            //const info = await kintoSDK.connect();
            //console.log('info:', info);
        } catch (error) {
            console.error('Failed to login/signup:', error);
        }
    }

    return (
        <Row justify="center" align="middle" style={{ minHeight: "calc(100vh - 100px)", overflow: 'auto' }}>
            <Col>
                <div>
                    {kintoAccount ? (
                        <Card title="Account Info" style={{ width: 300 }}>
                            <p><b>{kintoAccount.walletAddress}</b></p>
                            <p>exists: {kintoAccount.exists}</p>
                            <p>approval: {kintoAccount.approval}</p>
                        </Card>
                    ) : (
                        <Card title="Account Info" style={{ width: 300 }}>
                            <p>Kinto not connected</p>
                        </Card>
                    )}
                </div>
                <div>
                    <button className='button' onClick={kintoLogin}>Login</button>
                    <button className='button' onClick={kintoInfo}>Info</button>
                </div>
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

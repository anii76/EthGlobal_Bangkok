import React from 'react';
import { Avatar, Progress, Typography, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default function Profile() {
    return (
        <div style={{ margin: '0 auto', display: 'block', padding: '50px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
                    <Avatar size={200} icon={<UserOutlined />} style={{ marginBottom: '20px', background: '#f0f0f0' }} />
                    <Title level={3}>Username</Title>
                </div>
                <div style={{ flex: '1 1 300px' }}>
                    <Title level={2}>Your Credit Score</Title>
                    <div style={{ textAlign: 'center', position: 'relative', width: '200px', height: '200px', margin: '0 auto' }}>
                        <Progress type="circle" percent={20} size={200} />
                        {/* <Title level={1} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                    20
                                </Title> */}
                    </div>
                    <Space direction="vertical" size="large" style={{ width: '100%', marginTop: '30px' }}>
                        <div>
                            <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#1890ff', marginRight: '10px' }}></span>
                            <Text>Banking Score</Text>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#ff4d4f', marginRight: '10px' }}></span>
                            <Text>Web3 Score</Text>
                        </div>
                        <div>
                            <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#52c41a', marginRight: '10px' }}></span>
                            <Text>KYC</Text>
                        </div>
                    </Space>
                </div>
            </div>
        </div>
    );
}
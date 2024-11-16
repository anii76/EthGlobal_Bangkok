import { useEffect } from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

import avatar from '@assets/avatar-1.svg';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { connectKinto, createNewWalletKinto } from 'src/app/reducers/kinto.reducer';

export default function LoginComponent() {
    const dispatch = useAppDispatch();
    const kintoState = useAppSelector((state) => state.kinto);
    const kintoAccount = kintoState.account;

    useEffect(() => {
        const interval = setInterval(() => {
            if (!kintoAccount) dispatch(connectKinto());
            else clearInterval(interval);
        }, 5000);

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div>
            {kintoAccount ?
                < Link to='/profile' style={{ cursor: 'pointer', color: '#000' }}>
                    <Avatar style={{ backgroundColor: '#000', boxShadow: '3px 3px 0px 0px #F5F300' }} icon={<img src={avatar} />} />
                    <span style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 0 10px' }}>{kintoAccount.walletAddress}</span>
                </Link> :
                <span className='button' onClick={() => dispatch(createNewWalletKinto())}>
                    Sign Up
                </span>
            }
        </div>
    );
};

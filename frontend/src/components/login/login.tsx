import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { connectKinto, createNewWalletKinto } from 'src/app/reducers/kinto.reducer';

export default function LoginComponent() {
    const dispatch = useAppDispatch();
    const kintoState = useAppSelector((state) => state.kinto);
    const kintoAccount = kintoState.account;

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(connectKinto());
        }, 5000);

        return () => clearInterval(interval);
    }, [dispatch]);

    function shortenEthereumAddress(address: string) {
        if (!address || address.length < 8) return address;
        const start = address.slice(0, 4);
        const end = address.slice(-4);
        return `${start}...${end}`;
    }

    return (
        <div>
            {kintoAccount ?
                < Link className='button' to='/profile'>
                    <span style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 0 10px' }}>{shortenEthereumAddress(kintoAccount.walletAddress!)}</span>
                </Link> :
                null
            }
            <span className='button' onClick={() => dispatch(createNewWalletKinto())} style={{ margin: '0 10px' }}>
                New wallet
            </span>
        </div>
    );
};

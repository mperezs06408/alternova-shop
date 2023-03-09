import { ReactComponent as EmptyWallet } from '@assets/empty-wallet.svg';

function ErrorWidget() {
    return(
        <div className='store__empty'>
            <EmptyWallet />
            <p>There's no products available right now :(.</p>
        </div>
    )
}

export default ErrorWidget;
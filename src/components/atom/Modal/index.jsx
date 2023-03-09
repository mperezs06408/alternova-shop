import { createPortal } from 'react-dom';
import Button from '@atoms/Button'
import './Modal.scss';

function Modal({
    orderNumber,
    onContinue
}) {
    return createPortal(
        <section className='modal'>
            <div className='modal__content'>
                <h1>Your order was created!</h1>
                <p>Order #{orderNumber} is in process, you will get it news soon!</p>
                <Button
                    label='Continue'
                    handleClick={onContinue}
                />
            </div>
        </section>
    ,
        document.getElementById('modal')
    )
}

export default Modal;
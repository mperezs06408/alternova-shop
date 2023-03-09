import { ReactComponent as MinusIcon } from '@assets/minus-svgrepo-com.svg';
import './RemoveButton.scss'

function RemoveButton({handleClick}){
    return(
        <button
            className='removeBtn'
            onClick={handleClick}
        >
            <MinusIcon />
        </button>
    )
}

export default RemoveButton
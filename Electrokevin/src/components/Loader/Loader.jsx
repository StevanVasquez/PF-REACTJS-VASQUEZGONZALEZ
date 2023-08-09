import Spinner from 'react-bootstrap/Spinner';
import './Loader.scss'

const Loader = () => {

    return (
        <div className='loader'>
            <Spinner animation="border" variant="secondary"/>
        </div>
    )
}

export default Loader
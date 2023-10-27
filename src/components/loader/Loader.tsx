import { Audio } from 'react-loader-spinner';
import "./loader.scss";
const Loader: React.FC = () => {
    return (
        <div className='loader'>
            <Audio
                height={80}
                width={80}
                color="green"
                ariaLabel="loading"
            />
        </div>
    );
};

export default Loader;

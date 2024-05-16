
import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { GoBook } from "react-icons/go";

const Card = ({card, handleSelect}) => {
    const {title, cover, price, credit_hours, details} = card;
    return (
        <div className='rounded-xl bg-white p-3 text-left'>
             <div>
                <img src={cover} alt="" />
            </div>
            <div>
                <h1 className='text-lg font-semibold'>{title}</h1>
                <p className=''>{details}</p>
            </div>
            <div className='flex space-x-6 '>
               <div className='flex'>
                    <div className='self-center pr-2'>
                        <FiDollarSign />
                    </div>
                   <p>
                     Price :<span> {price}</span>
                   </p>
               </div>
               <div className='flex'>
                    <div className='self-center pr-3'>
                        <GoBook />
                    </div>
                    <p className=''>Credit :<span> {credit_hours}hr</span> </p>
               </div>
            </div>
            <div>
                <button onClick={()=>handleSelect(card)} className="w-full bg-blue-600 rounded-lg p-2 text-white">Select</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired, 
    handleSelect: PropTypes.func.isRequired,  
};

export default Card;
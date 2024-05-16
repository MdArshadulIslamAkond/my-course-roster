
import PropTypes from 'prop-types';
import Bookmark from '../bookmark/bookmark';

const Bookmarks = ({select, countCredit, countPrice}) => {
    let remainingCredit = 20 - countCredit
    return (
        <div className="md:w-1/4 text-left">
            <div className='rounded-xl bg-white p-3'>
                <h3 className='text-lg font-bold text-[#2f80ed] mb-1'>Credit Hour Remaining {remainingCredit} hr</h3>
                <hr />
                <div className='mb-1'>
                    <h1 className='text-1lg font-bold'> Course Name</h1>
                    <ol className="list-decimal p-3">
                        {select.map(st => <Bookmark key={Math.random()} select={st}/>)}
                    </ol>
                </div>
                <hr />
                <p className='mb-1'> 
                    Total Credit Hour : {countCredit}
                </p>
                <hr />
                <p className='mb-1'>
                    Total Price : {countPrice} USD
                </p>

            </div>
            
            
        </div>
    );
};

Bookmarks.propTypes = {
    select: PropTypes.array.isRequired,
    countCredit: PropTypes.number.isRequired,
    countPrice: PropTypes.number.isRequired,   
};

export default Bookmarks;
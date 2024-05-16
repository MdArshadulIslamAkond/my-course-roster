
import PropTypes from 'prop-types';

const Bookmark = ({select}) => {
    // console.log(select);
    return (
        <div>
            <li>{select}</li>
        </div>
    );
};

Bookmark.propTypes = {
    select: PropTypes.string.isRequired,  
};

export default Bookmark;
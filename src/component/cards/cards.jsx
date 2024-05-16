import { useEffect } from "react";
import { useState } from "react";
import Card from "../card/card";
import PropTypes from 'prop-types';


const Cards = ({handleSelect}) => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('card.json')
        .then(res => res.json())
        .then(data => setCards(data))
    } , [])
    return (
        <div className="md: w-3/4 grid grid-cols-3 gap-4">
            {/* <h2>Cards</h2> */}
            {
                cards.map(card => <Card key ={card.id} card={card} handleSelect={handleSelect} />)
            }
        </div>
    );
};

Cards.propTypes = {
    handleSelect: PropTypes.func.isRequired,
};
export default Cards;
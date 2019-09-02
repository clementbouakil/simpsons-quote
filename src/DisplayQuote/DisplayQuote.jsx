import React from 'react';

const DisplayQuote = ({ quote }) => {
    return (
        <div className="DisplayQuote">
            <img src={quote.image} alt={quote.character} />
            <h1>{quote.character}</h1>
            <p>{quote.quote}</p>
            <p>{quote.characterDirection}</p>
        </div>
    );
};

export default DisplayQuote;
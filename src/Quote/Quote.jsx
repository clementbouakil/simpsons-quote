import React from "react";

// const Quote = props => (
//     <figure>
//         <img
//             src={props.image}
//             alt={props.character}
//         />
//         <figcaption>
//             <blockquote>{props.quote}</blockquote>
//             <cite>{props.character}</cite>
//         </figcaption>
//     </figure>
// );

// Méthode en destructurant l'objet props
const Quote = ({ quote, character, image }) => (
    <figure>
        <img
            src={image}
            alt={character}
        />
        <figcaption>
            <blockquote>{quote}</blockquote>
            <cite>{character}</cite>
        </figcaption>
    </figure>
);

export default Quote;
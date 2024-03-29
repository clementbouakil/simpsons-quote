import React from "react";

import Quote from "../Quote/Quote";

const quotes = [
	{
		id: 1,
		quote:
			"Facts are meaningless. You could use facts to prove anything that's even remotely true.",
		character: "Homer Simpson",
		image:
			"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
	},
	{
		id: 2,
		quote: "Nothing you say can upset us. We're the MTV generation.",
		character: "Bart Simpson",
		image:
			"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
	},
	{
		id: 3,
		quote: "That's where I saw the leprechaun...He told me to burn things.",
		character: "Ralph Wiggum",
		image:
			"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
	},
	{
		id: 4,
		quote:
			"Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
		character: "Principal Skinner",
		image:
			"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460"
	}
];

// const Quotes = () => (
//     <div>
//         {quotes.map(quote => (
//             <img src={quote.image} alt={quote.character} key={quote.id} />
//         ))}
//     </div>
// );

// const Quotes = () => (
//     <div>
//         {quotes.map(quote => (
//             <Quote quote={quote.quote} image={quote.image} character={quote.character} />
//         ))}
//     </div>
// );

const Quotes = () => (
	<div>
		{quotes.map(quote => (
			<Quote {...quote} key={quote.id} />
		))}
	</div>
);

export default Quotes;

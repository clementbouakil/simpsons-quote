import React, { useState } from "react";

function CounterCustom() {
	let start;
	const [count, setCount] = useState(0);

	return (
		<div>
			<label>Merci de définir une valeur de départ : </label>
			<input type="number" onChange={event => setCount((start = parseInt(event.target.value)))} />
			<p>Le compteur est à : {count} </p>
			<button onClick={() => setCount(count + 1)}>+1</button>
			<button onClick={() => setCount(count - 1)}>-1</button>
		</div>
	);
}

export default CounterCustom;

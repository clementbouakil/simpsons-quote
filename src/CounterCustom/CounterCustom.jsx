import React, { useState } from "react";

const counterCustom = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>Le compteur est à : {count} </p>
			<button onClick={() => setCount(count + 1)}>+1</button>
			<button onClick={() => setCount(count - 1)}>-1</button>
		</div>
	);
};

export default counterCustom;

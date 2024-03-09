import React, { useState } from 'react';

// destructoring
function Welcome({ text, color, random }) {
	const [count, setCount] = useState(0);
	// view
	return (
		<div>
			hello world
			<p>
				Message từ component cha là:
				<b>{text}</b>
				<button className='d-block' onClick={random}>
					Click me to random
				</button>
			</p>
		</div>
	);
}

// trong 1 rfc file bắt buộc phải có 1 export default

export default Welcome;

export const GoodBye = ({ text, color, random }) => {
	const [count, setCount] = useState(0);

	// view
	return (
		<div>
			hello world
			<p>
				Message từ component cha là:
				<b>{text}</b>
				<button className='d-block' onClick={random}>
					Click me to random
				</button>
			</p>
		</div>
	);
};

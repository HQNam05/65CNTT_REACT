import React from 'react';

const ExampleComponent = () => {
	// C1: tạo object chứa style
	const myButtonStyle = {
		display: 'block',
		width: 'fit-content',
		padding: '12px 16px',
		color: '#fff',
		backgroundColor: '#146eb4',
	};
	return (
		<div style={{ backgroundColor: 'red' }}>
			<p style={{ fontSize: '40px', color: '#ffffff' }}> Hello world</p>
			<button style={myButtonStyle}>Read more</button>
		</div>
	);
};

export default ExampleComponent;

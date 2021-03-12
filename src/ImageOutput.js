import React from 'react'

const ImageOutput = (props) => {
	return (
		<div id="output">
			<div className="images" style={{ marginTop: '5em' }}>
				{props.imageProp}
			</div>
		</div>
	)
}

export default ImageOutput
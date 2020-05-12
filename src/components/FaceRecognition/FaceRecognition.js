import React from 'react';
import './FaceRecognition.css';

//const imageUrl = 'https://i.pinimg.com/736x/fe/ca/0f/feca0f97aedc811e2117f6ad78261a78.jpg'
//const imageUrl="https://samples.clarifai.com/face-det.jpg"

const FaceRecognition = ({imageUrl, box}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2' >
			  <img 
			    id='inputImage'
			    alt= '' 
			     src={imageUrl} width='500px' height='auto'
			   />
			   <div 
			     className='bounding-box'
			     style={{
			     	top: box.topRow, 
			     	right: box.rightCol, 
			     	bottom: box.bottomRow, 
			     	left: box.leftCol
			     }}>
			   </div>
			</div>		
		</div>
	);
}
export default FaceRecognition;
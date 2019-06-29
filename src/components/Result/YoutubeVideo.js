import React from 'react';

const YoutubeVideo = props => {
    
     const videoUrl = `https://www.youtube.com/embed/${props.id}`;
     
	// const videoUrl = `https://www.youtube.com/embed/watch?v=${props.id}`;
	console.log('This is videoUrl', videoUrl);
	return (
		<div>
			<iframe
				width='560'
				height='315'
				src={videoUrl}
				frameBorder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				title={props.id}
			/>
		</div>
	);
};

export default YoutubeVideo;

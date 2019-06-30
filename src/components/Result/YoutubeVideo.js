import React from 'react';

const YoutubeVideo = props => {
	const videoUrl = `https://www.youtube.com/embed/${props.videoKey}`;

	return (
		<div className='embed-responsive embed-responsive-16by9'>
			<iframe
				width='560'
				height='315'
				src={videoUrl}
				frameBorder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				title={props.videoKey}
				className='embed-responsive-item'
			/>
		</div>
	);
};

export default YoutubeVideo;

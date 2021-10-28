import React from 'react';

const VideoDetail = ({ video }) => {
	//Prevent 'TypeError: Cannot read properties of null'
	if (!video) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<div className="ui segment">
				<h4 className="ui header">{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;

import React from 'react';

const VideoDetail = ({ video }) => {
	//Prevent 'TypeError: Cannot read properties of null'
	if (!video) {
		return <div>Loading...</div>;
	}
	return <div>{video.snippet.title}</div>;
};

export default VideoDetail;

import React from 'react';

const VideoList = ({ videos }) => {
	console.log(videos);
	return <div>Video List: {videos.length}</div>;
};

export default VideoList;

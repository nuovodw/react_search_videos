import axios from 'axios';

const KEY = 'AIzaSyA1fMmD_gz2mtu5AgP3CQuwSb2xSAGNJDc';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 25,
		key: KEY,
	},
});

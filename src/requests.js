const API_KEY = "7ff4207a53fe1595a39986f78daa0b56";

const requests = {
	// fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	// fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	// fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	// fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	// fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	// fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	// fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	// fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,



	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US`,
};

export default requests;

import { useEffect, useState } from 'react';
import { Movie, MovideDBMoviesResponse } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upComing: Movie[];
}


const useMovies = () => {

    const [isLoding, setIsLoding] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying:[],
        popular:[],
        topRated:[],
        upComing:[],
    });

    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MovideDBMoviesResponse>('/now_playing');
        const popularPromise    = movieDB.get<MovideDBMoviesResponse>('/popular');
        const topRatedPromise   = movieDB.get<MovideDBMoviesResponse>('/top_rated');
        const upcomingPromise   = movieDB.get<MovideDBMoviesResponse>('/upcoming');

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ]);

        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upComing: response[3].data.results,
        });

        setIsLoding(false);
    };

    useEffect(() => {
      getMovies();
    }, []);


    return {
       ...moviesState,
        isLoding,
    };
};

export default useMovies;

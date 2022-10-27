/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean;
    cast: Cast[];
    MovieFull?: MovieFull;
}

export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        MovieFull: undefined,
        cast: [],
    });

    const getMovieDetails = async () => {

        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            MovieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast,
        });
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state,
    };
};

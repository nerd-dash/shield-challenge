import {Trivia} from "../../shared/models";
import {createReducer, on} from "@ngrx/store";
import {
  addTrivia,
  addTriviaFailure,
  addTriviaSuccess,
  getAllTrivia,
  getAllTriviaFailure,
  getAllTriviaSuccess
} from "./actions";

export const triviaStateFeatureKey = 'triviaState';

export interface TriviaState {
    trivia: Trivia[];
    isLoading: boolean;
    errors: Error[];
}

// Initially trivia is empty array, but as an interview question it's good.
// When we refresh app, nothing will be presented on list component.
// A simple solution is to change trivia initial state to read from local storage.
// A pro solution is on the app component dispatch new action that fetches data from local storage and saves on store.
const initialTriviaState: TriviaState = {
    trivia: JSON.parse(localStorage.getItem('trivia') ?? '[]') as Trivia[],
    isLoading: false,
    errors: []
}

export const triviaReducer = createReducer(
    initialTriviaState,
    on(addTrivia, getAllTrivia, state => ({...state, isLoading: true})),
    on(addTriviaFailure, getAllTriviaFailure, (state, {payload}) => ({
        ...state,
        isLoading: false,
        errors: [...state.errors, payload]
    })),
    on(addTriviaSuccess, (state, {payload}) => ({
        ...state,
        isLoading: false,
        trivia: [...state.trivia, payload]
    })),
    on(getAllTriviaSuccess, (state, {payload}) => ({
            ...state,
            isLoading: false,
            trivia: payload
        }),
    )
);

import { createContext, useContext, useReducer, Reducer } from 'react';
import { createContainer } from 'react-tracked';
import initialStateValue from './initial-state';

export const StateContext = createContext([]);

export type State = typeof initialState;

export const initialState = initialStateValue;

export enum actions {
    SET_ACTIVE_PLAYER,
    SET_MOUSEOVER_PLAYER,
    SET_MOUSEOUT_PLAYER,
    SET_LOADING,
    SET_PLAYERS_VISIBLE,
    SET_ACTIVE_TEAM,
}

type Action = {
    type: actions;
    value: string | number | boolean | null;
};

export const reducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case actions.SET_ACTIVE_PLAYER:
            const activePlayerId = action.value === state.activePlayerId ? null : action.value;
            return { ...state, activePlayerId, mouseOverPlayerId: null };

        case actions.SET_MOUSEOVER_PLAYER:
            return { ...state, mouseOverPlayerId: action.value };

        case actions.SET_MOUSEOUT_PLAYER:
            return { ...state, mouseOverPlayerId: null };

        case actions.SET_LOADING:
            return { ...state, isLoading: action.value as boolean };

        case actions.SET_PLAYERS_VISIBLE:
            return { ...state, playersVisible: action.value as boolean };

        case actions.SET_ACTIVE_TEAM:
            return { ...state, activeTeamId: action.value as number };

        default:
            return state;
    }
};

const useValue = ({ reducer, initialState }) => useReducer(reducer, initialState);

export const useStateValue = () => useContext(StateContext);

export const { Provider, useTracked } = createContainer(useValue);

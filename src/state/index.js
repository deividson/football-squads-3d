import { createContext, useContext, useReducer, Reducer } from 'react';
import { createContainer } from 'react-tracked';
import initialStateValue from './initial-state';

export const StateContext = createContext([]);

export const initialState = initialStateValue;

export const actions = {
    SET_ACTIVE_PLAYER: 'SET_ACTIVE_PLAYER',
    SET_MOUSEOVER_PLAYER: 'SET_MOUSEOVER_PLAYER',
    SET_MOUSEOUT_PLAYER: 'SET_MOUSEOUT_PLAYER',
    SET_LOADING: 'SET_LOADING',
    SET_PLAYERS_VISIBLE: 'SET_PLAYERS_VISIBLE',
    SET_ACTIVE_TEAM: 'SET_ACTIVE_TEAM',
    SET_TEAM_FORMATION: 'SET_TEAM_FORMATION',
}

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.SET_ACTIVE_PLAYER: {
            const activePlayerId = action.value === state.activePlayerId ? null : action.value;
            return { ...state, activePlayerId, mouseOverPlayerId: null };
        }

        case actions.SET_MOUSEOVER_PLAYER: {
            return { ...state, mouseOverPlayerId: action.value };
        }

        case actions.SET_MOUSEOUT_PLAYER: {
            return { ...state, mouseOverPlayerId: null };
        }

        case actions.SET_LOADING: {
            return { ...state, isLoading: action.value  };
        }

        case actions.SET_PLAYERS_VISIBLE: {
            return { ...state, playersVisible: action.value  };
        }

        case actions.SET_ACTIVE_TEAM: {
            const { teams } = state;
            const teamIndex = teams.findIndex(t => t.id === action.value);
            return {
                ...state,
                activeTeamId: action.value,
                activeFormationId: teams[teamIndex].formationId,
            };
        }

        case actions.SET_TEAM_FORMATION: {
            const { teams } = state;
            const teamIndex = teams.findIndex(t => t.id === state.activeTeamId);
            teams[teamIndex].formationId = action.value;
            return { ...state, teams, activeFormationId: action.value };
        }

        default:
            return state;
    }
};

const useValue = ({ reducer, initialState }) => useReducer(reducer, initialState);

export const useStateValue = () => useContext(StateContext);

export const { Provider, useTracked } = createContainer(useValue);

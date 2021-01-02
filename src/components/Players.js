import React from 'react';
import { useTracked } from '../state';
import Player from './Player';

const Players = () => {
    // track activeFormationId to re-render when formation is changed
    const [{ teams, formations, activeTeamId, activeFormationId }] = useTracked();
    const team = teams.find(t => t.id === activeTeamId);
    const formation = formations.find(f => f.id === team.formationId);

    return (
        <>
            {team.players.map((p, i) => (
                <Player
                    {...p}
                    key={p.id}
                    x={team.home ? formation.positions[i].x : 100 - formation.positions[i].x}
                    y={team.home ? formation.positions[i].y : 100 - formation.positions[i].y}
                    color={team.color}
                    i={i}
                />
            ))}
        </>
    );
};

export default Players;

import React, { useRef } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { useTracked, actions } from 'state';

const Player = ({ name, number, active, visible, i, id, isOut }) => {
    const pose = visible && !isOut ? 'visible' : 'hidden';

    const [{ activePlayerId }, dispatch]: any = useTracked();
    const hoverIntent = useRef(null);

    const handleMouseOver = () => {
        hoverIntent.current = setTimeout(() => {
            !activePlayerId && dispatch({ type: actions.SET_MOUSEOVER_PLAYER, value: id });
        }, 150);
    };

    const handleMouseOut = () => {
        if (hoverIntent.current) {
            clearTimeout(hoverIntent.current);
        }
        !activePlayerId && dispatch({ type: actions.SET_MOUSEOUT_PLAYER });
    };

    const handleClick = () => dispatch({ type: actions.SET_ACTIVE_PLAYER, value: id });

    return (
        <PosedListItem
            number={number}
            data-number={number}
            active={active}
            visible={visible}
            i={i}
            pose={pose}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
            minimized={isOut}
        >
            {name}
        </PosedListItem>
    );
};

const TeamList: React.FC = () => {
    const [
        { teams, playersVisible, mouseOverPlayerId, activePlayerId, activeTeamId, activeFormationId },
    ]: any = useTracked();

    const getActiveTeam = () => (teams || []).find(t => t.id === activeTeamId) || {}
    const players = getActiveTeam().players || []

    return (
        <Root>
            {players && players.map((p, i) => (
                <Player
                    id={p.id}
                    name={p.nickname || p.name || `${p.firstName} ${p.lastName}`}
                    number={p.number}
                    key={p.id}
                    active={[mouseOverPlayerId, activePlayerId].includes(p.id)}
                    visible={playersVisible}
                    i={i}
                    isOut={p.isOut}
                />
            ))}
        </Root>
    );
};

const Root = styled.div`
    border-top: 1px solid ${p => p.theme.colors.border};
    overflow: hidden;
    flex: 1;
`;

const ListItem = styled.div<{ number: number; active: boolean; minimized: boolean }>`
    position: relative;
    color: ${p => (p.active ? p.theme.colors.textDefault : p.theme.colors.textSecondary)};
    font-weight: 400;
    font-size: 16px;
    padding: ${p => (p.minimized ? '0 14px' : '12px 14px')};
    display: flex;
    align-items: center;
    cursor: pointer;
    height: ${p => (p.minimized ? '0' : '48px')};
    transition: height 1s, padding 1s;

    &:hover {
        color: ${p => p.theme.colors.textDefault};

        &::before {
            background-color: ${p => p.theme.colors.accent};
        }
    }

    &::before {
        height: 24px;
        width: 24px;
        background-color: ${p => p.theme.colors.border};
        content: attr(data-number);
        border-radius: 50%;
        margin-right: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8em;
        font-weight: 600;
        ${p => p.active && `background-color: ${p.theme.colors.accent};`}
    }

    &::after {
        position: absolute;
        height: 1px;
        background-color: ${p => p.theme.colors.border};
        content: '';
        bottom: 0;
        left: 0;
        right: 12px;
        display: block;
    }
`;

const PosedListItem = posed(ListItem)({
    hidden: {
        opacity: 0,
        translateY: '-200%',
        delay: ({ i }) => i * 20,
    },
    visible: {
        opacity: 1,
        translateY: 0,
        duration: 150,
        delay: ({ i }) => i * 20,
    },
});

export default TeamList;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Surface from './Surface';
import { absoluteFill } from 'utils/style';
import { useTracked } from 'state';

const Root = styled.div`
    ${absoluteFill}
    transform-style: preserve-3d;
    transition: transform ${p => p.theme.transitions.focus}ms;
    background-color: ${p => p.theme.colors.bgSidebar};
`;

const defaultTransform = {
    rotateX: 90,
    translateX: 0,
    translateY: 0,
    translateZ: 0,
};

type Props = any;

const getTransformString = (styleObj: any) => {
    const properties = {
        rotateX: `(${styleObj.rotateX}deg)`,
        translateX: `(${styleObj.translateX}%)`,
        translateY: `(${styleObj.translateY - 50}%)`,
        translateZ: `(${styleObj.translateZ}px)`,
    };

    let transform = '';

    for (let key in properties) {
        transform = `${transform}${key}${properties[key]} `;
    }

    return transform;
};

const Field: React.FC<Props> = ({ offset, children }) => {
    const [
        { activePlayerId, mouseOverPlayerId, activeTeamId, teams },
    ]: any = useTracked();
    const getActiveTeam = () => (teams || []).find(t => t.id === activeTeamId) || {}
    const getPlayers = () => getActiveTeam().players || []
    const players = [...getPlayers()];

    const rootRef: React.RefObject<HTMLDivElement> = React.createRef();
    const [transformState, setTransformState] = useState(defaultTransform);

    const getXY = (player, isHome) => {
        return {
            x: isHome ? player.x : 100 - player.x,
            y: isHome ? player.y : 100 - player.y,
        };
    };

    useEffect(() => {
        if (!activePlayerId) {
            return setTransformState(defaultTransform);
        }
        const player = players.find(p => p.id === activePlayerId)
        const { x, y } = player.posField

        const { width } = rootRef.current.getBoundingClientRect();
        const translateX = 50 - x - 15; // +25 to account for drawer;
        const translateY = 100 - y;
        const defaultZ = defaultTransform.translateZ;
        const translateZ =
            transformState.translateZ === defaultZ ? width / 4 : transformState.translateZ;

        setTransformState({ ...transformState, translateX, translateY, translateZ });
    }, [activePlayerId]);

    useEffect(() => {
        if (activePlayerId) return;

        if (!mouseOverPlayerId) {
            return setTransformState(defaultTransform);
        }

        const player = players.find(p => p.id === mouseOverPlayerId)
        const { x, y } = player.posField

        const translateX = (50 - x) / 20; // +25 to account for drawer;
        const translateY = (100 - y) / 20;

        setTransformState({ ...transformState, translateX, translateY });
    }, [mouseOverPlayerId]);

    return (
        <Root style={{ transform: getTransformString(transformState) }} ref={rootRef}>
            <Surface active={!!activePlayerId} />
            {children}
        </Root>
    );
};

export default Field;

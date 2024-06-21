import {faEye} from '@fortawesome/free-solid-svg-icons';
import {Badge, Tooltip} from '@stoplight/mosaic';
import React from 'react';

import {badgeDefaultBackgroundColor, badgeDefaultColor} from '../../../constants';
import {useNoAction} from "../../../../hooks/useNoAction";

export const DeprecatedBadge: React.FC = () => {
    const {noAction, noPlaceHolder} = useNoAction()
    return <Tooltip
        renderTrigger={
            <Badge intent="warning" icon={['fas', 'exclamation-circle']} data-testid="badge-deprecated"
                   onPointerEnterCapture={noAction} onPointerLeaveCapture={noAction} placeholder={noPlaceHolder}>
                Deprecated
            </Badge>
        }
    >
        This operation has been marked as deprecated, which means it could be removed at some point in the future.
    </Tooltip>
};

export const InternalBadge: React.FC<{ isHttpService?: boolean }> = ({isHttpService}) => {

    const {noAction, noPlaceHolder} = useNoAction()
    return (
        <Tooltip
        renderTrigger={
            <Badge icon={faEye} data-testid="badge-internal" bg="danger" onPointerEnterCapture={noAction}
                   onPointerLeaveCapture={noAction} placeholder={noPlaceHolder}>
                Internal
            </Badge>}>
        {
            `This ${isHttpService ? 'operation' : 'model'} is marked as internal and won't be visible in public docs.`
        }
    </Tooltip>)

};

export const VersionBadge: React.FC<{ value: string; backgroundColor?: string }> = ({value, backgroundColor}) => {
    const {noAction, noPlaceHolder} = useNoAction()
    return (
        <Badge
            appearance="solid"
            size="sm"
            border={0}
            style={{
                backgroundColor: backgroundColor || badgeDefaultBackgroundColor,
                color: badgeDefaultColor,
            }} onPointerEnterCapture={noAction} onPointerLeaveCapture={noAction} placeholder={noPlaceHolder}>
            {enhanceVersionString(value)}
        </Badge>
    )
};

const enhanceVersionString = (version: string): string => {
    if (version[0] === 'v') return version;

    return `v${version}`;
};

import { faServer } from '@fortawesome/free-solid-svg-icons';
import { FieldButton, Menu, MenuItem } from '@stoplight/mosaic';
import type { IServer } from '@stoplight/types';
import { useAtom } from 'jotai';
import * as React from 'react';

import { getServerUrlWithVariableValues } from '../../../utils/http-spec/IServer';
import { chosenServerAtom } from '../chosenServer';
import { useServerVariables } from './useServerVariables';
import {useNoAction} from "../../../../hooks/useNoAction";

export type ServersDropdownProps = {
  servers: IServer[];
};

export const ServersDropdown = ({ servers }: ServersDropdownProps) => {
  const [chosenServer, setChosenServer] = useAtom(chosenServerAtom);
  const { serverVariables } = useServerVariables();
  const {noAction} = useNoAction();
  const serverItems: MenuItem[] = [
    {
      type: 'option_group',
      title: 'Servers',
      value: chosenServer?.url || '',
      onChange: url => {
        const server = servers.find(server => server.url === url);
        // @ts-ignore
        setChosenServer(server);
      },
      children: [
        ...servers.map((server, i) => ({
          id: server.url,
          title: server.description,
          description: getServerUrlWithVariableValues(server, serverVariables),
          value: server.url,
        })),
      ],
    },
  ];
  return (
    <Menu
      aria-label="Server"
      items={serverItems}
      closeOnPress
      renderTrigger={({ isOpen }) => (
        <FieldButton icon={faServer} size="sm" active={isOpen}
                     onPointerEnterCapture={noAction}
                     onPointerLeaveCapture={noAction}
        >
          {chosenServer?.description || 'Server'}
        </FieldButton>
      )}
    />
  );
};

ServersDropdown.displayName = 'ServersDropdown';

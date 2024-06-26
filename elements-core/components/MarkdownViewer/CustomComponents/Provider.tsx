import {
  CustomComponentMapping as MDVCustomComponentMapping,
  MarkdownViewerProvider,
} from '@stoplight/markdown-viewer';
import * as React from 'react';

import { CodeComponent } from './CodeComponent';

export type CustomComponentMapping = MDVCustomComponentMapping;

interface MarkdownComponentsProviderProps {
  value: Partial<CustomComponentMapping> | undefined;
  children: any;
}

/**
 * Provides components to markdown-viewer.
 */
export const MarkdownComponentsProvider: React.FC<MarkdownComponentsProviderProps> = ({ value, children }) => {
  // @ts-ignore
  return <MarkdownViewerProvider components={{ code: CodeComponent!, ...value }}>{children}</MarkdownViewerProvider>;
};

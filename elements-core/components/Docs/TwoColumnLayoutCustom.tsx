import { Box, Flex, VStack } from '@stoplight/mosaic';
import React from 'react';

export interface TwoColumnLayoutProps {
  header: React.ReactNode;
  right: React.ReactNode;
  left: React.ReactNode;
  className?: string;
}

export const TwoColumnLayoutCustom = React.forwardRef<HTMLDivElement, TwoColumnLayoutProps>(
  ({ header, right, left, className }, ref) => (
    <VStack ref={ref} w="full" className={className} spacing={8}>
      {header}
      <Flex className={'sl-flex-col sl-stack--8'}>
        <Box data-testid="two-column-left" w={'full'} flex={1}>
          {left}
        </Box>

        {right && (
          <Box data-testid="two-column-right" w={'full'}>
            {right}
          </Box>
        )}
      </Flex>
    </VStack>
  ),
);

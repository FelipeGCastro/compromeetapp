import { NavigationContainerRef } from '@react-navigation/core';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef<{}>>();

export const navigate = (name: string) => {
  if (navigationRef.current) {
    navigationRef.current.navigate({ name: name as never, params: undefined as never });
  }
};
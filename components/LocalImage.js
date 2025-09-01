import React, { useState, useMemo } from 'react';
import { Image } from 'react-native';

export default function LocalImage({ uri, fallback, onError, ...rest }) {
  const [errored, setErrored] = useState(false);

  const source = useMemo(() => {
    if (!errored && uri) return { uri };
    if (fallback) return fallback;
    try {
      // Default placeholder
      // Path relative to this file: components -> assets/images
      return require('../assets/images/react-logo.png');
    } catch {
      return undefined;
    }
  }, [errored, uri, fallback]);

  return (
    <Image
      source={source}
      onError={(e) => {
        setErrored(true);
        if (onError) onError(e);
      }}
      {...rest}
    />
  );
}

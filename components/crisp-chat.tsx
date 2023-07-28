'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('96408ebe-e9b6-43e9-ae0e-08d690b446b4');
  }, []);
  return null;
};

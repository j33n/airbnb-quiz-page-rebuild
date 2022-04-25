import { ReactNode } from 'react';

export default interface IBox {
  children: ReactNode;
  align?: 'left' | 'right' | 'center';
};

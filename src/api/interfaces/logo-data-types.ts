import { PossibleTypes } from './possible-types';

export type LogoDataTypes = {
  data: {
    [key: string]: PossibleTypes;

    attributes: {
      [key: string]: PossibleTypes;
    };
  };
};

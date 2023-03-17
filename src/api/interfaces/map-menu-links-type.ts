import { PossibleTypes } from './possible-types';

export type MenuLinksType = Array<{
  [key: string]: PossibleTypes;

  link_text: string;
  url: string;
  open_in_new_tab: boolean;
}>;

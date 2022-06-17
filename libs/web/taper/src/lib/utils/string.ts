import { isMac } from './os';

export function createShortcutLabel(...keys: string[]) {
  return keys
    .map(key => {
      if (key === 'Mod') {
        return isMac() ? 'Cmd' : 'Ctrl';
      }

      return key;
    })
    .join('+');
}

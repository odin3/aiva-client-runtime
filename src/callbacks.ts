import { FileSystem } from '../modules/@aiva/storage';

export const callbacks = {
  storageGetDirectories: () => {
    return FileSystem
      .getDirectories('C:\\');
  }
};
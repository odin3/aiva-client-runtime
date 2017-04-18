import { FileSystem } from '../modules/@aiva/storage';

export const callbacks = {
  storageGetDirectories: () => {
    return FileSystem
      .getDirectories('D:\\');
  },
  storageGetFiles: () => {
    return FileSystem
      .getFiles('D:\\');
  }
};
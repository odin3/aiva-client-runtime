import { Observable } from 'rxjs';

import { MessageBus, Response } from '../core/messaging';
import { Injectable } from '../core';

class FileSystem extends Injectable {
  private readonly MODULE_NAME: string   = 'Aiva.Modules.CoreFileSystem';
  
  public constructor() {
    super();
  }

  /**
   * Get list of directories in path
   * @param path Path
   */
  public getDirectories(path: string): Observable<string[]> {
      return this.bus.createMessage('getDirectories', this.MODULE_NAME, { path })
              .send()
              .map((r: Response<string[]>) => r.data);
  }

  /**
   * Get list of files in path
   * @param path Path
   */
  public getFiles(path: string): Observable<string[]> {
      return this.bus.createMessage('getFiles', this.MODULE_NAME, { path })
              .send()
              .map((r: Response<string[]>) => r.data);
  }

  
  
}

const fs: FileSystem = new FileSystem();
export { fs as FileSystem };
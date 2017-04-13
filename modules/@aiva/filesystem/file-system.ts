import { MessageBus } from '../core/messaging';
import { Application, Injectable } from '../core';

export class FileSystem {
  public constructor(private bus: MessageBus) {}
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // an empty cache of messages
  messages: string[] = [];

  // add a message to the cache
  add(message: string) {
    this.messages.push(message);
  }

  // clear the cache
  clear() {
    this.messages = [];
  }
}

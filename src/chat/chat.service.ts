import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  chat(): string {
    return 'Hello form chat service';
  }
}

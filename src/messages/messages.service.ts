import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages = [
    {
      id: 1,
      text: 'Primeira menssagem',
    },
    {
      id: 2,
      text: 'Segunda menssagem',
    },
  ];

  findAll() {
    return this.messages;
  }
}

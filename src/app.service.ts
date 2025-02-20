import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'WE LOVE NESTJS';
  }

  showInfo() : string {
    return 'I am Verapat Musikapala, 19 years old'
  }

  getJson(){
    return {
      name: 'Verapat',
      lastname: 'Musikapala',
      age: 19,
    };
  }
  getGit(){
    return {
      name:'Git and Github using',
    };
  }
  postman() : string{
    return 'we use postman'
  }
}

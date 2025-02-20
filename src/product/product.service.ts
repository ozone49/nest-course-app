import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productFunc(): string {
    return 'Hello form product service';
  }
  productJson() {
    return {
      name: 'Verapat',
      age: 19,
      hobby: 'Listening a music',
    }
  }
}

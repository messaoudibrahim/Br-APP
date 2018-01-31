import { Injectable } from '@angular/core';

@Injectable()
export class AuthorserviceService {

  getlistAuthrs () {
    return ['brahim', 'messaoudi', 'saliha', 'aoured', 'amourr'];
  }

}

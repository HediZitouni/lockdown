import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  sortBy(array, property) {
    array.sort((a: any ,b: any) => {
      return a[property] - b[property];
    });
    return array;
  }
}

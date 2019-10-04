import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Socket } from '../shared/interfaces';
import {map} from 'rxjs/operators';
import { Observer } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
declare var io: {
  connect(url: string): Socket;
};

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  socket: Socket;
  observer: Observer<any>;
  constructor() { }
  getData(): Observable<number> {
    this.socket = socketIo('http://localhost:8000');

    this.socket.on('data', res => {
      this.observer.next(res);
    });

    return this.createObservable();
  }
  createObservable(): Observable<number> {
    return new Observable(observer => {
      this.observer = observer;
    });
}
private handleError(error) {
  console.error('server error:', error);
  if (error.error instanceof Error) {
      let errMessage = error.error.message;
      return Observable.throw(errMessage);
  }
  // return Observable.throw(error || 'Socket.io server error');
}



}

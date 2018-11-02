import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class PlayerSyncSocketsService {

  constructor(private socket: Socket) { }

  join(username: string): Observable<string> {
    return this.socket
      .emit('join', username);
  }

  newPlayer(player): Observable<any> {
    return this.socket
      .emit('new_player');
  }

  allPlayersReady(): Observable<any> {
    return this.socket
      .fromEvent('all_players_ready');
  }

  exception(): Observable<Error> {
    return this.socket
      .fromEvent('exception');
  }


}

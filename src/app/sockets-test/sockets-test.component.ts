import { Component, OnInit } from '@angular/core';
import { SocketsTestService } from '../sockets-test.service';

@Component({
  selector: 'app-sockets-test',
  templateUrl: './sockets-test.component.html',
  styleUrls: ['./sockets-test.component.css']
})
export class SocketsTestComponent implements OnInit {

  data = 'No connection yet!';

  constructor(private _socketsTestService: SocketsTestService) { }

  ngOnInit() {
   this._socketsTestService.getMessage().subscribe(data => this.data = data);
  }

}

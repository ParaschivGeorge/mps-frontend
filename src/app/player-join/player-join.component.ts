import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayerSyncSocketsService } from '../player-sync-sockets.service';
import { Router } from '@angular/router';
import { MinionSelectorComponent } from '../minion-selector/minion-selector.component';
import { DataHolderService } from '../data-holder.service';

@Component({
  selector: 'app-player-join',
  templateUrl: './player-join.component.html',
  styleUrls: ['./player-join.component.css']
})
export class PlayerJoinComponent implements OnInit {

  nameForm: FormGroup;
  selectedUsername = false;

  constructor(
    private _playerSyncSocketsService: PlayerSyncSocketsService,
    private _router: Router,
    private _dataHolderService: DataHolderService) { }

  ngOnInit() {
    this.nameForm = new FormGroup({'name': new FormControl(null, Validators.required)});
  }

  onSubmit() {
    if (this.nameForm.valid) {
      this.selectedUsername = true;
      this._playerSyncSocketsService.join(this.nameForm.get('name').value);
      sessionStorage.setItem('username', this.nameForm.get('name').value);
      this._router.navigate(['/minion-selector']);
    }
  }

}

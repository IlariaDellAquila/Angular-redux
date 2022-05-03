import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { selezionaUtente } from '../../../reducer';
import { configureStore as createStore, EnhancedStore } from '@reduxjs/toolkit';
import { scegliUtente } from '../../../actions';
import { store } from '../../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  exsternalStore: any = store;
  clickedUser: User;
  constructor(private _service: UsersService) {}

  ngOnInit() {
    this._service.getUsers().subscribe((data: any) => {
      this.users = data;
      // this.exsternalStore.dispatch(scegliUtente(data[0]));
    });
  }

  selectUser(user: User, event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    // console.log('utente selezionato', user);
    this.exsternalStore.dispatch(scegliUtente(user));
  }

  ngAfterViewInit() {
    this.exsternalStore.subscribe(() => {
      this.clickedUser = this.exsternalStore.getState().selectedUser;
    });
  }
}

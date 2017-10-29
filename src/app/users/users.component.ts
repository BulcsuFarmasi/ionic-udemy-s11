import { Component, Input, EventEmitter, Output } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
    selector: 'app-users',
    template: `
        <p>I'm in the users component</p>
        <button (click)="showInfo = true">Show info</button>
        <button (click)="onShowAlert()">Show Alert</button>
        <p *ngIf="showInfo">Some extra user information!</p>
        <p *ngFor="let user of users">{{ user }}</p>
        <p [ngStyle]="{'background-color': color}">This is green!</p>
    `,
    providers: [UsersService]
})
export class UsersComponent {
    showInfo = false;
    color = 'green';
    //@Input() users:any;
    users:any[];
    @Output() alertTrown = new EventEmitter<string>();

    constructor(private usersService:UsersService){
        this.users = this.usersService.getUsers();
    }

    onShowAlert() {
        this.alertTrown.emit('This is my message!');
    }
}
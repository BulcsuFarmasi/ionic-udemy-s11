import { Component } from '@angular/core';

@Component({
    selector: 'app-users',
    template: `
        <p>I'm in the users component</p>
        <button (click)="showInfo = true">Show info</button>
        <p *ngIf="showInfo">Some extra user information!</p>
        <p *ngFor="let user of users">{{ user }}</p>
        <p [ngStyle]="{'background-color': color}">This is green!</p>
    `
})
export class UsersComponent {
    showInfo = false;
    color = 'green';
    users = ['Bulcsú', 'Dorka', 'Csenge']
}
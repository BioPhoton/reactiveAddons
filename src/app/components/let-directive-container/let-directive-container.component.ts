import {Component} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {filter, map, share} from 'rxjs/operators';

@Component({
  selector: 'app-let-directive-container',
  template: `
    <h1>*ngReLet Container</h1>

    <div *ngIf="test$ | async as o">
      <p><b>*ngIf="test$ | async as o":</b></p>
      <pre>{{o | json}}</pre>
    </div>
    <ng-container
      *ngReLet="test$ as o">
      <p><b>*reLet="test$ as o":</b></p>
      <pre>{{o | json}}</pre>
    </ng-container>
    <ng-container
      *ngReLet="test$; let o">
      <p><b>*ngReLet="test$; let o":</b></p>
      <pre>{{o | json}}</pre>
    </ng-container>
    <ng-container *ngReLet="{test:test$, test2:test2$} as o">
      <p><b>*ngReLet="observables as o":</b></p>
      <pre>{{o | json}}</pre>
      <div *ngIf="o.test">
        <p><b>*ngIf="o.test":</b></p>
        <pre>{{o.test | json}}</pre>
      </div>
      <div *ngIf="o.test2">
        <p><b> *ngIf="o.test2$":</b></p>
        <pre>{{o.test2 | json}}</pre>
      </div>
    </ng-container>
  `
})
export class LetDirectiveContainerComponent {

  test$ = this.getHotRandomInterval('test$', 1000);

  test2$ = this.getHotRandomInterval('test2$', 1000);

  constructor() {
  }

  getHotRandomInterval(name: string, intVal: number = 1000): Observable<{ [key: string]: number }> {
    return interval(intVal)
      .pipe(
        map(_ => ({[name]: Math.random()})),
        share(),
        filter((v, i) => i < 1)
      );
  }
}

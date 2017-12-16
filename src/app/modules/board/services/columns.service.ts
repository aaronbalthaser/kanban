import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Store } from '../../../store';

export interface Column {
  name: string;
  color: string;
}

@Injectable()
export class ColumnsService {
  private api: string = 'http://localhost:3000/columns';

  getColumns$: Observable<any[]> = this.http
    .get(this.api)
    .map(res => res.json())
    .do(columns => this.store.set('columns', columns)
  );

  constructor(
    private http: Http,
    private store: Store
  ) {}
}

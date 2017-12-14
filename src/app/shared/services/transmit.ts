import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class TransmitService {
  public prev = new Subject();
  public next = new Subject();
}

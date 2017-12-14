import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  public checkTypeOf = {
    check: function(variable) {
      if (variable === null) {
        return 'Null';
      } else if (typeof variable === 'number') {
        return 'Number';
      } else if (typeof variable === 'string') {
        return 'String';
      } else if (typeof variable === 'boolean') {
        return 'Boolean';
      } else if (typeof variable === 'function') {
        return 'Function';
      } else if (typeof variable === 'undefined') {
        return 'Undefined';
      } else if (variable instanceof Array) {
        return 'Array';
      } else if (typeof variable === 'object') {
        return 'Object';
      }
    }
  };

  public getValueByProperty(obj, prop) {
    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (prop === property) {
          return obj[property];
        }
      }
    }
    return false;
  }

  public objectHasProperty(obj, prop) {
    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (prop === property) {
          return true;
        }
      }
    }
    return false;
  }

  public isObjectEmpty(obj: Object) {
    for (let property in obj) {
      if (obj.hasOwnProperty(property)) return false;
    }

    return true;
  }
}

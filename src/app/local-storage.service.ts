import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}

  setItem(key: string, value: any): void {
    if (value instanceof Object) {

      localStorage.setItem(key, JSON.stringify(value));
    } else {
  
      localStorage.setItem(key, value);
    }
  }

  // Get data from localStorage
  getItem(key: string): any {
    const value = localStorage.getItem(key);
    if (value) {
      // If the value is a JSON string, parse it
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;  // Return as plain string if not JSON
      }
    }
    return null;
  }
}

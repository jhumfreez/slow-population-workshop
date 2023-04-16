import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

interface FakeHttpClient<T> {
  fetchMockData(expectedResult?: T): Observable<T>;
}

abstract class FakeHttpClient<T> implements FakeHttpClient<T> {
  /**
   * @param expectedResult Data to return
   * @param delayTime duration of delay for response in millisecond; default of 2000 (2 seconds)
   */
  fetchMockData(expectedResult: T, delayTime: number = 2000): Observable<T> {
    return of(expectedResult).pipe(delay(delayTime));
  }
}

@Injectable({
  providedIn: 'root',
})
export class FakeHttpService<T> extends FakeHttpClient<T> {}

import { Injectable } from '@angular/core';
import { PreloadAllModules, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadService implements PreloadAllModules {
  preload(route: Route, load$: () => Observable<any>): Observable<any> {
    if (route.data?.['needPreload']) {
      console.log(`Preloading: ${route.path}`);

      return load$();
    }

    console.log(`NO Preloading: ${route.path}`);
    
    return EMPTY;
  }
}

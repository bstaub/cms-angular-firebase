import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {tap, map, take} from 'rxjs/operators';
import {AfService} from '../providers/af.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private af: AfService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.af.user$.pipe(
      take(1),
      map(user => user.roles.admin ? true : false),
      tap(isAdmin => {
        if (!isAdmin) {
          console.error('Access denied - Admin only allowed');
        }
      })
    );

  }
}

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";


@Injectable()
export class TokenGuard implements CanActivate {
    constructor() { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        let token = '';
        let localToken = localStorage.getItem('TOKEN');
        token = localToken ? localToken : '';
        return token != '';
    }

}

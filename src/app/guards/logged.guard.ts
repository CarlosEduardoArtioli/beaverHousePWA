import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
    providedIn: 'root'
})

export class LoggedGuard implements CanActivate {
    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) { }

    canActivate(): Promise<boolean> {
        return new Promise(resolve => {
            this.authService.getAuth().onAuthStateChanged(user => {
                if (user) {
                    this.router.navigate(['menu/home']);
                }

                resolve(!user ? true : false);
            });
        });
    }
}

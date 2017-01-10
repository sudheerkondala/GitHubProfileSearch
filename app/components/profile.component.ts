import { Component } from '@angular/core';
import { GitHubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: `profile.component.html`,
})
export class ProfileComponent {

    user: any;
    repos: any[];
    username: string;
    constructor(private _githubservice: GitHubService) {  
        this.user = false;     
}
        searchUser(){     
            this._githubservice.updateUser(this.username) ;
            this._githubservice.getUser().subscribe(user => {
                this.user = user;
                console.log(this.user);
            });
            this._githubservice.getRepos().subscribe(repos => {
                this.repos = repos;
                console.log(this.user);
            });

        }
    


}

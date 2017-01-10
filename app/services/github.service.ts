import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class GitHubService
{

  private username:string;
  private client_id:'7c1f16da13899bc8bd15';
  private client_secret:'52c3b9ed91e9bd45c9869677791d739379532340';

   constructor(private _http: Http)
   {
       console.log('Git hub service ready');
       this.username = 'sudheerkondala'
   }

   getUser()
   {
       return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
       .map(res => res.json());
   }

 getRepos()
   {
       return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
       .map(res => res.json());
   }

   updateUser(username:string){
    this.username = username;
   }
}
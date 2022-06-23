import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tabfilms : any = [];
  titre: any = '';
  constructor(private http: HttpClient) {}


  calc(){
    if(this.titre.length == 6){
      this.titre = 'zeubi'
    }

  }

  ionViewWillEnter() {

    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=019047668672587abc30843ac633a54c')
      .pipe(
        map(response => response['results'])
      )
      .subscribe(films => {
        this.tabfilms = films
        this.titre = this.tabfilms[0].original_title;

        console.log(this.tabfilms[0]);
      });
  }

}

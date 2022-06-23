import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage {
  tabfilms: any = []
  yanis: any = 0
  tabcasts: any = []
  constructor( private router: Router, private http: HttpClient)  { 
    this.tabfilms = this.router.getCurrentNavigation().extras.state.test 
    this.yanis = this.tabfilms.id

}


ionViewWillEnter() {
  this.http.get('https://api.themoviedb.org/3/movie/'+ this.yanis +'?api_key=019047668672587abc30843ac633a54c&language=FR&page=1&append_to_response=credits')
    .pipe(
      map(response => response)
    )
    .subscribe(films => {
      this.tabfilms = films

      this.tabcasts = this.tabfilms.credits.cast
      console.log(this.tabcasts);

    });
}


  ngOnInit() {
  }
}

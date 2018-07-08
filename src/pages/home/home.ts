import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

// Providers
import { MarvelDataProvider } from '../../providers/marvel-data/marvel-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  comics : Array<any> = [];
  spinningWheel;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public marvelData: MarvelDataProvider
  ){
    this.loading();
    this.getData();
    setTimeout(() => {
      console.log('Await...');
  }, 4000);
  }

  ngAfterViewInit() {}
  ionViewDidLoad(){}

  getData(){
    let params = { 'apikey': '<Public API key>', 'ts': '<timestamp>', 'hash': '<Hash(ts + public key + private key)>' }
    this.marvelData.getData(params, 'v1/public/comics').then((result) => {
      console.log(result);
      this.comics = result['results'];
      this.comics.forEach((comic) => {
        comic['votes'] = {'likes': 0, 'dislikes': 0};
      });
      this.spinningWheel.dismiss();
      console.log(this.comics);
    }, (err) => {
      console.log(err);
    });
  }
  loading() {
    this.spinningWheel= this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Cargando... Por favor espera.'
    });
    this.spinningWheel.present();
  }

  like(event){
    let target = event.target.dataset.target;
    this.comics[target].votes.likes += 1;
  }
  dislike(event){
    let target = event.target.dataset.target;
    this.comics[target].votes.dislikes += 1;
  }

}

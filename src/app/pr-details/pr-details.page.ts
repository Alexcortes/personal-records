import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pr-details',
  templateUrl: './pr-details.page.html',
  styleUrls: ['./pr-details.page.scss'],
})
export class PrDetailsPage implements OnInit {
  pr;
  selected;
  cargaList = [];
  pesoBarra = 45;
  constructor(private route: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() {
    let barbel = JSON.parse(localStorage.getItem("barbel"));
    if(barbel){
      this.pesoBarra = barbel;
    }
    this.route.params.subscribe(params => {
      let id = params['id']; 
      let prList = JSON.parse(localStorage.getItem("lista-pr"));
      this.pr = prList.filter(item => item.id == id)[0];
      this.buildList();
    });
  }

  buildList(){
    this.cargaList = [];
    let initial = 100;
    for (let index = 0; index < 10; index++) {
      this.cargaList.push({
        percentual: ''+ initial + '%',
        carga: initial / 100 * this.pr.carga
      });
      initial = Math.round(initial - 5);
    }
    console.log(this.cargaList);
  }

  select(item){
    this.selected = item;
  }

  async changePesoBarra(){
    const alert = await this.alertController.create({
      header: 'Qual o peso da barra?',
      inputs: [
        {
          name: 'peso',
          type: 'number',
          placeholder: 'Peso em libras'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Salvar',
          handler: (info) => {
            localStorage.setItem("barbel", info.peso);
            this.pesoBarra = info.peso;
          }
        }
      ]
    });

    await alert.present();
  }

  async edit(){
    const alert = await this.alertController.create({
      header: 'Novo PR de '+this.pr.nome,
      inputs: [
        {
          name: 'peso',
          type: 'number',
          placeholder: 'Carga em libras'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Salvar',
          handler: (info) => {
            this.pr.carga = info.peso;
            this.buildList();
            let prList = JSON.parse(localStorage.getItem("lista-pr"));
            prList.map( item => { 
              if(item.id == this.pr.id){
                item.carga = info.peso;
              } 
            });
            localStorage.setItem("lista-pr", JSON.stringify(prList));
          }
        }
      ]
    });

    await alert.present();
  }

}

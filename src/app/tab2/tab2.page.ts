import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  nome: String;
  carga: number;
  constructor(private alertCtrl: AlertController) {}

  async saveInput(){
    if(this.nome && this.carga){
      let prList = JSON.parse(localStorage.getItem("lista-pr"));
      if(prList){
        prList.push({ id: prList.length ,nome: this.nome, carga: this.carga });
      }else{
        prList = [{ id: 0, nome: this.nome, carga: this.carga }];
      }
      localStorage.setItem("lista-pr", JSON.stringify(prList));

      let alert = await this.alertCtrl.create({
        message: "Novo PR salvo com sucesso",
        buttons: ["Ok"]
      });

      this.nome = undefined;
      this.carga = undefined;
      alert.present();
    }
  }
}

import { ListeService } from './liste.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Pokemon } from 'model/model.liste';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[];
  public form: FormGroup;
  min = 0;
  max = 0;
  single: boolean;
  constructor(private listepokemon: ListeService) { }
  ngOnInit(): void {
    this.pokemons = this.listepokemon.findAll();
    this.form = new FormGroup({
      name: new FormControl('')
    });
  }
  public submit(): void {
    console.log(this.form.get('name').value);
    if (this.form.get('name').value) {
      if (this.form.get('name').value === 'g1') {
        this.min = 0;
        this.max = 151;
        this.single = false;
      } else if (this.form.get('name').value === 'g2') {
        this.min = 151;
        this.max = 250;
        this.single = false;
      } else if (this.form.get('name').value === 'g3') {
        this.min = 250;
        this.max = 385;
        this.single = false;
      } else if (this.form.get('name').value === 'g4') {
        this.min = 385;
        this.max = 492;
        this.single = false;
      } else if (this.form.get('name').value === 'g5') {
        this.min = 492;
        this.max = 649;
        this.single = false;
      } else if (this.form.get('name').value === 'g6') {
        this.min = 649;
        this.max = 720;
        this.single = false;
      } else if (this.form.get('name').value === 'g7') {
        this.min = 720;
        this.max = 808;
        this.single = false;
      } else if (this.form.get('name').value === 'g8') {
        this.min = 808;
        this.max = 897;
        this.single = false;
      } else if (this.form.get('name').value > 0 && this.form.get('name').value < 899) {
        this.min = this.form.get('name').value - 1;
        this.max = this.form.get('name').value;
        this.single = true;
      } else if (this.form.get('name').value === 'tous') {
        this.min = 0;
        this.max = 899;
        this.single = false;
      } else if (this.form.get('name').value === 'nom') {
        this.min = 1000;
        this.max = 1000;
        this.single = false;
      }
    }
  }
}







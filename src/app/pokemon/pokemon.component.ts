import { Pokemon } from 'model/model.liste';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListeService } from '../liste.service';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[];
  @Input() min: number;
  @Input() max: number;

  constructor(private listepokemon: ListeService) { }

  ngOnInit(): void {
    this.pokemons = this.listepokemon.findAll();

  }
  more(): void {
    if (this.max !== 897) {
      this.min = this.min + 1;
      this.max = this.max + 1;
    }
  }
  less(): void {
    if (this.min !== 0) {
      this.min = this.min - 1;
      this.max = this.max - 1;
    }
  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit{

  contador = 0;


  constructor(private apiService:ApiService){
  }
  words: string[] = [];


  secretWord: string = '';
  guessedWords: string[] = [];
  wrongWords: string[] = [];
  maxFails: number = 6;
  end: boolean = false;

  ngOnInit(): void {

    //Para poder asignar una palabra
      this.apiService.getWords().subscribe(data => {
       this.words = data
       console.log(data)
       console.log(this.words)
       this.newGame();
     });
  }

  newGame(): void {

    //Elegimos una palabra aleatoria
    const randomIndex = Math.floor(Math.random() * this.words.length);
    console.log(randomIndex)
    this.secretWord = this.words[randomIndex]
    console.log(this.secretWord)

    // Reseteamos variables para asegurarnos que inicia adecuadamente
    this.guessedWords = [];
    this.wrongWords = [];
    this.end = false;
  }

  guess(word: string): void {


    //para evitar repetir la misma palabra
    if (this.guessedWords.includes(word) || this.wrongWords.includes(word)) {
      return;
    }

    // Comprobamos si la letra existe en la palabra secreta
    if (this.secretWord.includes(word)) {
      this.guessedWords.push(word);
      // Revisar si ya se adivinaron todas las letras:
      if (this.winner()) {
        this.end = true;
        console.log("Has ganado")
      }
    } else {
      this.wrongWords.push(word);
      if (this.wrongWords.length >= this.maxFails) {
        this.end = true;
        console.log("Has perdido, empezando de nuevo en 5 segundos")
        setTimeout(() => {
          this.newGame();
        }, 5000)
      }
    }
  }

  winner(): boolean {
    // Verificar si cada letra de la palabra está en letrasAdivinadas
    // Convertimos la palabra en un set para evitar contar letras repetidas
    const uniqueLetters = new Set(this.secretWord.split(''));
    for (let i of uniqueLetters) {
      if (!this.guessedWords.includes(i)) {
        return false;
      }
    }
    return true;

  }

  obtainSecretWord(): string {
    let result = '';
    for (let word of this.secretWord) {
      if (this.guessedWords.includes(word)) {
        result += word + ' ';
      } else {
        result += '_ ';
      }
    }

    return result.trim();

  }



  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const word = event.key.toUpperCase();
    // Verificamos si es una letra A-Z o Ñ
    if (word.match(/^[A-ZÑ]$/)) {
      this.guess(word);
    }
  }



  imageUrl = 'Ahorcado'

}

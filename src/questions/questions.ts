import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions',
  imports: [CommonModule],
  templateUrl: './questions.html',
  styleUrl: './questions.css',
})
export class Questions {

  questions_done = false;
  on_question = 0;
  card_picked = false;

  question_change() {
    this.on_question = 1;
  }

  questions_finished() {
    this.on_question = 0;
    this.questions_done = true;
  }

  no() {
    alert("umm... i think youre wrong. try again");
  }

  pickCard() {
    this.card_picked = true;
  }

  index = 4;
  move = 80;
  show_card = false;
  shuffle() {
    const cards = document.querySelectorAll(".card");
    // select top card and translate to the right
    const topCard = cards[this.index];
    (topCard as HTMLElement).style.transition = "transform 0.5s ease-in-out";
    (topCard as HTMLElement).style.transform = `translateX(${this.move}%)`;
    // after 500ms, translate back to original position
    setTimeout(() => {
        cards.forEach(card => {
          const z = Number((card as HTMLElement).style.zIndex);
          (card as HTMLElement).style.zIndex = z + 1 <= 5 ? (z + 1).toString() : (card as HTMLElement).style.zIndex;
        });

        (topCard as HTMLElement).style.zIndex = "0";

        (topCard as HTMLElement).style.transform = "translateX(0)";
    }, 500);
    this.index = (this.index - 1 + cards.length) % cards.length;
    this.move = -this.move;
  }

  choose() {
    this.show_card = true;
  }

  shuffleAllCards() {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.shuffle();
      }, i * 700); 
    }
    // reset z index of all of them after all shuffles complete
    setTimeout(() => {
      const cards = document.querySelectorAll(".card");
      for (let i = 4; i >= 0; i--) {
        const currCard = cards[i];
        (currCard as HTMLElement).style.zIndex = i.toString();
      }
    }, 5 * 700);
  }

}
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';

  winMessage:string = '';
  isCross = false;
  countClicks = 0;
  isDraw = false;

  itemArray:string[] = new Array(9).fill('empty');

  constructor(private toastr : ToastrService){}

    handleClick(itemNumber: number){
      this.countClicks = this.countClicks+1;

      if(this.isDraw){
        return this.toastr.warning("Game is a Draw!")
      }

      if(this.winMessage){
        return this.toastr.success(this.winMessage);
      }

      if(this.itemArray[itemNumber] === 'empty'){
        this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';
        this.isCross = !this.isCross;
      }

      else{
        return this.toastr.warning("Already filled");
      }

      
      this.isWinner();
      this.isDrawCheck();


    }

    isDrawCheck(){
      if(this.countClicks>=9 && this.winMessage===''){
        this.isDraw = true;
      }
    }


  isWinner(){
    //first row checking
    if(
      this.itemArray[0]===this.itemArray[1] &&
      this.itemArray[0]===this.itemArray[2] &&
      this.itemArray[0]!=='empty'
      ){
        this.winMessage = `${this.itemArray[0]} has won!`;
      }

    //second row checking
    else if(
      this.itemArray[3]===this.itemArray[4] &&
      this.itemArray[3]===this.itemArray[5] &&
      this.itemArray[3]!=='empty'
    ){
      this.winMessage = `${this.itemArray[3]} has won!`;
    }

    //third row checking
    else if(
      this.itemArray[6]===this.itemArray[7] &&
      this.itemArray[6]===this.itemArray[8] &&
      this.itemArray[6]!=='empty'
    ){
      this.winMessage = `${this.itemArray[6]} has won!`;
    }

    //first column checking
    else if(
      this.itemArray[0]===this.itemArray[3] &&
      this.itemArray[0]===this.itemArray[6] &&
      this.itemArray[0]!=='empty'
    ){
      this.winMessage = `${this.itemArray[0]} has won!`;
    }

    //second column checking
    else if(
      this.itemArray[1]===this.itemArray[4] &&
      this.itemArray[1]===this.itemArray[7] &&
      this.itemArray[1]!=='empty'
    ){
      this.winMessage = `${this.itemArray[1]} has won!`;
    }

    //third column checking
    else if(
      this.itemArray[2]===this.itemArray[5] &&
      this.itemArray[2]===this.itemArray[8] &&
      this.itemArray[2]!=='empty'
    ){
      this.winMessage = `${this.itemArray[2]} has won!`;
    }

    //diagonal left to right checking
    else if(
      this.itemArray[0]===this.itemArray[4] &&
      this.itemArray[0]===this.itemArray[8] &&
      this.itemArray[0]!=='empty'
    ){
      this.winMessage = `${this.itemArray[0]} has won!`;
    }

    //diagonal right to left checking
    else if(
      this.itemArray[2]===this.itemArray[4] &&
      this.itemArray[2]===this.itemArray[6] &&
      this.itemArray[2]!=='empty'
    ){
      this.winMessage = `${this.itemArray[2]} has won!`;
    }
  }

  reloadGame(){
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty');
    this.isDraw = false;
    this.countClicks = 0;
  }
}

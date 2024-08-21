import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss']
})
export class ThemeTogglerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var themeColor = localStorage.getItem('themeColor');
    if (themeColor==undefined||themeColor==null||themeColor==''||themeColor=='dark') {
      // alert('yechizi')
      localStorage.setItem('themeColor','dark')
      document.documentElement.classList.add('dark');
    
    }else if(themeColor=='light'){
      localStorage.setItem('themeColor','light')
      document.documentElement.classList.remove('dark');
    }

  }

  toggleDarkMode() {
    var themeColor = localStorage.getItem('themeColor');
    if (themeColor==undefined||themeColor==null||themeColor==''||themeColor=='light') {
      localStorage.setItem('themeColor','dark')
      document.documentElement.classList.toggle('dark');
      
    }else{
      localStorage.setItem('themeColor','light')
      document.documentElement.classList.toggle('dark');
    }


  }

}

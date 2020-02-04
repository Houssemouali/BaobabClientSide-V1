import {Component} from '@angular/core';

@Component({
  selector: 'app-wys',
  templateUrl: './wys.component.html',
  styleUrls: ['./wys.component.scss']
})
export class WysComponent {
  options = {
    translations: {
      textElements: {
        paragraph: 'Paragraf',
        heading: 'Nagłówek',
        preformatted: 'Pre-formatowany',
      },
      textStyle: {
        bold: 'Pogrubione',
        italic: 'Italiczne',
        strikethrough: 'Przekreślone',
        underline: 'Podkreślone',
        color: 'Kolor',
      },
      textAlign: {
        justifyLeft: 'Lewy',
        justifyCenter: 'Środek',
        justifyRight: 'Prawy',
        justifyFull: 'Justowanie',
      },
      imageAndLink: {
        createLink: 'Wstaw Link',
        insertImage: 'Wstaw zdjęcie',
        linkURLPlaceholder: 'Podaj adres',
        imageURLPlaceholder: 'Podaj adres obrazka',
      },
      lists: {
        insertUnorderedList: 'Lista wypunktowana',
        insertOrderedList: 'Lista numerowana',
      },
      showHTML: 'Pokaż HTML',
    }
  };
}

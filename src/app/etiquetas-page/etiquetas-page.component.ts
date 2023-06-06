import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-etiquetas-page',
  templateUrl: './etiquetas-page.component.html',
  styleUrls: ['./etiquetas-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EtiquetasPageComponent {

  @ViewChild('etiquetasContainer', { static: false })
  etiquetasContainer!: ElementRef;

  totalRows: number = 1;
  rowIdnumber: number = 0;

  imageCheckbox: boolean = false;

  addEtiquetas() {
    this.totalRows++;
    this.rowIdnumber++;
    const classLastRow = this.totalRows === 6 ? 'last-row' : '';
    const rowId = `filaEtiqueta${this.rowIdnumber}`;

    const nuevaFilaEtiquetasHTML = `
      <div id="${rowId}" class="row align-items-center text-center etiquetas ${classLastRow}">
        <div class="col align-items-center text-center">
          <div contenteditable="true">NOMBRE</div>
          <div contenteditable="true">APELLIDOS</div>
          <div contenteditable="true">HABITACIÓN</div>
          <div contenteditable="true">
            <span>NOTAS</span>
          </div>
        </div>
        <div class="col align-items-center text-center">
          <div contenteditable="true">NOMBRE</div>
          <div contenteditable="true">APELLIDOS</div>
          <div contenteditable="true">HABITACIÓN</div>
          <div contenteditable="true">
            <span>NOTAS</span>
          </div>
        </div>
        <div class="col align-items-center text-center">
          <div contenteditable="true">NOMBRE</div>
          <div contenteditable="true">APELLIDOS</div>
          <div contenteditable="true">HABITACIÓN</div>
          <div contenteditable="true">
            <span>NOTAS</span>
          </div>
        </div>
      </div>
    `;

    this.etiquetasContainer.nativeElement.insertAdjacentHTML('beforeend', nuevaFilaEtiquetasHTML);

    if (this.totalRows === 6) {
      this.totalRows = 1;
    }
  }

  changeTextSize(event: any) {
    let textSize: number = event.target.value;
    this.etiquetasContainer.nativeElement.style.fontSize = `${textSize}px`;
  }

  changeImage(){
    this.imageCheckbox = !this.imageCheckbox;
  }

  // removeEtiquetas() {
  //   if (this.rowIdnumber === 0) {
  //     return;
  //   }
  //   let divToRemove = document.getElementById(`filaEtiqueta${this.rowIdnumber}`);
  //   divToRemove?.remove();
  // }
}

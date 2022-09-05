import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-header-gob',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="https://www.gob.mx/"><img src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg" width="128" height="48" alt="PÃƒÂ¡gina de inicio, Gobierno de MÃƒÂ©xico"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        
    </ul>
    <div class="form-inline my-2 my-lg-0 list">
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <a  class="nav-link"href="https://www.gob.mx/tramites">Trámites</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.gob.mx/gobierno">Gobierno</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.gob.mx/busqueda"><span class="sr-only">Búsqueda</span><i class="fa fa-search"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>  
  `,
  styleUrls: ['./header-gob.component.scss']
})
export class HeaderGobComponent {

}

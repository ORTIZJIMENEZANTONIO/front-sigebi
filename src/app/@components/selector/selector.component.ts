import {
  Component,
  Injector,
  Input,
  OnInit,
  ProviderToken,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import { Observable } from "rxjs";
import { BaseApp } from "../../@core/shared/base-app";

interface Searchable {
  search: (text: string, id?: number | string) => Observable<any>;
}

@Component({
  selector: "ngx-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.scss"],
})
export class SelectorComponent  extends BaseApp {
  /** Columnas que se mostraran en la tabla */
  @Input() columns: Object = {};
  /** Titulo del modal */
  @Input() title: string = "";
  /** Servicio donde se realizara la busqueda */
  @Input() service: ProviderToken<Searchable>;
  /** Indica si se mostrara la barra de busqueda */
  @Input() showSearchBar: boolean = true;
  /** Indica si se mostraran los botones de aceptar y cancelar  */
  @Input() showButtons: boolean = true;
  /** Indica si se mostrara el boton de confirmar  */
  @Input() showConfirmButton: boolean = true;
  /** Indica si se mostrara el boton de cancelar  */
  @Input() showCancelButton: boolean = true;
  $data: Observable<any>;
  private filter: string = "";
  itemSelected: any = null;
  settings = {
    pager: {
      display: false,
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: true,
    mode: "external",
    columns: {},
    noDataMessage: "No se encontrarón registros",
  };
  searchText: FormControl = new FormControl('')

  constructor(
    private ref: NbDialogRef<SelectorComponent>,
    private injector: Injector
  ) {
    super()
  }

  ngOnInit(): void {
    this.settings.columns = this.columns;
    this.getData();
    this.searchText.valueChanges.subscribe((value: string) => {
      this.filter = value
      this.getData()
    });
  }

  getData() {
    this.$data = this.injector.get(this.service).search(this.filter);
  }

  close() {
    this.ref.close();
  }

  confirm() {
    this.ref.close(this.itemSelected);
  }

  onItemSelected(event: any) {
    this.itemSelected = event.isSelected ? event.data : null;
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class PageUtils {
    errorMap = new Map<string, string>();
    fieldsName = new Map<string, string>();

    constructor(){
        this.fillErrorMap();
        this.fillFieldMap();
    }

    fillErrorMap = function(){
        this.map.set('form.field.validate.required', '{0} es requerido.');
        this.map.set('form.field.validate.numeric', '{0} debe ser num&eacute;rico.');
        this.map.set('form.field.validate.numeric.fixed', '{0} debe ser num&eacute;rico, longitud m&aacute;xima {1}.');
        this.map.set('form.field.validate.format', '{0}, formato incorrecto.');
        this.map.set('form.field.validate.format.lenght', '{0}, formato incorrecto, longitud min {1} a max {2}.');
        this.map.set('form.field.validate.characters.invalids', '{0} contiene caracteres no permitidos.');
        this.map.set('form.field.validate.size', '{0}, longitud m&aacute;xima {1}.');
    }

    fillFieldMap: () => void = function () {
        this.fieldsName.set('field.email', 'Email');
        this.fieldsName.set('field.username', 'Usuario');
        this.fieldsName.set('field.password', 'Contrase&ntilde;a');
        this.fieldsName.set('field.phone', 'Tel&eacute;fono casa');
        this.fieldsName.set('field.cellphone', 'Celular');
        this.fieldsName.set('field.workphone', 'Tel&eacute;fono trabajo');
        this.fieldsName.set('field.name', 'Nombre(s)');
        this.fieldsName.set('field.surname', 'Apellido paterno');
        this.fieldsName.set('field.lastname', 'Apellido materno');
        this.fieldsName.set('field.street', 'Calle');
        this.fieldsName.set('field.nexternal', 'N&uacute;mero externo');
        this.fieldsName.set('field.ninternal', 'N&uacute;mero interno');
        this.fieldsName.set('field.municipality', 'Municipio');
        this.fieldsName.set('field.neighborhood', 'Colonia');
        this.fieldsName.set('field.zipcode', 'C&oacute;digo postal');
        this.fieldsName.set('field.category', 'Categoria');
        this.fieldsName.set('field.subcategory', 'SubCategoria');
        this.fieldsName.set('field.lot', 'Lote');
        this.fieldsName.set('field.auction', 'SUbasta');
        this.fieldsName.set('field.item', 'Art&iacute;culo');
        this.fieldsName.set('field.photo', 'Foto');
        this.fieldsName.set('field.mensaje', 'Mensaje');
        this.fieldsName.set('field.terms', 'Términos y condiciones');
    };
}
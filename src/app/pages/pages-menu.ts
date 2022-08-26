import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Administración',
    icon: 'grid-outline',
    // children: [
    //   {
    //     title: 'Categorias',
    //     link: '/pages/admin/catalogs/categories',
    //   },
    //   {
    //     title: 'Leyendas',
    //     link: '/pages/admin/legends/official',
    //   },

    // ],
  },
  {
    title: 'Catalogos',
    icon: 'folder',
    children: [
      {
        title: 'Abogados',
        link: '/pages/admin/lawyer',
      },
      {
        title: 'Aclaraciones',
        link: '/pages/admin/clarification',
      },
      {
        title: 'Almacenes',
        link: '/pages/admin/warehouse',
      },
      {
        title: 'Asentamientos',
        link: '/pages/admin/settlement',
      },
      {
        title: 'Banco',
        link: '/pages/admin/bank',
      },
      {
        title: 'Bateria',
        link: '/pages/admin/battery',
      },
      {
        title: 'Bodega',
        link: '/pages/admin/storehouse'
      },
      {
        title: 'Bovedas',
        link: '/pages/admin/safe'
      },
      {
        title: 'Categorias',
        link: '/pages/admin/catalogs/categories',
      },
      {
        title: 'Clasificación SIAB',
        link: '/pages/admin/siab-clasification',
      },
      {
        title: 'Códigos postales',
        link: '/pages/admin/zip-code',
      },
      {
        title: 'Día festivo',
        link: '/pages/admin/holiday',
      },
      {
        title: 'Deductivas',
        link: '/pages/admin/deductives',
      },
      {
        title: 'Deductivas Verificación',
        link: '/pages/admin/deductive-verification',
      },
      {
        title: 'Delegaciones de estado',
        link: '/pages/admin/delegation-state',
      },
      {
        title: 'Delegaciones regionales',
        link: '/pages/admin/regional-delegation',
      },
      {
        title: 'Emisora',
        link: '/pages/admin/station',
      },
      {
        title: 'Estado',
        link: '/pages/admin/state-of-republic',
      },
      {
        title: 'Estatus general',
        link: '/pages/admin/general-status',
      },
      {
        title: 'Estatus proceso',
        link: '/pages/admin/status-process',
      },
      {
        title: 'Fracciones',
        link: '/pages/admin/fractions',
      },
      {
        title: 'Genericos',
        link: '/pages/admin/generics',
      },
      {
        title: 'Leyendas',
        link: '/pages/admin/legends/official',
      },
      {
        title: 'Localidades',
        link: '/pages/admin/localitys',
      },
      {
        title: 'Motivos no entrega',
        link: '/pages/admin/reasons/non-delivery-reasons',
      },
      {
        title: 'Municipios',
        link: '/pages/admin/municipalitys',
      },
      {
        title: 'Normas',
        link: '/pages/admin/norms',
      },
      {
        title: 'Parrafos',
        link: '/pages/admin/paragraphs',
      },
      {
        title: 'Preguntas',
        link: '/pages/admin/question',
      },
      {
        title: 'Procesos SISE',
        link: '/pages/admin/siseProcess',
      },
      {
        title: 'Tipo Siniestro',
        link: '/pages/admin/sinister',
      },
      {
        title: 'Tipo de Almacenes',
        link: '/pages/admin/typewarehouses',
      },
      {
        title: 'Tipo Asentamiento',
        link: '/pages/admin/typesettelement',
      },
      {
        title: 'Tipo Bienes',
        link: '/pages/admin/typegood',
      },
      {
        title: 'Tipo Docto',
        link: '/pages/admin/typedocto',
      },
      {
        title: 'Estado Transferencia',
        link: '/pages/admin/statustransfer',
      },
      {
        title: 'Estatus Buzon',
        link: '/pages/admin/statusmailbox',
      },
      {
        title: 'Tipo relevante',
        link: '/pages/admin/typerelevant',
      },
      {
        title: 'Transferentes',
        link: '/pages/admin/transferentes',
      },
      {
        title: 'Tipo orden servicio',
        link: '/pages/admin/typeorderservices',
      },
      {
        title: 'Despachos',
        link: '/pages/admin/offices',
      },
      {
        title: 'Donatorios',
        link: '/pages/admin/grantees',
      },
      {
        title: 'Edos x Coor',
        link: '/pages/admin/edosxcoor',
      },
      {
        title: 'Emisoras',
        link: '/pages/admin/station',
      },
      {
        title: 'Ciudades',
        link: '/pages/admin/city',
      },
      {
        title: 'Delegaciones',
        link: '/pages/admin/delegation',
      },
      {
        title: 'Detalle Delegaciones',
        link: '/pages/admin/detail-delegation'
      },

      {
        title: 'SubDelegaciones',
        link: '/pages/admin/subdelegation',
      },
      {
        title: 'Concepto Pagos',
        link: '/pages/admin/payments-concept',
      },
      {
        title: 'Notarios',
        link: '/pages/admin/notary'
      },
      {
        title: 'Casilleros',
        link: '/pages/admin/locker'
      },
      {
        title: 'Juzgados',
        link: '/pages/admin/court'
      },
      {
        title: 'Conclusion siniestros',
        link: '/pages/admin/claim-conclusion'
      },
      {
        title: 'Peritos',
        link: '/pages/admin/proficient'
      },
      {
        title: 'Medio imagen',
        link: '/pages/admin/half-image'
      },
      {
        title: 'Medio fotografia',
        link: '/pages/admin/medium-photography'
      },
      {
        title: 'Departamentos',
        link: '/pages/admin/departament'
      },
      {
        title: 'Tipo Bien',
        link: '/pages/admin/good-type'
      },
      {
        title: 'Subtipo bien',
        link: '/pages/admin/good-subtype'
      },
      {
        title: 'Ssubtipo bien',
        link: '/pages/admin/good-ssubtype'
      },
      {
        title: 'Sssubtipo bien',
        link: '/pages/admin/good-sssubtype'
      },
      {
        title: 'Situacion Bien',
        link: '/pages/admin/good-situation'
      },
      {
        title: 'Clasificacion Institucion',
        link: '/pages/admin/institution-classification'
      },
      {
        title: 'Instituciones Emisoras',
        link: '/pages/admin/issuing-institution'
      },
      {
        title: 'MinPub',
        link: '/pages/admin/minpub'
      },
      {
        title: 'Personas',
        link: '/pages/admin/person'
      },
      {
        title: 'Motivo Revision',
        link: '/pages/admin/revision-reason'
      },
      {
        title: 'Clasificacion SatSae',
        link: '/pages/admin/satsae-classification'
      },
      {
        title: 'Regulatory',
        link: '/pages/admin/regulatory'
      },
      {
        title: 'Lotes',
        link: '/pages/admin/batch'
      },
      {
        title: 'Código estado',
        link: '/pages/admin/status-code'
      },
      {
        title: 'Guarda Valores',
        link: '/pages/admin/save-values'
      },
      {
        title: 'Identificador',
        link: '/pages/admin/identifier'
      },
      {
        title: 'Indiciados',
        link: '/pages/admin/indiciados'
      },
      {
        title: 'Dictamen',
        link: '/pages/admin/opinion'
      },
      {
        title: 'Penalizaciones',
        link: '/pages/admin/penalty'
      },
      {
        title: 'Subtipo Bienes',
        link: '/pages/admin/goods-subtype'
      },
      {
        title: 'Sustentos Legales',
        link: '/pages/admin/legal-support'
      },
      {
        title: 'Sat Subclasificacion',
        link: '/pages/admin/sat-subclasification'
      },
      {
        title: 'Sat Clasificacion',
        link: '/pages/admin/sat-clasification'
      },
      {
        title: 'Reporte Indicadores',
        link: '/pages/admin/indicator-report'
      },
      {
        title: 'Procedencia',
        link: '/pages/admin/origin'
      },
      {
        title: 'Procedencia Cisi',
        link: '/pages/admin/origin-cisi'
      },
      {
        title: 'Puntuaciones',
        link: '/pages/admin/score'
      },
      {
        title:'R Asunt Dic',
        link:'/pages/admin/r-asunt-dic'
      },
      {
        title:'Tipo de Servicios',
        link:'/pages/admin/type-services'
      },  
      {
        title:'Zona Geográficas',
        link:'/pages/admin/zone-geographic'
      },
      {
        title: 'Racks',
        link: '/pages/admin/rack'
      },
      {
        title: 'Respuestas',
        link: '/pages/admin/response'
      },
      {
        title: 'Respuestas REPUVE',
        link: '/pages/admin/response-repuve'
      },
      {
        title: 'Servicios',
        link: '/pages/admin/service-cat'
      },
      {
        title: 'Series IFAI',
        link: '/pages/admin/ifai-serie'
      },
      {
        title: 'Empresa terceros',
        link: '/pages/admin/third-company'
      },
      {
        title: 'Entfed',
        link: '/pages/admin/entfed'
      },
      {
        title: 'Estado repuves',
        link: '/pages/admin/repuve'
      },
      {
        title: 'Gestión',
        link: '/pages/admin/management'
      },
      {
        title: 'Etiqutas bien',
        link: '/pages/admin/label-okey'
      },
      {
        title: 'Etapas',
        link: '/pages/admin/stages'
      },
      {
        title: 'Documentos resarcimiento',
        link: '/pages/admin/doc-resarcimiento'
      },
      {
        title: 'Documentos resarcimiento sat',
        link: '/pages/admin/doc-resarcimiento-sat'
      },
      {
        title: 'Documentos resarcimiento sat xml',
        link: '/pages/admin/doc-resarcimiento-sat-xml'
      },
       {
        title: 'Estatus sinisestros',
        link: '/pages/admin/claims-status'
      }

    ],
  },
  {
    title: 'Main',
    icon: 'grid-outline',
    children: [
      {
        title: 'Main',
        link: '/pages/main/home',
      },

    ],
  },
  {
    title: 'Programming',
    icon: 'grid-outline',
    children: [
      {
        title: 'Goods Schedule',
        link: '/pages/programming/good-schedule',
      },

    ],
  },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },

];

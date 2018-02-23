export default [
  {
    name: 'Strona główna',
    path: '/',
  },
  {
    name: 'Edycje',
    path: '',
    childs: [
      {
        name: 'Edycja 2017',
        path: '/edycja2017',
      },
      {
        name: 'Edycja 2018',
        path: '/edycja2018',
      },
    ],
  },
  {
    name: 'Dla partnerów',
    path: '/partnerzy',
  },
  {
    name: 'Dla Uczestników',
    path: '',
    childs: [
      {
        name: 'Oferty',
        path: '/oferty',
      },
      {
        name: 'Dla ambasadorów',
        path: '/program_ambasadorski',
      },
      {
        name: 'FAQ',
        path: '/faq',
      },
    ],
  },
  {
    name: 'Kontakt',
    path: '/kontakt',
  },
];

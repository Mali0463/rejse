// Behold dit gamle export (strings) for kompatibilitet
export const COUNTRIES = [
  'Danmark', 'Sverige', 'Norge', 'Tyskland', 'Frankrig',
  'Japan', 'Sydkorea', 'USA', 'Canada', 'Australien'
];

// Ny, rigere datastruktur til filtre
export const COUNTRY_DATA = [
  { name: 'Danmark',   region: 'Europa',      recommendedFor: ['kvinde','mand'] },
  { name: 'Sverige',   region: 'Europa',      recommendedFor: ['kvinde','mand'] },
  { name: 'Norge',     region: 'Europa',      recommendedFor: ['kvinde','mand'] },
  { name: 'Tyskland',  region: 'Europa',      recommendedFor: ['mand'] },
  { name: 'Frankrig',  region: 'Europa',      recommendedFor: ['kvinde'] },
  { name: 'Japan',     region: 'Asien',       recommendedFor: ['kvinde','mand'] },
  { name: 'Sydkorea',  region: 'Asien',       recommendedFor: ['kvinde'] },
  { name: 'USA',       region: 'Nordamerika', recommendedFor: ['mand'] },
  { name: 'Canada',    region: 'Nordamerika', recommendedFor: ['kvinde','mand'] },
  { name: 'Australien',region: 'Oceanien',    recommendedFor: ['kvinde','mand'] },
];
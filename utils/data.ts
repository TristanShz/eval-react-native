import ReactLogo from '../assets/images/ReactLogo';
import {COLORS} from './colors';
import JsLogo from '../assets/images/JsLogo';

export type TCourse = {
  _id: number;
  name: string;
  cardDescription: string;
  content: string;
};

export type TCategory = {
  _id: number;
  name: string;
  author: string;
  image: () => JSX.Element;
  color: string;
  courses: TCourse[];
};
export type TSubject = {
  _id: number;
  name: string;
  categories: TCategory[];
};

type TData = TSubject[];

export const DATA: TData = [
  {
    _id: 1,
    name: 'Programmation',
    categories: [
      {
        _id: 1,
        name: 'JavaScript',
        author: 'Tristan Schwartz',
        image: JsLogo,
        color: COLORS.purple,
        courses: [
          {
            _id: 1,
            name: 'Hoisting',
            cardDescription:
              "Une définition stricte du Hoisting suggère que les déclarations de variables et de fonctions sont déplacées physiquement en haut de votre code, mais ce n'est pas ce qui se passe en fait.",
            content:
              '# Hoisting\n' +
              '\n' +
              'Date de création: 23 juillet 2022 09:44\n' +
              '\n' +
              "Une définition stricte du Hoisting suggère que les déclarations de variables et de fonctions sont déplacées physiquement en haut de votre code, mais ce n'est pas ce qui se passe en fait. \n" +
              '\n' +
              'A la place, les déclarations de variables et de fonctions sont mises en mémoire pendant la phase de *compilation*, mais restent exactement là où vous les avez tapées dans votre code.\n' +
              '\n' +
              'Pour éviter ce comportement on peut utiliser le mode Strict de JS.',
          },
          {
            _id: 2,
            name: 'Types',
            cardDescription: 'Tout savoir sur les types en JavaScript',
            content:
              '# Types\n' +
              '\n' +
              'Date de création: 23 juillet 2022 09:38\n' +
              '\n' +
              '### **Types primitifs**\n' +
              '\n' +
              '- String\n' +
              '- Number\n' +
              '- BigInt : Ce type de donnée est utilisé pour stocker des nombres qui sont au-delà de la limite d’un nombre normal.\n' +
              '- Boolean : Entité logique qui peut avoir seulement deux valeurs, true ou false\n' +
              '- Undefined : Quand une variable est déclarée mais non assignée, elle a la valeur et le type undefined.\n' +
              '- Null : Valeur non existante ou invalide\n' +
              '- Symbol : C’est un nouveau type introduit dans la version ES6, il est utile pour stocker une valeur anonyme et unique\n' +
              '\n' +
              '### **Types non primitifs**\n' +
              '\n' +
              '- Les types primitifs peuvent uniquement stocker une valeur unique. Pour stocker des valeurs multiples et complexes, ce sont les types non primitifs qui sont utilisés.\n' +
              '- Les objets - Utiliser pour stocker une collection de données\n' +
              '\n' +
              '**Il est important de noter que n’importe quel type qui n’est pas primitif est un objet en JavaScript.**',
          },
        ],
      },
      {
        _id: 2,
        name: 'React',
        author: 'Tristan Schwartz',
        image: ReactLogo,
        color: COLORS.yellow,
        courses: [
          {
            _id: 1,
            name: 'Hoisting',
            cardDescription:
              "Une définition stricte du Hoisting suggère que les déclarations de variables et de fonctions sont déplacées physiquement en haut de votre code, mais ce n'est pas ce qui se passe en fait.",
            content:
              '# Hoisting\n' +
              '\n' +
              'Date de création: 23 juillet 2022 09:44\n' +
              '\n' +
              "Une définition stricte du Hoisting suggère que les déclarations de variables et de fonctions sont déplacées physiquement en haut de votre code, mais ce n'est pas ce qui se passe en fait. \n" +
              '\n' +
              'A la place, les déclarations de variables et de fonctions sont mises en mémoire pendant la phase de *compilation*, mais restent exactement là où vous les avez tapées dans votre code.\n' +
              '\n' +
              'Pour éviter ce comportement on peut utiliser le mode Strict de JS.',
          },
          {
            _id: 2,
            name: 'Types',
            cardDescription: 'Tout savoir sur les types en JavaScript',
            content:
              '# Types\n' +
              '\n' +
              'Date de création: 23 juillet 2022 09:38\n' +
              '\n' +
              '### **Types primitifs**\n' +
              '\n' +
              '- String\n' +
              '- Number\n' +
              '- BigInt : Ce type de donnée est utilisé pour stocker des nombres qui sont au-delà de la limite d’un nombre normal.\n' +
              '- Boolean : Entité logique qui peut avoir seulement deux valeurs, true ou false\n' +
              '- Undefined : Quand une variable est déclarée mais non assignée, elle a la valeur et le type undefined.\n' +
              '- Null : Valeur non existante ou invalide\n' +
              '- Symbol : C’est un nouveau type introduit dans la version ES6, il est utile pour stocker une valeur anonyme et unique\n' +
              '\n' +
              '### **Types non primitifs**\n' +
              '\n' +
              '- Les types primitifs peuvent uniquement stocker une valeur unique. Pour stocker des valeurs multiples et complexes, ce sont les types non primitifs qui sont utilisés.\n' +
              '- Les objets - Utiliser pour stocker une collection de données\n' +
              '\n' +
              '**Il est important de noter que n’importe quel type qui n’est pas primitif est un objet en JavaScript.**',
          },
        ],
      },
    ],
  },
];

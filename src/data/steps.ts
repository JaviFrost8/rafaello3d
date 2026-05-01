import { Step } from '@/types/steps';

export const steps: Step[] = [
  {
    number: '1',
    fase: 'FASE TÉCNICA',
    title: 'Selección del módelo',
    description:
      'El proceso comienza con una fase de diseño y elección del modelo. En este punto se revisan junto al cliente diferentes opciones de figuras o diseños 3D, teniendo en cuenta sus gustos, referencias y el uso final de la pieza. Esta etapa es importante porque define la base del proyecto y asegura que el resultado final se ajuste exactamente a lo que el cliente está buscando antes de pasar a la producción.',
    image: '/images/1-fase-tecnica.webp',
  },
  {
    number: '2',
    fase: 'ESCALADO',
    title: 'Escalado del módelo',
    description:
      'Una vez elegido el diseño, se procede a su preparación digital. El modelo se importa en el software de diseño 3D y se ajusta a las dimensiones reales requeridas. Durante este proceso se revisan proporciones, detalles estructurales y posibles modificaciones necesarias para garantizar que la pieza pueda imprimirse correctamente a gran escala sin perder calidad ni estabilidad.',
    image: '/images/2-escalado.webp',
  },
  {
    number: '3',
    fase: 'PRODUCCIÓN',
    title: 'Impresion 3D por  piezas',
    description:
      'El modelo se divide en varias secciones para facilitar su fabricación y se inicia la impresión 3D de cada una de las piezas de forma individual. Este proceso se realiza capa por capa, asegurando precisión en cada detalle. Dependiendo del tamaño y complejidad de la figura, la impresión puede requerir varias horas o incluso días hasta completar todas las partes.',
    image: '/images/3-impresion.webp',
  },
  {
    number: '4',
    fase: 'ESTRUCTURA',
    title: 'Montaje de la estructura',
    description:
      'Cuando todas las piezas han sido impresas, comienza la fase de ensamblaje. Cada parte se une cuidadosamente utilizando adhesivo industrial de alta resistencia, garantizando una estructura sólida y estable. En esta etapa es fundamental alinear correctamente todas las piezas para que la figura conserve su forma original y no presente deformaciones visibles.',
    image: '/images/4-montaje.webp',
  },
  {
    number: '5',
    fase: 'TRABAJO MANUAL',
    title: 'Lijado inicial',
    description:
      'Una vez ensamblada la figura, se inicia el proceso de lijado para eliminar marcas de unión, capas visibles de impresión y pequeñas imperfecciones. Se utilizan diferentes granos de lija según la zona y el nivel de detalle, buscando conseguir una superficie lo más uniforme posible y lista para los siguientes tratamientos de acabado.',
    image: '/images/5-lijado.webp',
  },
  {
    number: '6',
    fase: 'CONTROL DE CALIDAD',
    title: 'Aplicación de imprimación',
    description:
      'Después del lijado inicial, se aplica una capa de imprimación sobre toda la superficie. Esto permite sellar el material y, al mismo tiempo, detectar posibles defectos que no eran visibles anteriormente. Si se encuentran imperfecciones, se corrigen mediante un nuevo lijado localizado antes de continuar con el proceso.',
    image: '/images/6-imprimacion.webp',
  },
  {
    number: '7',
    fase: 'PERFECCIONAMIENTO',
    title: 'Masillado y acabado fino',
    description:
      'En esta fase se aplican masillas específicas en aquellas zonas donde aún existan pequeñas irregularidades o uniones visibles. Una vez seca la masilla, se vuelve a lijar la superficie y se aplica nuevamente imprimación. Este proceso puede repetirse varias veces hasta conseguir un acabado completamente liso y uniforme.',
    image: '/images/7-masillado.webp',
  },
  {
    number: '8',
    fase: 'ARTETERAPIA',
    title: 'Pintura',
    description:
      'Cuando la superficie está perfectamente preparada, se procede a aplicar las primeras capas de pintura. Dependiendo del proyecto, se pueden usar diferentes técnicas como aerografía o pintura manual para lograr el acabado deseado. Esta fase es la que da vida a la figura, aportando color, realismo y el acabado final que define la pieza terminada.',
    image: '/images/8-pintado.webp',
  },
];

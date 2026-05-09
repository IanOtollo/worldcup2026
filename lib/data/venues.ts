export interface Venue {
  slug: string;
  name: string;
  city: string;
  state: string;
  country: string;
  capacity: number;
  surface: string;
  opened: number;
  image: string;
  description: string;
}

export const venues: Venue[] = [
  {
    slug: "metlife-stadium",
    name: "MetLife Stadium",
    city: "East Rutherford",
    state: "New Jersey",
    country: "USA",
    capacity: 82500,
    surface: "Artificial",
    opened: 2010,
    image: "/assets/stadium_usa.png",
    description: "Home of the New York Giants and Jets, MetLife Stadium is one of the premier venues in North America."
  },
  {
    slug: "att-stadium",
    name: "AT&T Stadium",
    city: "Arlington",
    state: "Texas",
    country: "USA",
    capacity: 80000,
    surface: "Artificial",
    opened: 2009,
    image: "/assets/att-stadium.jpg",
    description: "An architectural marvel with a retractable roof, AT&T Stadium is home to the Dallas Cowboys."
  },
  {
    slug: "sofi-stadium",
    name: "SoFi Stadium",
    city: "Inglewood",
    state: "California",
    country: "USA",
    capacity: 70240,
    surface: "Artificial",
    opened: 2020,
    image: "/assets/stadium_night_lights.png",
    description: "The state-of-the-art home of the LA Rams and Chargers, featuring the massive Infinity Screen."
  },
  {
    slug: "rose-bowl",
    name: "Rose Bowl",
    city: "Pasadena",
    state: "California",
    country: "USA",
    capacity: 88565,
    surface: "Natural Grass",
    opened: 1922,
    image: "/assets/rose-bowl.jpg",
    description: "A historic National Historic Landmark, famous for hosting the 1994 World Cup Final."
  },
  {
    slug: "mercedes-benz-stadium",
    name: "Mercedes-Benz Stadium",
    city: "Atlanta",
    state: "Georgia",
    country: "USA",
    capacity: 71000,
    surface: "Artificial",
    opened: 2017,
    image: "/assets/mercedes-benz-stadium.jpg",
    description: "A multi-purpose stadium with a unique pinwheel retractable roof."
  },
  {
    slug: "levis-stadium",
    name: "Levi's Stadium",
    city: "Santa Clara",
    state: "California",
    country: "USA",
    capacity: 68500,
    surface: "Natural Grass",
    opened: 2014,
    image: "/assets/levis-stadium.jpg",
    description: "The high-tech home of the San Francisco 49ers."
  },
  {
    slug: "hard-rock-stadium",
    name: "Hard Rock Stadium",
    city: "Miami",
    state: "Florida",
    country: "USA",
    capacity: 65326,
    surface: "Natural Grass",
    opened: 1987,
    image: "/assets/hard-rock-stadium.jpg",
    description: "A major sports and entertainment destination in South Florida."
  },
  {
    slug: "gillette-stadium",
    name: "Gillette Stadium",
    city: "Foxborough",
    state: "Massachusetts",
    country: "USA",
    capacity: 65878,
    surface: "Artificial",
    opened: 2002,
    image: "/assets/gillette-stadium.png",
    description: "The home of the New England Patriots and Revolution."
  },
  {
    slug: "lincoln-financial-field",
    name: "Lincoln Financial Field",
    city: "Philadelphia",
    state: "Pennsylvania",
    country: "USA",
    capacity: 69796,
    surface: "Natural Grass",
    opened: 2003,
    image: "/assets/lincoln-financial-field.png",
    description: "The energetic home of the Philadelphia Eagles."
  },
  {
    slug: "arrowhead-stadium",
    name: "Arrowhead Stadium",
    city: "Kansas City",
    state: "Missouri",
    country: "USA",
    capacity: 76416,
    surface: "Natural Grass",
    opened: 1972,
    image: "/assets/arrowhead-stadium.jpg",
    description: "One of the loudest and most iconic stadiums in the NFL."
  },
  {
    slug: "q2-stadium",
    name: "Q2 Stadium",
    city: "Austin",
    state: "Texas",
    country: "USA",
    capacity: 20738,
    surface: "Natural Grass",
    opened: 2021,
    image: "/assets/q2-stadium.jpg",
    description: "A soccer-specific stadium and home of Austin FC."
  },
  {
    slug: "estadio-azteca",
    name: "Estadio Azteca",
    city: "Mexico City",
    state: "CDMX",
    country: "Mexico",
    capacity: 87523,
    surface: "Natural Grass",
    opened: 1966,
    image: "/assets/stadium_mexico.png",
    description: "One of the most legendary football cathedrals in the world, having hosted two WC finals."
  },
  {
    slug: "estadio-bbva",
    name: "Estadio BBVA",
    city: "Monterrey",
    state: "Nuevo León",
    country: "Mexico",
    capacity: 53500,
    surface: "Natural Grass",
    opened: 2015,
    image: "/assets/estadio-bbva.jpg",
    description: "Known as 'The Steel Giant', it offers stunning views of the Cerro de la Silla."
  },
  {
    slug: "estadio-akron",
    name: "Estadio Akron",
    city: "Guadalajara",
    state: "Jalisco",
    country: "Mexico",
    capacity: 49850,
    surface: "Natural Grass",
    opened: 2010,
    image: "/assets/estadio-akron.jpg",
    description: "The home of Chivas, featuring a unique volcano-like design."
  },
  {
    slug: "bmo-field",
    name: "BMO Field",
    city: "Toronto",
    state: "Ontario",
    country: "Canada",
    capacity: 45736,
    surface: "Hybrid",
    opened: 2007,
    image: "/assets/bmo-field.jpg",
    description: "Canada's national soccer stadium and home of Toronto FC."
  },
  {
    slug: "bc-place",
    name: "BC Place",
    city: "Vancouver",
    state: "British Columbia",
    country: "Canada",
    capacity: 54500,
    surface: "Artificial",
    opened: 1983,
    image: "/assets/stadium_canada.png",
    description: "A major stadium with a retractable roof system, located in the heart of Vancouver."
  }
];

/* ═══════════════════════════════════════
   DATA  —  all restaurant content here.
   Edit prices / items in this file only.
═══════════════════════════════════════ */

const MENU_DATA = {
  Pizza: [
    { name: 'Margherita',      price: 'ab 8,90 €',  desc: 'Tomatensoße, Mozzarella, frisches Basilikum',              emoji: '🍕' },
    { name: 'Salami',          price: 'ab 10,50 €', desc: 'Tomatensoße, Mozzarella, würzige Salami',                  emoji: '🍕' },
    { name: 'Prosciutto',      price: 'ab 11,90 €', desc: 'Tomatensoße, Mozzarella, Parmaschinken, Rucola',           emoji: '🍕' },
    { name: 'Quattro Formaggi',price: 'ab 12,50 €', desc: 'Mozzarella, Gorgonzola, Parmesan, Ricotta',                emoji: '🍕' },
    { name: 'Diavola',         price: 'ab 11,50 €', desc: 'Tomatensoße, Mozzarella, scharfe Salami, Peperoni',        emoji: '🌶️' },
    { name: 'Vegetariana',     price: 'ab 10,90 €', desc: 'Gegrilltes Gemüse der Saison, Mozzarella, Pesto',          emoji: '🥗' },
  ],

  Pasta: [
    { name: 'Spaghetti Carbonara',     price: '12,90 €', desc: 'Speck, Eigelb, Pecorino Romano, schwarzer Pfeffer',  emoji: '🍝' },
    { name: "Rigatoni all'Arrabbiata", price: '11,50 €', desc: 'Scharfe Tomatensoße, Knoblauch, frische Petersilie', emoji: '🌶️' },
    { name: 'Penne al Pesto',          price: '10,90 €', desc: 'Hausgemachtes Basilikumpesto, Kirschtomaten, Parmesan', emoji: '🌿' },
    { name: 'Tagliatelle al Ragù',     price: '13,50 €', desc: 'Traditionelle Bolognese nach Familienrezept',        emoji: '🍝' },
  ],

  Fleisch: [
    { name: 'Pollo alla Siciliana', price: '16,90 €', desc: 'Gebratenes Hähnchen, Kapern, Oliven, Tomaten',           emoji: '🍗' },
    { name: 'Bistecca Griglia',     price: '22,50 €', desc: 'Gegrilltes Entrecôte, Rosmarin-Jus, saisonales Gemüse', emoji: '🥩' },
    { name: 'Schweinefleisch regional', price: '17,90 €', desc: 'Regionaler Betrieb — Qualität die man schmeckt',    emoji: '🍽️' },
  ],

  Fisch: [
    { name: 'Branzino al Forno',  price: '19,90 €', desc: 'Ofengebackener Wolfsbarsch, Kapern, Zitrone, Olivenöl', emoji: '🐟' },
    { name: 'Gamberi all\'Aglio', price: '18,50 €', desc: 'Garnelen in Knoblauch-Öl, Cherrytomaten, weißer Wein',  emoji: '🦐' },
    { name: 'Fritto Misto di Mare',price: '21,90 €', desc: 'Gemischter Meeresfrüchte-Teller, frittiert, mit Aioli', emoji: '🦑' },
  ],

  Mittagstisch: [
    { name: 'Tagesmenü',      price: 'ab 9,90 €', desc: 'Täglich wechselndes Angebot mit Vorspeise & Hauptgang',    emoji: '🌞' },
    { name: 'Pasta des Tages',price: 'ab 8,90 €', desc: 'Hausgemacht — fragt euer Serviceteam nach dem Tagesangebot', emoji: '🍝' },
  ],
};


const REVIEWS_DATA = [
  {
    name:   'Maria K.',
    initial:'M',
    stars:  5,
    date:   'vor 2 Wochen',
    text:   'Die beste Pizza in Alzey! Der Teig ist unglaublich knusprig und die Zutaten so frisch. Angelo und sein Team machen das mit echter Leidenschaft. Wir kommen immer wieder!',
  },
  {
    name:   'Thomas B.',
    initial:'T',
    stars:  5,
    date:   'vor 1 Monat',
    text:   'Familiäre Atmosphäre, freundliches Personal und authentische sizilianische Küche. Die Terrasse mit Blick auf das Rathaus ist einfach wunderschön. Sehr empfehlenswert!',
  },
  {
    name:   'Sophie L.',
    initial:'S',
    stars:  5,
    date:   'vor 3 Wochen',
    text:   'Wir feierten hier unseren Jahrestag. Familie Strabone kümmert sich persönlich — man spürt sofort, dass sie mit Herz dabei sind. Essen war exzellent.',
  },
  {
    name:   'Andreas M.',
    initial:'A',
    stars:  5,
    date:   'vor 2 Monaten',
    text:   'Seit Jahren unser Stammrestaurant in Alzey. Der Mittagstisch ist unschlagbar — täglich wechselnd und immer frisch. La Nave bleibt La Nave!',
  },
  {
    name:   'Claudia R.',
    initial:'C',
    stars:  5,
    date:   'vor 1 Woche',
    text:   'Das ist kein Standard-Italiener — das ist Sizilien in Alzey. Frische Zutaten, echte Rezepte, herzliches Personal. Das Prosciutto mit Rucola ist ein Gedicht!',
  },
];

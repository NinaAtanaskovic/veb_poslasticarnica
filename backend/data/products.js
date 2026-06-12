const products = [
  {
    
    name: 'Reforma torta',
    image: 'https://static.maxi.rs/medias/sys_master/hb7/h89/8840483078174.jpg',
    description:
      'Reforma torta predstavlja bogat spoj oraha i čokolade u savršeno usklađenim slojevima. Krem je pun i gladak, sa blagom notom putera koja daje posebnu dubinu ukusa. Svaki zalogaj ostavlja utisak topline i klasične elegancije. Idealna je za one koji vole tradicionalne, ali profinjene deserte.',
    category: 'Torte',
    price: 680,
    countInStock: 10,
    rating: 5,
    numReviews: 12,
  },
  {

    name: 'Čizkejk',
    image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/BlueberryCheesecake.webp',
    description:
      'Čizkejk odiše svojom nežnom i kremastom teksturom koja se lagano topi u ustima. Podloga od keksa daje blagu hrskavost, dok krem donosi savršenu ravnotežu između slatkog i laganog ukusa. Deluje jednostavno, ali vrlo elegantno. Savršen izbor za ljubitelje modernih i laganih poslastica.',
    category: 'Torte',
    price: 650,
    countInStock: 9,
    rating: 4.8,
    numReviews: 10,
  },
  {
    
    name: 'Plazma torta',
    image: 'https://i.ytimg.com/vi/AIq5w4J_LA4/maxresdefault.jpg',
    description:
      'Plazma torta donosi poznati ukus detinjstva u malo sofisticiranijem obliku. Mekana struktura i blagi krem stvaraju prijatan i harmoničan spoj. Njena jednostavnost je zapravo njen najveći kvalitet. Diskretna, ali uvek rado birana.',
    category: 'Torte',
    price: 630,
    countInStock: 12,
    rating: 4.7,
    numReviews: 9,
  },
  {
    
    name: 'Krempita',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_BNcahfVNs5RCCI6iduTj5Sd__vy0fOMB8w&s',
    description:
      'Krempita se izdvaja svojom laganom i penastom teksturom. Svilenkasti vanila krem nežno je uklopljen između slojeva lisnatog testa. Ukus je čist i nenametljiv, ali veoma prijatan. Ostavlja osećaj lakoće i klasične finoće.',
    category: 'Kolači',
    price: 550,
    countInStock: 7,
    rating: 4.9,
    numReviews: 8,
  },
  {
    
    name: 'Matilda torta',
    image: 'https://www.healthytastelife.com/wp-content/uploads/2025/12/Matilda-Chocolate-Cake-2.png',
    description:
      'Matilda torta je pravi izbor za ljubitelje intenzivnog čokoladnog ukusa. Bogati slojevi čokoladnog fila stvaraju pun i raskošan doživljaj. Svaki detalj ove torte odiše dubinom i toplinom. U isto vreme snažna, ali i veoma elegantna.',
    category: 'Torte',
    price: 800,
    countInStock: 6,
    rating: 5,
    numReviews: 11,
  },
  {
    
    name: 'Pistać malina torta',
    image: 'https://hmc.rs/wp-content/uploads/2024/11/PISTAC-MALINA-4.png',
    description:
      'Ova torta donosi savršenu igru nežnih i osvežavajućih ukusa. Pistać daje blagu, orašastu notu, dok malina unosi laganu svežinu. Kombinacija je moderna i vrlo prijatna. Vizuelno i ukusno deluje sofisticirano.',
    category: 'Torte',
    price: 700,
    countInStock: 5,
    rating: 4.9,
    numReviews: 10,
  },
  {
    
    name: 'Dubai torta',
    image: 'https://i.ytimg.com/vi/qXz_Y8Hws88/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkTdudleSMCfGZ1Sc855xmgqCZKA',
    description:
      'Dubai torta inspirisana je bogatim, orijentalnim ukusima. Slojevi pistaća, čokolade i karamele daju joj pun i raskošan karakter. Ukus je izražen, ali lepo izbalansiran. Deluje luksuzno i potpuno drugačije od klasičnih torti.',
    category: 'Torte',
    price: 800,
    countInStock: 4,
    rating: 5,
    numReviews: 9,
  },
  {
    
    name: 'Kinder Bueno torta',
    image: 'https://www.mysticcakes.com/wp-content/uploads/2018/01/sam_4709res.jpg',
    description:
      'Ova torta donosi prepoznatljiv ukus lešnika i čokolade u kremastoj formi. Lagana je, ali dovoljno bogata da zadovolji želju za slatkim. Svaki zalogaj podseća na dobro poznatu čokoladnu poslasticu. Razigrana i veoma prijatna.',
    category: 'Torte',
    price: 650,
    countInStock: 7,
    rating: 4.8,
    numReviews: 10,
  },
  {
    
    name: 'Čokoladna krofna',
    image: 'https://thumbs.dreamstime.com/b/big-tasty-appetizing-donuts-isolated-close-up-white-background-64573559.jpg',
    description:
      'Čokoladna krofna je mekana, topla i bogata ukusom kakaa. Preliv od čokolade dodatno naglašava njen karakter. Jednostavna, ali vrlo efektna. Savršena za trenutke kada ti treba mali slatki predah.',
    category: 'Krofne',
    price: 250,
    countInStock: 15,
    rating: 4.6,
    numReviews: 6,
  },
  {
    
    name: 'Krofna sa jagodom',
    image: 'https://static.vecteezy.com/system/resources/previews/054/001/409/non_2x/three-pink-strawberry-donuts-stacked-high-png.png',
    description:
      'Ova krofna donosi lagani voćni akcenat u klasičnu formu. Fil od jagode daje joj svežinu i blag, prirodan ukus. Tekstura je mekana i lagana. Diskretno slatka i vrlo prijatna.',
    category: 'Krofne',
    price: 250,
    countInStock: 13,
    rating: 4.7,
    numReviews: 7,
  },
  {
    
    name: 'Mak kolač',
    image: 'https://petruscaffe.com/wp-content/uploads/2021/10/Topli-mak-kolac.jpg',
    description:
      'Mak kolač ima prepoznatljiv i pomalo sofisticiran ukus. Njegova aroma je blago jača, ali prijatna i uravnotežena. Mekana struktura čini ga veoma laganim. Odličan izbor za one koji vole nešto drugačije.',
    category: 'Kolači',
    price: 680,
    countInStock: 8,
    rating: 4.5,
    numReviews: 5,
  },
  {
    
    name: 'Torta sa jagodama',
    image: 'https://static.vecteezy.com/system/resources/previews/059/954/611/non_2x/a-slice-of-cake-with-strawberries-on-top-png.png',
    description:
      'Ova torta odiše svežinom i lakoćom. Jagode daju prirodnu slatkoću, dok krem upotpunjuje teksturu. Ukus je nežan i vrlo prijatan. Savršen izbor za lagane, voćne deserte.',
    category: 'Torte',
    price: 650,
    countInStock: 6,
    rating: 4.8,
    numReviews: 8,
  },
  {
    
    name: 'Švarcvald torta',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKjjedKoQBSEyp6s0xJVZMHbn4h3HoxAI4w&s',
    description:
      'Švarcvald torta kombinuje čokoladu, višnje i krem u savršenom balansu. Ukus je bogat, ali lepo osvežavajući. Svaki sloj doprinosi kompletnom doživljaju. Klasika koja nikada ne izlazi iz stila.',
    category: 'Torte',
    price: 680,
    countInStock: 5,
    rating: 5,
    numReviews: 9,
  },
  {
    
    name: 'Američki cookie',
    image: 'https://png.pngtree.com/png-clipart/20240911/original/pngtree-deliciously-homemade-chocolate-chip-cookies-with-a-perfect-crunch-png-image_15989514.png',
    description:
      'Američki keksići su spolja blago hrskavi, a iznutra mekani. Komadi čokolade daju dodatnu punoću ukusa. Jednostavni su, ali vrlo primamljivi. Idealni za svakodnevni slatki užitak.',
    category: 'Kolači',
    price: 250,
    countInStock: 12,
    rating: 4.6,
    numReviews: 6,
  },
  {
    
    name: 'Pita sa višnjama',
    image: 'https://static.vecteezy.com/system/resources/previews/044/809/178/non_2x/a-slice-of-cherry-pie-on-a-transparent-background-png.png',
    description:
      'Pita sa višnjama donosi savršenu kombinaciju blago kiselkastog voća i mekog, domaćeg testa. Punjenje je sočno i aromatično, dok kora daje laganu hrskavost. Ukus je osvežavajući i lepo izbalansiran. Idealna je kao lagan desert uz kafu ili čaj.',
    category: 'Pite',
    price: 650,
    countInStock: 8,
    rating: 4.7,
    numReviews: 6,
  },
  {
    
    name: 'Pita sa jabukama',
    image: 'https://t3.ftcdn.net/jpg/08/01/38/90/360_F_801389000_nzLguXeraEwp8WbFGEfmFA6lVagnehPW.jpg',
    description:
      'Pita sa jabukama je klasičan kolač sa toplim i prijatnim ukusom. Sočne jabuke sa blagim notama cimeta savršeno se uklapaju u mekano testo. Miris i ukus podsećaju na domaću, tradicionalnu kuhinju. Jednostavna, ali uvek omiljena poslastica.',
    category: 'Pite',
    price: 650,
    countInStock: 10,
    rating: 4.8,
    numReviews: 7,
  },
];

export default products;
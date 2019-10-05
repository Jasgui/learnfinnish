var initialData = {
    content: [
        {
            finnish: "mikä se on?",
            french: "qu'est-ce que c'est ?"
        },
        {
            finnish: "Olen ranskalainen",
            french: "Je suis français"
        },
        {
            finnish: "Mitä etsit?",
            french: "Qu'est-ce que tu cherches ?"
        }
    ]
};



//var initialData = {
//    content: [
//        {
//            finnish: "Ensimmäinen oppitunti",
//            french: "Première leçon"
//    }, {
//            finnish: "Hyvää päivää",
//            french: "Bonjour"
//    }, {
//            finnish: "Anteeksi",
//            french: "Excusez-moi"
//    }, {
//            finnish: "Mitä etsitte?",
//            french: "Que cherchez-vous ?"
//    }, {
//            finnish: "Olen ulkomaalainen matkailija",
//            french: "Je suis un touriste étranger"
//    }, {
//            finnish: "Missä Puistotie on?",
//            french: "Où est l'avenue du Parc ?"
//    }, {
//            finnish: "Tämä on Puistotie ja tuo on Museokatu",
//            french: "Voici l'avenue du Parc et voilà la rue du Musée"
//    }, {
//            finnish: "Ja tuo on Museokatu",
//            french: "Et voilà la rue du Musée"
//    }, {
//            finnish: "Kiitos",
//            french: "Merci"
//    }, {
//            finnish: "Tämä on ensimmäinen oppitunti",
//            french: "Voici la première leçon"
//    }, {
//            finnish: "Olette ulkomaalainen",
//            french: "Vous êtes étranger"
//    }, {
//            finnish: "Missä matkailija on?",
//            french: "Où est le touriste ?"
//    }, {
//            finnish: "Puistotie on täällä",
//            french: "L'avenue du Parc est ici"
//    }, {
//            finnish: "Missä on puisto?",
//            french: "Où y a-t-il un parc ?"
//    }, {
//            finnish: "Toinen oppitunti",
//            french: "Deuxième leçon"
//    }, {
//            finnish: "Keskustelu",
//            french: "Conversation"
//    }, {
//            finnish: "Päivää",
//            french: "Salut"
//    }, {
//            finnish: "Mitä kuuluu?",
//            french: "Comment allez-vous ?"
//    }, {
//            finnish: "Kiitos, hyvää",
//            french: "Bien, merci"
//    }, {
//            finnish: "Tänään on kaunis ilma",
//            french: "Aujourd'hui il fait beau"
//    }, {
//            finnish: "Niin on",
//            french: "Oui"
//    }, {
//            finnish: "Puhutte jo hyvin suomea",
//            french: "Vous parlez déjà bien finnois"
//    }, {
//            finnish: "Minä harjoittelen keskustelua joka päivä",
//            french: "Je pratique la conversation tous les jours"
//    }, {
//            finnish: "Hyvä",
//            french: "Bien"
//    }, {
//            finnish: "Siten lapsikin oppii helposti suomea",
//            french: "C'est ainsi que même un enfant apprend facilement le finnois"
//    }, {
//            finnish: "Suomalainen lapsi",
//            french: "Un enfant finlandais"
//    }, {
//            finnish: "Tämä lapsi puhuu hyvin",
//            french: "Cet enfant parle bien"
//    }, {
//            finnish: "Minä puhun jo suomea",
//            french: "Je parle déjà finnois"
//    }, {
//            finnish: "Matkailija harjoittelee keskustelua",
//            french: "Le touriste pratique la conversation"
//    }, {
//            finnish: "Tämä on toinen oppitunti",
//            french: "Voici la deuxième leçon"
//    }, {
//            finnish: "Puhutte suomea joka päivä",
//            french: "Vous parlez finnois tous les jours"
//    }, {
//            finnish: "Kolmas oppitunti",
//            french: "Troisième leçon"
//    }, {
//            finnish: "Tapaaminen puistossa",
//            french: "Rencontre dans le parc"
//    }, {
//            finnish: "Inari ja Timo ovat tuolla",
//            french: "Inari et Timo sont là"
//    }, {
//            finnish: "Missä?",
//            french: "Où ça ?"
//    }, {
//            finnish: "He kävelevät tuolla puistossa",
//            french: "Ils se promènent là dans le parc"
//    }, {
//            finnish: "Muuten",
//            french: "Au fait"
//    }, {
//            finnish: "Missä Timo asuu?",
//            french: "Où habite Timo ?"
//    }, {
//            finnish: "Hän on Inarin naapuri",
//            french: "C'est le voisin d'Inari"
//    }, {
//            finnish: "Tekin kävelette puistossa",
//            french: "Vous aussi, vous vous promenez dans le parc"
//    }, {
//            finnish: "Tämä on kaunis puisto",
//            french: "C'est un beau parc"
//    }, {
//            finnish: "Timo ja Inarikin ovat tuolla",
//            french: "Timo et Inari aussi sont là"
//    }, {
//            finnish: "Mitä lapsi etsii?",
//            french: "Que cherche l'enfant ?"
//    }, {
//            finnish: "Hän etsii Inaria",
//            french: "Il cherche Inari"
//    }, {
//            finnish: "Neljäs oppitunti",
//            french: "Quatrième leçon"
//    }, {
//            finnish: "Pelaamme koko päivän",
//            french: "Nous jouerons toute la journée"
//    }, {
//            finnish: "Inari ja Anneli tapaavat Timon ja Juhan",
//            french: "Inari et Anneli rencontrent Timo et Juha"
//    }, {
//            finnish: "Mitä te teette tänään?",
//            french: "Qu'est-ce que vous faites aujourd'hui ?"
//    }, {
//            finnish: "Minä olen työssä",
//            french: "Je travaille"
//    }, {
//            finnish: "Mutta Juha tapaa lääkärin",
//            french: "Mais Juha va voir le médecin"
//    }, {
//            finnish: "Miksi?",
//            french: "Pourquoi ?"
//    }, {
//            finnish: "Mikä sinun on?",
//            french: "Qu'est-ce que tu as ?"
//    }, {
//            finnish: "Ei mikään",
//            french: "Rien"
//    }, {
//            finnish: "Me pelaamme korttia",
//            french: "Nous allons jouer aux cartes"
//    }, {
//            finnish: "Tapaamme Inarin naapurin museossa",
//            french: "Nous rencontrons le voisin d'Inari au musée"
//    }, {
//            finnish: "Olemme työssä koko päivän",
//            french: "Nous travaillons toute la journée"
//    }, {
//            finnish: "Lääkäri ja Juha kävelevät joka päivä puistossa",
//            french: "Le médecin et Juha se promènent chaque jour dans le parc"
//    }, {
//            finnish: "He ovat työssä ja pelaavat korttia",
//            french: "Ils travaillent et ils jouent aux cartes"
//    }, {
//            finnish: "Anneli ja Inari tapaavat tänää lääkärin",
//            french: "Anneli et Inari iront voir le médecin aujourd'hui"
//    }, {
//            finnish: "Viides oppitunti",
//            french: "Cinquième leçon"
//    }, {
//            finnish: "Rakkaus",
//            french: "L'amour"
//    }, {
//            finnish: "Mitä sinä teet?",
//            french: "Qu'est-ce que tu fais ?"
//    }, {
//            finnish: "Pakkaan matkalaukkua",
//            french: "Je fais ma valise"
//    }, {
//            finnish: "Loma on loppu",
//            french: "Les vacances sont terminées"
//    }, {
//            finnish: "Ja palaan kotiin Sveitsiin",
//            french: "Et je retourne à la maison en Suisse"
//    }, {
//            finnish: "Rakastan sinua",
//            french: "Je t'aime"
//    }, {
//            finnish: "Ja jään ihan yksin",
//            french: "Et je reste ici tout seul"
//    }, {
//            finnish: "Rakastat minua",
//            french: "Tu m'aimes"
//    }, {
//            finnish: "Miksi suomalaiset rakastavat vain osaa?",
//            french: "Pourquoi les Finlandais aiment-ils seulement en partie ?"
//    }, {
//            finnish: "Olet liian iso",
//            french: "Tu es trop grande"
//    }, {
//            finnish: "Miski rakastat Heidia?",
//            french: "Pourquoi aimes-tu Heidi ?"
//    }, {
//            finnish: "Pakkaamme isoa matkalaukkua",
//            french: "Nous faisons une grande valise"
//    }, {
//            finnish: "Rakastamme lomaa",
//            french: "Nous aimons les vacances"
//    }, {
//            finnish: "Mitä te rakastatte?",
//            french: "Qu'est-ce que vous aimez ?"
//    }, {
//            finnish: "Sinä palaat tänään yksin kotiin",
//            french: "Tu retournes aujourd'hui seul à la maison"
//    }, {
//            finnish: "Heidi on kaunis",
//            french: "Heidi est belle"
//    }, {
//            finnish: "Kuudes oppitunti",
//            french: "Sixième leçon"
//    }, {
//            finnish: "Ravintolassa",
//            french: "Au restaurant"
//    }, {
//            finnish: "Minun on nälkä",
//            french: "J'ai faim"
//    }, {
//            finnish: "Ja syön tänään ravintolassa",
//            french: "Et aujourd'hui je mange au restaurant"
//    }, {
//            finnish: "Minunkin on nälkä",
//            french: "Moi aussi j'ai faim"
//    }, {
//            finnish: "Syön usein Kirkkotorin pizzeriassa",
//            french: "Je mange souvent dans la pizzeria de la place de l'église"
//    }, {
//            finnish: "Se on halpa",
//            french: "C'est bon marché"
//    }, {
//            finnish: "Selvä",
//            french: "D'accord"
//    }, {
//            finnish: "Kyllä se sopii",
//            french: "Ça me va"
//    }, {
//            finnish: "Kymmenen minuuttia myöhemmin",
//            french: "Dix minutes plus tard"
//    }, {
//            finnish: "Tarjoilija",
//            french: "Le serveur"
//    }, {
//            finnish: "Mitä saa olla?",
//            french: "Avez-vous choisi ?"
//    }, {
//            finnish: "Otamme päivän pizzan ja olutta",
//            french: "Nous prendrons une pizza du jour et de la bière"
//    }, {
//            finnish: "He syövät usein ravintolassa",
//            french: "Ils mangent souvent au restaurant"
//    }, {
//            finnish: "Te otatte olutta",
//            french: "Vous prenez de la bière"
//    }, {
//            finnish: "Miksi sinä palaat kotiin?",
//            french: "Pourquoi tu rentres à la maison ?"
//    }, {
//            finnish: "Tapaamme tänään Heidin museon puistossa",
//            french: "Aujourd'hui nous rencontrons Heidi dans le parc du musée"
//    }, {
//            finnish: "Tarjoilija on työssä ravintolassa koko päivän",
//            french: "Le serveur travaille toute la journée au restaurant"
//    }, {
//            finnish: "Seitsemäs oppitunti",
//            french: "Septième leçon"
//    }, {
//            finnish: "Kertausvuoropuhelu",
//            french: "Dialogue de révision"
//    }, {
//            finnish: "Ulkomaalainen matkailijia museossa",
//            french: "Un touriste étranger au musée"
//    }, {
//            finnish: "Hän harjoittelee suomea",
//            french: "Il pratique le finnois"
//    }, {
//            finnish: "Oletteko te työssä täällä?",
//            french: "Vous travaillez ici ?"
//    }, {
//            finnish: "Minä olen työssä museossa",
//            french: "Je travaille ici au musée"
//    }, {
//            finnish: "Minä olen lääkäri Sveitsissa",
//            french: "Je suis médecin en Suisse"
//    }, {
//            finnish: "Syömmekö museon ravintolassa?",
//            french: "Nous mangeons au restaurant du musée ?"
//    }, {
//            finnish: "Otamme pizzan ja olutta",
//            french: "Nous prendrons une pizza et de la bière"
//    }, {
//            finnish: "Tämä pizza on ihan liian iso",
//            french: "Cette pizza est vraiment trop grande"
//    }, {
//            finnish: "Mitä minä teen?",
//            french: "Qu'est-ce que je fais ?"
//    }, {
//            finnish: "Otanko minä osan?",
//            french: "J'en prends une partie ?"
//    }, {
//            finnish: "Te syötte ison osan",
//            french: "Vous mangez la grande partie"
//    }, {
//            finnish: "Ja minä pienen",
//            french: "Et moi la petite"
//    }, {
//            finnish: "Kahdeksas oppitunti",
//            french: "Huitième leçon"
//    }, {
//            finnish: "Ei makeaa kahvia",
//            french: "Pas de café sucré"
//    }, {
//            finnish: "Kahvilassa",
//            french: "Au café"
//    }, {
//            finnish: "Iso kuppi kahvia",
//            french: "Une grande tasse de café"
//    }, {
//            finnish: "Minä otan pienen",
//            french: "J'en prends une petite"
//    }, {
//            finnish: "Viisi minuuttia myöhemmin",
//            french: "Cinq minutes plus tard"
//    }, {
//            finnish: "Tämä kahvi ei ole hyvää",
//            french: "Ce café n'est pas bon"
//    }, {
//            finnish: "Ei todellakaan",
//            french: "Non, vraiment pas"
//    }, {
//            finnish: "Viisi sokeripalaa",
//            french: "Cinq morceaux de sucre"
//    }, {
//            finnish: "Mutta miksi et sekoita?",
//            french: "Pourquoi tu ne mélanges pas ?"
//    }, {
//            finnish: "Kun en juo koskaan makeaa kahvia",
//            french: "Comme je ne bois jamais de café sucré"
//    }, {
//            finnish: "Inari ei ole työssä",
//            french: "Inari n'est pas au travail"
//    }, {
//            finnish: "Hän on kahvilassa",
//            french: "Elle est au café"
//    }, {
//            finnish: "Attekaan ei ole työssä",
//            french: "Atte non plus n'est pas au travail"
//    }, {
//            finnish: "Hänkin on kahvilassa",
//            french: "Lui aussi est au café"
//    }, {
//            finnish: "Hän ei otaa koskaan isoa kahvia",
//            french: "Il ne prend jamais un grand café"
//    }, {
//            finnish: "Yhdeksäs oppitunti",
//            french: "Neuvième leçon"
//    }, {
//            finnish: "Ikävä ilta",
//            french: "Une soirée ennuyeuse"
//    }, {
//            finnish: "Iltaa",
//            french: "Bonsoir"
//    }, {
//            finnish: "Missä Sinikka on?",
//            french: "Où est Sinikka ?"
//    }, {
//            finnish: "En tiedä",
//            french: "Je ne sais pas"
//    }, {
//            finnish: "Hän ei ole tänään työssä",
//            french: "Elle ne travaille pas aujourd'hui"
//    }, {
//            finnish: "Hän on lomalla",
//            french: "Elle est en congé"
//    }, {
//            finnish: "Mikä vahinko",
//            french: "Quel dommage"
//    }, {
//            finnish: "Puolikuussa on hyvä orkesteri",
//            french: "À la Demi-Lune il y a un bon orchestre"
//    }, {
//            finnish: "Tiedän",
//            french: "Je sais"
//    }, {
//            finnish: "Mutta valittestavasti olen liian väsynyt",
//            french: "Mais malheureusement je suis trop fatiguée"
//    }, {
//            finnish: "Sinikka on lomalla",
//            french: "Sinikka est en congé"
//    }, {
//            finnish: "Ja Inari ei jaksa tanssia",
//            french: "Et Inari n'est pas en état de danser"
//    }, {
//            finnish: "No ei voi mitään",
//            french: "Bon, on n'y peut rien"
//    }, {
//            finnish: "On perjantai-ilta mutta minä katson kotona televisiota nallen kanssa",
//            french: "On est vendredi soir mais moi je vais regarder la télé à la maison avec mon nounours"
//    }, {
//            finnish: "Hyvää yötä",
//            french: "Bonne nuit"
//    }, {
//            finnish: "Missä Sinikka syö illalla?",
//            french: "Où Sinikka mange-t-elle ce soir ?"
//    }, {
//            finnish: "Ravintolan orkesteri on lomalla",
//            french: "L'orchestre du restaurant est en vacances"
//    }, {
//            finnish: "Se on hyvä ulkomaalainen orkesteri",
//            french: "C'est un bon orchestre étranger"
//    }, {
//            finnish: "Se ei ole ravintolassa tänään",
//            french: "Il n'est pas au restaurant aujourd'hui"
//    }, {
//            finnish: "Kymmenes oppitunti",
//            french: "Dixième leçon"
//    }, {
//            finnish: "Sataa",
//            french: "Il pleut"
//    }, {
//            finnish: "Tänä aamuna käymme torilla",
//            french: "Ce matin nous irons au marché"
//    }, {
//            finnish: "Ja ostamme kalaa",
//            french: "Et nous achèterons du poisson"
//    }, {
//            finnish: "Alkaa sataa rankasti",
//            french: "Il commence à pleuvoir violemment"
//    }, {
//            finnish: "No voi harmi",
//            french: "Oh que ennui"
//    }, {
//            finnish: "Nyt emme voi mennä ulos",
//            french: "Maintenant nous ne pouvons pas sortir"
//    }, {
//            finnish: "Ja te ette saa illalla kalaa",
//            french: "Et vous n'aurez pas de poisson ce soir"
//    }, {
//            finnish: "Kissa ja koira nukkuvat",
//            french: "Le chat et le chien dorment"
//    }, {
//            finnish: "Ne eivat tiedä että ei ole kalaa",
//            french: "Ils ne savent pas qu'il n'y aura pas de poisson"
//    }, {
//            finnish: "En käy tänään koiran kanssa puistossa",
//            french: "Je ne passe pas aujourd'hui avec le chien dans le parc"
//    }, {
//            finnish: "Ostamme kahvia ja sokeria",
//            french: "Nous achetons du café et du sucre"
//    }, {
//            finnish: "Mutta emme käy torilla ja osta kalaa",
//            french: "Mais nous n'irons pas au marché et n'achèterons pas de poisson"
//    }, {
//            finnish: "Olutkin on loppu",
//            french: "La bière aussi est finie"
//    }, {
//            finnish: "Kissa ja koira eivät syö pizzaa",
//            french: "Le chat et le chien ne mangent pas de pizza"
//    }, {
//            finnish: "En ota isoa matkalaukkua",
//            french: "Je ne prends pas la grande valise"
//    }, {
//            finnish: "Yhdestoista oppitunti",
//            french: "Onzième leçon"
//    }, {
//            finnish: "Sauna",
//            french: "Le sauna"
//    }, {
//            finnish: "Elodie asuu hotelli Vaakunassa",
//            french: "Elodie habite à l'hôtel Vaakuna"
//    }, {
//            finnish: "Puhelin soi",
//            french: "Le téléphone sonne"
//    }, {
//            finnish: "Hei, täällä puhuu Aino",
//            french: "Salut, ici Aino"
//    }, {
//            finnish: "Mitä me teemme huomenna?",
//            french: "Que faisons-nous demain ?"
//    }, {
//            finnish: "Voimmeko käydä saunassa?",
//            french: "Pouvons-nous aller au sauna ?"
//    }, {
//            finnish: "Työviikko loppuu",
//            french: "La semaine de travail se termine"
//    }, {
//            finnish: "Ja sauna tekee hyvää",
//            french: "Et le sauna nous fera du bien"
//    }, {
//            finnish: "Tuletko tänne?",
//            french: "Tu viendras ici ?"
//    }, {
//            finnish: "Täällä on hyvä sauna",
//            french: "Ici il y a un bon sauna"
//    }, {
//            finnish: "Saunomme",
//            french: "Nous irons au sauna"
//    }, {
//            finnish: "Ja sen jälkeen uimme",
//            french: "Et après cela nous nagerons"
//    }, {
//            finnish: "Ihanaa",
//            french: "Super"
//    }, {
//            finnish: "Minä en osaa uida",
//            french: "Je ne sais pas nager"
//    }, {
//            finnish: "Emme käy saunassa huomenna",
//            french: "Nous n'irons pas au sauna demain"
//    }, {
//            finnish: "Mitä te teette illalla?",
//            french: "Qu'est-ce que vous faites ce soir ?"
//    }, {
//            finnish: "Pieni sauna on usein hyvä",
//            french: "Un petit sauna est souvent bon"
//    }, {
//            finnish: "Uitteko te joka päivä?",
//            french: "Nagez-vous tous les jours ?"
//    }, {
//            finnish: "Olen Puolikuussa",
//            french: "Je suis à la Demi-Lune"
//    }, {
//            finnish: "Kahdestoista oppintunti",
//            french: "Douxième leçon"
//    }, {
//            finnish: "Lentokoneessa",
//            french: "En avion"
//    }, {
//            finnish: "Suomi on jo tuolla",
//            french: "C'est déjà la Finlande"
//    }, {
//            finnish: "Ei, se on saari",
//            french: "Non, c'est une île"
//    }, {
//            finnish: "Oletteko ulkomaalainen?",
//            french: "Êtes-vous étranger ?"
//    }, {
//            finnish: "Olen australialainen",
//            french: "Je suis australien"
//    }, {
//            finnish: "Täällä on paljon vettä",
//            french: "Il y a beaucoup d'eau ici"
//    }, {
//            finnish: "Tämä on meri",
//            french: "Ça c'est la mer"
//    }, {
//            finnish: "Mutta Suomessa on myös sata kahdeksan kymmentä seitsemän tuhatta kahdeksansataa kahdeksankymmentä kahdeksan järveä",
//            french: "Mais en Finlande il y a aussi 187 888 lacs"
//    }, {
//            finnish: "Voiko se olla totta?",
//            french: "C'est vrai ?"
//    }, {
//            finnish: "Suomessa te voitte uida kaikkialla",
//            french: "En Finlande vous pouvez nager partout"
//    }, {
//            finnish: "Tarkoitan tietenkin kesällä",
//            french: "Je veux dire en été, bien sûr"
//    }, {
//            finnish: "Talvella järvet ovat jäässä",
//            french: "En hiver les lacs sont gelés"
//    }, {
//            finnish: "Olen usein väsynyt lentokoneessa",
//            french: "Je suis souvent fatigué en avion"
//    }, {
//            finnish: "En tahdo harjoitella keskustelua",
//            french: "Je ne veux pas pratiquer la conversation"
//    }, {
//            finnish: "Palaan kotiin Australiaan ison matkalaukun kanssa",
//            french: "Je rentre à la maison en Australie avec une grosse valise"
//    }, {
//            finnish: "Talvella Suomen järvet ovat jäässä",
//            french: "En hiver les lacs de Finlande sont gelés"
//    }, {
//            finnish: "Kesällä uin järvessä koko päivän",
//            french: "En été je nage dans un lac toute la journée"
//    }, {
//            finnish: "Kolmastoista oppitunti",
//            french: "Treizième leçon"
//    }, {
//            finnish: "Lomalle Yyteriin",
//            french: "En vue des vacances à Yyteri"
//    }, {
//            finnish: "Apua",
//            french: "Au secours"
//    }, {
//            finnish: "Uimapuku on liian pieni",
//            french: "Mon maillot de bain est trop petit"
//    }, {
//            finnish: "Ajan sinut kaupunkiin ja ostat uuden",
//            french: "Je te conduis en ville et tu en achètes un nouveau"
//    }, {
//            finnish: "Hyvä uimapuku maksaa paljon",
//            french: "Un bon maillot coûte cher"
//    }, {
//            finnish: "Mutta en voi lähteä lomalle ilman uimapukua",
//            french: "Mais je ne peux pas partir en vacances sans maillot"
//    }, {
//            finnish: "Viisi tuntia myöhemmin",
//            french: "Cinq heures plus tard"
//    }, {
//            finnish: "Kulta",
//            french: "Chérie"
//    }, {
//            finnish: "Oletko valmis?",
//            french: "Tu es prête ?"
//    }, {
//            finnish: "Joko voimme lähteä?",
//            french: "On peut partir maintenant ?"
//    }, {
//            finnish: "Uusi uimapuku on hukassa",
//            french: "Le nouveau maillot est perdu"
//    }, {
//            finnish: "Miten niin hukassa?",
//            french: "Comment ça perdu ?"
//    }, {
//            finnish: "Mitä tarkoitat?",
//            french: "Qu'est-ce que tu veux dire ?"
//    }, {
//            finnish: "En löydä sitä mistään",
//            french: "Je ne le trouve nulle part"
//    }, {
//            finnish: "Onkohan se siellä kaupassa?",
//            french: "Peut-être qu'il est dans la boutique ?"
//    }, {
//            finnish: "Menettekö lomalla Yyteriin?",
//            french: "Vous allez aller en vacances à Yyteri ?"
//    }, {
//            finnish: "Uitteko joka päivä kesällä?",
//            french: "Vous nagez tous les jours en été ?"
//    }, {
//            finnish: "Ostatko aina liian pienen uimapuvun?",
//            french: "Tu achètes toujours un maillot de bain trop petit ?"
//    }, {
//            finnish: "Onko sinun nälkä?",
//            french: "Tu as faim ?"
//    }, {
//            finnish: "Kalaako kissa syö?",
//            french: "C'est du poisson que le chat mange ?"
//    }, {
//            finnish: "Neljästoista oppitunti",
//            french: "Quatorzième leçon"
//    }, {
//            finnish: "On kauni ilma",
//            french: "Il fait beau"
//    }, {
//            finnish: "Inari on torilla koiran kanssa",
//            french: "Inari est sur la place su marché avec son chien"
//    }, {
//            finnish: "Olen väsynyt ja valitettavasti katson liian paljon televisiota joka päivä",
//            french: "Je suis fatiguée et malheureusement je regarde trop la télé tous les jours"
//    }, {
//            finnish: "Hyvä, että olet nyt torilla",
//            french: "C'est bien que tu sois au marché alors"
//    }, {
//            finnish: "Ostatko kalaa?",
//            french: "Tu achètes du poisson ?"
//    }, {
//            finnish: "Kävelen vain",
//            french: "Je me promène seulement"
//    }, {
//            finnish: "Se tekee hyvää",
//            french: "Ça fait du bien"
//    }, {
//            finnish: "Menemme Mustin kanssa puistoon",
//            french: "Nous allons au parc avec Musti"
//    }, {
//            finnish: "Tuletko sinäkin?",
//            french: "Tu viens aussi ?"
//    }, {
//            finnish: "Hm, miksi ei?",
//            french: "Hmm, pourquoi pas ?"
//    }, {
//            finnish: "Onko puiston järvi on jäässä?",
//            french: "Le lac du parc est déjà gelé ?"
//    }, {
//            finnish: "Mutta voi olla jo huomenna",
//            french: "Mais il peut l'être demain"
//    }, {
//            finnish: "Mustin kanssa kävelet tietenkin paljon",
//            french: "Avec Musti tu tu promènes beaucoup"
//    }, {
//            finnish: "Minä en käy usein puistossa",
//            french: "Moi je ne vais pas souvent au parc"
//    }, {
//            finnish: "Viidestoista oppitunti",
//            french: "Quinzième leçon"
//    }, {
//            finnish: "Paluu lomalta Yyteristä",
//            french: "Retour de vacances à Yyteri"
//    }, {
//            finnish: "Autossa",
//            french: "Dans la voiture"
//    }, {
//            finnish: "Minusta on kiva lähteä jo kotiin",
//            french: "Je suis contente de partir déjà pour rentrer à la maison"
//    }, {
//            finnish: "Yyterissä onkin taas liian paljon väkeä",
//            french: "À Yyteri il y a encore trop de monde"
//    }, {
//            finnish: "Paljonko täältä on kotiin?",
//            french: "Combien il y a d'ici à la maison ?"
//    }, {
//            finnish: "Jos menemme Oulun kautta?",
//            french: "Si on passe par Oulu ?"
//    }, {
//            finnish: "Ouluun on noin sata kolmekymmentä",
//            french: "Jusqu'à Oulu ça fait environ 130"
//    }, {
//            finnish: "Ja Oulusta Joesnsuuhun neljä sataa kuusitoista kilometriä",
//            french: "Et d'Oulu à Joensuu, 416 kilomètres"
//    }, {
//            finnish: "Kaikkiaan viisi ja puoli sataa kilometriä",
//            french: "En tout 550 kilomètres"
//    }, {
//            finnish: "Se on aika paljon",
//            french: "C'est déjà beaucoup"
//    }, {
//            finnish: "Mutta voin ajaa kovaa",
//            french: "Mais je peux conduire vite"
//    }, {
//            finnish: "Ei tällä tiellä ole koskaan tutkaa",
//            french: "Il n'y a jamais de radars sur cette route"
//    }, {
//            finnish: "Onko Yyterissä usein paljon väkeä?",
//            french: "Est-ce qu'il y a souvent beaucoup de monde à Yyteri ?"
//    }, {
//            finnish: "Autossa on kiva keskustella",
//            french: "Dans la voiture il est agréable de converser"
//    }, {
//            finnish: "Onko tällä tiellä koskaan tutkaa?",
//            french: "Il y a quelque fois un radar sur cette route ?"
//    }, {
//            finnish: "Mikä tänään on hukassa?",
//            french: "Qu'est-ce qui est perdu aujourd'hui ?"
//    }, {
//            finnish: "Naapurin pieni kissa on autossa",
//            french: "Le petit chat du voisin est dans la voiture"
//    }, {
//            finnish: "Kuudestoista oppitunti",
//            french: "Seizième leçon"
//    }, {
//            finnish: "Ylinopeussakko",
//            french: "Amende pour excès de vitesse"
//    }, {
//            finnish: "Voi, poliisi",
//            french: "Oh, la police"
//    }, {
//            finnish: "Tässä on sadan kilometrin rajoitus",
//            french: "Ici, c'est limité à 100 km/h"
//    }, {
//            finnish: "Ja tutka näyttää sataakahtakymmentä",
//            french: "Et le radar montre 120"
//    }, {
//            finnish: "Eikö se ole vähän liikaa?",
//            french: "C'est pas un peu trop ?"
//    }, {
//            finnish: "Mutta on vähän kiire",
//            french: "Mais on est assez pressé"
//    }, {
//            finnish: "Ei auta",
//            french: "Tant pis, ça ne change rien"
//    }, {
//            finnish: "Sakko tästä tulee",
//            french: "Il en résultera une amende"
//    }, {
//            finnish: "Se on sitten kolmesataaneljäkymmentä euroa",
//            french: "C'est 340 euros"
//    }, {
//            finnish: "Ettekö ymmärrä, että tulemme lomalta",
//            french: "Vous ne comprenez pas qu'on rentre de vacances"
//    }, {
//            finnish: "Ja haluamme päästä nopeasti kotiin",
//            french: "Et qu'on souhaite rentrer rapidement à la maison"
//    }, {
//            finnish: "Mutta laki on laki",
//            french: "Mais la loi c'est la loi"
//    }, {
//            finnish: "Ymmärrän, ymmärrän",
//            french: "Je comprends, je comprends"
//    }, {
//            finnish: "Ymmärrän, että hän ei halua sakkoa",
//            french: "Je comprends qu'il ne veuille pas de contravention"
//    }, {
//            finnish: "Mutta hän ajaa usein liian kovaa",
//            french: "Mais il conduit souvent trop vite"
//    }, {
//            finnish: "Haluan päästä Suomeen kesällä",
//            french: "Je désire pouvoir aller en Finlande cet été"
//    }, {
//            finnish: "Pääsettekö te lomalle?",
//            french: "Vous pouvez aller en vacances ?"
//    }, {
//            finnish: "Mutta Inari ja Sinikka pääsevät",
//            french: "Mais Inari et Sinikka peuvent aller"
//    }, {
//            finnish: "Seitsemästoista oppitunti",
//            french: "Dix-septième leçon"
//    }, {
//            finnish: "Mikä päivä tänään on?",
//            french: "On est quel jour aujourd'hui ?"
//    }, {
//            finnish: "Onko nyt keskiviikko?",
//            french: "On est mercredi ?"
//    }, {
//            finnish: "Nyt on jo torstai",
//            french: "On est déjà jeudi"
//    }, {
//            finnish: "Voi kauhea",
//            french: "Oh, c'est terrible"
//    }, {
//            finnish: "Toivottavasti olet väärässä",
//            french: "J'espère que tu te trompes"
//    }, {
//            finnish: "Minulla on tärkeä kokous torstaina kello kuusi",
//            french: "J'ai une importante réunion jeudi à 6h"
//    }, {
//            finnish: "Ja kello on jo melkein viisi",
//            french: "Et il est déjà presque 5h"
//    }, {
//            finnish: "Olen varmasti oikeassa",
//            french: "J'ai certainement raison"
//    }, {
//            finnish: "Sinulla on todella kiire",
//            french: "Tu dois vraiment te dépêcher"
//    }, {
//            finnish: "Minulla ei ole rahaa taksiin",
//            french: "Je n'ai pas d'argent pour le taxi"
//    }, {
//            finnish: "Ei minullakaan",
//            french: "Moi non plus je n'en ai pas"
//    }, {
//            finnish: "Mutta Inarilla varmasti on",
//            french: "Mais Inari en a certainement"
//    }, {
//            finnish: "Tai oikeastaa voin maksaa pankkikortilla",
//            french: "Ou, en fait, je peux payer avec la carte"
//    }, {
//            finnish: "Menemme pieneen kahvilaan Inarin kanssa",
//            french: "Nous allons au petit café avec Inari"
//    }, {
//            finnish: "Meillä ei ole rahaa kahviin",
//            french: "Nous n'avons pas d'argent pour le café"
//    }, {
//            finnish: "Timo ja Atte tulevat",
//            french: "Timo et Atte viennent"
//    }, {
//            finnish: "Heillä on varmasti rahaa",
//            french: "Ils ont certainement de l'argent"
//    }, {
//            finnish: "Me olemme valitettavasti väärässä",
//            french: "Malheureusement nous avons tort"
//    }, {
//            finnish: "Heillä ei ole rahaa",
//            french: "Ils n'ont pas d'argent"
//    }, {
//            finnish: "Me maksamme kohvin pankkikortilla",
//            french: "Nous payons le café avec la carte"
//    }, {
//            finnish: "Kahdeksastoista oppitunti",
//            french: "Dix-huitième leçon"
//    }, {
//            finnish: "Perhe",
//            french: "La famille"
//    }, {
//            finnish: "Inari kertoo perheestään",
//            french: "Inari parle de sa famille"
//    }, {
//            finnish: "Minulla on suuri perhe",
//            french: "J'ai une grande famille"
//    }, {
//            finnish: "Siihen kuuluu seitsemän henkeä",
//            french: "Elle se compose de sept personnes"
//    }, {
//            finnish: "Isäni, äitini, veljeni, kälyni",
//            french: "Mon père, ma mère, mon frère, ma belle-sœur"
//    }, {
//            finnish: "Ja heidän lapsensa, tytär Tanja ja poika Matti",
//            french: "Et leurs enfants, la fille Tanja et le fils Matti"
//    }, {
//            finnish: "Minulla ei ole siskoa",
//            french: "Je n'ai pas de sœur"
//    }, {
//            finnish: "Meillä on lisäksi koira ja kolme kissaa",
//            french: "Nous avons en plus un chien et trois chats"
//    }, {
//            finnish: "Me asumme maalla isossa talossa",
//            french: "Nous habitons à la compagne dans une grande maison"
//    }, {
//            finnish: "Se on kaksikerroksinen punainen puutalo",
//            french: "C'est une maison rouge, en bois et à deux étages"
//    }, {
//            finnish: "Minun huoneeni on yläkerrassa",
//            french: "Ma chambre est à l'étage"
//    }, {
//            finnish: "Ja siinä on pieni parveke puutarhan puolella",
//            french: "Et là il y a un petit balcon donnant sur le jardin"
//    }, {
//            finnish: "Pidän paljon kauniista huoneestani",
//            french: "J'aime beaucoup ma belle chambre"
//    }, {
//            finnish: "Missä Inari asuu?",
//            french: "Inari, où elle habite ?"
//    }, {
//            finnish: "Hän asuu maalla isossa talossa",
//            french: "Elle habite dans une grande maison à la campagne"
//    }, {
//            finnish: "Hän puhuu usein veljestään",
//            french: "Elle parle souvent de son frère"
//    }, {
//            finnish: "Veljen poika pitää paljon pizzasta",
//            french: "Le fils du frère aime beaucoup la pizza"
//    }, {
//            finnish: "Isä ja äiti juovat kahvia puutarhassa",
//            french: "Le père et la mère boivent le café dans le jardin"
//    }
//
//
//
//
//    ]
//
//
//};



export {
    initialData
};

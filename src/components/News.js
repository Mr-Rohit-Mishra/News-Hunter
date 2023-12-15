import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {
  articles = [
    {
    "source": {
    "id": "wired",
    "name": "Wired"
    },
    "author": "Jaina Grey",
    "title": "Samsung's End-of-Year Sale Cuts Prices on Our Favorite Phones, TVs, and Tablets (2023)",
    "description": "If you’ve been thinking about giving a folding phone a try, Samsung’s big sale might be your chance.",
    "url": "https://www.wired.com/story/discover-samsung-sale-event-december-2023/",
    "urlToImage": "https://media.wired.com/photos/63ffb2ad8320ec773f818fb1/191:100/w_1280,c_limit/Samsung-Galaxy-Book3-Ultra-Gear.jpg",
    "publishedAt": "2023-12-13T17:30:59Z",
    "content": "It's that time of year again. The holidays? Nope! Winter solstice? Try again. OK, I'll just tell you: it's Samsung's quarterly Discover event. I know, I knowit's less exciting than wintry festivities… [+5585 chars]"
    },
    {
    "source": {
    "id": "ars-technica",
    "name": "Ars Technica"
    },
    "author": "Scharon Harding",
    "title": "You can now access Apple’s official diagnostics tool online for DIY repairs",
    "description": "Parts pairing still irks right-to-repair activists, though.",
    "url": "https://arstechnica.com/gadgets/2023/12/you-can-now-access-apples-official-diagnostics-tool-online-for-diy-repairs/",
    "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/09/IPhone-15-Plus-front-760x380.jpeg",
    "publishedAt": "2023-12-13T23:20:41Z",
    "content": "Enlarge/ The iPhone 15 is part of Apple's self-repair program now.\r\n3\r\nApple today expanded the Self Service Repair program it launched in April to include access to Apple's diagnostics tool online a… [+3261 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Juli Clover",
    "title": "Apple Now Selling Standalone USB-C AirPods Pro Case for $99",
    "description": "Apple today began selling a MagSafe USB-C AirPods Pro 2 Case on a standalone basis, allowing customers who own the Lightning charging case to upgrade to USB-C.\n\n\n\n\n\nThe standalone USB-C ‌AirPods Pro‌ Case is priced at $99 from Apple's online store.This articl…",
    "url": "https://www.macrumors.com/2023/12/13/apple-selling-standalone-usb-c-airpods-pro-case/",
    "urlToImage": "https://images.macrumors.com/t/OoYBEtZ-d4KQ6IaYfjksRhZB2P4=/2500x/article-new/2023/09/airpods-pro-yellow.jpg",
    "publishedAt": "2023-12-13T17:34:20Z",
    "content": "Apple today began selling a MagSafe USB-C AirPods Pro 2 Case on a standalone basis, allowing customers who own the Lightning charging case to upgrade to USB-C.\r\nThe standalone USB-C ‌AirPods Pro‌ Cas… [+753 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Tim Hardwick",
    "title": "Apple Expands Self Service Repair in Europe, Now Covers iPhone 15 and M2 Macs",
    "description": "Apple today announced it has expanded its Self Service Repair program to cover the iPhone 15 lineup and Mac models powered by M2 chips, including the 14- and 16-inch MacBook Pro, the 15-inch MacBook Air, Mac mini, Mac Pro, and Mac Studio. \n\n\n\n\n\nApple also sai…",
    "url": "https://www.macrumors.com/2023/12/13/apple-expands-self-service-repair-iphone-15/",
    "urlToImage": "https://images.macrumors.com/t/o_S3bLsMJuOoJtb7YX6wS0Qmcy4=/1600x/article-new/2023/05/Apple-Self-Service-Repair-Program-iPhone.jpeg",
    "publishedAt": "2023-12-13T12:17:04Z",
    "content": "Apple today announced it has expanded its Self Service Repair program to cover the iPhone 15 lineup and Mac models powered by M2 chips, including the 14- and 16-inch MacBook Pro, the 15-inch MacBook … [+1566 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Hartley Charlton",
    "title": "Apple Rivals Unite to Promote Open Ecosystems Using EU Law",
    "description": "Google, Meta, Qualcomm, Nothing, Lenovo, Opera and several other tech companies have announced a collaborative effort to push for \"open digital ecosystems\" in what appears to be a pointed move against Apple (via Reuters).\n\n\n\n\n\nThe group, calling itself the Co…",
    "url": "https://www.macrumors.com/2023/12/13/apple-rivals-unite-to-promote-open-ecosystems/",
    "urlToImage": "https://images.macrumors.com/t/F4F4I3mtoYMc4_O_LbW1_JUfGPc=/2500x/article-new/2022/02/Google-Logo-Feature-Slack.jpg",
    "publishedAt": "2023-12-13T13:19:14Z",
    "content": "Google, Meta, Qualcomm, Nothing, Lenovo, Opera and several other tech companies have announced a collaborative effort to push for \"open digital ecosystems\" in what appears to be a pointed move agains… [+2170 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Juli Clover",
    "title": "Top Five Features in macOS Sonoma 14.2",
    "description": "When Apple releases new software, iOS updates tend to get most of the attention, and there are sometimes useful new features in Mac updates that go under the radar. That's the case with macOS Sonoma 14.2. It doesn't have flashy features like the Journal app t…",
    "url": "https://www.macrumors.com/2023/12/13/macos-sonoma-14-2-features/",
    "urlToImage": "https://images.macrumors.com/t/wm-w4tnkX61shkfYnilm_sNJc5Q=/2506x/article-new/2023/12/macOS-14.2-Thumb-1.jpg",
    "publishedAt": "2023-12-13T23:21:34Z",
    "content": "When Apple releases new software, iOS updates tend to get most of the attention, and there are sometimes useful new features in Mac updates that go under the radar. That's the case with macOS Sonoma … [+1380 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NPR"
    },
    "author": "Bobby Allyn",
    "title": "Epic Games beat Google but lost to Apple in monopoly lawsuits. What does it all mean?",
    "description": "The tech giants' app stores are multibillion-dollar money-makers. Now the services are under threat like never before.",
    "url": "https://www.npr.org/2023/12/13/1218945531/fortnite-epic-games-google-apple-app-stores",
    "urlToImage": "https://media.npr.org/assets/img/2023/12/12/ap211665265719461_wide-df2a8941ecc5ca802967ab861f515c9dbb085096-s1400-c100.jpg",
    "publishedAt": "2023-12-13T17:52:07Z",
    "content": "A jury in San Francisco this week ruled that Google has operated as an illegal monopoly in the way it controls its app store. In a separate but related case involving Apple, a court ruled the opposit… [+8064 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Polly Thompson",
    "title": "Here's how a new iPhone feature could solve a thorny theft issue and keep your data safe",
    "description": "Apple will introduce new security layers if attempts to change certain settings are made away from your home or workplace.",
    "url": "https://www.businessinsider.com/apple-new-security-feature-stops-thieves-locking-you-from-accounts-2023-12",
    "urlToImage": "https://i.insider.com/6579878e50edbc52a863a2e8?width=1200&format=jpeg",
    "publishedAt": "2023-12-13T13:33:33Z",
    "content": "The new iPhone update has a new security feature.NurPhoto / Getty\r\n<ul><li>Apple has designed new protections designed to deter iPhone thieves and keep your data safe.</li><li>The protections kick in… [+3056 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Rick Stella",
    "title": "Apple Watch Ultra 2 review: The high-performance smartwatch gets a speed bump and new accessibility feature",
    "description": "The Apple Watch Ultra 2 isn't a big departure from its predecessor but does have a brighter screen, a faster chip, and the new Double Tap Gesture.",
    "url": "https://www.businessinsider.com/guides/tech/apple-watch-ultra-2-review",
    "urlToImage": "https://i.insider.com/65736b6b0ec98e92f74dafb8?width=1200&format=jpeg",
    "publishedAt": "2023-12-13T15:17:28Z",
    "content": "When you buy through our links, Insider may earn an affiliate commission. Learn moreSince the Apple Watch Ultra was announced in September 2022, it's become my go-to wearable. I was hooked after gett… [+10449 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Sarah Jackson",
    "title": "A new report sheds light on how advertising is going at Elon Musk's X — and the numbers aren't good",
    "description": "Big names like Apple, IBM, Walmart, and Disney pulled their ads from X, formerly Twitter, after Elon Musk backed antisemitic views on the platform.",
    "url": "https://www.businessinsider.com/elon-musk-x-twitter-advertising-revenue-decline-report-2023-12",
    "urlToImage": "https://i.insider.com/6579df430ec98e92f74f0563?width=1200&format=jpeg",
    "publishedAt": "2023-12-13T19:35:05Z",
    "content": "Big names like Apple, IBM, Walmart, and Disney recently pulled their ads from X after Elon Musk backed antisemitic views on the platform.Slaven Vlasic/Getty Images\r\n<ul><li>Ad revenue at Elon Musk's … [+2447 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Tom Carter",
    "title": "Billionaire hedge fund boss Ken Griffin to pay Manhattan cathedral up to $164 million for air rights to build new skyscraper",
    "description": "Citadel boss Ken Griffin, Steve Roth's Vornado Realty Trust, and Rudin Management have reportedly agreed to buy between 315,000 to 525,000 square feet in development rights on Park Avenue.",
    "url": "https://www.businessinsider.com/ken-griffin-citadel-manhattan-skyscraper-st-patricks-cathedral-deal-2023-12",
    "urlToImage": "https://i.insider.com/657985727a3c8094d5dc646d?width=1200&format=jpeg",
    "publishedAt": "2023-12-13T11:35:47Z",
    "content": "Citadel CEO and founder Ken Griffin.PATRICK T. FALLON/AFP via Getty Images\r\n<ul><li>Citadel CEO Ken Griffin has struck a deal to buy St Patrick's Cathedral's air rights, per Bloomberg.</li><li>The de… [+2106 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Jacob Shamsian",
    "title": "Rudy Giuliani caused $47.5 million in reputational damage to 2 election workers he defamed, expert testifies at trial",
    "description": "Ashlee Humphries calculated the reach of Giuliani's falsehoods and what it would cost to repair the damage.",
    "url": "https://www.businessinsider.com/rudy-giuliani-caused-47-million-damage-georgia-election-workers-expert-2023-12",
    "urlToImage": "https://i.insider.com/657a093f50edbc52a863e844?width=1200&format=jpeg",
    "publishedAt": "2023-12-13T20:16:38Z",
    "content": "Former Mayor of New York Rudy Giuliani arrives at the federal courthouse in Washington.AP Photo/Jose Luis Magana\r\n<ul><li>A reputation expert testified about what it would cost to repair reputational… [+8082 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Alcynna Lloyd",
    "title": "We left Texas to move to France. Now we're buying a shockingly affordable six-bedroom house straight out of a fairy tale.",
    "description": "Raina and Jason Willick are relishing their new life in a French medieval village, while the US has become too pricey to even be their backup plan.",
    "url": "https://www.businessinsider.com/moving-to-france-from-usa-buying-house-leaving-texas-2023-12",
    "urlToImage": "https://i.insider.com/657a13ff7a3c8094d5dcb181?width=1200&format=jpeg",
    "publishedAt": "2023-12-13T20:48:28Z",
    "content": "The Willick family traveling in the Bordeaux region of France.Courtesy of Raina Willick\r\n<ul><li>Raina and Jason Willick left Texas in 2022, eventually settling in a medieval village in France.</li><… [+8836 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ReadWrite"
    },
    "author": "Cameron Macpherson",
    "title": "Threads Europe: Twitter rival set to launch in EU this week",
    "description": "Threads – Meta’s Twitter competitor – is slated to launch in Europe this week. After its launch in the US […]\nThe post Threads Europe: Twitter rival set to launch in EU this week appeared first on ReadWrite.",
    "url": "https://readwrite.com/threads-set-to-launch-in-europe-this-week/",
    "urlToImage": "https://readwrite.com/wp-content/uploads/2023/12/pexels-julio-lopez-17514176-scaled.jpg",
    "publishedAt": "2023-12-13T15:49:32Z",
    "content": "Threads Meta’s Twitter competitor is slated to launch in Europe this week.\r\nAfter its launch in the US and UK earlier this year, Threads will finally be made available to social media users in the EU… [+1883 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ReadWrite"
    },
    "author": "Radek Zielinski",
    "title": "Rumble sues two people connected to Media Matters on heels of X suit",
    "description": "Online video platform Rumble is cracking down on Media Matters with a new lawsuit targeting people connected to the left-leaning […]\nThe post Rumble sues two people connected to Media Matters on heels of X suit appeared first on ReadWrite.",
    "url": "https://readwrite.com/rumble-sues-two-people-connected-to-media-matters-on-heels-of-x-suit/",
    "urlToImage": "https://readwrite.com/wp-content/uploads/2023/12/image-2.png",
    "publishedAt": "2023-12-13T15:09:44Z",
    "content": "Online video platform Rumble is cracking down on Media Matters with a new lawsuit targeting people connected to the left-leaning website.\r\nThe suit from the video-sharing platform, popular with free … [+3630 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Boing Boing"
    },
    "author": "Rob Beschizza",
    "title": "Apple now requires a court order before it lets cops see your push notifications",
    "description": "Apple now requires a court order to hand over customer push notifications to law enforcement, plugging a privacy hole and aligning its policy with Google's. It hasn't announced the change, but Reuters reports that it \"appeared sometime over the past few days\"…",
    "url": "https://boingboing.net/2023/12/13/apple-now-requires-a-court-order-before-it-lets-cops-see-your-push-notifications.html",
    "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/12/shutterstock_1702245514.jpg?fit=1200%2C800&ssl=1",
    "publishedAt": "2023-12-13T14:25:06Z",
    "content": "Apple now requires a court order to hand over customer push notifications to law enforcement, plugging a privacy hole and aligning its policy with Google's. It hasn't announced the change, but Reuter… [+779 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Gabriel Erard",
    "title": "AirPods Pro 2: Apple al fin vende el estuche USB-C por separado",
    "description": "Si tienes unos AirPods Pro 2 con estuche de carga Lightning, te traemos buenas noticias. Apple finalmente ha decidido comenzar a vender por separado el estuche USB-C correspondiente a la versión actualizada de estos auriculares, que se presentó en septiembre …",
    "url": "http://hipertextual.com/2023/12/airpods-pro-2-estuche-usb-c-por-separado-2",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/09/DSC05449-scaled.jpg",
    "publishedAt": "2023-12-13T20:15:05Z",
    "content": "Si tienes unos AirPods Pro 2 con estuche de carga Lightning, te traemos buenas noticias. Apple finalmente ha decidido comenzar a vender por separado el estuche USB-C correspondiente a la versión actu… [+3273 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Gabriel Erard",
    "title": "Malas noticias para Apple: Spotify podría evadir las restricciones de la App Store en Europa",
    "description": "La extensa batalla entre Spotify y Apple por los bloqueos de la App Store estaría a punto de escribir un nuevo capítulo. De acuerdo con Bloomberg, la Comisión Europea prohibirá que los de Cupertino impidan a la plataforma de streaming de música utilizar métod…",
    "url": "http://hipertextual.com/2023/12/spotify-podria-evadir-restricciones-app-store-europa",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/01/Spotify-iPhone.jpg",
    "publishedAt": "2023-12-13T18:42:01Z",
    "content": "La extensa batalla entre Spotify y Apple por los bloqueos de la App Store estaría a punto de escribir un nuevo capítulo. De acuerdo con Bloomberg, la Comisión Europea prohibirá que los de Cupertino i… [+3290 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Gabriel Erard",
    "title": "Apple amplía sus reparaciones de autoservicio al iPhone 15 y los Mac con M2, y las lleva a más países de Europa",
    "description": "Apple continúa ampliando el alcance de sus reparaciones de autoservicio, tanto en cantidad de modelos de dispositivos como en territorios disponibles. Los de Cupertino anunciaron hoy que el programa que permite a los usuarios realizar sus propios arreglos, ah…",
    "url": "http://hipertextual.com/2023/12/reparaciones-autoservicio-apple-iphone-15-mac-m2",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/08/apple_macbook_reparacion.jpg",
    "publishedAt": "2023-12-13T13:22:37Z",
    "content": "Apple continúa ampliando el alcance de sus reparaciones de autoservicio, tanto en cantidad de modelos de dispositivos como en territorios disponibles. Los de Cupertino anunciaron hoy que el programa … [+3631 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Luis Miranda",
    "title": "La Epic Games Store regalará más de 15 juegos, empezando por la colección de ‘Destiny 2’",
    "description": "La Epic Games Store inició su temporada de ofertas navideñas con grandes descuentos y juegos de regalo. La compañía anunció que regalará 17 juegos a lo largo de cuatro semanas, comenzando con Destiny 2: Legacy Collection. El paquete incluye el juego base y la…",
    "url": "http://hipertextual.com/2023/12/epic-games-store-regalara-juegos-destiny-2",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/04/destiny.jpg",
    "publishedAt": "2023-12-13T20:46:39Z",
    "content": "La Epic Games Storeinició su temporada de ofertas navideñas con grandes descuentos y juegos de regalo. La compañía anunció que regalará 17 juegos a lo largo de cuatro semanas, comenzando con Destiny … [+3367 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Javier Marquez",
    "title": "Victoria para Spotify: la UE prohibirá algunas de las reglas más controvertidas de la App Store, según Bloomberg",
    "description": "La App Store podría cambiar notablemente en 2024. Bloomberg señala que la Unión Europea (UE), en sus esfuerzos por controlar el dominio de las Big Tech, se prepara para prohibir algunas de las reglas de la tienda de aplicaciones. La decisión, que se daría a c…",
    "url": "https://www.xataka.com/servicios/victoria-para-spotify-ue-prohibira-algunas-reglas-controvertidas-app-store-bloomberg",
    "urlToImage": "https://i.blogs.es/8a4ee3/imtiyaz-ali-lxbmsvupago-unsplash/840_560.jpeg",
    "publishedAt": "2023-12-13T20:10:46Z",
    "content": "La App Store podría cambiar notablemente en 2024. Bloomberg señala que la Unión Europea (UE), en sus esfuerzos por controlar el dominio de las Big Tech, se prepara para prohibir algunas de las reglas… [+3577 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Herrera Castro",
    "title": "Es el iPhone mejor valorado en Amazon y ahora está rebajado por primera vez desde su lanzamiento",
    "description": "Las expectativas siempre son altísimas cuando vamos a recibir el iPhone nuevo de cada año y Apple no ha querido decepcionar con el 15, especialmente con su versión más potente, la Pro MAX. Este espectacular smartphone se sitúa a la vanguardia en varios aspect…",
    "url": "https://www.xataka.com/seleccion/iphone-mejor-valorado-amazon-ahora-esta-rebajado-primera-vez-su-lanzamiento",
    "urlToImage": "https://i.blogs.es/594ce7/1366_2000-1-/840_560.jpeg",
    "publishedAt": "2023-12-13T16:31:23Z",
    "content": "Las expectativas siempre son altísimas cuando vamos a recibir el iPhone nuevo de cada año y Apple no ha querido decepcionar con el 15, especialmente con su versión más potente, la Pro MAX. Este espec… [+4951 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Ricardo Aguilar",
    "title": "El autocorrector es un gran reto para tu teléfono. Google se ha aliado con la RAE para solucionarlo",
    "description": "Google quiere incorporar el léxico de la Real Academia Española a la búsqueda de Google e incorporarlo dentro su modelo de lenguaje. Se trata de un importante movimiento no solo para mejorar la calidad de las búsquedas, sino para nutrir a su inteligencia arti…",
    "url": "https://www.xataka.com/aplicaciones/autocorrector-gran-reto-para-tu-telefono-google-se-ha-aliado-rae-para-solucionarlo",
    "urlToImage": "https://i.blogs.es/606a92/1366_2000/840_560.jpeg",
    "publishedAt": "2023-12-13T15:01:20Z",
    "content": "Google quiere incorporar el léxico de la Real Academia Española a la búsqueda de Google e incorporarlo dentro su modelo de lenguaje. Se trata de un importante movimiento no solo para mejorar la calid… [+1925 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "John Tones",
    "title": "Hemos probado Playstation Access: Sony propulsa la accesibilidad de sus juegos con un mando revolucionario",
    "description": "Sony lleva un tiempo dando grandes pasos a favor de la accesibilidad en sus juegos: todos los títulos first-party que lanza al mercado son elogiados por la gran cantidad de opciones de configuración que incluyen, con controles completamente personalizables y …",
    "url": "https://www.xataka.com/videojuegos/hemos-probado-playstation-access-sony-propulsa-accesibilidad-sus-juegos-mando-revolucionario",
    "urlToImage": "https://i.blogs.es/7e7af9/b2ee17c4bfcbcfc3b637d721cfbfb222e8346c76-scaled/840_560.jpeg",
    "publishedAt": "2023-12-13T16:03:10Z",
    "content": "Sony lleva un tiempo dando grandes pasos a favor de la accesibilidad en sus juegos: todos los títulos first-party que lanza al mercado son elogiados por la gran cantidad de opciones de configuración … [+5437 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Kurt Knutsson, CyberGuy Report",
    "title": "How 2 of biggest tech companies are secretly helping governments spy on your smartphone",
    "description": "A recent letter from an Oregon senator to the Justice Department revealed foreign governments are asking Apple and Google for push notification data.",
    "url": "https://www.foxnews.com/tech/how-two-biggest-tech-companies-secretly-helping-governments-spy-on-your-smartphone",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/1-How-two-of-the-biggest-tech-companies-are-secretly-helping-governments-spy-on-your-smartphone.jpg",
    "publishedAt": "2023-12-13T15:00:22Z",
    "content": "Two of the biggest tech companies have confirmed the government and foreign agencies can spy on you using your smartphone. \r\nAnd they're likely helping.\r\nOregon Sen. Ron Wyden wrote a letter to the J… [+10011 chars]"
    },
    
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Nadeem Sarwar",
    "title": "How to unlock your iPhone with your Apple Watch",
    "description": "Did you know you can use your Apple Watch to safely unlock your iPhone? It's true! Here's how to get it set up on your devices.",
    "url": "https://www.digitaltrends.com/mobile/how-to-unlock-iphone-with-your-apple-watch/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/12/iphone-watch-unlock.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2023-12-13T11:00:52Z",
    "content": "Unlocking your iPhone is a straightforward process. You enter a PIN, password, or use something like Face ID or Touch ID. But did you know you can also unlock your iPhone using your Apple Watch?\r\nApp… [+2730 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Aaron Mamiit",
    "title": "The best holiday tablet deals you can shop right now — from $99",
    "description": "We've got the best holiday tablet deals right here, ranging from budget options like the Samsung Galaxy Tab A7 Lite to premium devices like the Apple iPad Pro.",
    "url": "https://www.digitaltrends.com/mobile/best-holiday-tablet-deals-2023/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/11/apple-ipad-pro-2022-review-11.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2023-12-13T15:35:29Z",
    "content": "Andy Boxall/Digital Trends / Digital Trends\r\nThe holiday season is upon us, which means you should be finalizing your gifts for your loved ones. It’s a good idea to take advantage of tablet deals, as… [+2272 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Nadeem Sarwar",
    "title": "I really hope the iPhone 16 doesn’t look like this",
    "description": "Apple is not one for wild experiments. But leaked models for the upcoming iPhone 16 design offer a regressive peek into shameless aesthetic complacency.",
    "url": "https://www.digitaltrends.com/mobile/apple-leak-design-iphone-16-renders-camera-colors-news/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/12/F1D33234-5345-4676-B8E0-59899F3E1A9C.jpeg?resize=1200%2C630&p=1",
    "publishedAt": "2023-12-13T20:07:16Z",
    "content": "Say what you will about Apple, the world’s biggest smartphone brand is not a fan of new designs. That’s been evident from the past five generations of iPhones to hit the market. And if a fresh leak i… [+3192 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Andrew Morrisey",
    "title": "Save on Bose, Sony, and more with these holiday headphone deals",
    "description": "Gift a new set of headphones this holiday season and save along the way with these holiday headphone deals.",
    "url": "https://www.digitaltrends.com/home-theater/best-holiday-headphone-deals/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2019/10/beats-solo-3-wireless.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2023-12-13T18:31:09Z",
    "content": "The holidays are approaching, and if you haven’t wrapped up your shopping yet, we think you should take a look at some of the headphone deals currently taking place. A new set of headphones is a grea… [+2422 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Jesse Lennox",
    "title": "How to play Fortnite on iPhone",
    "description": "The most popular game in the world is no longer on the biggest gaming platform. But there are still ways to play Fortnite on your iPhone if you know the tricks.",
    "url": "https://www.digitaltrends.com/gaming/how-to-play-fortnite-iphone/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/04/fortnite-renegade-runner-loading-screen.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2023-12-13T13:51:23Z",
    "content": "Up until 2020, Fortnite was the undisputed king of iPhone games. However, when a legal spat between Epic Games and Apple spiraled into a court case over the game's microtransactions, the game was del… [+2075 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Jennifer Allen",
    "title": "This deal that gets you a 65-inch 4K TV for under $300",
    "description": "Walmart has a fantastic deal on an Onn. 65-inch 4K TV meaning you pay just $298 for a huge display.",
    "url": "https://www.digitaltrends.com/home-theater/onn-65-inch-4k-tv-deal-walmart-december-2023/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/06/70-inch-Onn.-Roku-4K-TV-Lifestyle-Render-Resized.png?resize=1200%2C630&p=1",
    "publishedAt": "2023-12-13T18:20:49Z",
    "content": "Onn.\r\nTV deals don’t get much cheaper than one that keeps coming back at Walmart. It’s possible to buy an Onn. 65-inch 4K TV for $298. You save $50 off the regular price but more importantly, it mean… [+1806 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Stephen Edelstein",
    "title": "Bold style alone can’t muscle Chevy’s new Blazer EV to the head of its class",
    "description": "This new electric SUV wearing the well-known Chevy Blazer nameplate is competent, but not a game-changer.",
    "url": "https://www.digitaltrends.com/cars/2024-chevrolet-blazer-ev-review/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/12/DSC_1007.jpeg?resize=1200%2C630&p=1",
    "publishedAt": "2023-12-13T14:00:37Z",
    "content": "Stephen Edelstein/Digital Trends\r\nThey say good things come to those who wait. General Motors is hoping customers will take that maxim to heart.\r\nThe 2024 Chevrolet Blazer EV, an electric crossover S… [+11506 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Joe Allen",
    "title": "7 best YouTube videos of 2023",
    "description": "Even as apps like TikTok dominate many people's screen time, YouTube has endured as a source for whatever it is that you might be interested in watching.",
    "url": "https://www.digitaltrends.com/movies/best-youtube-videos-2023/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/12/washington-sketch.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2023-12-13T13:30:41Z",
    "content": "Even as apps like TikTok dominate many people’s screen time, YouTube has endured as a source for whatever it is that you might be interested in watching. Sports highlights? On YouTube. Clips from lat… [+4985 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Jason Struss",
    "title": "Everything coming to Netflix in January 2024",
    "description": "The debut of Society of the Snow and Dan Levy's Good Grief, plus the addition of the hit show This is Us, highlight Netflix's January 2024 schedule.",
    "url": "https://www.digitaltrends.com/movies/everything-coming-to-netflix-january-2024/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/12/lift-kevin-hart-netflix.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2023-12-13T19:24:54Z",
    "content": "Lift | Official Trailer | Netflix\r\nIt’s a new year, but some things remain the same: regrets about holiday spending, resolutions that will surely be broken, and the correct belief that there’s too mu… [+12901 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Owehrens.com"
    },
    "author": "Oliver Wehrens",
    "title": "Whisper: Nvidia RTX 4090 vs. M1 Pro with MLX",
    "description": "How fast is my Whisper Benchmark with the MLX Framework from Apple? Nvidia 4090 / M1 Pro / M2 Ultra / M3",
    "url": "https://owehrens.com/whisper-nvidia-rtx-4090-vs-m1pro-with-mlx/",
    "urlToImage": "https://owehrens.com/content/images/2023/12/MLX-GPU-Utilization.png",
    "publishedAt": "2023-12-13T14:52:36Z",
    "content": "(... see down below for M2 Ultra / M3 Max Update)\r\nApple released a machine learning framework for Apple Silicon. Along with that are some examples to see how things are working. They also use a whis… [+3671 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "404media.co"
    },
    "author": "Jason Koebler",
    "title": "Polish Hackers that repaired DRM trains threatened by train company",
    "description": "After breaking trains simply because an independent repair shop had worked on them, NEWAG is now demanding that trains fixed by hackers be removed from service.",
    "url": "https://www.404media.co/polish-hackers-repaired-trains-the-manufacturer-artificially-bricked-now-the-train-company-is-threatening-them/",
    "urlToImage": "https://www.404media.co/content/images/size/w1200/2023/12/Screenshot-2023-12-12-at-11.27.26-AM.png",
    "publishedAt": "2023-12-13T15:20:57Z",
    "content": "They did DRM to a train. \r\nIn one of the coolest and more outrageous repair stories in quite some time, three white-hat hackers helped a regional rail company in southwest Poland unbrick a train that… [+10580 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Leo Becker",
    "title": "iPhone geklaut: iOS 17.3 soll vor Account-Plünderung schützen",
    "description": "Kennt ein Dieb den iPhone-Code, kann das derzeit fatale Folgen für den Nutzer haben. Anfang 2024 rüstet Apple einen erweiterten Diebstahlschutz nach.",
    "url": "https://www.heise.de/news/iPhone-geklaut-iOS-17-3-soll-vor-Account-Pluenderung-schuetzen-9573315.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/3/3/1/4/shutterstock_1675274494-b535f26bac480ba6.jpg",
    "publishedAt": "2023-12-13T08:56:00Z",
    "content": "Apple geht eine iPhone-Achillesferse an: Mit einer zusätzlichen Sicherheitsfunktion können sich Nutzer künftig besser schützen, falls ein Dieb oder Räuber auch die iPhone-PIN respektive den Gerätecod… [+2689 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Leo Becker",
    "title": "iPhone 16: Frühe Leaks verraten Design-Änderungen",
    "description": "Neues Kamerasystem und mehr Tasten: Ersten Bildern zufolge plant Apple spezifische Änderungen am Gehäuse des Basis-iPhones. Die Pro-Reihe wird wohl größer.",
    "url": "https://www.heise.de/news/iPhone-16-Fruehe-Leaks-verraten-Design-Aenderungen-9573704.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/3/5/3/7/iphone16_kamera-1d84d43d671822e5.png",
    "publishedAt": "2023-12-13T12:19:00Z",
    "content": "Wie sieht das iPhone 16 aus? Apple plant offenbar nur spezifische Design-Anpassungen bei den für Herbst 2024 erwarteten Basismodellen und keine grundlegende Überarbeitung der iPhone-Form. Das geht au… [+2218 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Frank Schräer",
    "title": "Mittwoch: Signal mit sicheren Push-Nachrichten, Millionenstrafe für Kryptobörse",
    "description": "Signal-Benachrichtigungen nur Ping + New York gegen Kucoin + Glasfaserausbau auf Kurs + ASML mit südkoreanischen Partnern + Bit-Rauschen über RZ-Stromverbrauch",
    "url": "https://www.heise.de/news/Mittwoch-Signal-mit-sicheren-Push-Nachrichten-Millionenstrafe-fuer-Kryptoboerse-9573150.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/1/3/2/2/4/mittwoch-33ca3e9b8390e460.webp",
    "publishedAt": "2023-12-13T05:30:00Z",
    "content": "Geheimdienste sammeln Daten aus Push-Benachrichtigungen von Android und iPhone. Beim Signal-Messenger ist da wenig zu holen, sagt deren Präsidentin, denn Push-Nachrichten enthalten demnach keine Date… [+4054 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Zac Hall",
    "title": "Salesforce deepens Apple partnership with Apple Business Messaging and AR integration",
    "description": "Salesforce has announced three new ways that it is deepening its strategic partnership with Apple. The effort builds on a strategy that kicked off between the two companies in 2018. The first development is Salesforce integration with Apple Business Messaging…",
    "url": "https://9to5mac.com/2023/12/13/salesforce-apple-business-chat-arkit-widget/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/11/Apple-and-Salesforce-announce-new-and-updated-apps.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T14:00:00Z",
    "content": "Salesforce has announced three new ways that it is deepening its strategic partnership with Apple. The effort builds on a strategy that kicked off between the two companies in 2018. The first develop… [+2651 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "EU regulators set to ban anti-steering App Store rules after Spotify complaint",
    "description": "Apple will soon be handed a major loss in its antitrust battle with Spotify in the European Union. According to Bloomberg, EU regulators are preparing a ruling that would prohibit Apple from “blocking music services from pushing their users away from the App …",
    "url": "https://9to5mac.com/2023/12/13/app-store-rules-ban-spotify-european-union/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/spotify-logo-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T16:37:39Z",
    "content": "Apple will soon be handed a major loss in its antitrust battle with Spotify in the European Union. According to Bloomberg, EU regulators are preparing a ruling that would prohibit Apple from “blockin… [+2046 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Customers being given access to Apple diagnostics software for the first time ever",
    "description": "For the first time ever, customers wanting to carry out DIY repairs on their devices will be given access to Apple diagnostics software. This software was previously limited to Apple Stores and authorized service providers.\n\n\n\nApple announced the news today, …",
    "url": "https://9to5mac.com/2023/12/13/apple-diagnostics-software-diy-repairs/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/Apple-diagnostics-software.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T12:49:07Z",
    "content": "For the first time ever, customers wanting to carry out DIY repairs on their devices will be given access to Apple diagnostics software. This software was previously limited to Apple Stores and autho… [+2368 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Zac Hall",
    "title": "AAPL stock closes at new record high after adding $1 trillion to market cap this year",
    "description": "Apple as a company is doing alright. The firm’s stock just closed at an all-time high, valuing Apple at more than $3 trillion. That puts the market cap value add for 2023 over the $1 trillion mark. Not bad. \n\n\n\n more…",
    "url": "https://9to5mac.com/2023/12/13/aapl-stock-record-high/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/AAPL-high.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T21:26:33Z",
    "content": "Apple as a company is doing alright. The firm’s stock just closed at an all-time high, valuing Apple at more than $3 trillion. That puts the market cap value add for 2023 over the $1 trillion mark. N… [+1690 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Major ramp-up in Apple’s plans to shift production from China, as Foxconn quadruples investment in Indian plant",
    "description": "We’re today learning of a major acceleration in plans to shift more production of Apple devices from China to India. In less than one year, Foxconn has increased its planned investment in an Indian plant by almost 400%.\n\n\n\nIt follows a recent report that Appl…",
    "url": "https://9to5mac.com/2023/12/13/shift-production-from-china/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/Major-ramp-up-in-Apples-plans-to-shift-production-from-China.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T12:14:59Z",
    "content": "We’re today learning of a major acceleration in plans to shift more production of Apple devices from China to India. In less than one year, Foxconn has increased its planned investment in an Indian p… [+2256 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "Apple releases standalone USB-C case for AirPods Pro 2 for $99",
    "description": "Apple is now selling the USB-C case for AirPods Pro 2 separately for $99. This allows AirPods Pro 2 users to switch from the Lightning case to the USB-C case without having to buy a new pair of AirPods.\n\n\n\nApple says the first orders will arrive between Decem…",
    "url": "https://9to5mac.com/2023/12/13/apple-now-selling-standalone-usb-c-case-for-airpods-pro-2-for-99/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/airpods-pro-usb-c-case.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T17:37:17Z",
    "content": "Apple is now selling the USB-C case for AirPods Pro 2 separately for $99. This allows AirPods Pro 2 users to switch from the Lightning case to the USB-C case without having to buy a new pair of AirPo… [+1374 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Stolen Device Protection is a great move by Apple; Activation Lock next, please",
    "description": "One of the key features added in the iOS 17.3 beta is Stolen Device Protection. This is a thoughtful and creative solution to balancing out the need for protecting iPhone users without stopping them do the things they want to do with their devices.\n\n\n\nWhat I …",
    "url": "https://9to5mac.com/2023/12/13/stolen-device-protection-activation-lock/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/Stolen-Device-Protection.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T14:13:59Z",
    "content": "One of the key features added in the iOS 17.3 beta is Stolen Device Protection. This is a thoughtful and creative solution to balancing out the need for protecting iPhone users without stopping them … [+5855 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "Apple Music collaborative playlists add emoji reactions in iOS 17.3 beta",
    "description": "In addition to the new Stolen Device Protection feature, iOS 17.3 beta 1 also re-adds support for collaborative playlists in Apple Music. This time, there’s a fun twist: you can now react to songs in a shared playlist with emojis through a new Tapback-style i…",
    "url": "https://9to5mac.com/2023/12/13/apple-music-collaborative-playlists-emoji/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/tapback-02-1.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T20:58:51Z",
    "content": "In addition to the new Stolen Device Protection feature, iOS 17.3 beta 1 also re-adds support for collaborative playlists in Apple Music. This time, there’s a fun twist: you can now react to songs in… [+1268 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Benjamin Mayo",
    "title": "Watch the Taylor Swift Eras Tour concert film on Apple TV",
    "description": "The Taylor Swift Eras Tour is now available to watch on Apple TV. The record-breaking worldwide tour was filmed and shown in theaters since October, and is now available to rent to watch at home on digital.\n\n\n\n more…",
    "url": "https://9to5mac.com/2023/12/13/watch-taylor-swift-eras-tour-concert-film-apple-tv/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/taylor-swift-eras-tour-concert-film-how-to-watch.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T08:07:48Z",
    "content": "The Taylor Swift Eras Tour is now available to watch on Apple TV. The record-breaking worldwide tour was filmed and shown in theaters since October, and is now available to rent to watch at home on d… [+1067 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Rikka Altland",
    "title": "Apple Watch SE 2 start from $199, AirPods Pro 2 with USB-C $200, more",
    "description": "You can now score the second-best prices yet on the latest Apple Watch SE 2 styles in all of Wednesday’s best deals from $199. It comes joined by another chance to gift the new USB-C AirPods Pro 2 for less with a discount down to $200, as well as Apple’s Magi…",
    "url": "https://9to5mac.com/2023/12/13/apple-watch-se-2-airpods-pro-2-usb-c-more/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/airpods-pro-2-usb-c-apple-watch-se-2nd-gen.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T16:46:00Z",
    "content": "You can now score the second-best prices yet on the latest Apple Watch SE 2 styles in all of Wednesday’s best deals from $199. It comes joined by another chance to gift the new USB-C AirPods Pro 2 fo… [+3415 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Seth Kurkowski",
    "title": "9to5Mac Daily: December 13, 2023 – Stolen Device Protection, Apple Music bonuses",
    "description": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\n\n\n\nSponsored by Capital One S…",
    "url": "https://9to5mac.com/2023/12/13/daily-december-13-2023/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/9to5Mac-Daily-art-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T21:03:56Z",
    "content": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+846 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "iPhone 16 again rumored to get vertically aligned cameras, likely for spatial video",
    "description": "Back in May, it was reported that the iPhone 16 would get a vertically aligned camera bump similar to the iPhone 12. A new rumor today claims that one of the iPhone 16 designs Apple is testing not only rearranges the camera lenses but also redesigns the camer…",
    "url": "https://9to5mac.com/2023/12/12/iphone-16-again-rumored-to-get-vertically-aligned-camera/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/refurbished-iPhone-12-mini.jpg-1.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T00:06:32Z",
    "content": "Back in May, it was reported that the iPhone 16 would get a vertically aligned camera bump similar to the iPhone 12. A new rumor today claims that one of the iPhone 16 designs Apple is testing not on… [+1725 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Michael Potuck",
    "title": "Here are the new Weather widgets for iPhone with iOS 17.2",
    "description": "iOS 17.2 comes with new features like the Journal app, spatial video capture, and improved iPhone 15 Pro Telephoto camera focusing speed. But there are some handy smaller upgrades as well – one being a set of new widgets for the Apple Weather app. Here are al…",
    "url": "https://9to5mac.com/2023/12/13/new-weather-widgets-iphone-ios-17-2/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/new-apple-weather-app-widgets-ios-17-2.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T15:24:00Z",
    "content": "iOS 17.2 comes with new features like the Journal app, spatial video capture, and improved iPhone 15 Pro Telephoto camera focusing speed. But there are some handy smaller upgrades as well one being a… [+1575 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Zac Hall",
    "title": "Instagram updates Notes feature with video posts and multimedia replies",
    "description": "Instagram is building on its Notes feature with new ways to post and reply. Notes is Instagram’s messaging feature that lets you set a short status update with friends.\n\n\n\n more…",
    "url": "https://9to5mac.com/2023/12/13/instagram-notes-video-status/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/instagram-notes-update.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T20:08:50Z",
    "content": "Instagram is building on its Notes feature with new ways to post and reply. Notes is Instagram’s messaging feature that lets you set a short status update with friends.\r\nThis story is supported by Mo… [+2074 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Jeff Benjamin",
    "title": "iOS 17.2 has well over 50 new changes and features, but these five are my favorite [Video]",
    "description": "After months of testing, Apple released iOS 17.2 on Monday afternoon. The release, which has shaped into a noteworthy update, comes bundled with many new changes and features. In this post, I’ve distilled the over 50 new features into a small batch of five of…",
    "url": "https://9to5mac.com/2023/12/13/ios-17-2-has-well-over-50-new-changes-and-features-but-these-five-are-my-favorite-video/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/iOS-17.2-Changes-Features.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T17:18:53Z",
    "content": "After months of testing, Apple released iOS 17.2 on Monday afternoon. The release, which has shaped into a noteworthy update, comes bundled with many new changes and features. In this post, I’ve dist… [+5180 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Zac Hall",
    "title": "These are the best CarPlay apps for iPhone",
    "description": "CarPlay is Apple’s feature that brings communication and entertainment functions to the built-in screen in your car using iPhone apps. The feature appears on a lot of and new cars that you can buy today.\n\n\n\nAs CarPlay support is now available from most manufa…",
    "url": "https://9to5mac.com/2023/12/13/best-carplay-apps-for-iphone/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/07/porsche-carplay.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T21:12:10Z",
    "content": "CarPlay is Apple’s feature that brings communication and entertainment functions to the built-in screen in your car using iPhone apps. The feature appears on a lot of aftermarket displays and new car… [+1277 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "Ford CEO pokes fun at GM for CarPlay excuses, reiterates ongoing commitment",
    "description": "GM took another swing at justifying its decision to drop CarPlay support in future EVs and failed miserably. Now, in a clear swipe at GM, Ford CEO Jim Farley took to social media on Wednesday to reiterate Ford’s continued commitment to CarPlay. \n\n\n\n more…",
    "url": "https://9to5mac.com/2023/12/13/ford-ceo-jabs-gm-for-carplay-excuses/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/ford-carplay-crop.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-12-13T21:18:26Z",
    "content": "GM took another swing at justifying its decision to drop CarPlay support in future EVs and failed miserably. Now, in a clear swipe at GM, Ford CEO Jim Farley took to social media on Wednesday to reit… [+1654 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Police"
    },
    "author": "Chandraveer Mathur",
    "title": "GM believes removing Android Auto and CarPlay support makes its cars safer",
    "description": "The push for a custom solution may open up more monetization opportunities through subscriptions",
    "url": "https://www.androidpolice.com/gm-removing-android-auto-make-cars-safer/",
    "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/08/android-auto-1-ap-hero.jpg",
    "publishedAt": "2023-12-13T21:47:14Z",
    "content": "Summary\r\n<ul><li> GM's decision to not support Android Auto and Apple CarPlay in its future EVs has sparked controversy among car buyers and tech enthusiasts. </li><li> GM argues that the removal of … [+4863 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Police"
    },
    "author": "Will Sattelberg",
    "title": "Do Android users even want iMessage?",
    "description": "This isn't a story about David and Goliath. It's a story about human interaction",
    "url": "https://www.androidpolice.com/do-android-users-even-want-imessage/",
    "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2023/12/imessage-beeper-mini-hero-1.jpg",
    "publishedAt": "2023-12-13T15:01:18Z",
    "content": "I purchased my first iPhone in 2019 after nearly a decade of exclusively using Android devices. I wasn't writing about Android professionally yet, but I'd long been a staunch defender of Google's mob… [+11456 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Thekitchn.com"
    },
    "author": "Michelle Lau",
    "title": "The “Gorgeous” Store-Bought Frozen Pie I Bring to Every Holiday Party",
    "description": "\"The apples are sourced locally in Maine and made into pies the same day.\"\nREAD MORE...",
    "url": "https://www.thekitchn.com/the-maine-pie-co-gluten-free-apple-pie-review-23614256",
    "urlToImage": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FEdit%2F2023-12-gluten-free-apple-pie-review%2Fgluten-free-apple-pie-review-7",
    "publishedAt": "2023-12-13T15:30:00Z",
    "content": "We independently select these products—if you buy from one of our links, we may earn a commission. All prices were accurate at the time of publishing.\r\nEver since I was a child, pie has been our fami… [+3537 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Thekitchn.com"
    },
    "author": "Caroline Mullen",
    "title": "Everything to Know About Target's New Figmint Line",
    "description": "Plus, shop our editors’ favorites.\nREAD MORE...",
    "url": "https://www.thekitchn.com/is-target-figmint-worth-it-23613986",
    "urlToImage": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2Fshopping%2F2023-12%2Ftarget-figmint-line%2Ftarget-figmint-lead",
    "publishedAt": "2023-12-13T16:20:00Z",
    "content": "We independently select these products—if you buy from one of our links, we may earn a commission. All prices were accurate at the time of publishing.\r\nA lap around Target with an iced coffee in hand… [+10313 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "GM ditching Apple CarPlay is about money, not safety",
    "description": "General Motors leadership continues to poorly justify why Apple CarPlay has been abandoned, with driver safety being the latest excuse, rather than just admitting it's harvesting and monetizing user data.GM doesn't want CarPlayAccording to a report from Motor…",
    "url": "https://appleinsider.com/articles/23/12/13/gm-ditching-apple-carplay-is-about-money-not-safety",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57694-117503-SharePlay-in-CarPlay-xl.jpg",
    "publishedAt": "2023-12-13T03:06:30Z",
    "content": "GM doesn't want CarPlay\r\nGeneral Motors leadership continues to poorly justify why Apple CarPlay has been abandoned, with driver safety being the latest excuse, rather than just admitting it's harves… [+3801 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "Salesforce and Apple deepen partnership with Business Messaging and AR integrations",
    "description": "Apple is bringing new integrations to Salesforce tools, like Apple Messages for Business in Service Cloud or ARKit in the Field Service mobile app.Salesforce customers in MessagesSalesforce and Apple's partnership began in 2018 and has expanded since. The lat…",
    "url": "https://appleinsider.com/articles/23/12/13/salesforce-and-apple-deepen-partnership-with-business-messaging-and-ar-integrations",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57687-117492-IMG_4405-xl.jpg",
    "publishedAt": "2023-12-13T13:00:05Z",
    "content": "Salesforce customers in Messages\r\nApple is bringing new integrations to Salesforce tools, like Apple Messages for Business in Service Cloud or ARKit in the Field Service mobile app.\r\nSalesforce and A… [+2133 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Andrew Orr)",
    "title": "Apple Silicon M3 Pro blows away Nvidia RTX 4090 GPU in AI benchmark",
    "description": "In a recent test of Apple's MLX machine learning framework, a benchmark shows that the new Apple Silicon Macs blow Nvidia's RTX 4090 out of the water.Whisper performanceApple announced on December 6 the release of MLX, an open-source framework designed explic…",
    "url": "https://appleinsider.com/articles/23/12/13/apple-silicon-m3-pro-blows-away-nvidia-rtx-4090-gpu-in-ai-benchmark",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57700-117522-graph-xl.jpg",
    "publishedAt": "2023-12-13T18:34:00Z",
    "content": "Whisper performance\r\nIn a recent test of Apple's MLX machine learning framework, a benchmark shows that the new Apple Silicon Macs blow Nvidia's RTX 4090 out of the water.\r\nApple announced on Decembe… [+1804 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Mike Wuerthele)",
    "title": "Apple beefs up Self Service Repair with new diagnostic, extended to iPhone 15 & M2 Mac",
    "description": "In what may be the largest expansion of Apple's Self Service Repair program yet, the company has expanded device support to the iPhone 15 and M2 Apple Silicon, and is launching a new tool to help users diagnose and repair their devices.An Apple repair toolkit…",
    "url": "https://appleinsider.com/articles/23/12/13/apple-beefs-up-self-service-repair-with-new-diagnostic-extended-to-iphone-15-m2-mac",
    "urlToImage": "https://photos5.appleinsider.com/gallery/55011-111613-Repair-Toolkit-xl.jpg",
    "publishedAt": "2023-12-13T12:16:56Z",
    "content": "An Apple repair toolkit\r\nIn what may be the largest expansion of Apple's Self Service Repair program yet, the company has expanded device support to the iPhone 15 and M2 Apple Silicon, and is launchi… [+2098 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Amber Neely)",
    "title": "EU set to slam Apple with antitrust order over App Store practices and Spotify battle",
    "description": "The European Union is currently taking measures to curb the power of tech giants, and it's increasingly looking like it may block Apple's App Store rules that apply to music streaming services within its jurisdiction.The new rule would prohibit Apple's curren…",
    "url": "https://appleinsider.com/articles/23/12/13/eu-set-to-slam-apple-with-antitrust-order-over-app-store-practices-and-spotify-battle",
    "urlToImage": "https://photos5.appleinsider.com/gallery/41641-80732-40207-77368-39182-74959-36715-68590-European-Commission-xl-xl-xl-xl.jpg",
    "publishedAt": "2023-12-13T17:35:41Z",
    "content": "The European Union is currently taking measures to curb the power of tech giants, and it's increasingly looking like it may block Apple's App Store rules that apply to music streaming services within… [+1506 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "Apple stock closes at an all-time-high, added $1 trillion to its market cap in 2023",
    "description": "The AAPL stock closed at $197.96, up 1.67% for the day, a new record high for the company.AAPL closes at an all-time-highIt's hard to bet against Apple in the stock market. The company has consistently outperformed its contemporaries and is one of five US com…",
    "url": "https://appleinsider.com/articles/23/12/13/apple-stock-closes-at-an-all-time-high-added-1-trillion-to-its-market-cap-in-2023",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57705-117525-IMG_4415-xl.jpg",
    "publishedAt": "2023-12-13T21:59:53Z",
    "content": "AAPL closes at an all-time-high\r\nThe AAPL stock closed at $197.96, up 1.67% for the day, a new record high for the company.\r\nIt's hard to bet against Apple in the stock market. The company has consis… [+999 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Peter Cohen)",
    "title": "Despite what you may have heard, don't write off the iMac just yet",
    "description": "We admit that the most recent incarnation of the iMac hasn't left us breathless, but it's far too soon to write an epitaph for Apple's all-in-one.The iMac looks the same, but sports faster M3 chipsApple refreshed the iMac in October with the new M3 processor.…",
    "url": "https://appleinsider.com/articles/23/12/13/despite-what-you-may-have-heard-dont-write-off-the-imac-just-yet",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57036-116005-new-imac-xl.jpg",
    "publishedAt": "2023-12-13T14:59:35Z",
    "content": "The iMac looks the same, but sports faster M3 chips\r\nWe admit that the most recent incarnation of the iMac hasn't left us breathless, but it's far too soon to write an epitaph for Apple's all-in-one.… [+5478 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Amber Neely)",
    "title": "Apple selling a standalone second-generation AirPod Pro USB-C case for $99",
    "description": "You can now pick up a USB-C charging case for your second-generation AirPods Pro — if you're willing to spend $99.On Wednesday, Apple added a new item to its online store — a USB-C charging case for the second generations AirPods Pro. The case is available fo…",
    "url": "https://appleinsider.com/articles/23/12/13/apple-selling-a-standalone-second-generation-airpod-pro-usb-c-case-for-99",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57701-117520-heakled-xl.jpg",
    "publishedAt": "2023-12-13T17:56:19Z",
    "content": "You can now pick up a USB-C charging case for your second-generation AirPods Pro — if you're willing to spend $99.\r\nOn Wednesday, Apple added a new item to its online store — a USB-C charging case fo… [+685 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Amanda Laskin)",
    "title": "Students: save up to 34% with limited-time MacBook Air & Pro deals at B&H",
    "description": "Apple computers for students and teachers are now on sale at B&H. These limited-time education discounts can take up to 34% off even Apple's latest laptops and desktops with B&H EDU Advantage.B&H's limited-time EDU specials offer an excellent opportunity for …",
    "url": "https://appleinsider.com/articles/23/12/13/students-save-up-to-34-with-limited-time-macbook-air-pro-deals-at-bh",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57690-117506-14-inch-macbook-pro-price-war-xl.jpg",
    "publishedAt": "2023-12-13T05:19:33Z",
    "content": "Apple computers for students and teachers are now on sale at B&amp;H. These limited-time education discounts can take up to 34% off even Apple's latest laptops and desktops with B&amp;H EDU Advantage… [+2626 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Jess Pingrey)",
    "title": "Daily deals Dec. 13: up to $400 off M3 MacBook Pro, $199 AirPods Pro USB-C, $100 off Google Pixel Tablet, more",
    "description": "Today's hottest deals include an AirTag 4-pack for $79.98, 70% off a Kodak Bluetooth party tower speaker, 53% off a Blink Outdoor 4 + Blink Mini Smart security camera bundle, 44% off an LG 65\" Class OLED 4K Smart TV, and more.Save $1,103 on an LG 65\" OLED TVT…",
    "url": "https://appleinsider.com/articles/23/12/13/daily-deals-dec-13-up-to-400-off-m3-macbook-pro-199-airpods-pro-usb-c-100-off-google-pixel-tablet-more",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57695-117516-daily-deals-dec-13-1-xl.jpg",
    "publishedAt": "2023-12-13T19:54:58Z",
    "content": "Save $1,103 on an LG 65\" OLED TV\r\nToday's hottest deals include an AirTag 4-pack for $79.98, 70% off a Kodak Bluetooth party tower speaker, 53% off a Blink Outdoor 4 + Blink Mini Smart security camer… [+3290 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "Three possible designs for iPhone 16 revealed in leak",
    "description": "Renders based on leaked prototypes show what the iPhone 16 could look like, with vertical cameras and altered button configurations being the primary changes.iPhone 16 could make small adjustments to the iPhone 15 designThe base iPhone 16 is expected to get a…",
    "url": "https://appleinsider.com/articles/23/12/13/three-possible-designs-for-iphone-16-revealed-in-leak",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57691-117493-iPhone-15-back-2-xl.jpg",
    "publishedAt": "2023-12-13T00:06:21Z",
    "content": "iPhone 16 could make small adjustments to the iPhone 15 design\r\nRenders based on leaked prototypes show what the iPhone 16 could look like, with vertical cameras and altered button configurations bei… [+2202 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Chip Loder)",
    "title": "How to save disk space in macOS by clearing Containers folders",
    "description": "Apple's addition of Sandboxing in macOS added predefined app folders to the operating system. Here's how to remove some of those folders that you probably don't need and get some drive space back.Over a decade ago, Apple introduced Sandboxing to macOS. Sandbo…",
    "url": "https://appleinsider.com/inside/macos/tips/how-to-save-disk-space-in-macos-by-clearing-containers-folders",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57598-117388-lede-xl.jpg",
    "publishedAt": "2023-12-13T11:03:43Z",
    "content": "Apple's addition of Sandboxing in macOS added predefined app folders to the operating system. Here's how to remove some of those folders that you probably don't need and get some drive space back.\r\nO… [+5470 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Christine McKee)",
    "title": "Apple's upgraded M3 MacBook Pro 14-inch just dropped to $1,499",
    "description": "With a bump up in memory and extra storage, the new M3 MacBook Pro 14-inch is $300 off in addition to $50 off AppleCare. Units are in stock at press time for delivery by Christmas.Save $300 on this M3 MacBook Pro\r\nIn an epic price cut that's available exclusi…",
    "url": "https://appleinsider.com/articles/23/12/13/apples-upgraded-m3-macbook-pro-14-inch-just-dropped-to-1499",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57697-117519-m3-macbook-pro-14-inch-300-off-xl.jpg",
    "publishedAt": "2023-12-13T14:57:45Z",
    "content": "With a bump up in memory and extra storage, the new M3 MacBook Pro 14-inch is $300 off in addition to $50 off AppleCare. Units are in stock at press time for delivery by Christmas.\r\nSave $300 on this… [+2223 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Peter Cohen)",
    "title": "Foxconn pours another $1 billion into India expansion",
    "description": "The Indian government announced this week approval of Foxconn's plan to invest an additional $1 billion in a manufacturing plant expected to produce the iPhone.Mumbai, IndiaThe Karnataka government acknowledged Tuesday it had approved a 139.11 billion rupee (…",
    "url": "https://appleinsider.com/articles/23/12/13/foxconn-pours-another-1-billion-into-india-expansion",
    "urlToImage": "https://photos5.appleinsider.com/gallery/54637-110448-51897-102940-50774-100235-50489-99331-18914-18533-india-mumbai-xl-xl-xl-xl-xl.jpg",
    "publishedAt": "2023-12-13T14:23:17Z",
    "content": "Mumbai, India\r\nThe Indian government announced this week approval of Foxconn's plan to invest an additional $1 billion in a manufacturing plant expected to produce the iPhone.\r\nThe Karnataka governme… [+1109 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Michael Stroup)",
    "title": "Supercharge your setup with the latest M3 Max MacBook Pro 14-inch, now $400 off",
    "description": "Adorama makes it more affordable to upgrade your setup to the latest M3 Max MacBook Pro 14-inch by offering a $200 cash discount that stacks with an exclusive $200 coupon, bringing the total savings to $400 off retail.Purchasing the most recent releases of co…",
    "url": "https://appleinsider.com/articles/23/12/13/supercharge-your-setup-with-the-latest-m3-max-macbook-pro-14-inch-now-400-off",
    "urlToImage": "https://photos5.appleinsider.com/gallery/57703-117523-Save_400_M3_MacBook_Pro-xl.jpg",
    "publishedAt": "2023-12-13T21:41:40Z",
    "content": "Adorama makes it more affordable to upgrade your setup to the latest M3 Max MacBook Pro 14-inch by offering a $200 cash discount that stacks with an exclusive $200 coupon, bringing the total savings … [+2878 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gizmodo.jp"
    },
    "author": "はらいさん",
    "title": "Apple純正日記アプリ「ジャーナル」は未来の日記",
    "description": "配信が始まったiOS 17.2。Apple（アップル）による純正日記アプリ『ジャーナル』が解禁されたので早速使ってみました。",
    "url": "https://www.gizmodo.jp/2023/12/apple-ios-17-2-journal.html",
    "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/12/13/231213Journal-01.jpg?w=1280&h=630&f=jpg",
    "publishedAt": "2023-12-13T03:00:00Z",
    "content": "Copyright © mediagene Inc. All Rights Reserved."
    },
    {
    "source": {
    "id": null,
    "name": "Yanko Design"
    },
    "author": "Gaurav Sood",
    "title": "Stussy’s special edition Beats Studio Pro headphones boast a retro elemental design",
    "description": "Stussy’s special edition Beats Studio Pro headphones boast a retro elemental designIf you are looking for a stylish and versatile pair of ANC headphones, then Apple-owned Beats Studio Pro could be your choice. The cans go...",
    "url": "https://www.yankodesign.com/2023/12/13/stussys-special-edition-beats-studio-pro-headphones-boast-a-retro-elemental-design/",
    "urlToImage": "https://www.yankodesign.com/images/design_news/2023/12/stussys-special-edition-beats-studio-pro-headphones-boast-a-retro-elemental-design/Stussy-Beats-Studio-Pro-2.jpg",
    "publishedAt": "2023-12-13T18:20:57Z",
    "content": "If you are looking for a stylish and versatile pair of ANC headphones, then Apple-owned Beats Studio Pro could be your choice. The cans go neck and neck with the Sony WH-1000XM5, and just edge over i… [+1535 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yanko Design"
    },
    "author": "JC Torres",
    "title": "Small iPhone 16 camera design change could have important implications",
    "description": "Small iPhone 16 camera design change could have important implicationsApple is known for moving slowly but surely, changing things only when it really makes sense and after numerous tests. That can be especially seen...",
    "url": "https://www.yankodesign.com/2023/12/13/small-iphone-16-camera-design-change-could-have-important-implications/",
    "urlToImage": "https://www.yankodesign.com/images/design_news/2023/12/small-iphone-16-camera-design-change-could-have-important-implications/iPhone-15_15-Plus_3_yankodesign.jpg",
    "publishedAt": "2023-12-13T11:07:50Z",
    "content": "Apple is known for moving slowly but surely, changing things only when it really makes sense and after numerous tests. That can be especially seen in the iPhone’s cameras, which don’t change year aft… [+2508 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Florence Santrot",
    "title": "Apple Watch 9 vs Apple Watch 8 : le match au sommet",
    "description": "Que vaut la nouvelle Apple Watch par rapport à son aînée ? Plongée en détail dans les similarités mais surtout les différences qui séparent les deux montres connectées.\nApple Watch 9 vs Apple Watch 8 : le match au sommet",
    "url": "https://www.journaldugeek.com/dossier/apple-watch-9-vs-apple-watch-8-le-match-au-sommet/",
    "urlToImage": "https://www.journaldugeek.com/app/uploads/2023/12/wa4.jpg",
    "publishedAt": "2023-12-13T14:13:24Z",
    "content": "Chaque année, la sortie d’une nouvelle Apple Watch suscite une vague d’anticipation chez les technophiles et les aficionados de la marque à la pomme. En scrutant les évolutions de la montre connectée… [+4953 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "tristan carballeda",
    "title": "Changer le code de son iPhone prendra bientôt une heure (mais c’est une bonne nouvelle)",
    "description": "Apple a travaillé pour mettre en place une solution supplémentaire afin de limiter les vols de données lors du vol d'un iPhone. \nChanger le code de son iPhone prendra bientôt une heure (mais c’est une bonne nouvelle)",
    "url": "https://www.journaldugeek.com/2023/12/13/changer-le-code-de-son-iphone-prendra-bientot-une-heure-mais-cest-une-bonne-nouvelle/",
    "urlToImage": "https://www.journaldugeek.com/app/uploads/2023/11/iphone-14-pro-max.jpg",
    "publishedAt": "2023-12-13T12:00:42Z",
    "content": "Apple a publié au début de la semaine une nouvelle mise à jour pour son système d’exploitation pour iPhone, iOS. En plus de cette dernière, une version bêta d’iOS 17.3 a été rendue publique. Au cur d… [+2311 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Partenaire",
    "title": "Meilleure coque pour iPhone 15 : le comparatif des protections (2024)",
    "description": "Vous venez d'acheter un nouvel iPhone 15 (ou un iPhone 15 Pro) et vous souhaitez le protéger contre tout accident ? Vous avez bien raison, et nous allons vous donner ci-dessous quelques conseils - et des recommandations - pour bien choisir votre protection. M…",
    "url": "https://www.journaldugeek.com/bon-plan/meilleure-coque-pour-iphone-15-15-pro/",
    "urlToImage": "https://www.journaldugeek.com/app/uploads/2023/12/coque-casetify-choc.jpg",
    "publishedAt": "2023-12-13T14:06:54Z",
    "content": "Dépenser 1000 ou 1500 euros dans un iPhone 15 c’est bien, mais il faut aussi penser à tous les coûts associés à un tel produit. Parmi eux, il y a forcément les réparations au fil du temps, même si vo… [+9113 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Álvaro García M.",
    "title": "Apple TV+ se saca de la chistera su propia 'The White Lotus' con un elenco estelar: así es 'Palm Royale'",
    "description": "A lo 'The White Lotus' de HBO Max, pero también a lo 'Acapulco' de la propia Apple TV+. 'Palm Royale' es la nueva serie exclusiva de Apple ambientada en un resort y que viene inspirada en una novela escrita por Juliet McDaniel, ‘Mr. and Mrs. American Pie’. Ya…",
    "url": "https://www.applesfera.com/servicios-apple/apple-tv-se-saca-chistera-su-propia-the-white-lotus-elenco-estelar-asi-palm-royale",
    "urlToImage": "https://i.blogs.es/01094b/apple-tv-plus/840_560.jpeg",
    "publishedAt": "2023-12-13T12:01:16Z",
    "content": "A lo 'The White Lotus' de HBO Max, pero también a lo 'Acapulco' de la propia Apple TV+. 'Palm Royale' es la nueva serie exclusiva de Apple ambientada en un resort y que viene inspirada en una novela … [+2299 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Jesús Quesada",
    "title": "Ofertas en accesorios SATECHI para regalar por Navidad a los fans de Apple",
    "description": "Un día menos, un día más cerca de la Navidad. Si todavía te falta por comprar algún regalo y es para una persona con dispositivos de Apple, echa un ojo a las ofertas de SATECHI, pues sus accesorios y periféricos son muy recomendados para los productos de la m…",
    "url": "https://www.applesfera.com/seleccion/ofertas-accesorios-satechi-para-regalar-navidad-a-fans-apple",
    "urlToImage": "https://i.blogs.es/e9e06e/accesorios-satechi/840_560.jpeg",
    "publishedAt": "2023-12-13T16:31:23Z",
    "content": "Un día menos, un día más cerca de la Navidad. Si todavía te falta por comprar algún regalo y es para una persona con dispositivos de Apple, echa un ojo a las ofertas de SATECHI, pues sus accesorios y… [+3761 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Álvaro García M.",
    "title": "Más protección para un iPhone robado: iOS 17.3 beta 1 nos muestra más seguridad y otras novedades",
    "description": "El ritmo de actualizaciones de Apple es vertiginoso y si este lunes asistíamos al lanzamiento de iOS 17.2 y el resto de sistemas homólogos, durante el martes lanzaron la que es ya la primera versión beta de iOS 17.3 orientada a desarrolladores y con idea de q…",
    "url": "https://www.applesfera.com/ios/proteccion-para-iphone-robado-ios-17-3-beta-1-nos-muestra-seguridad-otras-novedades",
    "urlToImage": "https://i.blogs.es/636389/ios-17-iphone-robado/840_560.jpeg",
    "publishedAt": "2023-12-13T07:55:32Z",
    "content": "El ritmo de actualizaciones de Apple es vertiginoso y si este lunes asistíamos al lanzamiento de iOS 17.2 y el resto de sistemas homólogos, durante el martes lanzaron la que es ya la primera versión … [+3192 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "Estos son las 40 aplicaciones y juegos gratis más descargados en iPhone e iPad durante 2023 en España",
    "description": "Diciembre es mes de resúmenes y recopilaciones. Apple Music tiene su Replay, Spotify tiene su Wrapped y Apple premia las aplicaciones y juegos que, según su criterio, han sido las mejores del año en la App Store. Pero desde Cupertino han desvelado algo nuevo.…",
    "url": "https://www.applesfera.com/app-store-1/estos-40-aplicaciones-juegos-gratis-descargados-iphone-e-ipad-durante-2023-espana",
    "urlToImage": "https://i.blogs.es/320c57/captura-de-pantalla-2023-12-13-a-las-11.37.17/840_560.jpeg",
    "publishedAt": "2023-12-13T10:39:34Z",
    "content": "Diciembre es mes de resúmenes y recopilaciones. Apple Music tiene su Replay, Spotify tiene su Wrapped y Apple premia las aplicaciones y juegos que, según su criterio, han sido las mejores del año en … [+2844 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Isra Fdez",
    "title": "Logran lo imposible: desmontan un MacBook Pro M3 Max para modificar por completo su capacidad de almacenamiento",
    "description": "Si bien es cierto que los MacBook Pro con procesadores M3 Max  son los portátiles de la compañía más rápidos de la historia, durante los últimos meses se han abierto debates interesantes sobre lo contrario, la falta de potencia y solvencia.\n<!-- BREAK 1 -->\nL…",
    "url": "https://www.applesfera.com/curiosidades/logran-imposible-desmontan-macbook-pro-m3-max-para-modificar-completo-su-capacidad-almacenamiento",
    "urlToImage": "https://i.blogs.es/2da564/fotojet/840_560.jpeg",
    "publishedAt": "2023-12-13T15:01:19Z",
    "content": "Si bien es cierto que los MacBook Pro con procesadores M3 Max  son los portátiles de la compañía más rápidos de la historia, durante los últimos meses se han abierto debates interesantes sobre lo con… [+2869 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Alberto García",
    "title": "Menos de 35 euros: este dispositivo es una de las mejores compras que he hecho para disfrutar de Apple TV",
    "description": "Hay muchas formas de disfrutar de la plataforma de streaming de Apple. Lo más común es que lo hagamos desde una smart TV compatible, pero son muchos los televisores los que, por diversas razones, no pueden instalar la aplicación, ya sea por ser un modelo anti…",
    "url": "https://www.applesfera.com/seleccion/35-euros-este-dispositivo-mejores-compras-que-he-hecho-para-disfrutar-apple-tv",
    "urlToImage": "https://i.blogs.es/267e8c/fire-tv-stick/840_560.jpeg",
    "publishedAt": "2023-12-13T11:31:16Z",
    "content": "Hay muchas formas de disfrutar de la plataforma de streaming de Apple. Lo más común es que lo hagamos desde una smart TV compatible, pero son muchos los televisores los que, por diversas razones, no … [+2751 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Álvaro García M.",
    "title": "Se filtran dos diseños del iPhone 16 y las cámaras nos traen viejos recuerdos. Y no muy bonitos",
    "description": "Aunque estemos aún a nueve meses de su presentación, es evidente que los iPhone 16 están ya más que pensados por parte de Apple. En lo que respecta al diseño, la compañía lo tiene ya cerrado y en recientes filtraciones se ha sabido que los iPhone 16 y 16 Plus…",
    "url": "https://www.applesfera.com/rumores/se-filtran-dos-disenos-iphone-16-camaras-nos-traen-viejos-recuerdos-no-muy-bonitos",
    "urlToImage": "https://i.blogs.es/2a3d5a/iphone-12/840_560.jpeg",
    "publishedAt": "2023-12-13T09:10:48Z",
    "content": "Aunque estemos aún a nueve meses de su presentación, es evidente que los iPhone 16 están ya más que pensados por parte de Apple. En lo que respecta al diseño, la compañía lo tiene ya cerrado y en rec… [+3801 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Álvaro García M.",
    "title": "Cómo evitar que te activen el modo avión si te han robado el iPhone",
    "description": "Existen varios consejos acerca de cómo actuar si nos roban el iPhone y evitar que los ladrones accedan a contenido sensible. De hecho, la propia Apple tiene previsto implementar más seguridad en iOS 17.3. Sin embargo, toda medida preventiva es poca si el ladr…",
    "url": "https://www.applesfera.com/tutoriales/como-evitar-que-te-activen-modo-avion-te-han-robado-iphone",
    "urlToImage": "https://i.blogs.es/8c9514/modo-avion/840_560.jpeg",
    "publishedAt": "2023-12-13T13:01:17Z",
    "content": "Existen varios consejos acerca de cómo actuar si nos roban el iPhone y evitar que los ladrones accedan a contenido sensible. De hecho, la propia Apple tiene previsto implementar más seguridad en iOS … [+2593 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "Hasta 176.000 euros por un móvil antiguo: los iPhone arrasan en las subastas para coleccionistas",
    "description": "Como entusiasta de la tecnología no es raro que decidas conservar todos los dispositivos que hayas estado usando a modo de recuerdo, o de nostalgia. Tengo amigos con enormes vitrinas donde guardan todos los móviles que han ido utilizando, desde épocas en las …",
    "url": "https://www.applesfera.com/iphone/176-000-euros-movil-antiguo-iphone-arrasan-subastas-para-coleccionistas",
    "urlToImage": "https://i.blogs.es/c4f9e0/captura-de-pantalla-2023-12-13-a-las-17.57.57/840_560.jpeg",
    "publishedAt": "2023-12-13T17:35:44Z",
    "content": "Como entusiasta de la tecnología no es raro que decidas conservar todos los dispositivos que hayas estado usando a modo de recuerdo, o de nostalgia. Tengo amigos con enormes vitrinas donde guardan to… [+1897 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "El sueño del iPhone original que quiere hacerse realidad en 2025",
    "description": "Aún recuerdo sostener en mi mano las primeras generaciones de los iPhone, con sus pantallas de 4 pulgadas y sus enormes bordes, pensando en que la tecnología ya no podría ser capaz de ir mucho más allá. Qué equivocado estaba. Aún miro los marcos de mi iPhone …",
    "url": "https://www.applesfera.com/iphone/sueno-iphone-original-que-quiere-hacerse-realidad-2025",
    "urlToImage": "https://i.blogs.es/994a20/iphone-2025/840_560.jpeg",
    "publishedAt": "2023-12-13T16:01:20Z",
    "content": "Aún recuerdo sostener en mi mano las primeras generaciones de los iPhone, con sus pantallas de 4 pulgadas y sus enormes bordes, pensando en que la tecnología ya no podría ser capaz de ir mucho más al… [+2807 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Theregister.com"
    },
    "author": "Jessica Lyons Hardcastle",
    "title": "Final Patch Tuesday of 2023 goes out with a bang",
    "description": "Microsoft fixed 36 flaws. Adobe addressed 212. Apple, Google, Cisco, VMware and Atlassian joined the party\nIt's the last Patch Tuesday of 2023, which calls for celebration – just as soon as you update Windows, Adobe, Google, Cisco, FortiGuard, SAP, VMware, At…",
    "url": "https://www.theregister.com/2023/12/13/december_2023_patch_tuesday/",
    "urlToImage": "https://regmedia.co.uk/2023/12/11/shutterstock_xmasparty.jpg",
    "publishedAt": "2023-12-13T00:41:41Z",
    "content": "It's the last Patch Tuesday of 2023, which calls for celebration  just as soon as you update Windows, Adobe, Google, Cisco, FortiGuard, SAP, VMware, Atlassian and Apple products, of course.\r\nLet's st… [+7142 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Phandroid - News for Android"
    },
    "author": "Tyler Lee",
    "title": "Android needs to steal this iOS security feature now!",
    "description": "Apple is working on a new security feature that will help deter iPhone thieves and protect users in the event their phone is stolen.\nThe post Android needs to steal this iOS security feature now! appeared first on Phandroid.",
    "url": "https://phandroid.com/2023/12/13/android-needs-to-steal-this-ios-security-feature-now/",
    "urlToImage": "https://phandroid.com/wp-content/uploads/2022/10/mkeke-iphone-case-5.jpg",
    "publishedAt": "2023-12-13T13:57:06Z",
    "content": "Our phones contain a lot of personal and private data, like notes, medical history, photos, contacts, financial information, and so on. This is why many people get incredibly upset if they lose their… [+1351 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Phandroid - News for Android"
    },
    "author": "Tyler Lee",
    "title": "The Samsung Galaxy S24 Ultra could be getting a super bright display",
    "description": "Leaked specs of the Samsung Galaxy S24 Ultra have revealed that it will have a very bright display.\nThe post The Samsung Galaxy S24 Ultra could be getting a super bright display appeared first on Phandroid.",
    "url": "https://phandroid.com/2023/12/13/the-samsung-galaxy-s24-ultra-could-be-getting-a-super-bright-display/",
    "urlToImage": "https://phandroid.com/wp-content/uploads/2023/01/samsung-galaxy-s23-8-scaled.jpg",
    "publishedAt": "2023-12-13T10:52:05Z",
    "content": "Display brightness is one of those things most people dont necessarily think of when it comes to phones. A lot of people tend to focus on specs like the chipset, the cameras, battery, and so on, but … [+1499 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Golem.de"
    },
    "author": "Michael Linden",
    "title": "Stolen Device Protection: Neues iOS-17.3-Feature soll Konten-Diebstahl verhindern",
    "description": "Apple will mit einer neuen Funktion in iOS 17.3 verhindern, dass allein die Kenntnis des Gerätecodes für ein iPhone reicht, um den Nutzer auszuspähen. (iOS, Apple)",
    "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fstolen-device-protection-neues-ios-17-3-feature-soll-konten-diebstahl-verhindern-2312-180287.html&referer=https%3A%2F%2Ft.co%2F782d03ebd0",
    "urlToImage": null,
    "publishedAt": "2023-12-13T10:23:01Z",
    "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "XDA Developers"
    },
    "author": "Mahmoud Itani",
    "title": "5 ways Apple could improve notifications on iPhone",
    "description": "Notifications on iPhone could use some enhancements. Here are some ways Apple could improve these alerts through an iOS update.",
    "url": "https://www.xda-developers.com/ways-apple-improve-notifications-iphone/",
    "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2023/09/iphone-15-pro-display-main.png",
    "publishedAt": "2023-12-13T11:00:24Z",
    "content": "Key Takeaways\r\n<ul><li> iOS 17 is a mature operating system, but Apple can still make a ton of changes to its notifications. </li><li> For example, notifications should seamlessly expand and disappea… [+6184 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "XDA Developers"
    },
    "author": "Mahmoud Itani",
    "title": "5 creative ways to use an AirTag",
    "description": "There are many use cases for Apple's tracker, and here are some of the most creative ones",
    "url": "https://www.xda-developers.com/creative-ways-use-airtag/",
    "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2023/12/img_1232.jpeg",
    "publishedAt": "2023-12-13T20:01:20Z",
    "content": "Key Takeaways\r\n<ul><li> AirTags can be used to track pets, providing peace of mind and the ability to locate them easily through the Find My app. </li><li> Attaching an AirTag to valuable packages ca… [+5208 chars]"
    }
    ]

  constructor(){
    super();
    this.state={
      articles: this.articles,
      loading: false
    }
  }


  render() {
    return (
      <>
      <h2 className="d-flex justify-content-center my-5">DAILY NEWS</h2>
      {this.state.articles.map((element)=>{
        return <NewsItem key={element.url} title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
      })}
      
      
      
      </>
    )
  }
}

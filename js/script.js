// Función para generar un mensaje y una foto por día
        const generateDailyContent = () => {
            const data = {};
            const year = 2025; // Año para el que se generarán los mensajes
            const startDate = new Date(year, 0, 1); // 1 de enero
            const endDate = new Date(year, 11, 31); // 31 de diciembre

            // Lista de mensajes románticos, más extensos y personalizados para Estefany
            const messages = [
                (day) => `¡Buenos días, mi amor! Estefany, que tu día sea tan brillante como tu sonrisa y tan lleno de alegría como la que me das cada vez que te veo. Eres mi sol, mi luz, y la razón por la que cada amanecer es hermoso. Te adoro con todo mi ser. ✨`,
                (day) => `Estefany, hoy es un día perfecto para recordarte lo mucho que te adoro. Eres mi todo, mi compañera de vida, la persona que hace que cada momento valga la pena. Mi corazón te pertenece por completo. ❤️`,
                (day) => `Cada día a tu lado, Estefany, es una aventura que no cambiaría por nada. Contigo, la vida es un viaje emocionante, lleno de risas, aprendizajes y un amor incondicional que me impulsa a ser mejor. 🚀`,
                (day) => `Mi corazón late más fuerte por ti, Estefany. Siempre estás en mis pensamientos, en cada latido, en cada sueño. Eres la melodía que me acompaña y la inspiración que me guía. 🥰`,
                (day) => `Estefany, tu presencia ilumina mi mundo de una manera que ninguna otra cosa podría. Eres mi luz en la oscuridad, la chispa que enciende mi alma y la calma que necesito en mi día a día. 💡`,
                (day) => `Contigo, Estefany, cada momento se convierte en un recuerdo precioso que atesoro en lo más profundo de mi ser. Desde el más simple gesto hasta la aventura más grande, todo es mágico a tu lado. 💖`,
                (day) => `Estefany, eres la melodía de mi vida, la canción que siempre quiero escuchar. Tu voz es música para mis oídos y tu risa es la sinfonía más hermosa que he conocido. 🎶`,
                (day) => `Mi amor por ti, Estefany, crece con cada amanecer. Es un amor que se renueva y se fortalece con el tiempo, un amor puro y sincero que me hace sentir completo. ☀️`,
                (day) => `Estefany, eres mi refugio seguro, mi paz en medio de cualquier tormenta. Contigo me siento protegido, amado y en casa, no importa dónde estemos. 🏡`,
                (day) => `Solo tú, Estefany, tienes la llave de mi corazón. Lo abriste con tu dulzura, tu bondad y tu increíble forma de ser. Eres la única que lo entiende y lo cuida. 🔑`,
                (day) => `Estefany, eres mi bendición, mi suerte más grande. Cada día agradezco al universo por haberte puesto en mi camino. Eres el regalo más hermoso que la vida me ha dado. 🍀`,
                (day) => `Pensando en ti, Estefany, y en lo afortunado que soy de tenerte. Tu amor me inspira, tu apoyo me fortalece y tu presencia me llena de gratitud. 🙏`,
                (day) => `Estefany, eres mi dulce escape, mi lugar favorito para perderme. Contigo, el tiempo se detiene y solo existe nuestro amor, nuestra conexión y nuestra felicidad. 🏝️`,
                (day) => `Amo tus locuras, Estefany. Me haces reír sin parar, incluso en los días más grises. Tu sentido del humor es contagioso y tu alegría ilumina mi vida. 🤪`,
                (day) => `Estefany, contigo a mi lado, siento que puedo lograrlo todo. Eres mi mayor apoyo, mi motivación constante y la persona que siempre cree en mí. 💪`,
                (day) => `Eres mi inspiración, Estefany. Gracias por ser tan increíble, por tu fuerza, tu bondad y tu capacidad de amar. Cada día aprendo algo nuevo de ti. 🌟`,
                (day) => `Estefany, eres la razón de mis sonrisas más sinceras. Tu felicidad es mi felicidad, y verte sonreír es el regalo más grande que puedo recibir. 😊`,
                (day) => `Mi corazón te elige, Estefany, hoy y siempre. No hay duda en mi mente ni en mi alma. Eres la única para mí, mi amor verdadero y eterno. ✅`,
                (day) => `Estefany, eres mi sueño hecho realidad, la fantasía que nunca creí posible. Cada día a tu lado es un recordatorio de que los milagros existen. 💫`,
                (day) => `Contigo, Estefany, mi vida es un cuento de hadas, lleno de magia, romance y momentos inolvidables. Eres mi princesa, mi reina, mi todo. 🧚‍♀️`,
                (day) => `Estefany, eres mi alma gemela. No hay duda, nuestra conexión es profunda, única y eterna. Nos entendemos sin palabras y nos amamos sin límites. 👯‍♀️`,
                (day) => `Mi amor, Estefany, es tan grande como el universo, infinito e incondicional. No hay distancia ni tiempo que pueda disminuir lo que siento por ti. 🌌`,
                (day) => `Estefany, eres mi constelación favorita, la más brillante y hermosa en mi cielo. Cada estrella en el universo me recuerda tu belleza y tu luz. ✨`,
                (day) => `Qué linda eres, Estefany. Por dentro y por fuera, eres una obra de arte. Tu belleza me deslumbra y tu bondad me enamora cada día más. 😍`,
                (day) => `Estefany, eres mi razón de ser. Todo tiene sentido contigo, cada paso, cada decisión, cada sueño. Le das propósito y significado a mi vida. 💖`,
                (day) => `Un besito para ti, Estefany, para alegrar tu día y recordarte lo mucho que te pienso. Espero que sientas mi cariño en cada uno de ellos. 💋`,
                (day) => `Estefany, eres mi adicción más dulce, de la que nunca quiero recuperarme. Cada momento contigo es un placer, un deleite para mis sentidos. 🤤`,
                (day) => `No me canso de ti, Estefany. Eres mi constante, mi refugio, mi lugar seguro. Contigo, la vida es simple, hermosa y llena de amor. 🔄`,
                (day) => `Estefany, eres mi todo en uno. No necesito más, porque en ti encuentro todo lo que busco: amor, amistad, compañía y felicidad. 💯`,
                (day) => `Te amaré por siempre, Estefany. Mi amor es eterno, inquebrantable y verdadero. Estaré a tu lado en cada paso del camino, para siempre. ♾️`,
                (day) => `Estefany, eres mi crush eterno. Siempre me robas el aliento, me haces suspirar y me recuerdas lo afortunado que soy de tenerte. 🥰`,
                (day) => `Quédate a mi lado, Estefany. Juntos somos imparables, capaces de superar cualquier desafío y de construir un futuro lleno de sueños cumplidos. 🫂`,
                (day) => `Mi felicidad eres tú, Estefany. Gracias por existir, por llenar mi vida de alegría, risas y un amor que me hace sentir completo. 😄`,
                (day) => `Estefany, eres la mejor. No hay nadie como tú, ni en este mundo ni en ningún otro. Eres única, especial y simplemente maravillosa. 🏆`,
                (day) => `Mi vida sin ti no es igual, Estefany. Te extraño cuando no estás, cada segundo lejos de ti es un vacío en mi corazón. Vuelve pronto. 💔`,
                (day) => `Estefany, eres mi dulce. Siempre quiero un poquito más de ti, de tus abrazos, tus besos, tu compañía. Nunca es suficiente cuando se trata de ti. 🍬`,
                (day) => `Mi vida eres tú, Estefany. Le das color a mis días, a mis sueños, a mi existencia. Contigo, todo es vibrante y lleno de vida. 🌈`,
                (day) => `Contigo, Estefany, todo es diversión. Cada momento es una oportunidad para reír, jugar y disfrutar de la vida al máximo. Eres mi mejor aventura. 😂`,
                (day) => `Estefany, eres mi reina, la soberana de mi corazón. Te mereces todo el amor, el respeto y la admiración del mundo. 👸`,
                (day) => `Me vuelves loco, Estefany, de la mejor manera posible. Tu encanto, tu inteligencia y tu belleza me cautivan por completo. 🤯`,
                (day) => `Estefany, eres mi buena suerte, mi amuleto de la fortuna. Contigo a mi lado, siento que todo es posible y que la vida me sonríe. 🍀`,
                (day) => `Conectados para siempre, Estefany. Nuestros corazones están unidos por un hilo invisible, un lazo irrompible que nos mantendrá juntos por la eternidad. 🔗`,
                (day) => `Estefany, eres mi deseo, aquello que más anhelo en esta vida. Eres la persona con la que quiero compartir cada momento, cada sueño y cada meta. ✨`,
                (day) => `Mi corazón te llama, Estefany. Siempre busca tu voz, tu presencia, tu amor. Eres el eco en mi alma, la respuesta a todas mis oraciones. 📞`,
                (day) => `Estefany, eres mi poesía, cada palabra que te dedico es sincera y nace del amor más profundo. Eres la musa que inspira mis versos y mis sueños. 📝`,
                (day) => `Mi universo eres tú, Estefany. El centro de mi existencia, el lugar donde giran mis pensamientos y mis emociones. Todo lo que soy, lo soy por ti. 🪐`,
                (day) => `Estefany, eres mi faro. Me guías en la oscuridad, me muestras el camino y me iluminas con tu amor. Eres mi luz en la noche más profunda. 燈籠`,
                (day) => `Mi corazón baila contigo, Estefany, al ritmo de nuestro amor. Cada paso, cada giro, cada movimiento es una celebración de nuestra conexión. 💃`,
                (day) => `Estefany, eres mi presente perfecto, el regalo más hermoso que la vida me ha dado. No hay nada que desee más que vivir este momento contigo, para siempre. 🎁`,
                (day) => `Mi futuro contigo, Estefany, es lo que más me emociona. Imaginar una vida a tu lado, llena de amor, felicidad y aventuras, es mi mayor sueño. 🔮`,
                (day) => `Siempre a tu lado, Estefany. En cada paso, en cada desafío, en cada victoria. Mi compromiso contigo es inquebrantable, mi amor es eterno. 👫`,
                (day) => `Estefany, eres mi luz al final del túnel, la esperanza que me impulsa a seguir adelante. Eres la promesa de un mañana mejor, lleno de amor y alegría. 🕯️`,
                (day) => `Mi refugio perfecto, Estefany. Donde siempre encuentro paz, consuelo y tranquilidad. Eres mi santuario, mi lugar seguro en este mundo. 🛡️`,
                (day) => `Estefany, eres la calma en mi caos, la serenidad en mi tormenta. Tu presencia me tranquiliza, me equilibra y me hace sentir en paz. 🧘`,
                (day) => `Mi risa eres tú, Estefany. Tu alegría es contagiosa, tu humor me ilumina y tu sonrisa es mi mayor recompensa. Me haces reír con el alma. 😂`,
                (day) => `Estefany, eres mi aire. Te necesito para respirar, para vivir, para ser. Eres esencial para mi existencia, mi aliento de vida. 🌬️`,
                (day) => `Sin ti no respiro, Estefany. Eres vital, indispensable, insustituible. Mi vida no sería lo mismo sin tu amor y tu presencia. 🫁`,
                (day) => `Estefany, eres mi sueño recurrente, el que no quiero que termine nunca. Cada noche te sueño y cada mañana anhelo que seas mi realidad. 😴`,
                (day) => `Mi motivo para despertar, Estefany. Cada mañana pienso en ti, en tu sonrisa, en tu amor. Eres la razón por la que me levanto con alegría. ☀️`,
                (day) => `Estefany, eres mi pequeña locura, la que me hace feliz y me saca de la rutina. Contigo, la vida es emocionante, impredecible y llena de sorpresas. 🤪`,
                (day) => `Mi gran amor, Estefany. El más puro y sincero, el que me llena el alma y me hace sentir completo. Eres la definición de amor verdadero. ❤️`,
                (day) => `Estefany, eres mi otra cara, la que me complementa y me hace sentir íntegro. Juntos, somos una fuerza imparable, un equipo perfecto. 🎭`,
                (day) => `Mi complemento, Estefany. Juntos somos perfectos, como dos piezas de un rompecabezas que encajan a la perfección. Eres mi media naranja, mi alma gemela. 🧩`,
                (day) => `Estefany, eres mi alma. Parte de mi ser, de mi esencia, de mi existencia. Mi alma te reconoce y te ama incondicionalmente. 👻`,
                (day) => `Mi ser completo, Estefany. Contigo me siento pleno, realizado y feliz. Eres la pieza que faltaba en mi vida, la que me hace sentir completo. 🧘‍♀️`,
                (day) => `Estefany, eres mi mayor deseo. Que nuestro amor dure siempre, que nuestra felicidad sea infinita y que cada día sea una nueva aventura juntos. 💫`,
                (day) => `Mi paz interior, Estefany. Me la das tú, con tu amor, tu comprensión y tu apoyo incondicional. Eres mi refugio de calma en este mundo. 🕊️`,
                (day) => `Mi corazón sonríe por ti, Estefany. Siempre, en cada momento, en cada pensamiento. Tu felicidad es mi mayor alegría. 😊`,
                (day) => `Estefany, eres mi pedacito de cielo, un trozo de paraíso en la tierra. Tu amor me eleva, me inspira y me hace sentir en las nubes. ☁️`,
                (day) => `Me haces tan feliz, Estefany. Con solo existir, con tu sonrisa, con tu amor. Eres la fuente de mi alegría y la razón de mi bienestar. 🥰`,
                (day) => `Amo que seas tú, Estefany. Auténtica y maravillosa, única e irrepetible. No cambiaría nada de ti, eres perfecta tal como eres. ❤️`,
                (day) => `Estefany, eres mi melodía perfecta. Siempre en mi mente, en mi corazón, en mi alma. Eres la banda sonora de mi vida, la que me hace bailar de alegría. 🎵`,
                (day) => `Mi amor por ti es inmenso, Estefany. No tiene límites, no tiene fronteras, no tiene fin. Es un amor que lo abarca todo y lo transforma todo. 🌌`,
                (day) => `Contigo, Estefany, todo es fácil y hermoso. Cada desafío se convierte en una oportunidad, cada obstáculo en un escalón y cada día en una bendición. ✨`,
                (day) => `Estefany, mi alma te abraza con fuerza, con ternura, con pasión. Siente mi amor en cada uno de mis pensamientos y en cada uno de mis gestos. 🤗`,
                (day) => `Estefany, eres mi luz que ilumina mi camino y me muestra la dirección. Eres mi guía, mi faro, mi estrella polar. 🔦`,
                (day) => `Te quiero cerquita, Estefany. Siempre a mi lado, en cada paso, en cada momento. Tu cercanía me da paz, seguridad y felicidad. 🫂`,
                (day) => `Estefany, eres mi razón de ser mejor, de crecer, de evolucionar. Me inspiras a superar mis límites y a alcanzar mis sueños. 📈`,
                (day) => `Mi amor, mi vida, Estefany. Todo eres tú, mi universo, mi razón de ser, mi todo. No hay nada más importante que tú en mi vida. ❤️‍🔥`,
                (day) => `Estefany, contigo, el tiempo se detiene y el mundo desaparece. Solo existimos tú y yo, en nuestro propio universo de amor y felicidad. ⏱️`,
                (day) => `Estefany, eres mi tesoro más valioso, la joya más preciada de mi vida. Te cuido, te protejo y te valoro por encima de todo. 💰`,
                (day) => `Mi puerto, Estefany. Donde siempre quiero llegar, donde encuentro calma y seguridad. Eres mi destino final, mi hogar. ⛵`,
                (day) => `Estefany, eres mi flor más bonita, la más delicada y fragante de mi jardín. Te cuido con amor, te riego con cariño y te admiro con devoción. 🌸`,
                (day) => `Mi jardín, Estefany. Lleno de colores, de vida, de alegría. Cada flor en él me recuerda tu belleza y tu vitalidad. 🌷`,
                (day) => `Estefany, eres mi canción de cuna. Me das tranquilidad, me arrullas con tu voz y me haces sentir seguro y amado. 😴`,
                (day) => `Mi despertar feliz, Estefany. Cada mañana contigo es un regalo, una nueva oportunidad para amarte y para ser feliz a tu lado. ☀️`,
                (day) => `Estefany, eres mi aventura favorita, la más emocionante y sorprendente de todas. Contigo, la vida es un viaje lleno de descubrimientos. 🎢`,
                (day) => `Mi mejor viaje, Estefany. Contigo a donde sea, no importa el destino, lo importante es que estemos juntos. Eres mi compañera de viaje ideal. ✈️`,
                (day) => `Estefany, eres mi postre favorito, el más dulce y delicioso de todos. Siempre quiero un poquito más de ti, de tu dulzura y de tu amor. 🍦`,
                (day) => `Mi café, Estefany. Mi despertar, mi energía, mi impulso para empezar el día. Eres la dosis perfecta de alegría y vitalidad que necesito. ☕`,
                (day) => `Estefany, eres mi energía, la que me impulsa a seguir adelante, a superar los desafíos y a alcanzar mis sueños. Eres mi motor. ⚡`,
                (day) => `Mi motivación, Estefany. Para cada día, para cada meta, para cada sueño. Eres la razón por la que me esfuerzo y por la que doy lo mejor de mí. 💪`,
                (day) => `Estefany, eres mi calma, la que me tranquiliza y me da paz. Tu presencia me serena, me equilibra y me hace sentir completo. 😌`,
                (day) => `Mi paz, Estefany. Que me das tú, con tu amor, tu comprensión y tu apoyo incondicional. Eres mi refugio de tranquilidad en este mundo. ☮️`,
                (day) => `Estefany, eres mi paraíso personal, un lugar donde me siento feliz, amado y en paz. Eres mi Edén, mi cielo en la tierra. 😇`,
                (day) => `Mi pequeño Edén, Estefany. Un lugar donde florece nuestro amor, donde crecen nuestros sueños y donde somos felices juntos. 🌿`,
                (day) => `Estefany, eres mi calor, el que me abriga en los días fríos y me da consuelo en los momentos difíciles. Eres mi refugio de amor. 🔥`,
                (day) => `Mi abrigo, Estefany. En los días fríos, en las noches oscuras, en los momentos de incertidumbre. Eres mi protección, mi seguridad. 🧥`,
                (day) => `Estefany, eres mi oasis, un lugar de descanso y renovación en medio del desierto. Eres mi fuente de vida, mi refugio de paz. 🏜️`,
                (day) => `Mi fuente de vida, Estefany. De ti emana el amor, la alegría y la vitalidad que necesito para vivir. Eres mi sustento, mi razón de ser. 💧`,
                (day) => `Estefany, eres mi luna, la que ilumina mis noches y me guía en la oscuridad. Eres mi estrella, mi faro, mi luz en la noche. 🌕`,
                (day) => `Mi sol, Estefany. Que ilumina mis días, me da calor y me llena de energía. Eres la luz que me guía y me hace feliz. ☀️`,
                (day) => `Estefany, eres mi mejor momento, el que siempre quiero revivir. Cada instante a tu lado es un tesoro, un recuerdo inolvidable. 🕰️`,
                (day) => `Mi tiempo favorito, Estefany. Contigo, cada segundo es valioso, cada minuto es un regalo y cada hora es una eternidad de amor. ⏳`,
                (day) => `Estefany, eres mi sueño más dulce, el que me acompaña cada noche y me llena de esperanza cada mañana. Eres la inspiración de mis sueños. 😴`,
                (day) => `Mi realidad más bonita, Estefany. Eres la persona que hace que mi vida sea un cuento de hadas, una historia de amor perfecta. 🥰`,
                (day) => `Estefany, eres mi danza, la que me hace bailar de alegría y me llena de pasión. Eres mi compañera de baile, mi ritmo, mi melodía. 💃`,
                (day) => `Mi musa eterna, Estefany. La que inspira mis pensamientos, mis palabras y mis acciones. Eres la fuente de mi creatividad y de mi amor. 🎨`,
                (day) => `Estefany, eres mi galaxia, un universo de posibilidades y de sueños. Eres mi estrella más brillante, mi constelación favorita. 🌠`,
                (day) => `Mi camino, Estefany. Contigo, cada paso es seguro, cada dirección es clara y cada destino es prometedor. Eres mi guía, mi brújula. 🚶‍♂️`,
                (day) => `Estefany, eres mi expedición, la más emocionante y llena de descubrimientos. Contigo, cada día es una nueva aventura, un nuevo aprendizaje. 🧭`,
                (day) => `Mi guía, Estefany. Siempre a mi lado, en cada decisión, en cada encrucijada. Eres mi brújula, mi mapa, mi dirección. 🗺️`,
                (day) => `Estefany, eres mi ancla, la que me mantiene firme en la tormenta y me da estabilidad. Eres mi punto de apoyo, mi seguridad. ⚓`,
                (day) => `Mi firmeza, Estefany. En todo, en cada decisión, en cada compromiso. Eres mi roca, mi cimiento, mi fortaleza. 🧱`,
                (day) => `Estefany, eres mi risa, la que me contagia y me llena de alegría. Tu sentido del humor es único y tu sonrisa es mi mayor recompensa. 😂`,
                (day) => `Mi alma, Estefany. Eres parte de mí, de mi esencia, de mi ser. Nuestra conexión es profunda, espiritual y eterna. 👻`,
                (day) => `Estefany, eres mi razón de ser, la que le da sentido a mi vida y me impulsa a ser mejor. Eres mi propósito, mi motivación. 🌟`,
                (day) => `Mi aliento, Estefany. Te necesito para vivir, para respirar, para existir. Eres el aire que respiro, mi vitalidad. 😮‍💨`,
                (day) => `Estefany, eres mi golosina, la más dulce y deliciosa de todas. Siempre quiero un poquito más de ti, de tu dulzura y de tu amor. 🍬`,
                (day) => `Mi despertar, Estefany. Cada mañana me levanto pensando en ti, en tu sonrisa, en tu amor. Eres la razón por la que me siento feliz. ⏰`,
                (day) => `Estefany, eres mi fuego, el que enciende mi pasión y me llena de energía. Eres la chispa que me impulsa a vivir con intensidad. 🔥`,
                (day) => `Mi pasión, Estefany. Por ti, por nuestro amor, por nuestra vida juntos. Eres la llama que arde en mi corazón y me consume de amor. ❤️‍🔥`,
                (day) => `Estefany, eres mi paraíso, un lugar donde me siento feliz, amado y en paz. Eres mi Edén, mi cielo en la tierra. 🌺`,
                (day) => `Mi verdad, Estefany. Eres la única verdad en mi vida, la que me guía y me da certeza. Eres mi realidad, mi autenticidad. ✅`,
                (day) => `Mi certeza, Estefany. En ti confío plenamente, en tu amor, en tu lealtad. Eres mi seguridad, mi confianza. 💯`,
                (day) => `Mi milagro, Estefany. Eres la prueba de que los sueños se hacen realidad, de que el amor verdadero existe. Eres mi bendición. ✨`,
                (day) => `Mi bendición, Estefany. Eres el regalo más grande que la vida me ha dado, la razón por la que cada día es una celebración. 🙏`,
                (day) => `Estefany, eres mi amor eterno, el que durará para siempre, más allá del tiempo y del espacio. Eres mi alma gemela, mi destino. ♾️`,
                (day) => `Mi vida contigo es un sueño, Estefany. Una fantasía hecha realidad, un cuento de hadas que se escribe cada día con nuestro amor. 💖`,
                (day) => `Estefany, eres mi persona favorita, la que elijo una y otra vez, en cada vida, en cada universo. Eres mi todo. 🫶`,
                (day) => `Amo tu forma de ser, Estefany. Cada detalle, cada imperfección, cada cualidad. Eres perfecta tal como eres, mi amor. 🥰`,
                (day) => `Estefany, eres mi pequeño mundo, mi universo personal. Contigo, no necesito nada más, porque en ti encuentro todo lo que busco. 🌍`,
                (day) => `Me haces sentir vivo, Estefany. Tu amor me revitaliza, me energiza y me llena de pasión. Eres la chispa que enciende mi alma. 🔥`,
                (day) => `Estefany, te necesito. Cada día, cada hora, cada segundo. Eres mi aire, mi agua, mi alimento. Sin ti, mi vida no tendría sentido. 🥺`,
                (day) => `Estefany, eres mi amor. La palabra más hermosa, el sentimiento más puro, la emoción más intensa. Eres la razón de mi felicidad. ❤️`,
                (day) => `Estefany, eres la persona que siempre soñé, la que imaginé en mis fantasías más profundas. Eres mi realidad, mi sueño hecho realidad. 💭`,
                (day) => `Mi mejor casualidad, Estefany. El destino nos unió y estoy eternamente agradecido por ello. Eres el regalo más inesperado y hermoso. 💫`,
                (day) => `Estefany, eres mi luz. La que me guía en la oscuridad, la que me ilumina el camino y la que me muestra la verdad. 💡`,
                (day) => `Mi camino, Estefany. Contigo, cada paso es una aventura, cada sendero es una oportunidad y cada destino es un sueño. 🚶‍♀️`,
                (day) => `Estefany, eres mi sonrisa. La que me contagia, la que me ilumina y la que me hace feliz. Tu sonrisa es mi mayor alegría. 😊`,
                (day) => `Mi alegría, Estefany. Eres la fuente de mi felicidad, la razón por la que mi corazón canta de gozo. 😄`,
                (day) => `Estefany, eres mi paz. La que me tranquiliza, la que me serena y la que me da calma. Eres mi refugio de tranquilidad. 😌`,
                (day) => `Mi refugio, Estefany. Donde me siento seguro, protegido y amado. Eres mi santuario, mi hogar. 🏡`,
                (day) => `Estefany, eres mi dulce. La que endulza mis días, mis noches y mi vida. Eres mi postre favorito, mi capricho más delicioso. 🍬`,
                (day) => `Mi postre, Estefany. El que siempre quiero disfrutar, el que me llena de placer y el que me hace feliz. 🍮`,
                (day) => `Estefany, eres mi café. El que me despierta, el que me da energía y el que me prepara para el día. Eres mi dosis diaria de felicidad. ☕`,
                (day) => `Mi despertar, Estefany. Cada mañana me levanto pensando en ti, en tu sonrisa, en tu amor. Eres la razón por la que amo despertar. ☀️`,
                (day) => `Estefany, eres mi energía. La que me impulsa a seguir adelante, a superar los desafíos y a alcanzar mis sueños. Eres mi motor. ⚡`,
                (day) => `Mi motivación, Estefany. Para cada día, para cada meta, para cada sueño. Eres la razón por la que me esfuerzo y por la que doy lo mejor de mí. 💪`,
                (day) => `Estefany, eres mi calma, la que me tranquiliza y me da paz. Tu presencia me serena, me equilibra y me hace sentir completo. 😌`,
                (day) => `Mi paz, Estefany. Que me das tú, con tu amor, tu comprensión y tu apoyo incondicional. Eres mi refugio de tranquilidad en este mundo. ☮️`,
                (day) => `Estefany, eres mi paraíso personal, un lugar donde me siento feliz, amado y en paz. Eres mi Edén, mi cielo en la tierra. 😇`,
                (day) => `Mi pequeño Edén, Estefany. Un lugar donde florece nuestro amor, donde crecen nuestros sueños y donde somos felices juntos. 🌿`,
                (day) => `Estefany, eres mi calor, el que me abriga en los días fríos y me da consuelo en los momentos difíciles. Eres mi refugio de amor. 🔥`,
                (day) => `Mi abrigo, Estefany. En los días fríos, en las noches oscuras, en los momentos de incertidumbre. Eres mi protección, mi seguridad. 🧥`,
                (day) => `Estefany, eres mi oasis, un lugar de descanso y renovación en medio del desierto. Eres mi fuente de vida, mi refugio de paz. 🏜️`,
                (day) => `Mi fuente de vida, Estefany. De ti emana el amor, la alegría y la vitalidad que necesito para vivir. Eres mi sustento, mi razón de ser. 💧`,
                (day) => `Estefany, eres mi luna, la que ilumina mis noches y me guía en la oscuridad. Eres mi estrella, mi faro, mi luz en la noche. 🌕`,
                (day) => `Mi sol, Estefany. Que ilumina mis días, me da calor y me llena de energía. Eres la luz que me guía y me hace feliz. ☀️`,
                (day) => `Estefany, eres mi mejor momento, el que siempre quiero revivir. Cada instante a tu lado es un tesoro, un recuerdo inolvidable. 🕰️`,
                (day) => `Mi tiempo favorito, Estefany. Contigo, cada segundo es valioso, cada minuto es un regalo y cada hora es una eternidad de amor. ⏳`,
                (day) => `Estefany, eres mi sueño más dulce, el que me acompaña cada noche y me llena de esperanza cada mañana. Eres la inspiración de mis sueños. 😴`,
                (day) => `Mi realidad más bonita, Estefany. Eres la persona que hace que mi vida sea un cuento de hadas, una historia de amor perfecta. 🥰`,
                (day) => `Estefany, eres mi danza, la que me hace bailar de alegría y me llena de pasión. Eres mi compañera de baile, mi ritmo, mi melodía. 💃`,
                (day) => `Mi musa eterna, Estefany. La que inspira mis pensamientos, mis palabras y mis acciones. Eres la fuente de mi creatividad y de mi amor. 🎨`,
                (day) => `Estefany, eres mi galaxia, un universo de posibilidades y de sueños. Eres mi estrella más brillante, mi constelación favorita. 🌠`,
                (day) => `Mi camino, Estefany. Contigo, cada paso es seguro, cada dirección es clara y cada destino es prometedor. Eres mi guía, mi brújula. 🚶‍♂️`,
                (day) => `Estefany, eres mi expedición, la más emocionante y llena de descubrimientos. Contigo, cada día es una nueva aventura, un nuevo aprendizaje. 🧭`,
                (day) => `Mi guía, Estefany. Siempre a mi lado, en cada decisión, en cada encrucijada. Eres mi brújula, mi mapa, mi dirección. 🗺️`,
                (day) => `Estefany, eres mi ancla, la que me mantiene firme en la tormenta y me da estabilidad. Eres mi punto de apoyo, mi seguridad. ⚓`,
                (day) => `Mi firmeza, Estefany. En todo, en cada decisión, en cada compromiso. Eres mi roca, mi cimiento, mi fortaleza. 🧱`,
                (day) => `Estefany, eres mi risa, la que me contagia y me llena de alegría. Tu sentido del humor es único y tu sonrisa es mi mayor recompensa. 😂`,
                (day) => `Mi alma, Estefany. Eres parte de mí, de mi esencia, de mi ser. Nuestra conexión es profunda, espiritual y eterna. 👻`,
                (day) => `Estefany, eres mi razón de ser, la que le da sentido a mi vida y me impulsa a ser mejor. Eres mi propósito, mi motivación. 🌟`,
                (day) => `Mi aliento, Estefany. Te necesito para vivir, para respirar, para existir. Eres el aire que respiro, mi vitalidad. 😮‍💨`,
                (day) => `Estefany, eres mi golosina, la más dulce y deliciosa de todas. Siempre quiero un poquito más de ti, de tu dulzura y de tu amor. 🍬`,
                (day) => `Mi despertar, Estefany. Cada mañana me levanto pensando en ti, en tu sonrisa, en tu amor. Eres la razón por la que me siento feliz. ⏰`,
                (day) => `Estefany, eres mi fuego, el que enciende mi pasión y me llena de energía. Eres la chispa que me impulsa a vivir con intensidad. 🔥`,
                (day) => `Mi pasión, Estefany. Por ti, por nuestro amor, por nuestra vida juntos. Eres la llama que arde en mi corazón y me consume de amor. ❤️‍🔥`,
                (day) => `Estefany, eres mi paraíso, un lugar donde me siento feliz, amado y en paz. Eres mi Edén, mi cielo en la tierra. 🌺`,
                (day) => `Mi verdad, Estefany. Eres la única verdad en mi vida, la que me guía y me da certeza. Eres mi realidad, mi autenticidad. ✅`,
                (day) => `Mi certeza, Estefany. En ti confío plenamente, en tu amor, en tu lealtad. Eres mi seguridad, mi confianza. 💯`,
                (day) => `Mi milagro, Estefany. Eres la prueba de que los sueños se hacen realidad, de que el amor verdadero existe. Eres mi bendición. ✨`,
                (day) => `Mi bendición, Estefany. Eres el regalo más grande que la vida me ha dado, la razón por la que cada día es una celebración. 🙏`,
                (day) => `Estefany, eres mi amor eterno, el que durará para siempre, más allá del tiempo y del espacio. Eres mi alma gemela, mi destino. ♾️`,
                (day) => `Mi vida contigo es un sueño, Estefany. Una fantasía hecha realidad, un cuento de hadas que se escribe cada día con nuestro amor. 💖`,
                (day) => `Estefany, eres mi persona favorita, la que elijo una y otra vez, en cada vida, en cada universo. Eres mi todo. 🫶`,
                (day) => `Amo tu forma de ser, Estefany. Cada detalle, cada imperfección, cada cualidad. Eres perfecta tal como eres, mi amor. 🥰`,
                (day) => `Estefany, eres mi pequeño mundo, mi universo personal. Contigo, no necesito nada más, porque en ti encuentro todo lo que busco. 🌍`,
                (day) => `Me haces sentir vivo, Estefany. Tu amor me revitaliza, me energiza y me llena de pasión. Eres la chispa que enciende mi alma. 🔥`,
                (day) => `Estefany, te necesito. Cada día, cada hora, cada segundo. Eres mi aire, mi agua, mi alimento. Sin ti, mi vida no tendría sentido. 🥺`,
                (day) => `Estefany, eres mi amor. La palabra más hermosa, el sentimiento más puro, la emoción más intensa. Eres la razón de mi felicidad. ❤️`,
                (day) => `Estefany, eres la persona que siempre soñé, la que imaginé en mis fantasías más profundas. Eres mi realidad, mi sueño hecho realidad. 💭`,
                (day) => `Mi mejor casualidad, Estefany. El destino nos unió y estoy eternamente agradecido por ello. Eres el regalo más inesperado y hermoso. 💫`,
                (day) => `Estefany, eres mi luz. La que me guía en la oscuridad, la que me ilumina el camino y la que me muestra la verdad. 💡`,
                (day) => `Mi camino, Estefany. Contigo, cada paso es una aventura, cada sendero es una oportunidad y cada destino es un sueño. 🚶‍♀️`,
                (day) => `Estefany, eres mi sonrisa. La que me contagia, la que me ilumina y la que me hace feliz. Tu sonrisa es mi mayor alegría. 😊`,
                (day) => `Mi alegría, Estefany. Eres la fuente de mi felicidad, la razón por la que mi corazón canta de gozo. 😄`,
                (day) => `Estefany, eres mi paz. La que me tranquiliza, la que me serena y la que me da calma. Eres mi refugio de tranquilidad. 😌`,
                (day) => `Mi refugio, Estefany. Donde me siento seguro, protegido y amado. Eres mi santuario, mi hogar. 🏡`,
                (day) => `Estefany, eres mi dulce. La que endulza mis días, mis noches y mi vida. Eres mi postre favorito, mi capricho más delicioso. 🍬`,
                (day) => `Mi postre, Estefany. El que siempre quiero disfrutar, el que me llena de placer y el que me hace feliz. 🍮`,
                (day) => `Estefany, eres mi café. El que me despierta, el que me da energía y el que me prepara para el día. Eres mi dosis diaria de felicidad. ☕`,
                (day) => `Mi despertar, Estefany. Cada mañana me levanto pensando en ti, en tu sonrisa, en tu amor. Eres la razón por la que amo despertar. ☀️`,
                (day) => `Estefany, eres mi energía. La que me impulsa a seguir adelante, a superar los desafíos y a alcanzar mis sueños. Eres mi motor. ⚡`,
                (day) => `Mi motivación, Estefany. Para cada día, para cada meta, para cada sueño. Eres la razón por la que me esfuerzo y por la que doy lo mejor de mí. 💪`,
                (day) => `Estefany, eres mi calma, la que me tranquiliza y me da paz. Tu presencia me serena, me equilibra y me hace sentir completo. 😌`,
                (day) => `Mi paz, Estefany. Que me das tú, con tu amor, tu comprensión y tu apoyo incondicional. Eres mi refugio de tranquilidad en este mundo. ☮️`,
                (day) => `Estefany, eres mi paraíso personal, un lugar donde me siento feliz, amado y en paz. Eres mi Edén, mi cielo en la tierra. 😇`,
                (day) => `Mi pequeño Edén, Estefany. Un lugar donde florece nuestro amor, donde crecen nuestros sueños y donde somos felices juntos. 🌿`,
                (day) => `Estefany, eres mi calor, el que me abriga en los días fríos y me da consuelo en los momentos difíciles. Eres mi refugio de amor. 🔥`,
                (day) => `Mi abrigo, Estefany. En los días fríos, en las noches oscuras, en los momentos de incertidumbre. Eres mi protección, mi seguridad. 🧥`,
                (day) => `Estefany, eres mi oasis, un lugar de descanso y renovación en medio del desierto. Eres mi fuente de vida, mi refugio de paz. 🏜️`,
                (day) => `Mi fuente de vida, Estefany. De ti emana el amor, la alegría y la vitalidad que necesito para vivir. Eres mi sustento, mi razón de ser. 💧`,
                (day) => `Estefany, eres mi luna, la que ilumina mis noches y me guía en la oscuridad. Eres mi estrella, mi faro, mi luz en la noche. 🌕`,
                (day) => `Mi sol, Estefany. Que ilumina mis días, me da calor y me llena de energía. Eres la luz que me guía y me hace feliz. ☀️`,
                (day) => `Estefany, eres mi mejor momento, el que siempre quiero revivir. Cada instante a tu lado es un tesoro, un recuerdo inolvidable. 🕰️`,
                (day) => `Mi tiempo favorito, Estefany. Contigo, cada segundo es valioso, cada minuto es un regalo y cada hora es una eternidad de amor. ⏳`,
                (day) => `Estefany, eres mi sueño más dulce, el que me acompaña cada noche y me llena de esperanza cada mañana. Eres la inspiración de mis sueños. 😴`,
                (day) => `Mi realidad más bonita, Estefany. Eres la persona que hace que mi vida sea un cuento de hadas, una historia de amor perfecta. 🥰`,
                (day) => `Estefany, eres mi danza, la que me hace bailar de alegría y me llena de pasión. Eres mi compañera de baile, mi ritmo, mi melodía. 💃`,
                (day) => `Mi musa eterna, Estefany. La que inspira mis pensamientos, mis palabras y mis acciones. Eres la fuente de mi creatividad y de mi amor. 🎨`,
                (day) => `Estefany, eres mi galaxia, un universo de posibilidades y de sueños. Eres mi estrella más brillante, mi constelación favorita. 🌠`,
                (day) => `Mi camino, Estefany. Contigo, cada paso es seguro, cada dirección es clara y cada destino es prometedor. Eres mi guía, mi brújula. 🚶‍♂️`,
                (day) => `Estefany, eres mi expedición, la más emocionante y llena de descubrimientos. Contigo, cada día es una nueva aventura, un nuevo aprendizaje. 🧭`,
                (day) => `Mi guía, Estefany. Siempre a mi lado, en cada decisión, en cada encrucijada. Eres mi brújula, mi mapa, mi dirección. 🗺️`,
                (day) => `Estefany, eres mi ancla, la que me mantiene firme en la tormenta y me da estabilidad. Eres mi punto de apoyo, mi seguridad. ⚓`,
                (day) => `Mi firmeza, Estefany. En todo, en cada decisión, en cada compromiso. Eres mi roca, mi cimiento, mi fortaleza. 🧱`,
                (day) => `Estefany, eres mi risa, la que me contagia y me llena de alegría. Tu sentido del humor es único y tu sonrisa es mi mayor recompensa. 😂`,
                (day) => `Mi alma, Estefany. Eres parte de mí, de mi esencia, de mi ser. Nuestra conexión es profunda, espiritual y eterna. 👻`,
                (day) => `Estefany, eres mi razón de ser, la que le da sentido a mi vida y me impulsa a ser mejor. Eres mi propósito, mi motivación. 🌟`,
                (day) => `Mi aliento, Estefany. Te necesito para vivir, para respirar, para existir. Eres el aire que respiro, mi vitalidad. 😮‍💨`,
                (day) => `Estefany, eres mi golosina, la más dulce y deliciosa de todas. Siempre quiero un poquito más de ti, de tu dulzura y de tu amor. 🍬`,
                (day) => `Mi despertar, Estefany. Cada mañana me levanto pensando en ti, en tu sonrisa, en tu amor. Eres la razón por la que me siento feliz. ⏰`,
                (day) => `Estefany, eres mi fuego, el que enciende mi pasión y me llena de energía. Eres la chispa que me impulsa a vivir con intensidad. 🔥`,
                (day) => `Mi pasión, Estefany. Por ti, por nuestro amor, por nuestra vida juntos. Eres la llama que arde en mi corazón y me consume de amor. ❤️‍🔥`,
                (day) => `Estefany, eres mi paraíso, un lugar donde me siento feliz, amado y en paz. Eres mi Edén, mi cielo en la tierra. 🌺`,
                (day) => `Mi verdad, Estefany. Eres la única verdad en mi vida, la que me guía y me da certeza. Eres mi realidad, mi autenticidad. ✅`,
                (day) => `Mi certeza, Estefany. En ti confío plenamente, en tu amor, en tu lealtad. Eres mi seguridad, mi confianza. 💯`,
                (day) => `Mi milagro, Estefany. Eres la prueba de que los sueños se hacen realidad, de que el amor verdadero existe. Eres mi bendición. ✨`,
                (day) => `Mi bendición, Estefany. Eres el regalo más grande que la vida me ha dado, la razón por la que cada día es una celebración. 🙏`,
                (day) => `Estefany, eres mi amor eterno, el que durará para siempre, más allá del tiempo y del espacio. Eres mi alma gemela, mi destino. ♾️`,
                (day) => `Mi vida contigo es un sueño, Estefany. Una fantasía hecha realidad, un cuento de hadas que se escribe cada día con nuestro amor. 💖`,
                (day) => `Estefany, eres mi persona favorita, la que elijo una y otra vez, en cada vida, en cada universo. Eres mi todo. 🫶`,
                (day) => `Amo tu forma de ser, Estefany. Cada detalle, cada imperfección, cada cualidad. Eres perfecta tal como eres, mi amor. 🥰`,
                (day) => `Estefany, eres mi pequeño mundo, mi universo personal. Contigo, no necesito nada más, porque en ti encuentro todo lo que busco. 🌍`,
                (day) => `Me haces sentir vivo, Estefany. Tu amor me revitaliza, me energiza y me llena de pasión. Eres la chispa que enciende mi alma. 🔥`,
                (day) => `Estefany, te necesito. Cada día, cada hora, cada segundo. Eres mi aire, mi agua, mi alimento. Sin ti, mi vida no tendría sentido. 🥺`,
                (day) => `Estefany, eres mi amor. La palabra más hermosa, el sentimiento más puro, la emoción más intensa. Eres la razón de mi felicidad. ❤️`,
                (day) => `Estefany, eres la persona que siempre soñé, la que imaginé en mis fantasías más profundas. Eres mi realidad, mi sueño hecho realidad. 💭`,
                (day) => `Mi mejor casualidad, Estefany. El destino nos unió y estoy eternamente agradecido por ello. Eres el regalo más inesperado y hermoso. 💫`,
                (day) => `Estefany, eres mi luz. La que me guía en la oscuridad, la que me ilumina el camino y la que me muestra la verdad. 💡`,
                (day) => `Mi camino, Estefany. Contigo, cada paso es una aventura, cada sendero es una oportunidad y cada destino es un sueño. 🚶‍♀️`,
                (day) => `Estefany, eres mi sonrisa. La que me contagia, la que me ilumina y la que me hace feliz. Tu sonrisa es mi mayor alegría. 😊`,
                (day) => `Mi alegría, Estefany. Eres la fuente de mi felicidad, la razón por la que mi corazón canta de gozo. 😄`,
                (day) => `Estefany, eres mi paz. La que me tranquiliza, la que me serena y la que me da calma. Eres mi refugio de tranquilidad. 😌`,
                (day) => `Mi refugio, Estefany. Donde me siento seguro, protegido y amado. Eres mi santuario, mi hogar. 🏡`,
                (day) => `Estefany, eres mi dulce. La que endulza mis días, mis noches y mi vida. Eres mi postre favorito, mi capricho más delicioso. 🍬`,
                (day) => `Mi postre, Estefany. El que siempre quiero disfrutar, el que me llena de placer y el que me hace feliz. 🍮`,
                (day) => `Estefany, eres mi café. El que me despierta, el que me da energía y el que me prepara para el día. Eres mi dosis diaria de felicidad. ☕`,
                (day) => `Mi despertar, Estefany. Cada mañana me levanto pensando en ti, en tu sonrisa, en tu amor. Eres la razón por la que amo despertar. ☀️`,
                (day) => `Estefany, eres mi energía. La que me impulsa a seguir adelante, a superar los desafíos y a alcanzar mis sueños. Eres mi motor. ⚡`,
                (day) => `Mi motivación, Estefany. Para cada día, para cada meta, para cada sueño. Eres la razón por la que me esfuerzo y por la que doy lo mejor de mí. 💪`,
                (day) => `Estefany, eres mi calma, la que me tranquiliza y me da paz. Tu presencia me serena, me equilibra y me hace sentir completo. 😌`,
                (day) => `Mi paz, Estefany. Que me das tú, con tu amor, tu comprensión y tu apoyo incondicional. Eres mi refugio de tranquilidad en este mundo. ☮️`,
                (day) => `Estefany, eres mi paraíso personal, un lugar donde me siento feliz, amado y en paz. Eres mi Edén, mi cielo en la tierra. 😇`,
                (day) => `Mi pequeño Edén, Estefany. Un lugar donde florece nuestro amor, donde crecen nuestros sueños y donde somos felices juntos. 🌿`,
                (day) => `Estefany, eres mi calor, el que me abriga en los días fríos y me da consuelo en los momentos difíciles. Eres mi refugio de amor. 🔥`,
                (day) => `Mi abrigo, Estefany. En los días fríos, en las noches oscuras, en los momentos de incertidumbre. Eres mi protección, mi seguridad. 🧥`,
                (day) => `Estefany, eres mi oasis, un lugar de descanso y renovación en medio del desierto. Eres mi fuente de vida, mi refugio de paz. 🏜️`,
                (day) => `Mi fuente de vida, Estefany. De ti emana el amor, la alegría y la vitalidad que necesito para vivir. Eres mi sustento, mi razón de ser. 💧`,
                (day) => `Estefany, eres mi luna, la que ilumina mis noches y me guía en la oscuridad. Eres mi estrella, mi faro, mi luz en la noche. 🌕`,
                (day) => `Mi sol, Estefany. Que ilumina mis días, me da calor y me llena de energía. Eres la luz que me guía y me hace feliz. ☀️`,
                (day) => `Estefany, eres mi mejor momento, el que siempre quiero revivir. Cada instante a tu lado es un tesoro, un recuerdo inolvidable. 🕰️`,
                (day) => `Mi tiempo favorito, Estefany. Contigo, cada segundo es valioso, cada minuto es un regalo y cada hora es una eternidad de amor. ⏳`,
                (day) => `Estefany, eres mi sueño más dulce, el que me acompaña cada noche y me llena de esperanza cada mañana. Eres la inspiración de mis sueños. 😴`,
                (day) => `Mi realidad más bonita, Estefany. Eres la persona que hace que mi vida sea un cuento de hadas, una historia de amor perfecta. 🥰`,
                (day) => `Estefany, eres mi danza, la que me hace bailar de alegría y me llena de pasión. Eres mi compañera de baile, mi ritmo, mi melodía. 💃`,
                (day) => `Mi musa eterna, Estefany. La que inspira mis pensamientos, mis palabras y mis acciones. Eres la fuente de mi creatividad y de mi amor. 🎨`,
                (day) => `Estefany, eres mi galaxia, un universo de posibilidades y de sueños. Eres mi estrella más brillante, mi constelación favorita. 🌠`,
                (day) => `Mi camino, Estefany. Contigo, cada paso es seguro, cada dirección es clara y cada destino es prometedor. Eres mi guía, mi brújula. 🚶‍♂️`,
                (day) => `Estefany, eres mi expedición, la más emocionante y llena de descubrimientos. Contigo, cada día es una nueva aventura, un nuevo aprendizaje. 🧭`,
                (day) => `Mi guía, Estefany. Siempre a mi lado, en cada decisión, en cada encrucijada. Eres mi brújula, mi mapa, mi dirección. 🗺️`,
                (day) => `Estefany, eres mi ancla, la que me mantiene firme en la tormenta y me da estabilidad. Eres mi punto de apoyo, mi seguridad. ⚓`,
                (day) => `Mi firmeza, Estefany. En todo, en cada decisión, en cada compromiso. Eres mi roca, mi cimiento, mi fortaleza. 🧱`,
                (day) => `Estefany, eres mi risa, la que me contagia y me llena de alegría. Tu sentido del humor es único y tu sonrisa es mi mayor recompensa. 😂`,
                (day) => `Mi alma, Estefany. Eres parte de mí, de mi esencia, de mi ser. Nuestra conexión es profunda, espiritual y eterna. 👻`,
                (day) => `Estefany, eres mi razón de ser, la que le da sentido a mi vida y me impulsa a ser mejor. Eres mi propósito, mi motivación. 🌟`,
                (day) => `Mi aliento, Estefany. Te necesito para vivir, para respirar, para existir. Eres el aire que respiro, mi vitalidad. 😮‍💨`,
                (day) => `Estefany, eres mi golosina, la más dulce y deliciosa de todas. Siempre quiero un poquito más de ti, de tu dulzura y de tu amor. 🍬`,
                (day) => `Mi despertar, Estefany. Cada mañana me levanto pensando en ti, en tu sonrisa, en tu amor. Eres la razón por la que me siento feliz. ⏰`,
                (day) => `Estefany, eres mi fuego, el que enciende mi pasión y me llena de energía. Eres la chispa que me impulsa a vivir con intensidad. 🔥`,
                (day) => `Mi pasión, Estefany. Por ti, por nuestro amor, por nuestra vida juntos. Eres la llama que arde en mi corazón y me consume de amor. ❤️‍🔥`,
                (day) => `Estefany, eres mi paraíso, un lugar donde me siento feliz, amado y en paz. Eres mi Edén, mi cielo en la tierra. 🌺`,
                (day) => `Mi verdad, Estefany. Eres la única verdad en mi vida, la que me guía y me da certeza. Eres mi realidad, mi autenticidad. ✅`,
                (day) => `Mi certeza, Estefany. En ti confío plenamente, en tu amor, en tu lealtad. Eres mi seguridad, mi confianza. 💯`,
                (day) => `Mi milagro, Estefany. Eres la prueba de que los sueños se hacen realidad, de que el amor verdadero existe. Eres mi bendición. ✨`,
                (day) => `Mi bendición, Estefany. Eres el regalo más grande que la vida me ha dado, la razón por la que cada día es una celebración. 🙏`,
                (day) => `Estefany, eres mi amor eterno, el que durará para siempre, más allá del tiempo y del espacio. Eres mi alma gemela, mi destino. ♾️`,
                (day) => `Mi vida contigo es un sueño, Estefany. Una fantasía hecha realidad, un cuento de hadas que se escribe cada día con nuestro amor. 💖`,
                (day) => `Estefany, eres mi persona favorita, la que elijo una y otra vez, en cada vida, en cada universo. Eres mi todo. 🫶`,
                (day) => `Amo tu forma de ser, Estefany. Cada detalle, cada imperfección, cada cualidad. Eres perfecta tal como eres, mi amor. 🥰`,
                (day) => `Estefany, eres mi pequeño mundo, mi universo personal. Contigo, no necesito nada más, porque en ti encuentro todo lo que busco. 🌍`,
                (day) => `Me haces sentir vivo, Estefany. Tu amor me revitaliza, me energiza y me llena de pasión. Eres la chispa que enciende mi alma. 🔥`,
                (day) => `Estefany, te necesito. Cada día, cada hora, cada segundo. Eres mi aire, mi agua, mi alimento. Sin ti, mi vida no tendría sentido. 🥺`,
                (day) => `Estefany, eres mi amor. La palabra más hermosa, el sentimiento más puro, la emoción más intensa. Eres la razón de mi felicidad. ❤️`,
                (day) => `Estefany, eres la persona que siempre soñé, la que imaginé en mis fantasías más profundas. Eres mi realidad, mi sueño hecho realidad. 💭`,
                (day) => `Mi mejor casualidad, Estefany. El destino nos unió y estoy eternamente agradecido por ello. Eres el regalo más inesperado y hermoso. 💫`,
                (day) => `Estefany, eres mi luz. La que me guía en la oscuridad, la que me ilumina el camino y la que me muestra la verdad. 💡`,
                (day) => `Mi camino, Estefany. Contigo, cada paso es una aventura, cada sendero es una oportunidad y cada destino es un sueño. 🚶‍♀️`,
                (day) => `Estefany, eres mi sonrisa. La que me contagia, la que me ilumina y la que me hace feliz. Tu sonrisa es mi mayor alegría. 😊`,
                (day) => `Mi alegría, Estefany. Eres la fuente de mi felicidad, la razón por la que mi corazón canta de gozo. 😄`,
                (day) => `Estefany, eres mi paz. La que me tranquiliza, la que me serena y la que me da calma. Eres mi refugio de tranquilidad. 😌`,
                (day) => `Mi refugio, Estefany. Donde me siento seguro, protegido y amado. Eres mi santuario, mi hogar. 🏡`,
                (day) => `Estefany, eres mi dulce. La que endulza mis días, mis noches y mi vida. Eres mi postre favorito, mi capricho más delicioso. 🍬`,
                (day) => `Mi postre, Estefany. El que siempre quiero disfrutar, el que me llena de placer y el que me hace feliz. 🍮`,
                (day) => `Estefany, eres mi café. El que me despierta, el que me da energía y el que me prepara para el día. Eres mi dosis diaria de felicidad. ☕`,
                (day) => `Mi despertar, Estefany. Cada mañana me levanto pensando en ti, en tu sonrisa, en tu amor. Eres la razón por la que amo despertar. ☀️`,
                (day) => `Estefany, eres mi energía. La que me impulsa a seguir adelante, a superar los desafíos y a alcanzar mis sueños. Eres mi motor. ⚡`,
                (day) => `Mi motivación, Estefany. Para cada día, para cada meta, para cada sueño. Eres la razón por la que me esfuerzo y por la que doy lo mejor de mí. 💪`,
                (day) => `Estefany, eres mi musa. La que inspira mis pensamientos, mis palabras y mis acciones. Eres la fuente de mi creatividad y de mi amor. 🎨`,
                (day) => `Mi inspiración, Estefany. Para cada día, para cada proyecto, para cada sueño. Eres la razón por la que me siento creativo y apasionado. 🌟`,
                (day) => `Estefany, eres mi estrella. La que brilla con más intensidad en mi cielo y la que me guía en la oscuridad. Eres mi faro, mi luz. ⭐`,
                (day) => `Mi brillo, Estefany. El que me ilumina, el que me hace resplandecer y el que me llena de luz. Eres mi sol, mi luna, mis estrellas. ✨`,
                (day) => `Estefany, eres mi melodía. La que me acompaña, la que me arrulla y la que me hace bailar. Eres la banda sonora de mi vida. 🎶`,
                (day) => `Mi canción, Estefany. La que siempre quiero escuchar, la que me llena de alegría y la que me hace feliz. 🎵`,
                (day) => `Estefany, eres mi poesía. Cada palabra que te dedico es un verso, cada pensamiento es una estrofa y cada momento es un poema. 📝`,
                (day) => `Mi rima, Estefany. La que complementa mis versos, la que da sentido a mis palabras y la que me hace sentir completo. 🎤`,
                (day) => `Estefany, eres mi oasis. Un lugar de descanso, de renovación y de paz en medio del desierto. Eres mi refugio, mi santuario. 🌴`,
                (day) => `Mi paraíso, Estefany. Un lugar donde me siento feliz, amado y en paz. Eres mi Edén, mi cielo en la tierra. 🌺`,
                (day) => `Estefany, eres mi verdad. La que me guía, la que me da certeza y la que me hace sentir seguro. Eres mi realidad, mi autenticidad. ✅`,
                (day) => `Mi certeza, Estefany. En ti confío plenamente, en tu amor, en tu lealtad. Eres mi seguridad, mi confianza. 💯`,
                (day) => `Estefany, eres mi milagro. Eres la prueba de que los sueños se hacen realidad, de que el amor verdadero existe. Eres mi bendición. ✨`,
                (day) => `Mi bendición, Estefany. Eres el regalo más grande que la vida me ha dado, la razón por la que cada día es una celebración. 🙏`,
                (day) => `Estefany, eres mi amor eterno. El que durará para siempre, más allá del tiempo y del espacio. Eres mi alma gemela, mi destino. ♾️`,
                (day) => `Mi vida contigo es perfecta, Estefany. Una fantasía hecha realidad, un cuento de hadas que se escribe cada día con nuestro amor. 💖`,
                (day) => `Estefany, eres mi persona más especial, la que elijo una y otra vez, en cada vida, en cada universo. Eres mi todo. 🫶`,
                (day) => `Amo cada parte de ti, Estefany. Cada detalle, cada imperfección, cada cualidad. Eres perfecta tal como eres, mi amor. 🥰`,
                (day) => `Estefany, eres mi universo infinito. Contigo, no necesito nada más, porque en ti encuentro todo lo que busco. 🌌`,
                (day) => `Me cautivas, Estefany. Tu amor me apasiona, me consume y me llena de fuego. Eres la chispa que enciende mi alma. 🔥`,
                (day) => `Estefany, eres mi adicción más linda, la que me hace feliz y me llena de placer. Eres mi capricho más dulce. addict`,
                (day) => `Te necesito en mi vida, Estefany. Cada día, cada hora, cada segundo. Eres mi aire, mi agua, mi alimento. Sin ti, mi vida no tendría sentido. 🥺`,
                (day) => `Estefany, eres mi amor. La palabra más hermosa, el sentimiento más puro, la emoción más intensa. Eres la razón de mi felicidad. ❤️`,
                (day) => `Mi todo, Estefany. Eres mi universo, mi razón de ser, mi todo. No hay nada más importante que tú en mi vida. 💯`,
                (day) => `Estefany, eres la razón de mis sonrisas. La que me contagia, la que me ilumina y la que me hace feliz. Tu sonrisa es mi mayor alegría. 😊`,
                (day) => `Mi alegría, Estefany. Eres la fuente de mi felicidad, la razón por la que mi corazón canta de gozo. 😄`,
                (day) => `Estefany, eres mi calma. La que me tranquiliza, la que me serena y la que me da paz. Eres mi refugio de tranquilidad. 😌`,
                (day) => `Mi paz, Estefany. Que me das tú, con tu amor, tu comprensión y tu apoyo incondicional. Eres mi refugio de tranquilidad en este mundo. 🕊️`,
                (day) => `Estefany, eres mi luz. La que me guía en la oscuridad, la que me ilumina el camino y la que me muestra la verdad. 💡`,
                (day) => `Mi guía, Estefany. Siempre a mi lado, en cada decisión, en cada encrucijada. Eres mi brújula, mi mapa, mi dirección. 🗺️`,
                (day) => `Estefany, eres mi refugio. Donde me siento seguro, protegido y amado. Eres mi santuario, mi hogar. 🏡`,
                (day) => `Mi hogar, Estefany. Donde me siento en paz, donde soy feliz y donde quiero estar para siempre. Eres mi nido de amor. 🏠`,
                (day) => `Estefany, eres mi aire. Te necesito para respirar, para vivir, para ser. Eres esencial para mi existencia, mi aliento de vida. 🌬️`,
                (day) => `Mi respirar, Estefany. Cada aliento que doy es por ti, por nuestro amor, por nuestra vida juntos. Eres mi vitalidad. 😮‍💨`,
                (day) => `Estefany, eres mi dulce. La que endulza mis días, mis noches y mi vida. Eres mi postre favorito, mi capricho más delicioso. 🍰`,
                (day) => `Mi café, Estefany. El que me despierta, el que me da energía y el que me prepara para el día. Eres mi dosis diaria de felicidad. ☕`,
                (day) => `Estefany, eres mi energía. La que me impulsa a seguir adelante, a superar los desafíos y a alcanzar mis sueños. Eres mi motor. ⚡`,
                (day) => `Mi motivación, Estefany. Para cada día, para cada meta, para cada sueño. Eres la razón por la que me esfuerzo y por la que doy lo mejor de mí. 💪`,
                (day) => `Estefany, eres mi musa. La que inspira mis pensamientos, mis palabras y mis acciones. Eres la fuente de mi creatividad y de mi amor. 🎨`,
                (day) => `Mi inspiración diaria, Estefany. Para cada día, para cada proyecto, para cada sueño. Eres la razón por la que me siento creativo y apasionado. 🌟`,
                (day) => `Mi brillo propio, Estefany. El que me ilumina, el que me hace resplandecer y el que me llena de luz. Eres mi sol, mi luna, mis estrellas. ✨`,
                (day) => `Estefany, eres mi melodía. La que me acompaña, la que me arrulla y la que me hace bailar. Eres la banda sonora de mi vida. 🎶`,
                (day) => `Mi canción de amor, Estefany. La que siempre quiero escuchar, la que me llena de alegría y la que me hace feliz. 🎵`,
                (day) => `Estefany, eres mi poesía. Cada palabra que te dedico es un verso, cada pensamiento es una estrofa y cada momento es un poema. 📝`,
                (day) => `Mi rima eterna, Estefany. La que complementa mis versos, la que da sentido a mis palabras y la que me hace sentir completo. 🎤`,
                (day) => `Estefany, eres mi oasis. Un lugar de descanso, de renovación y de paz en medio del desierto. Eres mi refugio, mi santuario. 🌴`,
                (day) => `Mi paraíso único, Estefany. Un lugar donde me siento feliz, amado y en paz. Eres mi Edén, mi cielo en la tierra. 🌺`,
                (day) => `Estefany, eres mi verdad. La que me guía, la que me da certeza y la que me hace sentir seguro. Eres mi realidad, mi autenticidad. ✅`,
                (day) => `Mi certeza inquebrantable, Estefany. En ti confío plenamente, en tu amor, en tu lealtad. Eres mi seguridad, mi confianza. 💯`,
                (day) => `Estefany, eres mi milagro. Eres la prueba de que los sueños se hacen realidad, de que el amor verdadero existe. Eres mi bendición. ✨`,
                (day) => `Mi bendición divina, Estefany. Eres el regalo más grande que la vida me ha dado, la razón por la que cada día es una celebración. 🙏`,
                (day) => `Estefany, eres mi amor eterno. El que durará para siempre, más allá del tiempo y del espacio. Eres mi alma gemela, mi destino. ♾️`,
                (day) => `Mi vida a tu lado es pura dicha, Estefany. Una fantasía hecha realidad, un cuento de hadas que se escribe cada día con nuestro amor. 💖`,
                (day) => `Estefany, eres mi persona favorita para siempre, la que elijo una y otra vez, en cada vida, en cada universo. Eres mi todo. 🫶`,
                (day) => `Amo cada fibra de tu ser, Estefany. Cada gesto, cada mirada, cada palabra. Eres perfecta tal como eres, mi amor. 🥰`,
                (day) => `Estefany, eres mi universo completo y perfecto. Contigo, no necesito nada más, porque en ti encuentro todo lo que busco. 🌌`,
                (day) => `Me fascinas, Estefany. Tu amor me cautiva, me hipnotiza y me hace sentir vivo. Eres mi adicción más dulce. 😍`,
                (day) => `Estefany, eres mi adicción irresistible. La que me hace feliz y me llena de placer. Eres mi capricho más dulce. addict`,
                (day) => `Te quiero siempre cerca, Estefany. Cada día, cada hora, cada segundo. Eres mi aire, mi agua, mi alimento. Sin ti, mi vida no tendría sentido. 🥺`,
            ];

            const photoColors = [
                'FFC0CB', 'ADD8E6', '90EE90', 'FFD700', 'FFB6C1', 'DDA0DD', 'B0E0E6', 'FF69B4',
                '87CEEB', 'F08080', 'FF7F50', '6A5ACD', 'F0F8FF', 'E6E6FA', 'FFF0F5', 'B0C4DE',
                'D8BFD8', 'FAFAD2', 'F5DEB3', 'FFE4E1', 'E0FFFF', 'C6E2FF', '98FB98', 'E0BBE4',
                '957DAD', 'F0FFF0', 'FAEBD7', 'F8F8FF'
            ];

            const photoPaths = [
                ...Array(228).keys()
            ].map(i => `img/imagen_${i + 1}.jpeg`);

            let current = new Date(startDate);
            let messageIndex = 0;
            let colorIndex = 0;
            let photoIndex = 0;

            while (current <= endDate) {
                const formattedDate = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2, '0')}`;
                const messageFn = messages[messageIndex % messages.length];
                const photoColor = photoColors[colorIndex % photoColors.length];
                const photoPath = photoPaths[photoIndex % photoPaths.length];

                data[formattedDate] = {
                    message: messageFn(current.getDate()),
                    photo: photoPath,
                    photoAlt: `Foto para el día ${current.getDate()}`
                };

                current.setDate(current.getDate() + 1);
                messageIndex++;
                colorIndex++;
                photoIndex++;
            }
            return data;
        };

        const specialDatesData = generateDailyContent();

        // Títulos románticos personalizados para la sección de contenido revelado
        const romanticTitles = [
            '¡Para mi Estefany Amada! ❤️',
            'Un Mensaje Solo para Ti, Estefany 💖',
            'Mi Amor por Estefany, en esta Fecha ✨',
            'Estefany, ¡Eres mi Alegría! 😄',
            'Con Amor, para Estefany 💌',
            'Un Pensamiento Especial para Estefany 🥰',
            'Para la Reina de mi Corazón, Estefany 👑',
            'Mi Estefany, mi Sol ☀️',
            'Un Abrazo Grande para Estefany 🤗',
            'Estefany, mi Sueño Hecho Realidad 💫',
            'Solo para Ti, Estefany, con Todo mi Amor 💖',
            'Estefany, la Razón de mi Sonrisa 😊',
            'Un Pequeño Detalle para mi Estefany ✨',
            'Mi Corazón te Habla, Estefany 💘',
            'Estefany, mi Felicidad Eres Tú 🎉',
            'Con Todo mi Cariño, Estefany 🥰',
            'Para la Mujer Más Hermosa, Estefany 😍',
            'Estefany, mi Amor Eterno ♾️',
            'Un Beso para Estefany 💋',
            'Estefany, mi Persona Favorita 🫶'
        ];

        // Colores pastel para los días del calendario
        const pastelColors = [
            'bg-blue-100', 'bg-pink-100', 'bg-green-100', 'bg-purple-100', 'bg-yellow-100', 'bg-red-100',
            'bg-indigo-100', 'bg-teal-100', 'bg-orange-100', 'bg-lime-100', 'bg-fuchsia-100', 'bg-rose-100',
            'bg-cyan-100', 'bg-emerald-100', 'bg-violet-100', 'bg-amber-100', 'bg-sky-100', 'bg-stone-100',
            'bg-slate-100', 'bg-zinc-100', 'bg-neutral-100', 'bg-gray-100', 'bg-true-gray-100', 'bg-warm-gray-100',
            'bg-cool-gray-100', 'bg-blue-200', 'bg-pink-200', 'bg-green-200', 'bg-purple-200', 'bg-yellow-200',
            'bg-red-200'
        ];

        let currentDate = new Date();
        let selectedDate = new Date();

        const monthNames = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];

        // Elementos del DOM
        const currentMonthYearEl = document.getElementById('currentMonthYear');
        const calendarDaysEl = document.getElementById('calendarDays');
        const prevMonthBtn = document.getElementById('prevMonth');
        const nextMonthBtn = document.getElementById('nextMonth');
        const initialContentEl = document.getElementById('initialContent');
        const dynamicContentEl = document.getElementById('dynamicContent');
        const romanticTitleEl = document.getElementById('romanticTitle');
        const messageContentEl = document.getElementById('messageContent');
        const photoContainerEl = document.getElementById('photoContainer');
        const messagePhotoEl = document.getElementById('messagePhoto');

        // Función para obtener el número de días en un mes dado un año y mes
        const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

        // Función para obtener el día de la semana del primer día del mes
        const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

        // Función para formatear una fecha a 'YYYY-MM-DD'
        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        };

        // Determina si un día es el día actual
        const isToday = (day) => {
            const today = new Date();
            return (
                day === today.getDate() &&
                selectedDate.getMonth() === today.getMonth() &&
                selectedDate.getFullYear() === today.getFullYear()
            );
        };

        // Determina si un día tiene contenido especial
        const hasSpecialContent = (day) => {
            if (!day) return false;
            const dateToCheck = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
            const formattedDate = formatDate(dateToCheck);
            return !!specialDatesData[formattedDate];
        };

        // Renderiza el calendario
        const renderCalendar = () => {
            currentMonthYearEl.textContent = `${monthNames[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;
            calendarDaysEl.innerHTML = ''; // Limpiar días anteriores

            const year = selectedDate.getFullYear();
            const month = selectedDate.getMonth();
            const numDays = getDaysInMonth(year, month);
            const firstDay = getFirstDayOfMonth(year, month);

            // Días vacíos al principio del mes
            for (let i = 0; i < firstDay; i++) {
                const dayDiv = document.createElement('div');
                dayDiv.className = 'p-2 sm:p-3 rounded-xl bg-transparent';
                calendarDaysEl.appendChild(dayDiv);
            }

            // Días del mes
            for (let day = 1; day <= numDays; day++) {
                const dayDiv = document.createElement('div');
                dayDiv.textContent = day;
                dayDiv.className = `
                    p-2 sm:p-3 rounded-xl cursor-pointer transition transform hover:scale-105 text-sm sm:text-base
                    ${pastelColors[(day - 1) % pastelColors.length]} shadow-sm
                `;

                if (isToday(day)) {
                    dayDiv.classList.add('border-2', 'border-pink-500', 'bg-pink-100', 'font-bold', 'text-pink-700', 'shadow-md');
                } else if (hasSpecialContent(day)) {
                    dayDiv.classList.add('border-2', 'border-purple-400', 'text-purple-800', 'font-medium');
                } else if (selectedDate.getDate() === day) {
                    dayDiv.classList.add('border-2', 'border-blue-400', 'text-blue-800', 'font-semibold', 'shadow-md');
                }

                if (new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day) > currentDate) {
                    dayDiv.classList.add('opacity-50', 'cursor-not-allowed');
                }

                dayDiv.addEventListener('click', () => handleDayClick(day));
                calendarDaysEl.appendChild(dayDiv);
            }
        };

        // Manejador de clic en un día del calendario
        const handleDayClick = (day) => {
            if (!day) return;

            const newSelectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
            selectedDate = newSelectedDate; // Actualizar la fecha seleccionada

            const clickedDateFormatted = formatDate(newSelectedDate);

            // Limpiar estilos de la fecha previamente seleccionada
            const prevSelected = calendarDaysEl.querySelector('.border-2.border-blue-400');
            if (prevSelected) {
                prevSelected.classList.remove('border-2', 'border-blue-400', 'text-blue-800', 'font-semibold', 'shadow-md');
            }
            // Aplicar estilo a la fecha actualmente seleccionada (si no es hoy o tiene contenido especial)
            if (!isToday(day) && !hasSpecialContent(day)) {
                const currentSelected = calendarDaysEl.children[getFirstDayOfMonth(selectedDate.getFullYear(), selectedDate.getMonth()) + day - 1];
                if (currentSelected) {
                    currentSelected.classList.add('border-2', 'border-blue-400', 'text-blue-800', 'font-semibold', 'shadow-md');
                }
            }


            if (newSelectedDate <= currentDate) {
                if (specialDatesData[clickedDateFormatted]) {
                    romanticTitleEl.textContent = romanticTitles[Math.floor(Math.random() * romanticTitles.length)];
                    messageContentEl.textContent = specialDatesData[clickedDateFormatted].message;
                    if (specialDatesData[clickedDateFormatted].photo) {
                        messagePhotoEl.src = specialDatesData[clickedDateFormatted].photo;
                        messagePhotoEl.alt = specialDatesData[clickedDateFormatted].photoAlt;
                        photoContainerEl.classList.remove('hidden');
                    } else {
                        photoContainerEl.classList.add('hidden');
                    }
                    initialContentEl.classList.add('hidden');
                    dynamicContentEl.classList.remove('hidden');
                } else {
                    // No hay contenido para esta fecha pasada
                    initialContentEl.classList.remove('hidden');
                    dynamicContentEl.classList.add('hidden');
                }
            } else {
                // Mensaje gracioso para fechas futuras
                romanticTitleEl.textContent = '¡No hagas trampa, mi amor! 🤫';
                messageContentEl.textContent = '¡Ups! Parece que intentas hacer trampa, mi amor. 😉 Tendrás que esperar a que llegue el día para descubrir la sorpresa. ¡No hagas trampa, Estefany!💖';
                photoContainerEl.classList.add('hidden');
                initialContentEl.classList.add('hidden');
                dynamicContentEl.classList.remove('hidden');
            }
        };

        // Navegación entre meses
        prevMonthBtn.addEventListener('click', () => {
            selectedDate.setMonth(selectedDate.getMonth() - 1);
            renderCalendar();
            initialContentEl.classList.remove('hidden');
            dynamicContentEl.classList.add('hidden');
        });

        nextMonthBtn.addEventListener('click', () => {
            selectedDate.setMonth(selectedDate.getMonth() + 1);
            renderCalendar();
            initialContentEl.classList.remove('hidden');
            dynamicContentEl.classList.add('hidden');
        });

        // Inicializar al cargar la página
        document.addEventListener('DOMContentLoaded', () => {
            renderCalendar();
            // Verificar si hay contenido especial para la fecha actual al cargar
            const todayFormatted = formatDate(currentDate);
            if (specialDatesData[todayFormatted]) {
                romanticTitleEl.textContent = romanticTitles[Math.floor(Math.random() * romanticTitles.length)];
                messageContentEl.textContent = specialDatesData[todayFormatted].message;
                if (specialDatesData[todayFormatted].photo) {
                    messagePhotoEl.src = specialDatesData[todayFormatted].photo;
                    messagePhotoEl.alt = specialDatesData[todayFormatted].photoAlt;
                    photoContainerEl.classList.remove('hidden');
                } else {
                    photoContainerEl.classList.add('hidden');
                }
                initialContentEl.classList.add('hidden');
                dynamicContentEl.classList.remove('hidden');
            }
        });

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>SoilVista</title>
        <style>
          body {
            background: #000;
            color: #fff;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 30px;
            line-height: 1.5;
          }
          h1 {
            font-size: 2.5rem;
            color: #00ffcc;
            margin-bottom: 10px;
          }
          p {
            font-size: 1.2rem;
            color: #ccc;
            max-width: 800px;
            margin: 0 auto 20px;
            white-space: pre-line;
            text-align: left;
          }
          iframe {
            margin: 20px auto;
            display: block;
            width: 560px;
            height: 315px;
            border: none;
          }
          .lyrics {
            text-align: left;
            background: rgba(255,255,255,0.05);
            padding: 20px;
            border-radius: 10px;
            margin-top: 30px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
          .lyrics h2 {
            color: #ff66cc;
          }
        </style>
      </head>
      <body>
        <h1>😎 Bienvenido a SoilVista</h1>
        <p>
NO MONEY NO BITCHES, Ley de vida.  
Ahora soy informático, salami salami, por aquí dejo un temazo que flipas:
        </p>

        <!-- Video de YouTube DESPUÉS del mensaje -->
        <iframe src="https://www.youtube.com/embed/S_AAIFaga9w" allowfullscreen></iframe>

        <p>
También tienes la letra para que te metas un buen cante, hell yeah:
        </p>

        <!-- Letra de la canción -->
        <div class="lyrics">
          <h2>Inocente - Myke Towers</h2>
          <p>
¿Esa cara, baby, ah?  
Jeje, ven acá (bum)

La culpa e' huérfana  
Y ella lidiando con heridas que no puede sanar  
Y ahora jurando que ningún hombre le vuelve a fallar (jamás)  
Ella e' de las que hace las cosas y las sabe callar (shh)

Tiene una carita inocente  
Pero es culpable de hacer que yo me le acerque  
Hay cosas que yo quiero hacerte (ven acá)  
Baby, mucho gusto en conocerte (Easy Money)  
Tiene una carita inocente  
Pero es culpable de hacer que yo me le acerque (ah, ah)  
Tú me ganaste al moverte, me tienes aquí loco por verte

Dice que ella e' inocente hasta que se demuestre lo contrario (hmm)  
Baby, ya yo sé, ya me contaron  
Esas cicatrices, no fui yo quien la' marcaron  
Dice que a sus sentimiento' los mataron  
La vi en vivo dis clock, con el corillo de amigas que ella se infiltró  
Ella sola se invitó, ya mi amigo me indicó  
Que el novio tenía corta, pero ya se la quitó  
No me eche la culpa, uste' también quiso  
Se dejaron de hablar después que hacíamos threesome'  
Fuimo' amigos con beneficio'  
Ella le decía al novio que iba a hacer ejercicio

Tiene una carita inocente  
Pero es culpable de hacer que yo me le acerque  
Hay cosas que yo quiero hacerte  
Baby, mucho gusto en conocerte  
Tiene una carita inocente  
Pero es culpable de hacer que yo me le acerque  
Tú me ganaste al moverte, me tienes aquí loco por verte

Ella tiene cara de yo no fui  
Pero cuando la conocí me quiso seducir  
Si-si llego a saber que era' así (ah)  
Cuando me ve', se quiere lucir  
Se va a tocar, no quiere conducir

Woh-oh  
Cuando yo te toco (jaja), y eso te lo froto  
Te entregas a mí, yo ni le doy like a la' fotos  
Ella me vio en sotto y me dijo: I wanna fuck you  
Ella se envolvió y ahora tiene el corazón roto  
Y cuando yo la toco y eso se lo froto  
Se entrega a mí, yo ni le doy like a la' fotos  
Ella me vio en sotto y me dijo: I wanna fuck you (ah)  
Se envolvió porque

Tiene una carita inocente  
Pero es culpable de hacer que yo me le acerque  
Hay cosas que yo quiero hacerte (Easy Money)  
Baby, mucho gusto en conocerte  
Tiene una carita inocente  
Pero es culpable de hacer que yo me le acerque (ey)  
Tú me ganaste al moverte, me tienes aquí loco por verte

Easy Money, baby  
Ah  
E' tú culpa que nosotro' estemo' aquí montando estos clásicos, mi amor  
¿Te va' a hacer?  
Young King  
Myke Towers, baby, ah  
Esto e' de parte de Montana the producer, jaja  
¿Cómo?, ¿cómo?  
White House  
One World, baby  
Usted estar engañando a la gente, ma', ya deja eso  
Inocente, tiene una carita inocente  
Pero es culpable de hacer que yo me le acerque, jaja; cómo
          </p>
        </div>
      </body>
    </html>
  `);
});

app.get("/api/saludo", (req, res) => {
  res.json({
    mensaje:
      "JOSE DAVID, ahora soy informatico profesional, SALAMI SALAMI!!!!!!!! Hola, este es un endpoint API de prueba",
  });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en puerto ${PORT}`);
});

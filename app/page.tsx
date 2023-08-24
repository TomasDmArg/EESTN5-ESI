import Image from 'next/image'
import { Logo } from './_components/Logo/Logo'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import { WhatsappShareButton } from 'react-share'
import { Share } from './_components/Share/Share'

export default function Home() {
  return (
    <>
      <nav className="flex flex-col items-start w-3/4 p-10">
        <Logo />
      </nav>
      <main className="flex min-h-screen flex-col items-center md:items-start w-full md:w-3/4 px-10 gap-5 pb-24">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img src="/hero.png" alt='Imagen de una pareja en redes sociales' className='hero'/>
        <h1 className="text-2xl md:text-5xl font-bold text-left">
          Descubre lo que debes saber sobre el sexting y que nadie te dice
        </h1>
        <h5 className='text-md text-left w-full'>Por: Tomas Di Mauro, 6to 4a</h5>
        <p className='text-left w-full md:w-3/4'>
          En la era digital en la que estamos inmersos, las formas de comunicación se han transformado. 
          <br /><br />
          Entre todas las posibilidades que nos brinda la tecnología, el <b>sexting</b> ha surgido como una manera de compartir momentos íntimos con nuestras parejas a través de fotos y mensajes. 
          <br /><br />
          Puede sonar emocionante y arriesgado en el momento, ¿no? 
          <br /><br />
          Pero espera un segundo, porque acá te contamos algo que quizás no te dijeron: aunque parezca genial al principio, compartir una foto íntima puede tener consecuencias mucho más allá de lo que imaginás.
        </p>
        <h2 className='text-left w-full md:w-3/4 text-xl md:text-3xl font-bold'>
          El Encanto Efímero del Sexting
        </h2>
        <p className='text-left w-full md:w-3/4'>
        Vamos a ser sinceros: en un mundo donde todo se comparte en línea, el sexting puede parecer como la próxima etapa natural. 
        <br /><br />
        En el calor del momento, podés sentirte invulnerable y seguro, pero hay que tener en cuenta algo importante: cuando compartís una imagen, <b>perdés el control sobre ella.</b>
        <br /><br />
        Esa foto que parecía una idea divertida y emocionante cuando la compartiste con tu pareja podría tomar un camino inesperado si se comparte sin tu permiso.
        </p>
        <h2 className='text-left w-full md:w-3/4 text-xl md:text-3xl font-bold'>
          Las Consecuencias Reales: Crudo pero Real
        </h2>
        <p className='text-left w-full md:w-3/4'>
          Imaginate esto: una foto que compartiste con alguien especial <b>ahora está en manos de otros.</b> 
          <br /><br />
          Puede ser por venganza, chusmerío o incluso por un error. Sin importar la razón, una vez que esa foto está en línea, es difícil controlar quién la ve y cómo podría afectarte. 
          <br /><br />
          Las consecuencias pueden ser <b>graves</b>, desde sentirte avergonzado hasta experimentar angustia emocional o daño a tu reputación.
        </p>
        <h2 className='text-left w-full md:w-3/4 text-xl md:text-3xl font-bold'>
          Protegiendo tu Intimidad y Bienestar Emocional
        </h2>
        <p className='text-left w-full md:w-3/4'>
          <b>No deberías sentir que tu privacidad está bajo el control de alguien más. </b>
          <br /><br />
          La clave para navegar este mundo digital es entender los riesgos potenciales y cuidar tu intimidad. Antes de mandar una imagen íntima, pensá si te sentirías cómodo si esa imagen fuera vista por más personas que tu pareja actual. 
          <br /><br />
          Hablá abiertamente con tu pareja sobre los límites y lo que esperan de esta experiencia.
        </p>
        <h2 className='text-left w-full md:w-3/4 text-xl md:text-3xl font-bold'>
          Conclusión: Tu Poder, Tu Decisión
        </h2>
        <p className='text-left w-full md:w-3/4'>
          La tecnología nos permite conectarnos de formas increíbles, pero también viene con desafíos que requieren precaución. 
          <br /><br />
          El sexting puede ser emocionante, pero vos sos el único que decide si vale la pena. Mantené el control de tus momentos íntimos y no te sientas obligado a hacer algo que te haga sentir incómodo. Tu intimidad es tu elección y merece respeto.
          <br /><br />
          Así que, antes de darle &ldquo;enviar&rdquo; a esa foto, recordá: descubrí la verdad oculta del sexting y lo que quizás no te contaron. 
          <br /><br />
          <b>Tu privacidad y bienestar emocional dependen de vos.</b>
        </p>
        <Share />
      </main>
    </>
  )
}

import React from 'react'

export const Motivacion = () => {
  
  return (
    <div className='container'>
      
    <h1>Proteina</h1>
    <p class="fs-3">Es la encargada de nutrir nuestra <b>masa muscular</b></p>
    <img  class="img-fluid" 
          src = {require( "../../imagenes/proteina.jpg")}
          alt='imagen'/>
   
   <br/>
    <p>
    <b> ¿Qué es la proteína?</b>
    <br/>
La proteína es un macronutrimento que está compuesto de aminoácidos. La ingestión de proteínas en nuestra dieta proporciona aminoácidos, que sirven como bloques de construcción para la formación de proteínas y otras estructuras en nuestro cuerpo.

¿Cuáles son algunos beneficios para la salud de las proteínas?
La proteína es crítica para mantener un sistema inmune sano para luchar contra infecciones y reparar lesiones en los tejidos. Además, la proteína está ligada a la salud de los huesos y los músculos y, por lo tanto, la ingestión de proteínas adecuada puede proporcionar una estrategia para prevenir la pérdida de tejido muscular que se produce en las poblaciones clínicas y como parte del proceso de envejecimiento. La ingestión de proteínas puede proporcionar una estrategia de dieta útil también. Se ha demostrado a través de Investigaciones emergentes que comer una dieta más alta en proteínas puede ayudar con el control del peso, reduciendo el hambre y al mismo tiempo, proporciona los nutrimentos para preservar la masa corporal magra durante la dieta.
    </p>
    </div>
  )
}

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../interfaz grafica/components/NavBar'
import { Motivacion } from '../pages/Motivacion'
import { Nutricion } from '../pages/Nutricion'
import { Suplementacion } from '../pages/Suplementacion'
import { Entrenamiento } from '../pages/Entrenamiento'

import { AppRouter } from '../../router/AppRouter'
import { Inicio } from '../pages/Inicio'
import { Creatina } from '../pages/Creatina'
import { Quemadores } from '../pages/Quemadores'
import { Objetivos } from '../pages/Objetivos'




export const LoginRouter = () => {
  return (
    <>
      <Navbar />

      <div className='container'>


        <Routes>

          <Route path="/*" element={<AppRouter />} />

          <Route path="Inicio" element={<Inicio
             nombre= " En esta pagina encontraras todo lo que tenes que saber sobre la actividad fisica en general!"
             descripcion="La actividad física tiene importantes beneficios para la salud del corazón, el cuerpo y la mente.La actividad física contribuye a la prevención y gestión de enfermedades no transmisibles, como las enfermedades cardiovasculares, el cáncer y la diabetes.La actividad física reduce los síntomas de la depresión y la ansiedad.La actividad física mejora las habilidades de razonamiento, aprendizaje y juicio.La actividad física asegura el crecimiento y el desarrollo saludable de los jóvenes.La actividad física mejora el bienestar general.A nivel mundial, 1 de cada 4 adultos no alcanza los niveles de actividad física recomendados.Se podrían evitar hasta 5 millones de fallecimientos al año con un mayor nivel de actividad física de la población mundial."
           />} />

          <Route path="Entrenamiento" element={<Entrenamiento
            nombre="Aqui aprenderas todo lo relacionado con el entrenamiento"
            descripcion="Definimos el entrenamiento como el conjunto de procedimientos y actividades realizadas para aumentar la capacidad física, desarrollando las cualidades de un individuo de la forma mas adecuada y en función de las circunstancias.El entrenamiento no logra modificar las condiciones genéticas o innatas del individuo, pero consigue mejorar las capacidades físicas a través de modificaciones morfofuncionales, es decir, a través de cambios en los elementos músculoesqueléticos (aumento de la masa muscular, etc) y por la adaptación funcional del organismo a situaciones que exigen mayor exigencia física.Por el perfil genético individual, cada persona tiene un nivel de respuesta diferente a los estímulos o cargas de entrenamiento. Debe destacarse, en consecuencia, que uno de los factores esenciales en el éxito de un programa de entrenamiento es la individualización. En consecuencia, cualquier programa de entrenamiento debe poder modificarse en función de la respuesta de cada persona.Todo programa de entrenamiento deberá atender a una serie de elementos: Nutrición, prácticas defatigantes, procesos formativos y de aprendizaje de técnicas deportivas concretas."
            imagen= "entrenamiento"

          />} />

          <Route path="Nutricion" element={<Nutricion
            nombre="Queres aprender mas sobre Nutricion? Segui leyendo..."
            descripcion="Una alimentación adecuada y apropiada solo se consigue consumiendo una dieta equilibrada, formada por una diversidad de nutrientes, que son las sustancias contenidas en los alimentos que nutren el organismo. Una dieta saludable permite mantener un peso corporal apropiado y equilibrado en su composición (el porcentaje de grasa y músculo del organismo), garantizar la capacidad para llevar a cabo las actividades físicas y mentales cotidianas y minimizar el riesgo de enfermedad y discapacidad.Las Directrices Alimentarias para los Estadounidenses 2020-2025, 9ª edición del Departamento de Agricultura de Estados Unidos (USDA, por sus siglas en inglés) (Dietary Guidelines for Americans 2020-2025, 9th edition) establecen que: un patrón alimentario saludable consiste en alimentos y bebidas ricos en nutrientes de todos los grupos de alimentos, en las cantidades recomendadas y dentro de los límites de calorías. De acuerdo con estas pautas, los elementos centrales que conforman un patrón alimentario saludable incluyen:Verduras de todo tipo y color (incluyendo frijoles y legumbres, como guisantes y lentejas)Frutas, especialmente frutas enterasCereales, al menos la mitad de los cuales son integralesProductos lácteos, incluyendo leche, yogur y queso sin grasa o con poca grasa y/o versiones sin lactosa y bebidas de soja enriquecidas y yogur como alternativasAlimentos proteicos, como carnes magras, aves de corral y huevos; mariscos; frijoles, guisantes y lentejas; y frutos secos, semillas y productos de sojaAceites, incluidos los aceites vegetales y los aceites de los alimentos, como el marisco y los frutos secosSi el consumo de alimentos es excesivo, se es más propenso a la obesidad. Asimismo, si se ingieren grandes cantidades de ciertos nutrientes, por lo general vitaminas o minerales, los efectos pueden ser nocivos (toxicidad). Si la persona afectada no consume suficientes nutrientes puede aparecer desnutrición, dando lugar a un trastorno por carencia nutricional."
            imagen= "suples2"

          />} />

          <Route path="Suplementacion" element={<Suplementacion
            nombre="Aqui aprenderas todo lo relacionado a la suplementacion deportiva"
            descripcion="Los suplementos vitamínicos son productos que concentran gran cantidad de nutrientes y sirven para complementar la ingesta alimentaria en situaciones especiales, pero no deben sustituir una dieta saludable.En circunstancias normales, una alimentación adecuada y equilibrada proporciona todos los nutrientes necesarios para el normal desarrollo y mantenimiento de un organismo sanoHay que aclarar que, pese a que se utilizan diferentes nombres para referirnos a estos productos, la denominación legal correcta es complementos alimenticiosLos complementos alimenticios se deben tomar a las dosis que el especialista haya recomendado y no deben ser excedidas¿Cuándo tomar suplementos vitamínicosLos complementos alimenticios sólo están indicados cuando la dieta no pueda satisfacer por completo los requerimientos nutricionalesPara llevar una buena alimentación, existen instrumentos como la pirámide de la alimentación saludable o el plato para comer saludable, que traducen los conocimientos científicos en alimentos y nos enseñan de forma clara cómo comer para cubrir nuestra demanda de nutrientes y mantener la salud¿Es recomendable tomarlosSu uso puede estar justificado en algunos grupos de población o etapas de la vida, por ejemplo, en el caso de mujeres embarazadas, personas con poco acceso a la luz solar y bajo consumo de productos lácteos enteros, personas vegetarianas, o con alteraciones metabólicas, o pacientes que tomen medicación crónica que cause déficit de vitaminasAunque estos productos son de venta libre, los sanitarios son los profesionales que tienen los conocimientos y herramientas oportunas para evaluar y orientar al paciente."
            imagen= "suples"  

          />} />

          <Route path="Motivacion" element={<Motivacion />} />
          <Route path="Creatina" element={<Creatina />} />
          <Route path="Quemadores" element={<Quemadores />} />
          <Route path="Objetivos" element={<Objetivos />} />

          <Route path="/" element={<Navigate to="/Entrenamiento" />} />



        </Routes>


      </div>
    </>
  )
}

# Head First Design Patterns

Condigo de ejemplo siguiendo el libro
[Head First Desing patterns](https://www.oreilly.com/library/view/head-first-design/9781492077992/).

Cada parte es adaptada del original en Java a Typescript.

## Principios de diseño

<details>
  <summary>Identificá los aspectos de la aplicación y separalos de los que permanecen
  igual</summary>
  
  Esto se refiere a que si tengo que meter mano siempre en la misma
  clase (ya sea por cambios de requerimientos o librerías), debería hacer que el
  resto del código sea independiente de esta implementación asi asi los cambios
  que hago tienen el menor efecto posible en otras clases.
</details>

<details>
  <summary>  Programa para una interfaz no para una implementación </summary>
  
 La idea detrás de
  este principio es que en vez de programar los comportamientos en la superclase
  o en la clase lo que podemos hacer es tener una interfaz que modele
  comportamientos y clases que representen cada tipo de comportamiento. Es decir
  el cada comportamiento va a estar representado por una clase y va a ser
  instancia de quien posee el comportamiento. Por ejemplo tendríamos la clase FlyWithWings, FlusWithAirplante, etc.

Es importante notar que programamos de esta manera, la clase que posee dicho
comportamiento (`Behaviors`) no tiene conocimiento de la implementación del
mismo, ni si lo tiene o no. Ej: en la clase Duck no hay registro de como se
implementa volar , solo que tiene dicho comportamiento (`Behaviors`). Otra
ventaja es que se puede agregar y quitar comportamientos a un objeto de forma
dinámica.

</details>

<details>
  <summary>  Favorecer composición sobre herencia </summary>
  
 Crear sistemas usando composición nos da mas flexibilidad. No solo nos deja encapsular una familia de algoritmos en su propio conjunto de clases sino que también nos deja cambiar el comportamiento en tiempo de ejecución.

</details>

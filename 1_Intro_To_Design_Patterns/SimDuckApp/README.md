# Cuando la herencia no es suficiente

Este es un ejemplo simple. Tenemos que modelar varios tipos de patos y para
modelar todas las features que tienen en comun usamos una superclase.

En principio esto nos ayuda a rehutilizar codigo y no tener que implementar lo
mismo en cada clase.

El problema viene cuando tenemos que modelar otros tipos de patos que no
comparten el mismo comportamiento que el de la superclase.

## Casos que no contemplamos

Al principio seguramente pensamos que todos los patos hacen quack y nadan, pero
ahora el cliente nos pide que hagamos que vuelen.

Si agregamos esta funcionalidad a la superclase absoulutamente todos los patos
volarian. Pero si queremos modelar un pato de goma este comporamiento no seria
el correcto.

Una posible solucion es agregar el metodo y sobreescribirlo en la clase de los
patos que no sepan volar. Esto parce bien pero no sabemos si en el futuro
agregariamos muchas clases mas que no tengan este comportamiento, o peor aun ya
tenemos en nuestro codigo muchos patos que no pueden volar (de madera, patos
gordos, etc...). En vez de reutilizar codigo estariamos volviendo a lo de antes,
escribir cada metodo en cada clase.

## Interfaces

Bueno en ese caso el comportamiento de volar puede venir de otro lado y no de la
superclase. Como no todos los patos vuelan podemos crear una interfaz `Flyable`
que sea implementada por aqullos patos que vuelen y listo.

El probema con esto es que es una solucion aun peor ya que las interfaces no
tienen implementacion por defecto, es decir que tenemos que implementar el
metodo en cada clase de pato que vuele, que son muchos mas que los que no
vuelan.

Ademas sumado a esto si quisieramos hacer interfaces por cada comportamiento
distinto que tienen los patos, se volveria un codigo muy dificil de mantener.

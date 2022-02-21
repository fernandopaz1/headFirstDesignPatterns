# Patron Ovserver

La idea principal es que tenemos dos interfaces a implementar el observer y
subject.

Subject es un objeto al que los `"observadores"` se pueden subscribir y este
objeto los notifica cuando ocurre un cierto evento. Para esto la interfaz tiene
tres métodos que permiten a observadores registrarse para recibir
notificaciones, cancelar ese registro y notificar a los observadores
registrados.

A su vez la interfaz Observer debe implementar el método update que es el código
a ejecutar una vez sea notificado de cambio los observadores.

La ventaja de este patron es que permite disminuir el acoplamiento entre clases,
ya que cualquier clase de objeto se puede subscribir como observador de otro
siempre y cuando implementen las interfaces correspondientes.

También quien esta subscripto a un Subject o otro se determina en runtime por lo
que en la clase observada no hay rastro de quienes observan.

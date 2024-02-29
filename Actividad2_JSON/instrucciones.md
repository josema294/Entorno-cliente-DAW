# Proyecto de Página Web de Productos

Este proyecto consiste en una página web en JavaScript que permite mostrar una serie de productos cargados externamente desde un JSON. La URL de carga será la siguiente: [https://dummyjson.com/products](https://dummyjson.com/products)

## Maquetado de la Página Web

La página web estará dividida en varias secciones:

### Parte Superior

En esta sección se podrán seleccionar los filtros de búsqueda: precio mínimo, categoría y marca. Además, habrá un botón para aplicar el filtro.

### Parte Central

La parte central estará dividida en dos partes:

#### Parte de Resultados

En esta parte se mostrarán tantas cartas como productos del API cumplan el filtro de búsqueda. Cada carta mostrará la imagen, el precio y la categoría del producto. También habrá un botón con el texto "Añadir a carrito". Al pulsar este botón, el producto se añadirá al carrito y se actualizará la lista en la parte derecha.

#### Parte del Carrito

En esta parte se mostrarán todos los productos que se van añadiendo al carrito. Al final de la lista aparecerá un botón "Comprar". Al pulsarlo, aparecerá un mensaje de confirmación con el siguiente mensaje: "Vas a realizar una compra por valor de XXX. ¿Estás seguro?" En el caso de pulsar "Aceptar", se vaciará el carrito.

## Uso de Librerías Externas

Además de todas las características mencionadas, se valorará el uso de las siguientes librerías externas:

- [SweetAlert2](https://sweetalert2.github.io) para la carga de diálogos de confirmación.
- [Animate.css](https://animate.style) para animaciones en la página.


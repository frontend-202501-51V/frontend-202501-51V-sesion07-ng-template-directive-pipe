# 1.2 Enlaces y Expresiones en Angular

En este ejercicio aprenderás a utilizar los diferentes tipos de data binding en Angular: property binding, event binding y two-way binding, así como a trabajar con expresiones en los templates.

## 🎯 Objetivos

- Comprender los distintos tipos de data binding en Angular.
- Utilizar property binding (`[property]`), event binding (`(event)`) y two-way binding (`[(ngModel)]`).
- Aplicar expresiones en los templates para mostrar y manipular datos.

## 📖 Teoría breve

Angular ofrece varias formas de enlazar datos entre el componente y la vista:

- **Property Binding**: `[property]="valor"` enlaza una propiedad del DOM con una variable del componente.
- **Event Binding**: `(event)="funcion()"` enlaza un evento del DOM con un método del componente.
- **Two-way Binding**: `[(ngModel)]="variable"` permite la sincronización bidireccional entre el input y la variable (requiere FormsModule).

Las **expresiones** en los templates permiten mostrar valores calculados directamente en la vista.

## 📝 Actividades

1. **Explora el archivo `binding-examples.component.ts`**  
   Observa ejemplos de los diferentes tipos de binding y expresiones.

2. **Agrega un input con two-way binding y muestra su valor en tiempo real.**

3. **Crea un botón que, al hacer clic, cambie el valor de una variable usando event binding.**

4. **Utiliza property binding para modificar atributos de un elemento dinámicamente.**

5. **Responde las preguntas del archivo [`QUIZ.md`](QUIZ.md).**

## 📂 Archivos de apoyo

- [`binding-examples.component.ts`](binding-examples.component.ts) – Ejemplos prácticos de binding.
- [`start.component.ts`](start.component.ts) – Ejercicio para completar.
- [`HINTS.md`](HINTS.md) – Guía para implementación.
- [`QUIZ.md`](QUIZ.md) – Preguntas conceptuales.

---

¡Explora los ejemplos y experimenta con los distintos tipos de enlaces y expresiones en Angular!

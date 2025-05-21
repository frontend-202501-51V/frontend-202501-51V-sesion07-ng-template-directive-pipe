# 3.1 Pipes Integrados y Personalizados en Angular

En este ejercicio aprenderás a utilizar los pipes integrados de Angular para transformar datos en los templates y a identificar cuándo es útil crear un pipe personalizado.

## 🎯 Objetivos

- Comprender el propósito de los pipes en Angular.
- Utilizar pipes integrados como `date`, `uppercase`, `currency`, `json`, entre otros.
- Identificar escenarios donde un pipe personalizado puede ser útil.

## 📖 Teoría breve

Un **pipe** es una función que transforma valores para su presentación en la vista. Angular incluye varios pipes integrados, por ejemplo:

- `date`: Formatea fechas.
- `uppercase` / `lowercase`: Cambia el texto a mayúsculas o minúsculas.
- `currency`: Formatea números como moneda.
- `json`: Muestra objetos como JSON.

Se usan en el template con la sintaxis:  
`{{ valor | pipe:argumentos }}`

## 📝 Actividades

1. **Explora el archivo `pipes-examples.component.ts`**  
   Observa ejemplos de uso de los pipes integrados.

2. **Agrega un pipe integrado a una expresión en el template y observa el resultado.**

3. **Prueba combinar varios pipes en una misma expresión.**

4. **Piensa en un caso donde un pipe personalizado sería útil y anótalo en el archivo [`QUIZ.md`](QUIZ.md).**

## 📂 Archivos de apoyo

- [`pipes-examples.component.ts`](pipes-examples.component.ts) – Ejemplos prácticos de pipes integrados.
- [`start.component.ts`](start.component.ts) – Ejercicio para completar.
- [`QUIZ.md`](QUIZ.md) – Preguntas conceptuales.

---

¡Explora los ejemplos y experimenta con los pipes en tus propios templates!

# 3.2 Creación de Pipes Personalizados en Angular

En este ejercicio aprenderás a crear tus propios pipes para transformar datos según las necesidades de tu aplicación.

## 🎯 Objetivos

- Comprender cuándo es útil crear un pipe personalizado.
- Implementar un pipe personalizado usando el decorador `@Pipe`.
- Utilizar el pipe personalizado en un template.

## 📖 Teoría breve

Un **pipe personalizado** te permite transformar datos de una manera específica para tu aplicación. Se crea implementando la interfaz `PipeTransform` y usando el decorador `@Pipe`.

Ejemplo básico:

```typescript
@Pipe({ name: 'miPipe' })
export class MiPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    // lógica de transformación
    return value;
  }
}
```

## 📝 Actividades

1. **Explora el archivo `capitalize.pipe.ts`**  
   Observa cómo se implementa un pipe que capitaliza la primera letra de un texto.

2. **Crea un pipe personalizado que invierta el texto recibido.**

3. **Utiliza tu pipe en el template de un componente y prueba su funcionamiento.**

4. **Responde las preguntas del archivo [`QUIZ.md`](QUIZ.md).**

## 📂 Archivos de apoyo

- [`capitalize.pipe.ts`](capitalize.pipe.ts) – Ejemplo de pipe personalizado.
- [`start.pipe.ts`](start.pipe.ts) – Archivo para tu propio pipe.
- [`HINTS.md`](HINTS.md) – Guía para implementación.
- [`QUIZ.md`](QUIZ.md) – Preguntas conceptuales.

---

¡Explora el ejemplo, crea tu propio pipe y experimenta con la transformación de datos en Angular!

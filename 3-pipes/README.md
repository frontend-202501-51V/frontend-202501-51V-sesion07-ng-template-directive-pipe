# 3. Pipes en Angular

En este bloque aprenderás a transformar y presentar datos en tus vistas usando **pipes** integrados y personalizados en Angular.  
Los pipes son una herramienta poderosa para mejorar la legibilidad y presentación de la información en tus componentes.

---

## 🎯 Objetivos

- Comprender qué es un pipe y cómo funciona en Angular.
- Utilizar pipes integrados para formatear fechas, monedas, textos y más.
- Crear tus propios pipes personalizados para necesidades específicas.
- Aplicar buenas prácticas en el uso de pipes para mantener el rendimiento y la claridad del código.

---

## 📚 Teoría y ejemplos progresivos

### 1. ¿Qué es un pipe?

Un **pipe** es una función que transforma el valor de una expresión para mostrarlo en el template.  
Se usa con el símbolo `|` (barra vertical) en el HTML.

**Ejemplo básico:**

```html
<p>Fecha: {{ hoy | date }}</p>
<p>Nombre: {{ nombre | uppercase }}</p>
```

---

### 2. Pipes integrados en Angular

Angular ofrece varios pipes listos para usar:

- `date`: Formatea fechas.
- `currency`: Formatea valores monetarios.
- `decimal`: Formatea números decimales.
- `percent`: Muestra porcentajes.
- `uppercase` / `lowercase`: Cambia el texto a mayúsculas/minúsculas.
- `slice`: Extrae una parte de un array o string.
- `json`: Muestra objetos en formato JSON.

**Ejemplo:**

```html
<p>Precio: {{ precio | currency:'USD' }}</p>
<p>Porcentaje: {{ porcentaje | percent:'1.1-2' }}</p>
<p>Fragmento: {{ mensaje | slice:0:10 }}</p>
```

---

### 3. Encadenamiento de pipes

Puedes aplicar varios pipes en cadena:

```html
<p>{{ nombre | uppercase | slice:0:5 }}</p>
```

---

### 4. Pipes personalizados

Cuando necesitas una transformación que no existe, puedes crear tu propio pipe.

**Ejemplo básico de pipe personalizado:**

```typescript
// archivo: mayusculas-primer-letra.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizar' })
export class CapitalizarPipe implements PipeTransform {
  transform(valor: string): string {
    return valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();
  }
}
```

**Uso en el template:**

```html
<p>{{ 'angular' | capitalizar }}</p> <!-- Resultado: Angular -->
```

---

### 5. Buenas prácticas y recomendaciones

- Usa pipes solo para transformaciones de presentación, no para lógica compleja.
- Evita pipes "puros" con operaciones costosas en listas grandes (puede afectar el rendimiento).
- Prefiere pipes puros a menos que necesites reaccionar a cambios internos de objetos.
- Reutiliza pipes personalizados en varios componentes para mantener el código limpio.

---

## 📝 Ejercicios prácticos

1. Muestra una lista de productos con el precio formateado como moneda y el nombre en mayúsculas.
2. Crea un pipe personalizado que oculte parte de un texto (por ejemplo, para emails: `j***@gmail.com`).
3. Usa el pipe `date` para mostrar la fecha actual en diferentes formatos.
4. Encadena el pipe `uppercase` y `slice` para mostrar solo las primeras letras de un nombre en mayúsculas.

---

## 📂 Archivos de apoyo

- [`pipes-integrados.component.ts`](pipes-integrados.component.ts) – Ejemplos de pipes integrados.
- [`pipes-personalizados.component.ts`](pipes-personalizados.component.ts) – Ejemplos de pipes personalizados.
- [`mayusculas-primer-letra.pipe.ts`](mayusculas-primer-letra.pipe.ts) – Pipe personalizado de ejemplo.

---

## ✅ Resumen

- Los pipes transforman la presentación de los datos en los templates de Angular.
- Usa pipes integrados para tareas comunes como formateo de fechas, monedas y texto.
- Crea pipes personalizados para necesidades específicas de tu aplicación.
- Aplica buenas prácticas para mantener el rendimiento y la claridad del código.

---

## Preguntas Conceptuales: Pipes

1. ¿Para qué sirve un pipe en Angular?
2. ¿Cómo se aplica un pipe en el template?
3. ¿Cuándo es recomendable crear un pipe personalizado?
4. ¿Qué diferencia hay entre un pipe puro e impuro?
5. ¿Puedes encadenar varios pipes? ¿Cómo?

---

## Hints para Pipes

- Usa el símbolo `|` para aplicar un pipe en el template.
- Los pipes pueden recibir argumentos: `{{ valor | pipe:arg1:arg2 }}`.
- Los pipes personalizados deben implementarse con la interfaz `PipeTransform`.
- Registra tus pipes personalizados en el módulo correspondiente.
- Mantén los pipes simples y enfocados en la presentación.

---

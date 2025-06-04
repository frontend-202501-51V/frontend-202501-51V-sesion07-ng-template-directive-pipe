# 1.1 Fundamentos de Templates en Angular

En esta sección aprenderás los **fundamentos de los templates en Angular**, desde la sintaxis básica hasta el uso de directivas estructurales y pipes.  
El objetivo es que comprendas cómo Angular conecta la lógica de tus componentes con la vista, y cómo puedes crear interfaces dinámicas y reactivas.

---

## 🎯 Objetivos

- Comprender qué es un template en Angular y cómo se relaciona con el componente.
- Dominar la interpolación, expresiones y data binding.
- Utilizar directivas estructurales (`*ngIf`, `*ngFor`) para modificar el DOM dinámicamente.
- Aplicar pipes para transformar la presentación de los datos.
- Reconocer errores comunes y buenas prácticas en la construcción de templates.

---

## 📚 Teoría completa y progresiva

### 1. ¿Qué es un template en Angular?

Un **template** es la parte HTML de un componente Angular.  
Define la estructura, el contenido y la presentación de la vista.  
Permite que el HTML sea **dinámico y reactivo**, conectándose con la lógica del componente TypeScript.

---

### 2. Interpolación (`{{ ... }}`)

Permite mostrar valores de variables, propiedades o expresiones del componente directamente en la vista.

**Ejemplo básico:**

```html
<p>Hola, {{ nombre }}</p>
```

*En el componente:*

```typescript
nombre = 'Ana';
```

**Puedes interpolar:**

- Variables simples
- Propiedades de objetos
- Expresiones matemáticas: `{{ edad + 5 }}`
- Expresiones lógicas: `{{ activo ? 'Sí' : 'No' }}`

**Errores comunes:**

- Intentar usar sentencias (if, for) en la interpolación (solo se permiten expresiones).

---

### 3. Expresiones en el template

Puedes usar expresiones simples dentro de la interpolación para mostrar resultados calculados:

```html
<p>El doble es {{ numero * 2 }}</p>
<p>¿Mayor de edad? {{ edad >= 18 ? 'Sí' : 'No' }}</p>
```

**Buenas prácticas:**

- Mantén las expresiones simples y sin lógica compleja.
- No llames funciones pesadas en la interpolación (puede afectar el rendimiento).

---

### 4. Data Binding

Angular permite enlazar datos entre el componente y el template de varias formas:

#### a) Property Binding `[propiedad]="valor"`

Asigna valores del componente a propiedades del DOM.

```html
<img [src]="imagenUrl" alt="Foto de perfil">
```

*En el componente:*

```typescript
imagenUrl = 'https://placekitten.com/120/120';
```

#### b) Event Binding `(evento)="funcion()"`

Ejecuta métodos del componente en respuesta a eventos del DOM.

```html
<button (click)="saludar()">Saludar</button>
```

*En el componente:*

```typescript
saludar() { alert('¡Hola!'); }
```

#### c) Two-way Binding `[(ngModel)]="variable"`

Sincroniza el valor entre el input y la variable del componente (requiere FormsModule).

```html
<input [(ngModel)]="nombre">
<p>Hola, {{ nombre }}</p>
```

**Errores comunes:**

- Olvidar importar FormsModule para usar ngModel.
- No poner el atributo `name` en el input.

---

### 5. Directivas estructurales

Las directivas estructurales modifican la estructura del DOM.

#### a) `*ngIf`

Muestra u oculta un elemento según una condición booleana.

```html
<p *ngIf="esVisible">Este texto se muestra solo si esVisible es true</p>
```

*En el componente:*

```typescript
esVisible = true;
```

**Con else y ng-template:**

```html
<p *ngIf="esVisible; else oculto">Visible</p>
<ng-template #oculto>
  <p>No visible</p>
</ng-template>
```

#### b) `*ngFor`

Repite un elemento para cada ítem de una colección.

```html
<ul>
  <li *ngFor="let item of lista">{{ item }}</li>
</ul>
```

*En el componente:*

```typescript
lista = ['Uno', 'Dos', 'Tres'];
```

**Con objetos y mensaje para lista vacía:**

```html
<div *ngIf="usuarios.length; else sinUsuarios">
  <ul>
    <li *ngFor="let usuario of usuarios">
      {{ usuario.nombre }} ({{ usuario.rol }})
    </li>
  </ul>
</div>
<ng-template #sinUsuarios>
  <p>No hay usuarios registrados.</p>
</ng-template>
```

---

### 6. Pipes

Los **pipes** transforman la presentación de los datos en el template.

```html
<p>Fecha: {{ fecha | date:'shortDate' }}</p>
<p>Precio: {{ precio | currency:'USD' }}</p>
<p>Nombre: {{ nombre | uppercase }}</p>
```

*En el componente:*

```typescript
fecha = new Date();
precio = 1234.56;
nombre = 'angular';
```

**Puedes encadenar pipes:**

```html
<p>{{ nombre | uppercase | slice:0:3 }}</p>
```

---

### 7. Buenas prácticas y errores comunes

- Mantén los templates simples y legibles.
- No pongas lógica compleja en el template.
- Usa ng-template para contenido alternativo o reutilizable.
- Usa trackBy en *ngFor para listas grandes.
- No mezcles demasiados conceptos en una sola línea.

---

## 📂 Archivos de apoyo

- [`template-examples.component.ts`](template-examples.component.ts) – Ejemplos prácticos de template.

---

## ✅ Resumen

- Un template en Angular define la estructura visual de un componente.
- Usa interpolación para mostrar valores y expresiones.
- Aplica data binding para conectar datos y eventos entre el componente y la vista.
- Utiliza directivas estructurales como `*ngIf` y `*ngFor` para modificar el DOM dinámicamente.
- Transforma la presentación de los datos usando pipes.

## Preguntas Conceptuales: Fundamentos de Templates

1. ¿Qué es un template en Angular?
2. ¿Cómo se muestra el valor de una variable en el template?
3. ¿Para qué sirve la directiva `*ngIf`?
4. ¿Qué sucede si cambias el valor de una variable en el componente?
5. ¿Puedes usar expresiones matemáticas dentro de la interpolación?

## Hints para Templates

- Usa `{{ ... }}` para mostrar valores o expresiones simples en el HTML.
- No puedes usar sentencias como `if`, `for` o asignaciones dentro de la interpolación, solo expresiones.
- Si necesitas mostrar u ocultar elementos, utiliza directivas estructurales como `*ngIf`.
- Para repetir elementos de una lista, utiliza `*ngFor`.
- Usa `[propiedad]="valor"` para enlazar propiedades del DOM con variables del componente (property binding).
- Usa `(evento)="funcion()"` para ejecutar métodos del componente en respuesta a eventos del usuario (event binding).
- Usa `[(ngModel)]="variable"` para sincronizar inputs y variables del componente (two-way binding, recuerda importar `FormsModule`).
- Los pipes (`|`) te permiten transformar la presentación de los datos directamente en el template.
- Mantén las expresiones en el template simples y evita lógica compleja para facilitar el mantenimiento y la lectura.
- Si necesitas mostrar contenido alternativo, utiliza `<ng-template>` junto con `*ngIf` o `*ngFor`.

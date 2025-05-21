# 🛈 Pistas para el Proyecto Integrador: Dashboard de Hábitos

## 1. Templates y Data Binding

- Usa `*ngFor` para iterar sobre la lista de hábitos y mostrarlos.
- Usa `*ngIf` si necesitas mostrar mensajes condicionales (por ejemplo, "No hay hábitos").
- Usa `[(ngModel)]` para enlazar los filtros y los campos de entrada.

## 2. Directivas de Atributo y Personalizadas

- Usa `[ngClass]` para aplicar una clase CSS cuando un hábito esté cumplido.
- Implementa la directiva `appHighlight` para cambiar el color de fondo de los hábitos cumplidos.
  - Recuerda usar `@Input()` para recibir el color y manipular el DOM con `ElementRef`.

## 3. Pipes

- Usa el pipe `capitalize` para mostrar el nombre y la categoría con la primera letra en mayúscula.
- Usa el pipe `habitFilter` para filtrar la lista según el estado y la categoría seleccionados.
- Usa el pipe `length` para mostrar el número de hábitos filtrados.
- Puedes combinar pipes en una misma expresión, por ejemplo:
  
```html
{{ habits | habitFilter:filterStatus:filterCategory | length }}
```

## 4. Componentización y Comunicación

- El componente `habit-list` debe manejar la lista y los filtros.
- El componente `habit` debe recibir un hábito por `@Input()` y emitir un evento por `@Output()` cuando se marque/desmarque.
- Usa el evento `(toggle)` para notificar al componente padre que se debe cambiar el estado de un hábito.

## 5. Métodos útiles

- Para agregar un hábito, crea un método que agregue un nuevo objeto al array `habits`.
- Para marcar/desmarcar un hábito, cambia la propiedad `completed` del objeto correspondiente.

## 6. Estilos

- Usa la clase `.completed` para tachar o cambiar el color del texto de los hábitos cumplidos.
- Puedes personalizar el color de fondo usando la directiva personalizada.

---

¿Aún tienes dudas?  
Revisa los archivos de solución (`SOLUTION-*.ts`) después de intentar resolverlo por tu cuenta.

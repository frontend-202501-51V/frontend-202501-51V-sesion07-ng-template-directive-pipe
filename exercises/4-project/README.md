# Proyecto Integrador: Dashboard Personal de Hábitos y Progreso

## Requerimiento

El sistema permite a un usuario gestionar y visualizar sus hábitos diarios o semanales, registrar avances, marcar hábitos como cumplidos, filtrar por estado (todos, cumplidos, pendientes) y por categoría, resaltar hábitos cumplidos, mostrar estadísticas de progreso y transformar la presentación de los datos usando templates, directivas estructurales y de atributo, directivas personalizadas y pipes tanto integrados como personalizados.

## Archivos

- `app.component.ts` – Componente principal
- `habit-list.component.ts` – Lista y gestión de hábitos
- `habit.component.ts` – Visualización de un hábito individual
- `habitFilter.pipe.ts` – Pipe personalizado para filtrar hábitos
- `capitalize.pipe.ts` – Pipe para capitalizar textos
- `length.pipe.ts` – Pipe para contar hábitos
- `highlight.directive.ts` – Directiva personalizada para resaltar hábitos cumplidos
- `app.module.ts` – Módulo principal de Angular

## ¿Qué conceptos se aplican?

- Templates y data binding
- Directivas estructurales (`*ngFor`, `*ngIf`)
- Directivas de atributo (`[ngClass]`)
- Directiva personalizada (`appHighlight`)
- Pipes integrados y personalizados (`capitalize`, `length`, `habitFilter`)
- Componentización y comunicación entre componentes

## ¿Cómo probar?

1. Asegúrate de tener Angular CLI instalado.
2. Copia estos archivos en tu proyecto Angular.
3. Declara los componentes, pipes y directiva en tu módulo.
4. Ejecuta `ng serve` y abre la app.

## Sugerencias

- Puedes extender la funcionalidad agregando edición/eliminación de hábitos.
- Prueba diferentes estilos en la directiva personalizada.
- Experimenta con más pipes o directivas propias.

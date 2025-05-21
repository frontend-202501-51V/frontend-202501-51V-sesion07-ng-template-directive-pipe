# Hints para Pipes Personalizados

- Usa el decorador `@Pipe` y define un nombre único.
- Implementa la interfaz `PipeTransform` y su método `transform`.
- Puedes recibir argumentos adicionales en el método `transform`.
- Declara tu pipe en el módulo correspondiente para poder usarlo en los templates.
- Ejemplo de uso en template:
  ```html
  <p>{{ 'angular' | capitalize }}</p>
  <p>{{ 'workshop' | reverse }}</p>
  ```

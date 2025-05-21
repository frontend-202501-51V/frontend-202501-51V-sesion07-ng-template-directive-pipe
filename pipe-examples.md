# 🔄 Ejemplos y Casos de Uso de Pipes

## Pipes integrados

- **uppercase**

  ```html
  <p>{{ name | uppercase }}</p>
  ```

- **date**

  ```html
  <p>{{ today | date:'shortDate' }}</p>
  ```

- **currency**

  ```html
  <p>{{ price | currency:'USD' }}</p>
  ```

## Pipe personalizado (ejemplo)

```typescript
@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
```

```html
<p>{{ 'angular' | capitalize }}</p>
```

# 📐 Patrones y Ejemplos de Directivas

## Directivas estructurales

- **ngIf**

  ```html
  <div *ngIf="isLoggedIn">Bienvenido</div>
  ```

- **ngFor**

  ```html
  <li *ngFor="let user of users">{{ user.name }}</li>
  ```

- **ngSwitch**

  ```html
  <div [ngSwitch]="role">
    <p *ngSwitchCase="'admin'">Admin</p>
    <p *ngSwitchDefault>Invitado</p>
  </div>
  ```

## Directivas de atributo

- **ngClass**

  ```html
  <div [ngClass]="{active: isActive}">...</div>
  ```

- **ngStyle**

  ```html
  <div [ngStyle]="{'color': color}">Texto</div>
  ```

## Directiva personalizada (ejemplo)

```typescript
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() { /* ... */ }
}
```

# 📝 Template Syntax Cheatsheet

## Interpolación

```html
<p>{{ variable }}</p>
```

## Property Binding

```html
<img [src]="imageUrl">
```

## Event Binding

```html
<button (click)="onClick()">Click me</button>
```

## Two-way Binding

```html
<input [(ngModel)]="name">
```

## Estructuras comunes

- *ngIf,*ngFor, *ngSwitch

```html
<div *ngIf="isVisible">Visible</div>
<li *ngFor="let item of items">{{ item }}</li>
```

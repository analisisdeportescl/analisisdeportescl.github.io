# Transparencia Deporte

Transparencia financiera deportiva en Chile.

Sitio web: [transparencia-deporte-cl.github.io](https://transparencia-deporte-cl.github.io)

## Stack

- [Jekyll](https://jekyllrb.com/) + [GitHub Pages](https://pages.github.com/)
- [Cusdis](https://cusdis.com/) para comentarios
- GitHub Issues para reporte de errores

## Estructura

```
_posts/reportes/    → Análisis financieros
_posts/noticias/    → Noticias informativas
_posts/columnas/    → Columnas de opinión
_layouts/           → Plantillas HTML
_includes/          → Componentes reutilizables
_data/              → Datos del sitio (autores, navegación, organizaciones)
assets/             → CSS, JS, imágenes
```

## Desarrollo local

```bash
bundle install
bundle exec jekyll serve --drafts
```

El sitio estará disponible en `http://localhost:4000`.

## Licencia

Contenido bajo [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es). Código bajo MIT.

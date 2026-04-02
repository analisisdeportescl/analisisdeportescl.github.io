---
layout: page
title: "Sobre el proyecto"
permalink: /sobre-el-proyecto/
description: "Qué es Transparencia Deporte, cómo trabajamos, quiénes somos y cómo colaborar."
---

## Qué es Transparencia Deporte

Transparencia Deporte es un proyecto de periodismo financiero deportivo enfocado en Chile. Analizamos balances, memorias anuales, estados financieros y documentos públicos de federaciones, clubes y organismos del deporte chileno.

Nuestro objetivo es hacer accesible y comprensible la información financiera del deporte, que muchas veces es pública pero difícil de encontrar o interpretar.

## Metodología

Cada reporte financiero que publicamos sigue un proceso riguroso:

1. **Obtención de documentos**: Trabajamos exclusivamente con documentos de acceso público — balances auditados, memorias anuales, actas publicadas, información entregada por Ley de Transparencia.

2. **Análisis financiero**: Un analista revisa los estados financieros, identifica tendencias, calcula indicadores y detecta elementos relevantes.

3. **Redacción periodística**: Un periodista traduce el análisis técnico en un texto comprensible, verificando datos y agregando contexto.

4. **Publicación con trazabilidad**: Cada cifra publicada es verificable. Citamos fuentes y, cuando es posible, enlazamos a los documentos originales.

5. **Corrección abierta**: Cualquier persona puede reportar un error a través de nuestro sistema de correcciones. Toda corrección es pública y trazable.

## Equipo

Transparencia Deporte es un proyecto independiente mantenido por un equipo pequeño:

{% for autor in site.data.autores %}
- **{{ autor.nombre }}** — {{ autor.bio }}
{% endfor %}

## Cómo colaborar

- **Reportar errores**: Si encuentras un dato incorrecto en cualquier artículo, usa el botón "¿Ves un error?" al final de cada publicación.
- **Sugerir temas**: Puedes abrir un [Issue en GitHub]({{ site.github_repo }}/issues) con tu sugerencia.
- **Enviar documentos**: Si tienes acceso a documentos públicos que podrían ser de interés, contáctanos.
{% if site.google_form_contacto != "" %}- **Contacto general**: Usa nuestro [formulario de contacto]({{ site.google_form_contacto }}).{% endif %}

## Licencia

El contenido de este sitio está bajo licencia [Creative Commons BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es). Puedes compartir y reutilizar nuestro trabajo citando la fuente.

El código fuente del sitio está disponible en [GitHub]({{ site.github_repo }}).

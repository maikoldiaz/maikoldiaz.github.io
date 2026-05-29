# Estándar para escribir posts del blog

Los posts son páginas HTML estáticas en `blog/<slug>.html`. Usa
[`_PLANTILLA.html`](./_PLANTILLA.html) como punto de partida.

## Crear un post nuevo (pasos)

1. **Copia** `_PLANTILLA.html` → `blog/<slug>.html`.
   El `slug` va en **kebab-case** (ej. `arquitectura-multi-tenant-saas`).
2. **Registra** el post en el array `posts` de [`../js/main.js`](../js/main.js) con el **mismo `slug`**:
   ```js
   { tag: "IA", slug: "mi-slug", title_es: "Título ES", title_en: "Título EN" }
   ```
   - Para un artículo **externo** (Medium/dev.to/LinkedIn): agrega `external: "https://…"` y `minutes: 6`. La tarjeta abrirá ese enlace en pestaña nueva y el tiempo será manual.
   - Sin `external`: la tarjeta abre la página local y el **tiempo de lectura se calcula solo**.
3. **Reemplaza** todos los `{{TOKENS}}` de la plantilla (título, resumen, slug, tag, fecha, keywords).
4. **Escribe** el cuerpo dentro de `.article__body`.

> El `tag` de la página debe coincidir con el `tag` del post en `main.js`.

## Estándar de markup (dentro de `.article__body`)

- **Nunca** otro `<h1>` en el cuerpo (el `<h1>` ya es el título). Empieza en `<h2>`, sin saltos de nivel (`<h2>` → `<h3>`, no `<h2>` → `<h4>`).
- Párrafos `<p>`; listas `<ul>`/`<ol>`; énfasis `<strong>`/`<em>`.
- Código inline `<code>`; bloques `<pre><code>…</code></pre>`.
- Imágenes **siempre con `alt`** descriptivo.
- Enlaces con texto descriptivo (no "click aquí"); externos con `target="_blank" rel="noopener"`.

## Estándar editorial

Esqueleto recomendado:

1. **Hook / problema** — qué dolor resuelve, por qué importa (1-2 párrafos).
2. **Contexto** — supuestos, a quién va dirigido.
3. **Cuerpo** — varias secciones `<h2>`, una idea por sección, código + el porqué.
4. **Trade-offs / errores** — qué NO hacer, qué aprendiste.
5. **Conclusión** — 3-4 takeaways accionables.
6. **CTA** — invita a escribirte (link a contacto).

- Tono: primera persona, directo, basado en experiencia real.
- Longitud: **800–1.500 palabras** (≈ 4–7 min). El tiempo se ajusta solo.
- Una idea central por post.

## Tiempo de lectura

Se calcula como `palabras del cuerpo ÷ 200`, redondeado (mín. 1 min):
- En la **página del artículo**: lo escribe [`../js/blog.js`](../js/blog.js) en `[data-reading-time]`.
- En la **tarjeta del home**: `renderPosts()` en `main.js` hace `fetch` del artículo y lo cuenta.

No escribas el número a mano (salvo en posts `external`, con `minutes`).

## SEO / social (ya incluido en la plantilla)

Por cada post, reemplaza en el `<head>`: `<title>`, `description`, `canonical`, los `og:*`/`twitter:card`, y el bloque **JSON-LD** (`headline`, `description`, `datePublished`, `dateModified`, `keywords`).

- Actualiza la **fecha** en 2 lugares al publicar: el atributo `datetime`/texto del `<time>` y `datePublished`/`dateModified` del JSON-LD.
- Imagen para compartir: lo ideal es una propia de **1200×630** px por post; si no, queda la de perfil.

## Checklist antes de publicar

- [ ] `slug` en kebab-case y registrado en `posts` de `main.js`.
- [ ] `tag` de la página = `tag` del post.
- [ ] `<title>`, `description`, `canonical` actualizados.
- [ ] `og:*` y JSON-LD actualizados (incluida la **fecha** en los 2 lugares).
- [ ] Un solo `<h1>`; encabezados sin saltos.
- [ ] Imágenes con `alt`; enlaces descriptivos.
- [ ] Probado con servidor (`python3 -m http.server`), no con `file://` (el cálculo de la tarjeta usa `fetch`).

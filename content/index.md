---
layout: docs
---

# Hello World

Visit the [Docus documentation](https://docus.dev) to learn more about theme creation.

:IconStrapiMonogram{.h-10.w-auto.text-primary-500.hover:text-primary-400}

::mermaid{id="recv-middleware"}
sequenceDiagram
  Client->>Strapi: [GET] /api/restaurants/1
  Note over Strapi: Check HITPASS
  opt HITPASS=true
    Note over Strapi: Call original controller
    Strapi->>Client: Return fresh data
  end
  opt HITPASS=false
    Note over Strapi: Generate cache key:<br />/api/restaurants/1?&
    Strapi->>Cache Store: Has cache?
    alt HIT
      Cache Store->>Strapi: Yes: HIT
      Strapi->>Client: Return cached data
    else MISS
      Cache Store->>Strapi: No: MISS
      Note over Strapi: Call original controller
      Strapi-->>Cache Store: Status between 200 and 300:<br />Store data in cache
      Strapi->>Client: Return fresh data
    end
  end
::
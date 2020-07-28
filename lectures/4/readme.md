name: inverse
layout: true
class: center, middle, inverse
---
# Software Architecture
## Component Architecture

.footnote[<a href="mailto:christian.ribeaud@fhnw.ch">Christian Ribeaud</a>]
---
layout: false
## Component principles

Components are the smallest entities that can be deployed as part of a system, for example **jar** or DLL files.

[Clean architecture](https://www.amazon.de/dp/0134494164/) suggests **six** principles to design components. The former **three** are about _component cohesion_, i.e. how to group classes together. The latter three are about _component coupling_, i.e. how to deal with relationships among components.
---
layout: false
.left-column[
  ## Cohesion
  ### REP
]
.right-column[
  ## The Reuse/Release Equivalence Principle
]
---
layout: false
.left-column[
  ## Cohesion
  ### REP
  ### CCP
]
.right-column[
  ## The Common Closure Principle
]
---
layout: false
.left-column[
  ## Cohesion
  ### REP
  ### CCP
  ### CRP
]
.right-column[
  ## The Common Reuse Principle
]
---
layout: false
.left-column[
  ## Coupling
  ### REP
  ### CCP
]
.right-column[
  ## The Reuse/Release Equivalence Principle
]
---
https://clevercoder.net/2018/09/08/clean-architecture-summary-review/
Modulare Programmierung
https://github.com/ozlerhakan/java9-module-examples
https://github.com/ribeaud/gradle-jpms-experiments

name: inverse
layout: true
class: center, middle, inverse
---
# Software Architecture
## Design Principles

.footnote[<a href="mailto:christian.ribeaud@fhnw.ch">Christian Ribeaud</a>]
---
template: inverse
# SOLID Principles
---
layout: false
# Why Principles?
- Gives advice on how to approach the design.
- Helps to avoid typical mistakes.
- Principles generates guidelines for action.
- Guidelines for quality assessment. Metrics are derived from principles to make quality measurable.
- Principles are knowledge based on experience:
  - Abstracted from many years of experience.
  - Adopted, confirmed and promulgated by others.
???
Good software systems begin with clean code. On the one hand, if the bricks aren't well made, the architecture of the building doesn't matter much. On the other hand, you can make a substantial mess with well-made bricks. This is where the SOLID principles come in.
---
layout: false
.left-column[
  ## SOLID
  ### S
]
.right-column[
## Single Responsability Principle
An active corollary to [Conway](https://en.wikipedia.org/wiki/Conway%27s_law)'s law: The best structure fo a software system is heavily influenced by the social structure of the organization that uses it so that each software module has one, and only one, reason to change.
]
---
.left-column[
  ## SOLID
  ### S
]
.right-column[
## Minimize Coupling

- No coupling between classes that do not perform a common task.
- Coupling between modules or components only via interfaces

![fh_lower_coupling](lower_coupling.png "Minimize Coupling")
]
---
.left-column[
  ## SOLID
  ### S
]
.right-column[
## Maximize Cohesion

- Tight coupling between classes that perform a common task.
- Classes which perform a common task belong together to the same package.
- Classes which are only weakly coupled belong to different packages (**Separation of Concerns** on _package_ level).

<video width="550" controls>
 <source src="cohesion_and_coupling.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
]
---
.left-column[
  ## SOLID
  ### S
  ### O
]
.right-column[
## OCP: The Open-Closed Principle
Software components should be closed for modification, but open for extension.

### Closed For modification
New features getting added to the software component, should NOT have to modify existing code.

### Open For extension
A software component should extendable to add a new feature or to add a new behavior to it.
]
---
.left-column[
  ## SOLID
  ### S
  ### O
]
.right-column[
### Possible implementations of this principle
- Create subclass and overwrite method.
- Reuse existing classes by delegation.

### Frameworks are examples for the application of this principle:
- To use frameworks, base (_abstract_) classes must be extended, _interfaces_ must be implemented.
- Frameworks are usually 3th-party software and as such not changeable (except with Open Source)
]
---
.left-column[
  ## SOLID
  ### S
  ### O
  ### L
]
.right-column[
## LSP: The Liskov Substitution Principle
In 1988, [Barbara Liskov](https://en.wikipedia.org/wiki/Barbara_Liskov) wrote the following as a way of defining subtypes:

_Objects should be replaceable with their subtypes without affecting the
correctness of the program._

### The Square/Rectangle Problem
The canonical example of violation of the **LSP** is the famed (or infamous, depending on your perspective) square/rectangle problem.

![fh_liskov](liskov.png "Liskov")
]
???
```
Rectangle r = ...
r.setW(5);
r.setH(2);
assert(r.area() == 10)
```
---
.left-column[
  ## SOLID
  ### S
  ### O
  ### L
]
.right-column[
<video width="550" controls>
 <source src="liskov.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
### Solution to first pattern
Break the hierarchy

### Solution to second pattern
"Tell, don't ask"
]
---
layout: false
.left-column[
  ## SOLID
  ### S
  ### O
  ### L
  ### I
]
.right-column[
## ISP: The Interface Segregation Principle
No client should be forced to depend on methods it does NOT use.
]
---
layout: false
.left-column[
  ## SOLID
  ### S
  ### O
  ### L
  ### I
  ### D
]
.right-column[
## DIP: The Dependency Inversion Principle
This principle tells us that the most flexible systems are those in which source code dependencies refer only to abstractions, not to concretions.
]
---
.left-column[
  ## Exercises
]
.right-column[
(For each principle, I should prepare a starting example in **GitHub** classroom)
- Slide 16 of se8full.pdf
]
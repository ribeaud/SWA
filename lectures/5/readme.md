name: inverse
layout: true
class: center, middle, inverse
---
# Software Architecture
## Organizing Code

.footnote[<a href="mailto:christian.ribeaud@fhnw.ch">Christian Ribeaud</a>]
???
- https://clevercoder.net/2018/09/08/clean-architecture-summary-review/
---
template: inverse
# Package by Component
???
- p. 303
- http://www.codingthearchitecture.com/2015/03/08/package_by_component_and_architecturally_aligned_testing.html
---
layout: false
How to organize code? They have been and had lots of discussion about _package by layer_ vs _package by feature_.
### Package by Layer
Traditional horizontal layered architecture:
* Quick way to get something up and running without a huge amount of complexity.
* The three large buckets of code isn't sufficient for big projects. Further modulization needed.

![fh_350_package-by-layer](package-by-layer.png "Package by Layer")
???
- Classical **MVC**
- Layered architecture doesn't scream anything about the business domain (**Uncle Bob**)
- horizontal slicing/layering
---
### Package by Feature
![fh_350_package-by-feature](package-by-feature.png "Package by Feature")

Aka _vertical slicing_:
* Easier to navigate the codebase when you want to make a change to a feature
???
- We can now see that this code base has something to do with orders rather then the web, services, and repositories.
- You can still have a layered architecture, but the layers reside inside the feature packages.
---
### Package by Component
![fh_350_package-by-component](package-by-component.png "Package by Component")

This is a hybrid approach with increased modularity and an architecturally-evident coding style as the primary goals:
* A **component** in this sense is a combination of the business and data access logic related to a specific thing
* Some sort of presentation layer (web UI, desktop UI, API, standalone app, etc) built on top
???
If that new feature set **C** needs to access data related to **A** and **B**, it is forced to go through the public interface of components **A** and **B**. No direct access to the data access layer is allowed, and you can enforce this if you use **Java**'s access modifiers properly (you have to stop using the `public` keyword by default).
---
template: inverse
# Modular Programming
---
**Modular programming** is a software design technique that emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality.

in **Python** a _package_ is a collection of _modules_, while in **Java 9** a _module_ is a collection of _packages_ with enhanced access control.
---
.left-column[
  ## JPMS
]
.right-column[
According to [JSR 376](https://openjdk.java.net/projects/jigsaw/spec/), the key goals of modularizing the Java SE platform are:
- **Reliable configuration**. The module system checks whether a given combination of modules satisfies all dependencies before compiling or running code. This leads to fewer run-time errors.
- **Strong encapsulation**. Modules explicitly choose what to expose to other modules. Accidental dependencies on internal implementation details are prevented.
- **Scalable development**. Explicit boundaries enable teams to work in parallel while still creating maintainable codebases. Only explicitly exported public types are shared, creating boundaries that are automatically enforced by the module system.
- **Security**. Strong encapsulation is enforced at the deepest layers inside the JVM. This limits the attack surface of the Java runtime. Gaining reflective access to sensitive internal classes is not possible anymore.
- **Optimization**. Because the module system knows which modules belong together, including platform modules, no other code needs to be considered during **JVM** startup.
]
???
- https://www.oreilly.com/library/view/java-9-modularity/9781491954157/ch01.html
- https://blog.codefx.org/java/java-module-system-tutorial/
- `java --list-modules`
- `java --describe-module java.sql`
---
## Abilities

- You can explain basic differences between _classes_, _objects_ and _modules_.
- You can describe basic scenarios for using _modules_.
- You can apply and evaluate technical support for modular programming.
---
.left-column[
  ## Exercises
  ### modserv.cli
]
.right-column[
[modserv.cli](https://github.com/ribeaud/ch.fhnw.swa.modserv.cli)
]
---
.left-column[
  ## Exercises
  ### modserv.cli
  ### modserv
]
.right-column[
[modserv](https://github.com/ribeaud/ch.fhnw.swa.modserv)
]
???
- Possible extensions:
  - Add some tests to the exercises
  - Migrate a legacy application to module system
- https://blog.codefx.org/java/java-module-system-tutorial/
- https://melix.github.io/javaone-2017-jigsaw/
- https://medium.com/@tutorialspointexamples/building-java-9-modules-731ec904432a
---
.left-column[
  ## Exercises
  ### modserv.cli
  ### modserv
  ### Metrics
]
.right-column[
]
???
- Calculate cyclic dependencies (as well?)

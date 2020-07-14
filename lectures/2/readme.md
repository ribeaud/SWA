name: inverse
layout: true
class: center, middle, inverse
---
# Software Architecture
## Object-Oriented Programming

.footnote[<a href="mailto:christian.ribeaud@fhnw.ch">Christian Ribeaud</a>]
---
template: inverse
# Encapsulation
---
layout: false
.left-column[
  ## Encapsulation
  ### Information Hiding
]
.right-column[
**Encapsulation** refers to the bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object's components.

### Information Hiding
- Separates the **How** (implementation) from the **What** (interface).
- Prevents unwanted couplings between parts of the system.
- Prevents users from setting the internal data of the component into an invalid or inconsistent state.
- It reduces complexity.
]
---
.left-column[
  ## Encapsulation
  ### Information Hiding
  ### Examples
]
.right-column[
```java
public class NoInformationHidingNorEncapsulation {
  public ArrayList points = new ArrayList();
}
```
```java
public class NoInformationHidingButEncapsulation {
  private ArrayList points = new ArrayList();
  public ArrayList getPoints() {
    return points;
  }
}
```
```java
public class InformationHidingAndEncapsulation{
  private ArrayList points = new ArrayList();
  public List getPoints(){
    return points;
  }
}
```
```java
public class InformationHidingWithoutEncapsulation {
  public List points = new ArrayList();
}
```
]
???
- What is the problem here?
---
template: inverse
# Inheritance
---
layout: false
.left-column[
  ## Inheritance
]
.right-column[
]
---
template: inverse
# Polymorphism
---
layout: false
.left-column[
  ## Polymorphism
]
.right-column[
]

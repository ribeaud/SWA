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
- Allows independent development of modules, components or classes (given the interface is stable and well documented).
- Allows testability of individual modules, components, or classes (dummies and mocks of the interfaces replace the rest of the systems).
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
- In **Java**, encapsulation is done using classes, interfaces, access modifiers (public, protected, private, and _default_), setters and getters.
---
template: inverse
# Inheritance
---
layout: false
.left-column[
  ## Inheritance
]
.right-column[
**Inheritance** is a mechanism where a new class is derived from an existing class. In **Java**, classes can inherit the methods and properties of another class.
![fh_500_inheritance](inheritance.jpg "Inheritance")
Unproblematic if:
- **B** extends **A**. No operation is overridden.
- **B** extends operationen which MUST be overridden (i.e., `init()` of **Applet** class).
]
???
- An _is a_ relationship
- The downside of this technique is that changing the parent class's implementation will create cascading effects through every subclass. Wait — isn’t that a benefit? We’ve now arrived at the double-edged sword that is inheritance, in that with great power comes great responsibility.
---
layout: false
.left-column[
  ## Inheritance
  ### Problematic
]
.right-column[
```java
import java.util.*;
public class MonitoredSet extends HashSet {
  private int addCounter;
  public int getAddCounter() {
    return addCounter;
  }
  public boolean add(Object object) {
    addCounter++;
    return super.add(object);
  }
  public boolean addAll(Collection collection) {
    addCounter += collection.size();
    return super.addAll(collection);
  }
}
```
This leads to an `AssertionError` in following code fragment:
```java
MonitoredSet set = new MonitoredSet();
set.addAll(Arrays.asList("a", "b", "c"));
assert set.getAddCounter() == 3;
```
]
???
- Why?
---
layout: false
.left-column[
  ## Inheritance
  ### Problematic
  ### Composition
]
.right-column[
**Solution**: `MonitoredSet` delegates to `HashSet`:
```java
import java.util.*;
public class MonitoredSet implements Set{
  private Set set = new HashSet();
  private int addCounter;
  public int getAddCounter() {
    return addCounter;
  }
  public boolean add(Object object) {
    addCounter++;
    return set.add(object);
  }
  public boolean addAll(Collection collection) {
    addCounter += collection.size();
    return set.addAll(collection);
  }
  ...
}
```
![fh_350_composition](composition.png "Composition")
]
???
- A _has a_ relationship
- Association vs. aggregation
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

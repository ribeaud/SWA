### 1. What does "S" in SOLID stands for?

* [ ] Single Functionality Principle
* [ ] Strong Foundation Principle
* [ ] Single Responsibility Principle
* [ ] Strong Responsibility Principle

###  2. What's the real name for "Uncle Bob"?

* [ ] Uncle Scrooge
* [ ] Bob Marley
* [ ] Robert C Morgan
* [ ] Robert C Martin

### 3. Which of the following principle going to help you to create a humanoid robot class, when you already have fully functional `Human` and `Machine` classes? You would need most of the methods in `Human` and `Machine`'s contract.


* [ ] Single responsibility principle
* [ ] Liskov substitution principle
* [ ] Interface segregation principle
* [ ] Dependency inversion principle

### 4. Which of the following will break Single Responsibility Principle?

* [ ] Having multiple classes taking up exact same responsibility
* [ ] Having multiple methods in same class
* [ ] A class having: `add` and `multiply` methods
* [ ] A class having: `subtract` and `saveToDatabase` methods

### 5. Swiss Army Knife breaks which of the following principles?

* [ ] Single Responsibility Principle
* [ ] Open Closed Principle
* [ ] Liskov Substitution Principle
* [ ] Dependency Inversion Principle

### 6. Which of the principles is broken in the following code:
```java
package com.mk.xebia.solid.controllers;

import com.mk.xebia.solid.services.HelloWorldService;

public class HelloWorldController {

  private HelloWorldService helloWorldService = new HelloWorldService();

  public String greet(){
    return "The message is :: " + this.helloWorldService.getMessage();
  }
}
```
* [ ] Singe Responsibility Principle
* [ ] Dependency Inversion Principle
* [ ] Interface Segregation Principle
* [ ] Liskov Substitution Principle

### 7. The main use of `@Autowired` annotation in **Spring** Framework is to achieve

* [ ] Dependency Inversion
* [ ] Open Closeness
* [ ] Interface Segregation
* [ ] Dependency Injection

### 8. Which of the following principle asks us to implement Is-A relationship carefully?

* [ ] Liskov Substitution Principle
* [ ] Dependency Inversion Principle
* [ ] Open Close Principle
* [ ] Interface Segregation Principle

### 9. Which principle states that "Clients should not be forced to depend on methods that they do not use"

* [ ] Single Responsibility Principle
* [ ] Interface Segregation Principle
* [ ] Dependency Inversion Principle
* [ ] Liskov Substitution Principle

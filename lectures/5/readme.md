name: inverse
layout: true
class: center, middle, inverse
---
# Software Architecture
## Architecture Principles

.footnote[<a href="mailto:christian.ribeaud@fhnw.ch">Christian Ribeaud</a>]
???
- https://clevercoder.net/2018/09/08/clean-architecture-summary-review/
- https://pusher.com/tutorials/clean-architecture-introduction
---
template: inverse
# Clean Architecture
---
layout: false
![fh_450_messy](messy.jpeg "Messy Architecture")

In the image above, if you want to replace the scissors with a knife, what do you have to do?

You have to untie the strings that go to the pen, the ink bottle, the tape and the compass. Then you have to retie those items to a knife.

Maybe that works for the knife, but what if the pen and the tape say, "Wait, we needed scissors." So now the pen and the tape don't work and have to be changed, which in turn affects the objects tied to them.

It's a mess.
---
![fh_450_clean](clean.jpeg "Clean Architecture")

Now how do we replace the scissors? We only have to pull the scissors' string out from under the Post-it notes and add a new string that is tied to a knife. Way easier. The Post-it notes don't care because the string wasn't even tied to it.
???
The architecture represented by the second image was obviously easier to change. As long as the Post-it notes don't need to be changed often, this system will be very easy to maintain. This same concept is the architecture that will make your software easy to maintain and change.
---
.left-column[
## Clean Architecture
### Purpose
]
.right-column[
The purpose of architecture is to facilitate the development, deployment, operation, and maintenance of a the system, leaving as many options open as possible, for as long as possible.

- **Development**. A software system that is hard to develop is not likely to have a long and healthy lifetime.
- **Deployment**. To be effective, a software system must be deployable. The higher the cost of deployment, the less useful the system is.
- **Operation**. Software systems that have inefficient architectures can often be made to work effectively simply by adding more storage and more servers.
- **Maintenance**. Of all the aspects of a sofware system, maintenance is the most costly.
- **Keeping Options Open**. The way you keep software **soft** is to leave as many options open as possible, for as long as possbile.
]
???
- **Deployment** regarding _micro-service_ architecture (development flexibility vs. development complexity)
- **Operation**: architectures that impede operation are not as costly as architectures that impede development, deployment, and maintenance.
- **Maintenance**: the primary cost of maintenance is in _spelunking_ and risk. _Spelunking_ is the cost of digging through the existing software, trying to determine the best place and the best strategy to add a new feature or to repair a defect.
- Details include IO devices, databases, web systems, servers, frameworks, communication protocols, and so forth.
---
.left-column[
## Clean Architecture
### Purpose
### Characteristics
]
.right-column[
- _Independent of frameworks_. The architecture does not depend on the existence of some library of feature-laden software.
- _Testable_. The business rules can be tested without the UI, database, web server, or any other external element.
- _Independent of the UI_. The UI can change easily, without changing the rest of the system.
- _Independent of the database_. You can swap out **Oracle** or **SQL Server**.
- _Independent of any external agency_. In fact, your business rules don't know anything at all about the interfaces to the outside world.
]
---
![fh_onion_architecture](onion-architecture.png "Onion Architecture")
- **Presenter**. The **Presenter** is a testable object. Its job is to accept data from the application and format it for presentation.
- **Gateway**. See [Table Data Gateway](https://www.martinfowler.com/eaaCatalog/tableDataGateway.html).
???
- **Presenter** (_Humble Object_). If the application wants a `Date` or a `Currency`, then the **Presenter** will format it to a string, that can be placed in the **View Model**.
---
.left-column[
## Clean Architecture
### Purpose
### Characteristics
### Dependency Rule
]
.right-column[
The concentric circles represent different areas of software.
- The further in you go, the higher level the software becomes.
- Nothing in an inner circle can know anything at all about something in an outer circle.
]
---
.left-column[
## Separating Layers
### Entities
]
.right-column[
Objects embodying a small set of Critical Business Rules.

Even if there were no application, these rules would still exist. For example, charging 10% interest on a loan is a rule that a bank might have. This would be true whether the interest was calculated on paper or using a computer.

**Entities** may be shared across apps in the same enterprise. They are **Enterprise Business Rules**.
]
---
.left-column[
## Separating Layers
### Entities
### Use-cases
]
.right-column[
Not all Business Rules are as pure as **Entities**. The **Use Cases** are the **Business Rules** for a specific application. They are **Application Business Rules**.

A use case is an object. It has one or more functions that implement the application-specific business rules.

High-level concepts, such as **Entities**, know nothing of lower-level concepts, such as use cases.
]
???
- **Entities** are higher level because they are farther from the inputs and outputs of the system.
- **Use-cases** depend on **Entities**; **Entities** do not depend on use cases.
---
.left-column[
## Separating Layers
### Entities
### Use-cases
### Adapters
]
.right-column[
The **Adapters**, also called **Interface Adapters**, are the translators between the domain and the infrastructure. For example, they take input data from the GUI and repackage it in a form that is convenient for the **Use Cases** and **Entities**.
]
---
.left-column[
## Separating Layers
### Entities
### Use-cases
### Adapters
### Frameworks and drivers
]
.right-column[
This layer is where all the I/O components go: the UI, database, web frameworks, the view of **MVC**, devices, etc.

It's the most volatile layer. Since the things in this layer are so likely to change, they are kept as far away as possible from the more stable domain layers. Because they are kept separate, it's relatively easy make changes or swap one component for another.
]
---
template: inverse
# Screaming Architecture
---
When you look at the top-level directory structure, and the source files in the highest-level package, do the scream _Health Care Systems_, or _Accounting Systems_, or _Inventory Management System_? Or do they scream _Rails_, or _Spring/Hibernate_, or _ASP_?
- Architectures are NOT about frameworks.
- Frameworks are tools, not ways of life.

### Question
Does the fact that your system is delivered on the web dictate the architecture of your system?
???
- https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html
- Frameworks could support good architecture decisions (see **MVC** in **Grails**)
???
- _Of course not!_ The Web is a delivery mechanism, and your application architecture should treat it as such. The fact that your application is delivered over the web is a detail and should not dominate your system structure.
---
.left-column[
  ## Screaming Architecture
  ### Testable
]
.right-column[
If you system architecture is all about the use cases, and if you have kept your frameworks at arms-length. Then you should be able to unit-test all those use cases without any of the frameworks in place.
]
???
- You shouldn’t need the web server running in order to run your tests.
- You shouldn’t need the database connected in order to run your tests.
- Your business objects should be plain old objects that have no dependencies on frameworks or databases or other complications.
- Your use case objects should coordinate your business objects. And all of them together should be testable in-situ, without any of the complications of frameworks.
---
.left-column[
  ## Exercises
  ### Crossing Boundaries
]
.right-column[
## Crossing Boundaries
- Which data crosses the boundaries
]
???
- p. 207
---
.left-column[
  ## Exercises
  ### Crossing Boundaries
  ### Typical Scenario
]
.right-column[
## Typical Scenario
]
???
- p. 207-208
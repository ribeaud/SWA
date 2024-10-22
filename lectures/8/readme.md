name: inverse
layout: true
class: center, middle, inverse
---
# Software Architecture
## Architecture Patterns

.footnote[<a href="mailto:christian.ribeaud@fhnw.ch">Christian Ribeaud</a>]
???
---
template: inverse
# Excursus: MMP with Maven
---
layout: false
.left-column[
  ## MMP
  ### Exercise
]
.right-column[
1. Install **Maven** via [homepage](http://maven.apache.org/download.cgi) or via [sdkman](https://sdkman.io/)
1. Create a folder **maven-multi-module** and `cd maven-multi-module`
1. ```mvn archetype:generate -DgroupId=ch.fhnw.swa.myshop -DartifactId=parent```
1. Review and correct generated **POM** file
1. ```mvn archetype:generate -DgroupId=ch.fhnw.swa.myshop -DartifactId=app``` after `cd parent`
1. Run `mvn clean package` in _app_ folder
]
---
layout: false
.left-column[
  ## MMP
  ### Exercise
  ### Questions
]
.right-column[
1. What is Maven **POM**?
1. What is Maven **BOM**?
]
???
1. Maven **POM** (_Project Object Model_) is an `XML` file that contains information and configurations (about the project) that are used by **Maven** to import dependencies and to build the project.
2. **BOM** stands for _Bill Of Materials_.
---
layout: false
.left-column[
  ## MMP
  ### Exercise
  ### Questions
  ### Links
]
.right-column[
* https://github.com/ribeaud/maven-multi-module
* https://www.baeldung.com/maven-multi-module
* https://www.baeldung.com/spring-maven-bom
* https://spring.io/guides/gs/multi-module/
]
---
template: inverse
# Layers
---
layout: false
.left-column[
  ## Layers
  ### Definition
]
.right-column[
The **Layers** architectural pattern helps to structure applications that can be decomposed into groups of subtasks in which each group of subtasks is at a particular level of abstraction.

![fh_layers](layers.png "Layers")
]
???
- Most common architecture
- Höhere Layer haben die Kontrolle und ist von unterem Layer abhängig
- Unterer Layer ist von oberen Layer unabhängig
---
layout: false
.left-column[
  ## Layers
  ### Definition
  ### Examples
]
.right-column[
## OSI Model
**OSI** (_Open Systems Interconnection_) is a reference model for how applications communicate over a network:
- 7 Layers
- Not used as-is. We prefer the TCP/IP model (similar concepts, slightly different layers).

![fh_layers_model](layers_model.png "Layers Model")
]
???
- https://www.youtube.com/watch?v=LANW3m7UgWs
- https://medium.com/@tomanagle/the-osi-model-explained-in-simple-terms-2abc3c7adadc
- https://www.guru99.com/difference-tcp-ip-vs-osi-model.html
- What is a **layer 8** problem?
---
layout: false
.left-column[
  ## Layers
  ### Definition
  ### Examples
]
.right-column[
  ## Java Application

![fh_java_application](java_application.jpg "Java Application")
]
???
- A **Virtual Machine** is a software implementation of a physical machine.
- `.class` is input into the **JVM**
- At the very last end, we have _native_ calls
---
layout: false
.left-column[
  ## Layers
  ### Definition
  ### Examples
  ### Multitier
]
.right-column[
Components within the layered architecture pattern are organized into horizontal layers, each layer performing a specific role within the application (e.g., _presentation logic_ or _business logic_).

Although the layered architecture pattern does not specify the number and types of layers that must exist in the pattern, most layered architectures consist of four standard layers: _presentation_, _business_, _persistence_, and _database_.

![fh_450_multi_layered](multi_layered.png "Multi Layered")
]
???
- https://en.wikipedia.org/wiki/Multitier_architecture
- https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html: In some cases, the business layer and persistence layer are combined into a single business layer, particularly when the persistence logic (e.g., **SQL** or **HSQL**) is embedded within the business layer components. Thus, smaller applications may have only three layers, whereas larger and more complex business applications may contain five or more layers.
---
layout: false
.left-column[
  ## Layers
  ### Definition
  ### Examples
  ### Multitier
  ### Three-tier
]
.right-column[
![fh_500_three_tier](three_tier.svg "Three-tier")
]
???
- The client tier never communicates directly with the data tier; in a three-tier model all communication must pass through the middle tier. Conceptually the three-tier architecture is linear. However, the **MVC** architecture is triangular: the view sends updates to the controller, the controller updates the model, and the view gets updated directly from the model.
- **MVC** is the presentation layer framework for the layering architecture, and N-tier is a physical deployment architecture style.
- However in recent years the *model* layer in **MVC** has expanded: from pure (data) *model* to (data + domain) *model*.
---
template: inverse
# Model-View-Controller
---
layout: false
.left-column[
  ## MVC
  ### Definition
]
.right-column[
**MVC** divides an interactive application into _three_ components.

The **Model** contains the core functionality and data. **Views** display information to the
user. Controllers handle user input. **Views** and **Controllers** together comprise the user interface.

A change-propagation mechanism ensures consistency between the user interface and the model.

![fh_350_mvc](mvc.png "MVC")
]
???
![fh_350_model_multiple_views](model_multiple_views.png "Model with two Views")
---
layout: false
.left-column[
  ## MVC
  ### Definition
  ### Model
]
.right-column[
## Model
Data and business logic.
- **Model** is independent of **Controller** and **View**
- Defines interface for:
  - Read data
  - Manipulate data and
  - Initiate data processing (synchronous or asynchronous)
  - Data changed listener registration/deregistration
]
---
layout: false
.left-column[
  ## MVC
  ### Definition
  ### Model
  ### View
]
.right-column[
## View
Presentation of the data (or a part of it) as a graphic and/or as text.
- Data output
- Depending on the **Model**:
  - Registers itself as a data changed listener to the **Model**
  - Reads data from the **Model**
- Specific to a certain **Model**
]
---
layout: false
.left-column[
  ## MVC
  ### Definition
  ### Model
  ### View
  ### Controller
]
.right-column[
## Controller
Control of **Model** and **View** by user interactions.
  - Data input
  - Depending on the **Model**: data manipulation and processing
  - Influences state of the view
  - Often strong coupling between **View** and **Controller**
]
---
layout: false
.left-column[
  ## MVC
  ### Definition
  ### Model
  ### View
  ### Controller
  ### Class diagram
]
.right-column[
![fh_mvc_class_diagram](mvc_class_diagram.png "MVC Class Diagram")

## Example

**Java Swing** Library, z.B. `JTree`:
- Model(s): `TreeModel`, `SelectionModel`
- View(s): `TreeCellRenderer`, `TreeCellEditor`
- Controller: `TreeUI`
]
???
![fh_350_mvc_flow](mvc_flow.png "MVC Flow")
- Traditionally used for desktop graphical user interfaces (GUIs), this pattern has become popular for designing web applications.
- Derivations:
  - [MVP](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter)
  - [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)
- https://blog.gisspan.com/2017/02/Redux-Vs-MVC,-Why-and-How.html
- https://github.com/stemmlerjs
---
layout: false
.left-column[
  ## MVC
  ### Definition
  ### Model
  ### View
  ### Controller
  ### Class diagram
  ### Exercise
]
.right-column[
1. Checkout project [ch.fhnw.swa.mvc.adder](https://github.com/ribeaud/ch.fhnw.swa.mvc.adder) (**master** branch)
1. Execute `./gradlew runSimple` vs. `./gradlew runWithHex`
1. Extend this program so that values are displayed or can be entered as _hexadecimal_ numbers. You only need to connect the properties appropriately. Hint: use the given `stringFromInt` method.
1. Split the code from one class into a total of four classes: `Model`, `View`, `Controller` - each with responsibility according to the **MVC** pattern. In the fourth class (`Main`) only the code which is needed to start the system and to assemble objects of the other three classes.
1. Remove any **JavaFX** dependency from the model but keep the structure.
]
???
- Take Orig > 09 Architekturmuster
- Branch: _solution_ (for 3rd), branch: _mvc_ (for 4th) and branch: _mvc-fx-free_ (for 5th)
---
template: inverse
# Pipes and Filters
---
layout: false
.left-column[
  ## Pipes and Filters
  ### Definition
]
.right-column[
Decompose a task that performs complex processing into a series of separate elements that can be reused.

This can improve performance (parallelization), scalability, testing, and reusability by allowing task elements that perform the processing to be deployed and scaled independently.

![fh_pipes_and_filters](pipes_and_filters.png "Pipes and Filters")
]
???
- https://medium.com/@syedhasan010/pipe-and-filter-architecture-bd7babdb908
- [AWS Step Functions](https://aws.amazon.com/step-functions/)
- Multithreading, queues, ...
---
layout: false
.left-column[
  ## Pipes and Filters
  ### Definition
  ### Examples
]
.right-column[
## Compiler

![fh_compiler](compiler.png "Compiler")

## Unix
Concatenation of simple programs (filters) via the textual input and output using the pipe symbol `|`. Example: list all **Java** source code files of a directory according to the number of lines of code.
```bash
wc *.java | sort -n | awk '/.+java/ {print $1 "\t" $4}'
```
]
???
- [Camel](https://camel.apache.org/)
---
layout: false
.left-column[
  ## Pipes and Filters
  ### Definition
  ### Examples
]
.right-column[
## Java Streams
```java
import java.util.*;
import java.util.stream.*;
import java.util.function.*;

int[] vs = {1,2,3,4,5,6,7,8,9,10};
IntPredicate even = x -> x % 2 == 0;
List<Integer> vsList = Arrays.stream(vs)
  .map(x -> x * x)
  .filter(even.negate())
  .mapToObj(Integer::valueOf)
  .collect(Collectors.toList());
```

Infinite stream:

```java
import java.util.stream.*;
import java.math.*;

BigInteger sum = Stream
  .iterate(FIRST_PRIME, BigInteger::nextProbablePrime)
  .limit(100)
  .reduce(BigInteger.valueOf(0), BigInteger::add);
```
]
???
- Examples could be run on https://repl.it/languages/java10
- https://homepages.fhv.at/thjo/lecturenotes/sysarch/pipes-and-filters.html
- Can run in parallel
---
layout: false
.left-column[
  ## Pipes and Filters
  ### Definition
  ### Examples
  ### Characteristics
]
.right-column[
- Each filter is a black box (users of the system don't need to know the logic behind the working of each filter) with a defined interface for data transmission and format.
- Filters can be combined and exchanged as required (loose coupling), assuming the interfaces and data formats fit together.
- Simple filters are easier to combine.
- Filters can data filter, enrich or convert.
- Filters can process the data in one go or in batches (streaming).
- Pull principle: filters actively fetch the data from the pipe.
- Push principle: pipe actively pushes the data into the filter.
- Pipes can work synchronously or asynchronously. In the latter case, they are often queues.
]
???
- https://medium.com/@syedhasan010/pipe-and-filter-architecture-bd7babdb908
- Disadvantages?
  - Addition of a large number of independent filters may reduce performance due to excessive computational overheads.
  - Not a good choice for an interactive system.
  - Pipe-and-filter systems may not be appropriate for long-running computations.
---
.left-column[
  ## Pipes and Filters
  ### Definition
  ### Examples
  ### Characteristics
  ### Exercise
]
.right-column[
* Have a look at [ch.fhnw.swa.camel](https://github.com/ribeaud/ch.fhnw.swa.camel)
* Try to understand the different parts of the program
]
---
template: inverse
# Serverless
---
layout: false
.left-column[
  ## Serverless
  ### Definition
]
.right-column[
Serverless architectures are application designs that incorporate third-party _Backend as a Service_ (**BaaS**) services, and/or that include custom code run in managed, ephemeral containers on a _Functions as a Service_ (**FaaS**) platform.
]
???
- [AWS Lambda](https://aws.amazon.com/lambda/)
- https://martinfowler.com/articles/serverless.html
---
layout: false
.left-column[
  ## Serverless
  ### Definition
  ### Examples
]
.right-column[
## From:
![fh_400_serverless_before](serverless_before.svg "Serverless Before")
## To:
![fh_400_serverless_after](serverless_after.svg "Serverless After")
]
???
In the original version, all flow, control, and security was managed by the central server application. In the **Serverless** version there is no central arbiter of these concerns. Instead we see a preference for **choreography over orchestration**, with each component playing a more architecturally aware role—an idea also common in a microservices approach.
---
layout: false
.left-column[
  ## Serverless
  ### Definition
  ### Examples
  ### Characteristics
]
.right-column[
## Advantages
- Reduced operational cost.
- No server management is necessary.
- Horizontal scaling completely automatic, elastic, and managed by the provider.
- No artifact to create or push beyond the source code itself.
- Stateless functions.
- No need to have an always up and running server.

## Disadvantages
- Not suitable for long-running computation.
- Could be challenging as each function is completely independent.
- Vendor control and lock-in
- No in-server state (so where is the state?)
- Startup latency
- Testing
]
???
- https://stackoverflow.com/questions/11707879/difference-between-scaling-horizontally-and-vertically-for-databases
- DDS p. 81
- https://12factor.net/processes
---
layout: false
.left-column[
  ## Serverless
  ### Definition
  ### Examples
  ### Characteristics
  ### Exercise
]
.right-column[
## FaaS Frameworks
1. [kubeless](https://kubeless.io/)
1. [serverless](https://www.serverless.com/)
1. [AWS SAM](https://github.com/aws/serverless-application-model)

### AWS SAM Installation

1. Installation is **OS** specific. More info could be found [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).

1. Verify installation with `sam --version`.

### Hello World Function

1. Following instructions given [here](https://medium.com/swlh/getting-started-with-aws-sam-step-by-step-guide-c82c27dbb9ac).
1. Success with `curl http://127.0.0.1:3000/hello`:
```json
{"message":"hello world"}
```
]
???
- **serverless**: I am able to test my function locally but could NOT invoke it with `curl`. I have to deploy it to a Cloud provider.
---
template: inverse
# Event-Driven
---
layout: false
.left-column[
  ## Event-Driven
  ### Definition
]
.right-column[
This architecture depends on **Event Producers** (or **Emitters**) and **Event Consumers**. The main idea is to decouple your system’s parts and each part will be triggered when an interesting event from another part has got triggered.

![fh_event_driven](event_driven.png "Event-driven")

Just remember the **Event Producer** does not know which **Event Consumer** listening to which event. Also, other consumers do not know which of them listens to which events. Therefore, the main idea is _decoupling_ the parts of the system.
]
---
layout: false
.left-column[
  ## Event-Driven
  ### Definition
  ### Examples
]
.right-column[
## Examples
- [Java Swing and JavaScript](https://en.wikipedia.org/wiki/Event-driven_architecture)
- [What is an Event-Driven Architecture?](https://aws.amazon.com/event-driven-architecture/)
- Multiple subsystems must process the same events.
- Real-time processing with minimum time lag.
- High volume and high velocity of data such as **IoT** (sensors), image/video/audio data, etc.
- Logging
]
???
- Remind https://paba.karakun.com/
---
.left-column[
  ## Event-Driven
  ### Definition
  ### Examples
  ### Characteristics
]
.right-column[
## Benefits
- **Producers and consumers are decoupled**
- No [point-to-point](https://medium.com/@ramapuram.nagesh/point-to-point-model-p2p-integration-architecture-for-middle-ware-engineering-managers-e2aba3ecaa65) integrations. It's easy to add new consumers to the system.
- Consumers can respond to events immediately as they arrive.
- **Highly scalable and distributed**. It scales extremely well to large number of producers, consumers and messages.
- **Fine-grained communication**. Publishers keep publishing individual fine-grained events instead of waiting for a single aggregated event.
- **Asynchronous communication**. The publisher does not wait for the receiver to process an event before sending the next one.
- **Real-time transmission**. Publishers publish the events as and when they occur in real time to the subscribers. The mode of processing or transmission is real time rather than batch processing.
]
---
.left-column[
  ## Event-Driven
  ### Definition
  ### Examples
  ### Characteristics
]
.right-column[
## Challenges
![fh_500_two_hard_problems](two_hard_problems.png "Two hard problems")

See [TwoHardThings](https://martinfowler.com/bliki/TwoHardThings.html) as well.
### Exactly Once
The producer sends a message exactly once, and the consumer processes it exactly once.
]
???
Each consumer type typically runs in multiple instances, for resiliency and scalability. This can create a challenge if the events must be processed in order (within a consumer type), or if the processing logic is not idempotent.
* _Atmost once_. The producer sends a message, and the consumer application may / may not receive it.
* _Atleast once_. The producer sends a message, and the consumer may process duplicate instances of the message.
---
.left-column[
  ## Event-Driven
  ### Definition
  ### Examples
  ### Characteristics
  ### Links
]
.right-column[
## Links
- [Apache Kafka](https://www.youtube.com/watch?v=06iRM1Ghr1k)
- [Event Driven Architecture](https://pradeeploganathan.com/architecture/event-driven-architecture/)
- [Microsoft Docs](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven)
]
---
.left-column[
  ## Event-Driven
  ### Definition
  ### Examples
  ### Characteristics
  ### Links
  ### Exercise
]
.right-column[
1. Clone https://github.com/ribeaud/spring-boot-kafka (inspired by https://www.baeldung.com/spring-kafka)
1. Run `docker-compose up` after `cd src/main/docker`
1. Start `./mvnw spring-boot:run`
1. Try to understand
]
???
- https://howtodoinjava.com/kafka/spring-boot-with-kafka/
- https://github.com/iluwatar/java-design-patterns/tree/master/event-driven-architecture
---
template: inverse
# Microservices
---
layout: false
.left-column[
  ## Microservices
  ### Definition
]
.right-column[
Microservices architecture has become the most popular architecture in the last few years.

It depends on developing small, independent modular services where each service solves a specific problem or performs a unique task and these modules communicate with each other through well-defined API to serve the business goal.

![fh_microservices](microservices.png "Microservices")
]
---
layout: false
.left-column[
  ## Microservices
  ### Definition
  ### Characteristics
]
.right-column[
## Benefits
- **Agility**. Deployed independently.
- **Small, focused teams**. Single feature team.
- **Small code base**. Single business capability.
- **Mix of technologies**
- **Fault isolation**. Won't disrupt the entire application.
- **Scalability**. Can be scaled independently. Use of an orchestrator.
- **Data isolation**. Easier to perform schema updates (only a single microservice is affected).
]
---
layout: false
.left-column[
  ## Microservices
  ### Definition
  ### Characteristics
]
.right-column[
## Challenges
- **Complexity**. Request traceability is complex.
- **Development and testing**. As a whole. Service dependency.
- **Lack of governance**. Decentralized approach, need for project-wide standards.
- **Network congestion and latency**. Too long chain of service dependencies.
- **Versioning**. Service update must not break services depending on it.
- **Skillset**. Microservices are highly distributed systems.
]
???
- **Uncle Bob** is more critical (p. 239):
  - Services could be strongly coupled by the data they share (_Decoupling Fallacy_)
  - Services cannot always be independently developed, deployed, and operated. To the extend that they are coupled by data or behavior, the development, deployment, and operation must be coordinated.
---
.left-column[
  ## Microservices
  ### Definition
  ### Characteristics
  ### Links
]
.right-column[
### Links
- [Architektur Spicker on Microservices](Architektur-Spicker3-Microservices.pdf)
- [Microservices architecture style (Microsoft)](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices)
- [SOLID and Microservices](https://www.pluralsight.com/guides/solid-design-microservices)
]
---
.left-column[
  ## Microservices
  ### Definition
  ### Characteristics
  ### Links
  ### Exercise
]
.right-column[
1. Clone https://github.com/ribeaud/monolith-to-microservices
1. Follow the instructions and analyse the move from _monolith_ to _microservices_
]
???
- More [exercise](https://github.com/aws-samples/unishop-monolith-to-microservices) (**AWS** specific) on _monolith to microservices_ migration
---
## Links
- [Pattern-Oriented Software Architecture](pattern_oriented_software_architecture.pdf)
- [The Architecture of Open Source Applications](http://www.aosabook.org/en/index.html)
- [Free O'Reilly Books](https://github.com/mohnkhan/Free-OReilly-Books)
- [Red Hat Developer eBooks](https://developers.redhat.com/ebooks)
---
## Abilities
- You can name, describe and recognize important architectural patterns.
- You can explain the meaning of layer architectures, distinguish between strict and non-strict layer architectures, check existing layer architectures for correctness and design their own.
- You can explain variants of the **MVC** pattern including **MVVM**, investigate existing architectures for application of these patterns and design architectures based on these patterns.

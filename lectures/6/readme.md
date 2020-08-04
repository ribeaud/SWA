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
  ### Characteristics
]
.right-column[
- **Model**: data and business logic
  - Important: Model is independent of controller and view
  - Defines interface for:
    - Read data
    - Manipulate data and
    - Initiate data processing (synchronous or asynchronous)
    - Registering or deregistering the Data Changed Listener
- **View**: presentation of the data (or a part of it) as a graphic and/or as text
  - Data output
  - Depending on the model:
    - Registers with the model as a data changed listener
    - Reads data from the model
  - Specific to a certain model
- **Controller**: control of model and view by user interactions
  - Data input
  - Depending on the model: data manipulation and processing
  - Influences state of the view
  - Often strong coupling between view and controller
]
---
template: inverse
# Serverless
---
template: inverse
# Event-Driven
---
template: inverse
# Microservices

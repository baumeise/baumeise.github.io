---
title: About
sidebar: auto
sidebarDepth: 2
lang: en-US
---

## Members

### [Moritz Gut](https://github.com/moritzgvt)
**Project Management & Interface**  
Information Design  
University of Media Stuttgart

### [Anja Stütz](https://github.com/anjastvtz)
**Software & Application Development**  
Information & Science  
University of Media Stuttgart

### [Vincent Wengert](https://github.com/Vincent-Wengert)
**Software & Hardware Development**  
Business Information Systems  
University of Media Stuttgart

### [Tobias Moser](https://github.com/Tobias-Moser)
**Software & Hardware Development**  
Business Information Systems  
University of Media Stuttgart

### Lecturers
- #### [Dr. Kai Eckert](https://www.hdm-stuttgart.de/studieninhalte/person_view_kuerzel?kuerzel=eckert)
- #### [Magnus Pfeffer](https://www.hdm-stuttgart.de/studieninhalte/person_view_kuerzel?kuerzel=pfeffer)
- #### [Andreas Stiegler](https://www.hdm-stuttgart.de/person_view_kuerzel?kuerzel=stiegler)


## Project

[[toc]]

### Proposal
**"Robots for everybody" – Build a robot for freshmen students to learn python from.**  
The delivery requirements of the course "Robot Didactics" were very openly defined. The aim of the course: To use robotics to introduce freshmen to the programming language Python. It was up to the students to decide whether this was actually a physically built robot or a didactic concept at the end of the semester.

## Project documentation

### First steps
The group started the product conception with the help of a general brainstorming and idea collection. An overview was gained of what was required and with which ideas these requirements could be achieved. In addition, the focus was on incorporating the ideas of each group member in order to establish a common basis. This approach worked well, as it turned out in this phase that all group members had different ideas about the project goal, but would choose a similar approach. As a result, individual roles and focal points for each group member crystallized directly, and an interdisciplinary and diverse approach that would also characterize later group work emerged.

### The idea
In order to set the first cornerstones of the project goal, an easy and fast method from Design Thinking was used. For this method (_"Speedy 8"_), you divide a sheet of paper into eight equally sized rectangles and then try to roughly capture one idea per rectangle within 30 seconds - either graphically or textually. The important thing is that there are no bad ideas. Then the group presents their ideas in turn. During this time, questions can be asked and ideas can be explored. In order to identify the best and most popular ideas and to be able to deepen the discussion, a further evaluation method was used. Each participant is given three points, which can be freely distributed among the individual ideas.

![First ideas with Speedy 8](./first_ideas.png "First ideas with speedy 8")

The following lists the results (Goals) from these methods:

:white_check_mark: **1.0 Extensibility**  
  :negative_squared_cross_mark: 1.1 Generate a "learning effect" through tinkering  
:white_check_mark: **2.0 Remote control**  
:white_check_mark: **3.0 Beautiful chassis**  
:white_check_mark: **4.0 "Mars Rover"-Control**  
  :negative_squared_cross_mark: 4.1 "Labyrinth", automatic drive  
:x: _5.0 Upright positioning of the robot._  
  
<hr>
  
:white_check_mark: **implemented** | :negative_squared_cross_mark: partially implemented | :x: _not implemented_


### Aggregated Objective
Development and conception of a self-construction robot kit for the teaching of programming basics in the first semester Information System of the Information Science program. 
The robot is remote controlled via an interface (web or mobile application). The students program the robot's movements themselves to learn how to use Python. Depending on the use case, the robot can be extended, for example with a pen for Turtle Graphics. The robot should stand upright and should have a display and, if necessary, LEDs to appeal to the students to increase acceptance. 
A quick start guide helps the students to build the robot and to solve problems (e.g. network errors) by themselves.

### Market Research
During the research phase, the findings were mainly based on an analysis of comparable robots, all of which were extremely expensive to purchase and seemed to offer little or no added value compared to the final solution presented. In addition, loose qualitative surveys were conducted from time to time, which were poorly or not at all documented, but helped us a lot in our decision making. 

### Hardware Research
After a rough implementation idea had emerged from the knowledge gained, possibilities were researched to implement it - most importantly at low cost. A mistake during this research phase was the decision for a board including a battery, which however did not provide enough voltage to operate motors – as was noticed later during the prototyping phase. This mistake cost the team the reaching of goal 5.0.

### Implementation
The group met on regular weekly all-day meetings to ensure the successful implementation of the above-mentioned objectives. Thanks to the general commitment and the weekly "block appointments", the numerous problems that arose could be solved quickly and to the overall satisfaction of everyone. The fruits of this work can be found on the Github repository and website, which was also created during this process. 

Versioning the project work on Github was also a good decision, which should pay off in the later course of the project. To achieve a clean separation from our private github accounts we created an [Organization](https://github.com/baumeise) which contains all relevant repositories.
  
<hr>
  
### Final delivery  

![Baumeise team at the Media Night](./baumeise_team_mn.jpg "Team Baumeise")

The finally delivered product was a DIY 3D-printed robot including everything from [building instructions :clipboard:](https://baumeise.github.io/amsel/instructions) to its [open source firmware :file_cabinet:](https://github.com/baumeise/amsel) as well as an [iOS application :iphone:](https://github.com/baumeise/app), a [documentation :vhs:](https://baumeise.github.io/amsel/getting-started) and an indexed [python package :package:](https://pypi.org/project/amselpy/).
  
Further information are provided on the [documentation page](https://baumeise.github.io/amsel).

### Outview
There are many ideas for the further development of the created product. Not least because an intensive examination of a topic always generates new ideas and approaches. Here are some initial suggestions for how the robot could be further evolved:

- Storage of the entered Python commands to establish programmability.
- Code input via web interface
- Extended communication via the display and implementation of further communication possibilities (e.g. sound)
- Significant improvement of the UX. During construction as well as during setup and use.
- Implementation of further sensor technology (e.g. location via wifi or bluetooth)
- Voice control - possibility to set your own voice commands
- Communication between robots (e.g. swarm functionalities)
- Enhanced autonomous drive

# Lesson 1.6: DOM Manipulation, Part 1

---

## Table of Contents

1. Storing HTML Elements
2. DOM Manipulation
3. Updating Images

---
  
#### Quick Points:

- **DOM (Document Object Model)**: It's a blueprint or tree structure of a webpage.
- **Relation between HTML & JavaScript**: HTML documents are transformed into the DOM. With JavaScript, we can manipulate this DOM.


### 1. Storing HTML Elements

#### How to Access HTML Elements:

- Use the `document` object, representing the webpage.
- Access specific elements using selectors.
  
#### Code Example:

```javascript
let paragraph = document.querySelector("p");
```

#### Selectors:

1. **By tag name**: `document.querySelector("div")`
2. **By class**: `document.querySelector(".my-div")`
3. **By ID**: `document.querySelector("#myDiv")`

### 2. DOM Manipulation

#### Basics:

- **Property**: A characteristic or attribute in JavaScript that can be assigned a value.
- `innerHTML` is a common property used to get or set content of an element.
  
#### Code Example:

```javascript
let button = document.querySelector("button");
let header = document.querySelector("h1");

button.addEventListener("click", function() {
    header.innerHTML = "This is important!";
});
```

#### Event Types:

Common event types for `.addEventListener`:

- "click"
- "mouseover"
- "mouseout"
- "keydown"
- "keypress"

### 3. Updating Images

#### How to Update Images:

- `<img>` tags have a `src` attribute, which can be updated with JavaScript using the `src` property.
  
#### Code Example:

```javascript
selector.src = "url";
```


Use this README as a quick reference. Practice makes perfect, so continue to work on projects and exercises to get comfortable with DOM Manipulation!
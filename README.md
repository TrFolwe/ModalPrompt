# ModalPrompt
Easyful prompt modal with HTML5

![image](https://user-images.githubusercontent.com/78105136/217530286-5a54c73e-0b91-43fe-99b0-23149519f8b0.png)

# Include
```html
<script src="prompt-modal.js"></script>
```

# Code
```js
showPrompt("prompt1", document.querySelector("body"), "question", "Question 1?", null, (data) => {
    console.log(data);
});

showPrompt("prompt2", document.querySelector("body"), "input", "Question 2?", [{
    name: "username",
    type: "text",
    placeholder: "Enter username"
}, {
    name: "password",
    type: "password",
    placeholder: "Enter password"
}], (data) => {
    console.log(data);
});
```

for questions: Discord: TrFolwe#5675
let textIndex = 0;
let charIndex = 0;
const texts = [
  "How are you?",
  "I'm fine.",
  "I'm CEO of HNM Studio!",
  "Nice to meet you.",
  "I'm Petch.",
  "I'm 15 years old.",
  "Try Minecraft!",
  "First project is Datapack for Minecraft!",
  "Second is a Discord Bot!",
  "Third is a Line bot!! :D"
];

setTimeout(changeText, 3000);

function changeText() {
  const h1Element = document.querySelector('.p1-1');
  charIndex = 0;
  typeWriter(h1Element, texts[textIndex]);
  textIndex = (textIndex + 1) % texts.length;
  setTimeout(changeText, 3000);
}

function typeWriter(element, text) {
  element.textContent = text.substring(0, charIndex);
  charIndex++;
  if (charIndex <= text.length) {
    setTimeout(typeWriter, 80, element, text);
  }
}

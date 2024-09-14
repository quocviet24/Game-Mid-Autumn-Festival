// Get the suggest button and popup container elements
const suggestBtn = document.getElementById('suggest-btn');
const popupContainer = document.getElementById('popup-container');
const popupText = document.getElementById('popup-text');
const divbutton = document.getElementById("game_btn");
const maxButton = 899;
// Add an event listener to the suggest button
suggestBtn.addEventListener('click', () => {
  // Add additional text or attributes
  const additionalText = "Thuộc tính mới: " + new Date().toLocaleString();
  popupText.textContent = "Dòng thứ ... từ dưới lên. " + additionalText;

  // Show the popup container
  popupContainer.style.display = 'block';
});

// Add an event listener to the popup container to close it when clicked outside
popupContainer.addEventListener('click', (e) => {
  if (e.target === popupContainer) {
    // Hide the popup container
    popupContainer.style.display = 'none';
  }
});

function addButton(){
  var button = document.createElement("button");
  button.textContent="Enter this";
  divbutton.appendChild(button);
}
for(var i =0 ;i<= maxButton;i++)
{
  addButton();
}
var op = 1;
function popup(){
  
}
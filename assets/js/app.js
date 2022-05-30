const StringController = (function () {
  return {
    convertString: function (normalString) {
      let newString = [];
      for (let char = normalString.length - 1; char >= 0; char -- ) {
        newString += normalString[char];
      }
      return newString;
    }
  }
})();

const UIController = (function () {
  const uiSelectors = {
    submitButton: '#btnSubmit',
    userString: '#normalString',
    convertedString: '#message',
    alertBox: '#alert',
  }

  return {
    getSelectors: function () {
      return uiSelectors;
    },

    getStringInput: function () {
      return {
        normalString: document.querySelector(uiSelectors.userString).value
      }
    },

    displayNewString: function (newString) {
      document.querySelector(uiSelectors.convertedString).innerHTML = `${newString}`;
      document.querySelector(uiSelectors.alertBox).classList.remove("invisible");
    }
  }

})();


const AppController = (function (StringController, UIController) {
  const loadEventListeners = function () {
    const uiSelectors = UIController.getSelectors();
    document.querySelector(uiSelectors.submitButton).addEventListener('click', submitString);
  }

  const submitString = function (event) {
    const input = UIController.getStringInput();
    const convertedString = StringController.convertString(input.normalString);
    UIController.displayNewString(convertedString);
    event.preventDefault();
  }
  return {
    init: function () {
      loadEventListeners();
    }
  }
})(StringController, UIController);

AppController.init();
var formationObj = {
    propertyBody: document.body,
    propertyWrapper: document.createElement("div"),
    propertyForm: document.createElement("form"),
    propertyName: document.createElement("h1"),
    propertyButton: document.createElement("button"),
    propertyCounts: 0,

    mainForm: function () {
        this.propertyName.innerHTML =  "Тест по программированию";
        this.propertyButton.innerHTML = "Проверить мои результаты";

        this.propertyWrapper.classList.add('wrapper');
        this.propertyForm.classList.add('wrapper--form');
        this.propertyName.classList.add('wrapper--header');
        this.propertyButton.classList.add('wrapper--button');
        this.propertyButton.classList.add('btn');
        this.propertyButton.classList.add('btn-success');

        this.propertyBody.appendChild(this.propertyWrapper);
        this.propertyWrapper.appendChild(this.propertyForm);
        this.propertyForm.appendChild(this.propertyName);
        this.propertyForm.appendChild(this.propertyButton);
    },

    formationQuestion: function () {
        var questionBox = document.createElement('div');
        var questionName = document.createElement('h2');
        var questionCheckbox;
        var questionLabel;

        questionBox.classList.add('questions');
        questionName.classList.add('questions--header');
        questionName.innerHTML = ((this.propertyCounts+1) + '. Вопрос №' + (this.propertyCounts+1) );
        questionBox.appendChild(questionName);

        this.elementNumberQuestion++;

        for (var i = 0; i < 3; i++) {
            var questionInput = document.createTextNode('Вариант ответа №' + (i + 1) );
            questionLabel = document.createElement('label');
            questionLabel.classList.add('questions--label');

            questionCheckbox =  document.createElement('input');
            questionCheckbox.type = "checkBox";

            questionBox.appendChild(questionLabel);
            questionLabel.appendChild(questionCheckbox);
            questionLabel.appendChild(questionInput);
        }

        this.propertyForm.insertBefore(questionBox, this.propertyButton);
    }
};

formationObj.mainForm();

for (var i = 0; i <= 2; i++) {
    formationObj.formationQuestion();
}
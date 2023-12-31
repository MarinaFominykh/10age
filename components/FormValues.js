export class FormValues {
  constructor({ submitForm }, formSelector) {
    this._submitForm = submitForm;
    this._form = document.querySelector(formSelector);
    this._inputList = Array.from(this._form.querySelectorAll('.input'));
    this._otherInput = this._form.querySelector('.other-sum');
    this._radioButton = this._form.querySelectorAll('.radio');
  }

  //Получение значения полей формы:
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      if (input.type === 'radio' && input.checked) {
        this._formValues[input.name] = input.value;
      } else if (input.type !== 'radio') {
        this._formValues[input.name] = input.value;
      }
    });

    return this._formValues;
  //   const { elements } = this._form;

  //   const data = Array.from(elements)
  //     .map((element) => {
  //       const { name, type } = element;
  //       let value;
  //       if (type === 'checkbox') {
  //         value = element.checked;
  //       }
  //         else if (type === 'radio') {
  //         element.checked ? value = element.value : value = ''
  //       } else value = element.value;
  //       return { name, value };
  //     })
  //     .filter((item) => !!item.value);

  //  return data;
  }
  // Подписки на события
  setEventListeners() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitForm(this._getInputValues());
    });
    this._otherInput.addEventListener('input', (event) => {
      this._radioButton.forEach((item) => {
        item.checked = false;
      });
    });
    this._otherInput.addEventListener('change', (event) => {
      if (!event.target.value) this._radioButton[0].checked = true;
    });
    this._radioButton.forEach((button) => {
      button.addEventListener('change', () => {
        this._otherInput.value = '';
      });
    });
  }

  //Очистка формы
  reset() {
    this._form.reset();
  }
}

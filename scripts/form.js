(() => {
  var selector = document.getElementById('tel');
  var im = new Inputmask('+7 (999)-999-99-99');
  im.mask(selector);

  const validation = new JustValidate('#form');

  validation
    .addField('#name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Не менее 3-х символов',
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'Необходимо ввести имя',
      },
    ])
    .addField('#tel', [
      {
        rule: 'minLength',
        value: 10,
        errorMessage: 'Введите номер',
      },
      {
        rule: 'required',
        errorMessage: 'Необходимо ввести телефон',
      },
    ]);
})();

const controller = new NegociacaoController();
document
    .querySelector('.form')
    .addEventListener('submit',controller.Adiciona.bind(controller));
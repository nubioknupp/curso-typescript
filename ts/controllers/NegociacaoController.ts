class NegociacaoController {
    private _inputData;
    private _inputQuantidade;
    private _inputValor;

    constructor() {

        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }

    Adiciona(evet) {
        event.preventDefault();
        const negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}
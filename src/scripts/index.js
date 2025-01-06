function handleModal () {
    const botaoCadastro = document.querySelector(".botaoRegistro")
    const botaoCadastro2 = document.querySelector(".botaoEntrar")
    const modalContainer = document.querySelector(".modalContainer")

    botaoCadastro.addEventListener('click', () => {
        modalContainer.showModal()

        closeModal();
    })

    botaoCadastro2.addEventListener('click', () => {
        modalContainer.showModal();

        closeModal();
    })

    function closeModal() {
        const button = document.querySelector('#closeModal');
        const modalContainer = document.querySelector('.modalContainer');
    
        button.addEventListener('click', () => {
            modalContainer.close();
        })
    }

}

handleModal() 


// Espera todo o conteúdo do HTML ser carregado antes de executar o script.
// Isso evita erros de tentar manipular elementos que ainda não existem na página.
document.addEventListener('DOMContentLoaded', function() {

    // --- SELEÇÃO DOS ELEMENTOS DO FORMULÁRIO ---
    // Guardamos cada campo do formulário em uma variável para ficar mais fácil de usar.
    // Usamos 'document.querySelector' para encontrar os elementos no HTML.
  
    // --- Bloco 1: Informações da Empresa ---
    const companyNameInput = document.querySelector('input[placeholder="Ex.: Tech Solutions LTDA"]');
    const cnpjInput = document.querySelector('input[placeholder="00.000.000/0001-00"]');
    const emailInput = document.querySelector('input[type="email"]');
    const collabsRadios = document.querySelectorAll('input[name="collabs"]');
    const hubsSelect = document.querySelector('select'); // O primeiro <select> da página
    const areaInput = document.querySelector('input[placeholder="Ex.: Fintech, Varejo, Educação…"]');
  
    // --- Bloco 2: Informações do Projeto ---
    const timeSelect = document.querySelectorAll('select')[1]; // O segundo <select> da página
    const demandInput = document.querySelector('input[placeholder="Ex.: Front-end, Back-end, Landing Page, Dados…"]');
    const descriptionTextarea = document.querySelector('textarea');
    const termsCheckbox = document.querySelector('input[type="checkbox"]');
    const submitButton = document.querySelector('.btn--gold'); // O botão de envio
  
    // Seleciona todos os campos que precisam de validação para facilitar a limpeza dos estilos de erro.
    const allInputs = [
      companyNameInput, cnpjInput, emailInput, hubsSelect, areaInput,
      timeSelect, demandInput, descriptionTextarea, termsCheckbox
    ];
  
  
    // --- EVENTO DE CLIQUE NO BOTÃO "ENVIAR" ---
    // Adiciona um "ouvinte" que executa uma função sempre que o botão for clicado.
    submitButton.addEventListener('click', function(event) {
  
      // Cria um array vazio para armazenar as mensagens de erro.
      let errors = [];
  
      // --- LIMPEZA DE ERROS ANTERIORES ---
      // Antes de validar, remove a classe 'error' de todos os campos.
      // Isso garante que campos corrigidos não continuem vermelhos.
      allInputs.forEach(input => input.classList.remove('error'));
      document.querySelectorAll('input[name="collabs"]').forEach(radio => radio.parentElement.classList.remove('error'));
  
  
      // --- PROCESSO DE VALIDAÇÃO ---
      // Verificamos cada campo. Se um campo for inválido, adicionamos uma mensagem
      // ao array 'errors' e aplicamos a classe CSS 'error' para destacá-lo.
  
      // Validação dos campos de texto (não podem estar vazios)
      if (companyNameInput.value.trim() === '') {
        errors.push('O nome da empresa é obrigatório.');
        companyNameInput.classList.add('error');
      }
      if (cnpjInput.value.trim() === '') {
        errors.push('O CNPJ é obrigatório.');
        cnpjInput.classList.add('error');
      }
      if (emailInput.value.trim() === '') {
        errors.push('O e-mail para contato é obrigatório.');
        emailInput.classList.add('error');
      }
      if (areaInput.value.trim() === '') {
        errors.push('A área de atuação é obrigatória.');
        areaInput.classList.add('error');
      }
  
      // Validação dos 'selects' (uma opção válida deve ser escolhida)
      if (hubsSelect.value === 'Selecione…') {
        errors.push('Selecione se a empresa está vinculada ao Hubs.');
        hubsSelect.classList.add('error');
      }
      if (timeSelect.value === 'Selecione…') {
        errors.push('Selecione em quanto tempo você precisa do projeto.');
        timeSelect.classList.add('error');
      }
  
      // Validação dos 'radio buttons' (um deles deve ser marcado)
      // Usamos 'document.querySelector' para ver se existe algum radio 'collabs' marcado.
      const collabsChecked = document.querySelector('input[name="collabs"]:checked');
      if (!collabsChecked) {
        errors.push('Selecione o número de colaboradores.');
        // Adiciona a classe de erro ao contêiner dos radios para feedback visual
        document.querySelector('.choices').classList.add('error');
      }
  
      // Validação da Descrição do projeto
      if (descriptionTextarea.value.trim() === '') {
        errors.push('A descrição do projeto é obrigatória.');
        descriptionTextarea.classList.add('error');
      }
  
      // Validação do 'checkbox' de termos (deve estar marcado)
      if (!termsCheckbox.checked) {
        errors.push('Você deve concordar com os Termos de Uso.');
        termsCheckbox.classList.add('error');
      }
  
  
      // --- DECISÃO FINAL: ENVIAR OU MOSTRAR ERROS ---
      // Verificamos se o array 'errors' tem alguma mensagem dentro dele.
  
      if (errors.length > 0) {
        // Se 'errors' não estiver vazio, significa que há erros de validação.
        // Juntamos todas as mensagens de erro em uma única string, separadas por quebras de linha.
        alert('Por favor, corrija os seguintes erros:\n\n' + errors.join('\n'));
      } else {
        // Se 'errors' estiver vazio, o formulário é válido.
        alert('Formulário enviado com sucesso!\n\nAgradecemos pelo envio do seu projeto.');
  
        // Em um site real, aqui é onde você enviaria os dados para um servidor.
        // Por exemplo: fetch('/api/submit', { method: 'POST', body: ... });
  
        // Limpa todos os campos do formulário para um novo preenchimento.
        document.querySelectorAll('form').forEach(form => form.reset());
      }
    });
  });
  

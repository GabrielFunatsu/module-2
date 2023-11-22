console.log('Seja Bem Vindo!');

const prompt = require('prompt-sync')();

const todoList = [];

function action() {

  const actionInput = message();

  if (actionInput === '1') {
    addTodo();
  } else if (actionInput === '2') {
    editTodo();
  } else if (actionInput === '3') {
    removeTodo();
  } else if (actionInput === '4') {
    listTodo();
  } else if (actionInput === '5') {
    getTodo();
  } else {
    console.log('Opção inválida.');
    action();
  }

  redo();

  return
}

function message() {
  console.log(`
  1 - Adicionar um tarefa.
  2 - Editar uma tarefa salva.
  3 - Remover uma tarefa salva.
  4 - Listar todas as tarefas salvas.
  5 - Obter uma tarefa salva.
  `);

  console.log('Selecione uma das opções acima (digite o número):');

  const actionInput = prompt();

  return actionInput;
}

function addTodo() {
  let add = {};

  add.todo = prompt('Informe o seu todo: ');
  add.hour = prompt('Informe o horário do todo: ');

  console.log('Todo adicionado com sucesso');

  return todoList.push(add);
}

function editTodo() {
  console.log('Informe o ID do todo:');
  console.log('(Exemplo: digite 1 para editar o primeiro todo)')
  const todoID = parseInt(prompt());

  const index = todoID - 1;

  if (isNaN(todoID) || todoList.length < index) {
    console.log('ID inválido.');

    editTodo();
  } else {
    const editT = prompt('Edite o seu todo: ');
    const editH = prompt('Edite o horário do todo: ');

    todoList[index].todo = editT;
    todoList[index].hour = editH;

    console.log('Todo editado com sucesso');

    return todoList;
  }
}

function removeTodo() {
  if (todoList.length === 0) {
    console.log('Não há items na lista.');

    return
  } else {
    console.log('Informe o ID do todo:');
    console.log('(Exemplo: digite 1 para editar o primeiro todo)')
    const todoID = parseInt(prompt());

    const index = todoID - 1;

    if (isNaN(todoID) || todoList.length < index) {
      console.log('ID inválido.');

      removeTodo();
    } else {
      todoList.splice(index, 1);
      
      console.log('Todo removido com sucesso'); 

      return todoList;
    }
  }
}

function listTodo() {
  console.log(todoList);

  return
}

function getTodo() {
  if (todoList.length === 0) {
    console.log('Não há items na lista.');

    return
  } else {
    console.log('Informe o ID do todo:');
    console.log('(Exemplo: digite 1 para editar o primeiro todo)')
    const todoID = parseInt(prompt());

    const index = todoID - 1;

    if (isNaN(todoID) || todoList.length < index) {
      console.log('ID inválido.');

      getTodo();
    } else {
      console.log(todoList[index]);
      
      return
    }
  }
}

function redo() {
  console.log('Deseja realizar mais alguma ação?');
  console.log('Digite (s) para sim e (n) para não.')
  const actionInput = prompt('').toLowerCase()

  if (actionInput === 's') {
    action();
  } else if (actionInput === 'n') {
    return
  } else {
    console.log('Opção inválida.');
    redo();
  }
}

action();

console.log('Finalizando...')
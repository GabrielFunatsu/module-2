function action() {

  const userChoice = parseInt(document.getElementById('userChoice').value);

  const actionInput = message();
  
    switch (userChoice) {
      case 1:
        addTodo();
        redo();
        break;

      case 2:
        try {
          editTodo(); 
          redo();         
        } catch (e) {
          console.log(e.message);
          redo();    
        }
        break;

      case 3:
        try {
          removeTodo();  
          redo();        
        } catch (e) {
          console.log(e.message);
          redo();    
        }
        break;

      case 4:
        listTodo();
        redo();
        break;

      case 5:
        try {
          getTodo();  
          redo();        
        } catch (e) {
          console.log(e.message);
          redo();    
        }
        break;
    
      default:
        console.log('Input inválido.');
        action();
        break;
    }

  return
}

function message() {
  const outputDiv = document.getElementById('output');

  const userChoiceContainer = document.getElementById('userChoiceContainer');
  const menuButtonn = document.getElementById('MenuButton');

  console.log(`
  1 - Adicionar um tarefa.
  2 - Editar uma tarefa salva.
  3 - Remover uma tarefa salva.
  4 - Listar todas as tarefas salvas.
  5 - Obter uma tarefa salva.
  `);
  
  outputDiv.innerHTML  = (`
    Menu de opções: <br>
    1 - Adicionar um tarefa.<br>
    2 - Editar uma tarefa salva.<br>
    3 - Remover uma tarefa salva.<br>
    4 - Listar todas as tarefas salvas.<br>
    5 - Obter uma tarefa salva.
  `);


  console.log('Selecione uma das opções acima (digite o número):');

  userChoiceContainer.style.display = 'block';
  menuButtonn.style.display = 'none';

  // const messageInput = Number(prompt());

  return parseInt(document.getElementById('userChoice').value);;
}

function addTodo() {
  const add = {};
  const outputDiv = document.getElementById('output');
  const userChoiceContainer = document.getElementById('userChoiceContainer');

  outputDiv.innerHTML = `
    <form id="addTodoForm">
      <label for="todoTitle">Informe o título da tarefa: </label>
      <input type="text" id="todoTitle" required><br>
      <label for="todoHour">Informe o horário da tarefa: </label>
      <input type="text" id="todoHour" required><br>
      <button type="button" onclick="submitAddTodoForm()">Adicionar</button>
    </form>
  `;

  userChoiceContainer.style.display = 'none';

  add.todo = prompt('Informe o seu todo: ');
  add.hour = prompt('Informe o horário do todo: ');
  
  console.log('Todo adicionado com sucesso');

  outputDiv.innerHTML = ('Informe o seu todo: ');

  return todoList.push(add);
}

function submitAddTodoForm() {
  const todoTitle = document.getElementById('todoTitle').value;
  const todoHour = document.getElementById('todoHour').value;

  const add = { todo: todoTitle, hour: todoHour };
  todoList.push(add);

  console.log('Todo adicionado com sucesso');
  action();
}

function editTodo() {
  if (todoList.length === 0) {
    throw Error ('Não há itens na lista.');
  } else {
    console.log('Informe o ID do todo:');
    console.log('(Exemplo: digite 1 para editar o primeiro todo)');
    const todoID = Number(prompt());
  
    const index = todoID - 1;
  
    try {
      if (!todoID || todoID !== parseInt(todoID) || todoList.length <= index) {
        throw Error ('ID inválido.');
      } else {
        const editTodo = prompt('Edite o seu todo: ');
        const editHour = prompt('Edite o horário do todo: ');
    
        todoList[index].todo = editTodo;
        todoList[index].hour = editHour;
    
        console.log('Todo editado com sucesso');
    
        return
      }
    } catch (e) {
      console.log(e.message);
      editTodo();
    }
  }
}

function removeTodo() {
  if (todoList.length === 0) {
    throw Error ('Não há items na lista.');
  } else {
    console.log('Informe o ID do todo:');
    console.log('(Exemplo: digite 1 para editar o primeiro todo)');
    const todoID = Number(prompt());

    const index = todoID - 1;

    try {
      if (!todoID || todoID !== parseInt(todoID) || todoList.length <= index) {
        throw Error ('ID inválido.');
      } else {
        todoList.splice(index, 1);
        
        console.log('Todo removido com sucesso'); 

        return
      }
    } catch (e) {
      console.log(e.message);
      removeTodo();
    }
  }
}

function listTodo() {
  const outputDiv = document.getElementById('output');

  if (todoList.length === 0) {
    console.log('Não há itens na lista.');
    outputDiv.textContent = 'Não há itens na lista.';
  } else {
    console.log(todoList);
    outputDiv.textContent = JSON.stringify(todoList, null, 2);
  }
  return
}

function getTodo() {
  if (todoList.length === 0) {
    throw Error ('Não há items na lista.');
  } else {
    console.log('Informe o ID do todo:');
    console.log('(Exemplo: digite 1 para editar o primeiro todo)');
    const todoID = Number(prompt());

    console.log(todoID);
  
    const index = todoID - 1;

    try {
      if (!todoID || todoID !== parseInt(todoID) || todoList.length <= index) {
        throw Error ('ID inválido.');
      } else {
        console.log(todoList[index]);
        
        return
      }
    } catch (e) {
      console.log(e.message);
      getTodo();
    }
  }
}

function redo() {
  console.log('Deseja realizar mais alguma ação?');
  console.log('Digite (s) para sim e (n) para não.');
  const redoInput = prompt('').toLowerCase();

  try {
    if (redoInput === 's') {
      action();
    } else if (redoInput === 'n') {
      return
    } else {
      throw Error ('Opção inválida.');
    }
  } catch (e) {
    console.log(e.message);
    redo();
  }
}

console.log('Seja Bem Vindo!');

const prompt = require('prompt-sync')();

const todoList = [
  {
    todo: 'aula',
    hour: '19:00'
  },
  {
    todo: 'banho',
    hour: '22:00'
  },
  {
    todo: 'janta',
    hour: '22:30'
  }
];

action();

console.log('Finalizando...')
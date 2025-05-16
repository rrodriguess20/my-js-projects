/*Crie um sistema simples de gerenciamento de livros para uma biblioteca.*/

const livro = {

	titulo: "Orgulho e Preconceito",
	autor: "Jane Austen",
	ano: 1813,
	emprestado: false,
};

let exibirLivro = function(livro){

	console.log(`Título: ${livro.titulo}`);
	console.log(`Autor: ${livro.autor}`);
	console.log(`Ano de lançamento: ${livro.ano}`);

	if(livro.emprestado)
		console.log(`Livro INDISPONÍVEL para empréstimo.`);
	else
		console.log(`Livro DISPONÍVEL para empréstimo.`);

	console.log("\n");
}

let emprestarLivro = function(livro){

	if(livro.emprestado)
		console.log(`Este livro já está emprestado.`);
	else{

		livro.emprestado = true;
		console.log(`Livro emprestado com sucesso!`);
	}

	console.log("\n");
}

let devolverLivro = function(livro){

	if(livro.emprestado){

		livro.emprestado = false;
		console.log(`Livro devolvido com sucesso! Muito obrigada!`);
	}
	else
		console.log(`Esse livro já está disponível para empréstimo.`);
	
	console.log("\n");
}

exibirLivro(livro);
emprestarLivro(livro);
exibirLivro(livro);
devolverLivro(livro);
exibirLivro(livro);

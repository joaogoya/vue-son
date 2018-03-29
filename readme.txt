======================
..::!! VUE JS !!::..
======================

	= Sobre:
	=========
		Sempre que faço um curso, eu tomo nota daquilo que está sendo ensinado.
		Criei este repositório git para subir os meus arquivos de testes.
		Arquivos que fui criando enquanto aprendia Vue.js
		Este repo, portanto, não se trata de um proj, e sim um lab.
		Minhas experiências, tentativas e primeiras impressões com vue.js
		link do curso: https://www.schoolofnet.com/curso-vuejs-20/2081

	= Aula 01: Introdução:
	=======================
		▬ out 2016 foi lançada a nova versao
		▬ Varias novidades, mas a mais importante foi a inclusao de um virtual doom
			• fica mais facil manipular o doom da pagina
			• Da pra rodar vue no server side
			• a nova versao nao impacta nas versoes antigas
			• enfoque menor em diretivas
				a tendencia é que nao se use mais 
				entao se projetos com o vue 1 utilizam, é boa pratica começar a refatorar para componentes
			• a forma como se usa ordenação e filtro tb mudou
				- Agora tem uma expenção de modelo de dados computados - computed
				- nao se usa mais V-for, filtros e ordenação. É com js nativo, na mao.
			• Trabalha melhor o conceito de web apps
				- de alguns anos pra ca a ideia de dev p web mudou bastante.obustas que não deixam nada a desejar para apps desk. Daí o nome, web apps
				- dev apps rodam tao bem qt desk apps. 
				- tb trabalham a ideia de experiencia do usuario
			• O vue.js se notabiliza por ser facil de usar
			• um dos conceitos q o vue aplica é o DRY: dont repeat yourself - codigos reutilizaveis
			
			
	= Aula 01 - Vue CLI:
	=====================
		▬ Instalar o node
		▬  Vue cli: https://github.com/vuejs/vue-cli
		▬ Pra instalar o vue cli:
			• npm install -g @vue/cli
			• esse cara nao inicializa nenhum projeto, ele instala o vue globalmente na maquina
				- da pra criar uma aplicação mt basica, puxando o vue de algum cdn
				- mas tb da p trabalhar em conjunto com webpack, ou browsefy. Existem varios templates.
		▬ Pra criar um projeto é o seguinte:
			• vue init nomeDoTemplate nomeDoProjeto
			• Este link mostra a lista de templates oficiais que o vue tem - https://github.com/vuejs-templates?utf8=%E2%9C%93&q=&type=&language=
				- browserify - mais complexo
				- briwserify-simple
				- simple
				- webpack 
				- webpack-simple
			• no final da uala é criado, apenas p ilustrar, um proj com o template simple	
				- vue init simple proj-vueSimple
				- o vue simple nao tem package.jason, por isso não é necessario responder as perguntas do vue cli
				- se abrirmos o index.html que foi criado, vamos verificar o seguinte:
					o vue simple ja coloca o link paro vue.js pra pegar online. Tipo um cdn
					o logo ele tb pega online tb 
				
		
				
			
		
		
		


		
// alt + 22 - alt + 7 \\
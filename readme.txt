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
			
			
	= Aula 02: Vue CLI:
	====================
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
	
	
	= Aula 03: Criando projeto com webpack-simple:
	===============================================
		▬ vue init empacotador nomeProj
		▬ vue init webpack-simple proj01
		▬ npm install - pra baixar as dependencias
		▬ Dai ele explica o que foi instalado
			- node modules: as dependencias normais de qq projeto
			- pasta src: É a pasta que vai ser utilizada p desenvolver
			- babel: Faz a compilação da EC6 pra EC5
			- git ignore: auto explicativo
			- index.htmol: é o arquivo que inicia a aplicação. Tudo começa aqui.
			- package.json: auto explicativo
			- readme: idem
			- webpack.config.js: Configurações do webpack
				
			
	= Aula 04: binding:
	====================
		▬ O index html criado na aula passada tem o apontamento para o bundle
		▬ Ele cria tb o elemento html que vai iniciar a nossa aplicação
			• <div id="app"></div>
		▬ Na pasta src nos vamos começar a programar:
			• O instrutor diz q não que trabalhar com arquivos .vue. Então ele deleta.
			• a pasta assets fica
			• o js que inicia a aplicação e o main.js
				- nesse arquivo ele tira o import do app.vue e tira o render
				- ficou apenas o que é relativo ao vue.
					• ficou a linha do import la em cima e uma instancia vue
					• essa instancia é recebe alguns atributos, um deles é o entry point: el:#app - é o elemento html da index
		▬ Isso, assim como está, já é uma aplicação vue.
		▬ Pra saber se está funcionando é o seguinte:
			• Com o webpack da pra executa a aplicação, com o server ja embutido, o dev serv. Ele já está configurado.
			• Se olharmos o packge.jason, na tag scripts podemos ver que tem dois ambientes:
				- dev: roda a aplicação
				- build: pra dar o build antes de subir
				- o ambiente dev ja tem um live reload
		▬ Pra rodar via terminal: npm run dev
		▬ Com a aplicação rodando ele começa a trabalhar o databinding
		▬ na instancia do vue ele cria mais um atributo, o data
		▬ esse atributo recebe um objeto. Ele coloca um tilu: 'qq coisa'
		▬ no index.html, dentro da tag app ele faz uma interpolação que nem no angular. Da pra colocar o titulo onde quiser.
		
			
	= Aula 5: PropertyBinding:
	===========================
		▬ Ele cria varios elemntso no objeto data p mostrar que da pra criar, ints, floats, strings e objetos p mandar pro html
		▬ Mostra que setar o valor de uma propriedade html via interpolação foi depreciado.
		▬ agora, no vue 2, pra alterar o valor das propriedades html é o seguinte:
			• id="{{ variavelJs }}" - modo depreciado
			• v-bind:id="variavelJs" - modo aceito no vue 2
			• na real entao é v-bind:propriedadeHtml="variavelJs"
		▬ Escrever v-bind:propriedade é mt extenço e demorado. Pode ser abreviado para ":". Sim, apenas dois pontos
			:propriedade="variavelJs" - :id="variavelJs"		
			
			
			
	= Aula 06: Classe  Time:
	=========================
		▬ inicio do projeto - tabela campeonato brasileiro
		▬ vai no src e cria um arquivo time.js
		▬ da um class time{
			
		}
		▬ Depois ele cria um construtor p receber o nome e o escudo.
		▬ seta outros atributos
		▬ pra usar a classe tem q exportar - export class time(){}
		▬ depois disso, vai no main.js e importa a classe time
		▬ No arquivo main.js, ali no data{}, apaga tudo o que tem alidentro e coloca um:
			time: new Time("gremio", "img_src")
			fica assim: 
			data: {
				time: new Time("gremio", "img_src")
				},
				linkTeste: "https://github.com/joaogoya/vuejs",
			}
		▬ com o ob time setado da ppra fazer bibdings no index
		
			
	= Aula 07: img src:
	====================
		<img src=""
		o webpack tem um fileloader	que faz o meio de campo
		se ligar que o escudo é um atributo na classe time
		no mai.js passamos ele por parametro
		no index.html aemos um ropertybinding p mostrar o atributo escudo

			
	= Aula 08: v-for:
	==================
		faz um array de times no ain.js
		tims: [
			new time (atributo, atributo),
			new time (atributo, atributo),
			new time (atributo, atributo),
			new time (atributo, atributo),
		]

		da p percorrer objetos tb
		
		
	= Aula 09: bootstrap:
	======================
	npm install bootstrap --save jquery --save popper.js --save url-loader --save-dev style-loader --save-dev
	npm install jquery --save
	npm install popper.js --save
	npm install url-loader --save-dev
	npm install style-loader --save-dev

	depois de instalar tudo, tem que fazeer algumas cnoiguraões no webpack.config.js
	esse ffile fica na build
		em:
			modules
				rules
					vamos adicionar a dos bootstrap
					 {
						test: /\.(woff|wwoff2|ttf|svg|eot)$/,
						loader: 'url-loader'
					}
		depois disso, no main.js, faz os require
		reqquire('style-!css!bootstrap/dist/css/bootstrap.min.css');
			esse linha tem as seguintes peculiaridades:
				bootstrap/dist/css/bootstrap.min.css - src do arquivo que estamos imortando

				style-!css!
					style loader ue instaamos qd instalamos o bootstrap

		depois do css tem q trazer o s do bootstrap tb
		require('bootstrap'),

		no meu nao funcionou assim. Provavelmente versionamento de webpack
		meu main.js ficou assim:
			import 'bootstrap/dist/css/bootstrap.css';
			import 'bootstrap';


	= Aula 10: listar os times:
	============================
		colocar os times num array e exxibir com o bootstrap

	
	= Aula 11: form q recebe o resultado do jogo:
	==============================================
		faz um form
		fa um obj com time de casa e time de fora
		fala dos ciclos de vida

		um dos metodos do vue que trabalha em cima de ciclo de vida é o created


	= Aula 12: dados or gtras do vue:
	==================================
		qd a gente cria instancias dentro no new vue, ele cria getters, setters no obj.
			ela tem observadores,....
		qd a gente coloca a intancia na mao fora do new vue ele nao cria nada, 
		
			
	= Aula 12: one e two way databinding:
	======================================	
		one way é d mandamos inormação do js pro template, ou do template pro js.
		one way vai de um para o outro e deu.

		two way é qd promovemos alguma alteração e os dois se atualizam.


		ou seja
		one way:
			qd promovemos alteração no template e só o js atualizam
			qd promovemos alteração no js e só o template atualiza.

		two way
			promovemos mudança em qq um dos dois e os dois se atualizam.

		mete um v-model no temlate
		
		
	= Aula 13: Eventos:
	====================
		click, dulo clique, ....
		v-on:evento="nomeFuncao()"
		v-on:click="enviaForm()" - nao tem ponto e vvirgula no inal	

		no js, no obj vue, cria uma nova instancia, a methods
		tipo,
		data{

		},
		liveciclehoock(){}
		outrolfecicle(){}
		methods{
			// metodos dispparados or eventos aqui
		}


		no temlate, no onclock:
			v-on:click="enviaForm()" - da pra passar parametros, inclusive o $event
			v-on:click="enviaForm($event, parametro1, parametro2.algumAtributo, arametro3)"	

		no js é só receber os parametros e trabalhar com eles
		methods{
			enviaForm($event, parametro1, parametro2.algumAtributo, parametro3){
				console.log($event);
				parametro1 = (parametro2.algumAtributo *parametro3) - $event.AlgumaCoisa;
			}
		}

		no template da p trocar o v-on:evento="" por @evento=""
		fica melhor de trabalhar.
		entao teriamos:
			@click="enviaForm($event, parametro1, parametro2.algumAtributo, arametro3)"	

		converter string p inteiro:
			se this.AlgumaCoisa é uma string poe um + na frnte q ele converte p inteiro
			+this.AlgumaCoisa vira um int


	= Aula 14: filtros e ordenação das colunas:
	============================================
	coluna saldo de gols
		Interpolação no template
		{{ time.mg - time.gs }}

		filters no vue é mais um atributo do new vue
		data{

		},
		lifeCicleHoos(){

		},
		metods{

		},
		filters{
			// aqui dentro declara uma função normal, como nos metodos.
			// qq funão qq implemente qqq logica
			// nesse caso vai ficar a que calcula o saldo de gols, recebendo o time

			saldo(time){
				return time.gm - tinme.gs
			}
		}

		deois de criado o filtro, no template fffaz uma interpolação passando o obj, um pipe e o filtro
		{{ time | saldo }}

		nao queremos todos os atributos do time. Só o saldo.
		Filtrmos o obj ortanto pra pegarmos só o qq queremos.

		sobre ordenação, nessa aula ele nao ordena,ele só cria um array com o nme das colunas


	= Aula 15: renderizzaão condicional e eventos:
	===============================================
		v-if pra mostrar a tabea ou o form
		igual ao angular, só que tem v-else

	= Aula 15: ordenando a tabela doc amppeonato:
	==============================================
	dentro do data cria um tribito com dois arrays
		order: {
			keys: ['pontos', 'gm', 'gs'],
			sort: ['desc', 'desc', 'asc']
		},

	instaa o lodash
		npm install lodash --save
		no main tem q importar
		impport _ from 'lodash'

	no template, no th coloca um link p disarar o evento de ordenação

	<a @click="sortBy"



		
// alt + 22 - alt + 7 \\
# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Exemplo: 

Os componentes que fazem parte da solução são apresentados na Figura XX.

![Diagrama de Componentes](img/componentes.png)
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Canais** - seções de notícias apresentadas 
     - **Comentários** - registro de opiniões dos usuários sobre as notícias
     - **Preferidas** - lista de notícias mantidas para leitura e acesso posterior
 - **News API** - plataforma que permite o acesso às notícias exibidas no site.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)

Inclua um diagrama da solução e descreva os módulos e as tecnologias que fazem parte da solução. Discorra sobre o diagrama.

A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele é confrontado com as opões de editar seu perfil ou
então visualizar sua galeria.

Caso ele opte por seguir pelo primeiro caminho (Editar Perfil), ele é
redirecionado para a tela de edição de perfil (Tela 2), onde pode
atualizar seus dados cadastrais. Nessa tela, o usuário também pode
escolher para editar sua foto de perfil. Ao selecionar essa opção, ele é
redirecionado para a Tela 3, onde ele a imagem expandida do perfil do
usuário é mostrado. Ao selecionar a opção para atualizar a imagem, uma
nova janela abre pedindo para o usuário fazer o upload da nova foto.
Assim que o processo termina um pop-up exibe o status para o usuário
(Tela 4) e o usuário é redirecionado para a Tela 2.

Caso o usuário opte seguir pelo segundo caminho (Visualizar Galeria) ele
é redirecionado para a Tela 5 com todas as fotos que o usuário possui. O
usuário pode clicar em um post qualquer para visualizar os detalhes do
post (Tela 6). Nessa tela, ele pode então escolher editar o post, sendo
redirecionado para a Tela 7. Ao editar as informações, o usuário pode
escolher salvar ou deletar o post. Em ambos os casos o status é
notificado para o usuário (Tela 8) e em seguida ele é redirecionado
para a Tela 2.

![Exemplo de UserFlow](img/userflow.jpg)


## Tecnologias Utilizadas

- [Twitch API](https://dev.twitch.tv/docs/api/) (Fonte dos clipes que serão o conteúdo do projeto)
- [Github](https://github.com/) (Versionamento e hospedagem do projeto)
- [Heroku](https://www.heroku.com/) (Hospedagem de aplicação que visam o desenvolvimento web em nuvem)
- [Banco de Dados SQL - SQL Server](https://www.microsoft.com/pt-br/sql-server)
- Liguagens de programação: [Python](https://docs.python.org/3/), [HTML](https://devdocs.io/html/), [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS), [Java Script](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Figma](https://www.figma.com/) (Desenvolvimento de interface)
- [Invision](https://www.invisionapp.com/) (Desenvolvimento da diagramação)
- [Microsoft Teams](https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software) (Planejamento do time) com a metodologia Scrum aplicada
- [Visual Studio Code](https://code.visualstudio.com/)

### Exemplo
![Exemplo de Uso](img/diagrama_tec_usadas.png)

## Hospedagem
A hospedagem da aplicação vai ser na plataforma Heroku, que é uma plataforma como serviço (PaaS Platform as a service ). Primeiramente vamos abrir uma conta na plataforma. Usaremos o Git para fazermos o deploy da aplicação. Vamos precisar instalar uma ferramenta própria do Heroku chamada Toolbet é por meio dela que vamos criar nossa aplicação na plataforma utilizando linhas de comando ou fazendo o download das plataformas especializadas.

Vamos criar um diretório: 

heroku_clipitch

user@machine:~/$ mkdir heroku_clipitch
user@machine:~/$ cd heroku_clipitch
user@machine:~/heroku_clipitch$

Como estaremos usando python para o backend vamos criar um virtualenv e ativa-lo:

user@machine:~/heroku_clipitch$ virtualenv venv
New python executable in venv/bin/python
Installing setuptools, pip...done.
user@machine:~/heroku_clipitch$ source venv/bin/activate
(venv)user@machine:~/heroku_clipitch$

Vamos criar o arquivo procfile que será onde o comando que o heroku irá usar para executar nossa aplicação será escrito. Esse arquivo deverá estar na raiz da aplicação. 

(venv)user@machine:~/heroku_clipitch$ echo "web: python clipitch.py" > Procfile

Vamos agora efetivar o processo de deploy da aplicação: 

Primeiro vamos criar um repositório no diretório atual: 

git init

(venv)user@machine:~/heroku_clipitch$ git init
Initialized empty Git repository in /home/user/heroku_clipitch/.git/


Vamos adicionar e commitar nossos arquivos nesse repositório através dos comandos git add para adicionar todos os arquivos e git commit para criar nosso commit inicial.


(venv)user@machine:~/heroku_clipitch$ git add .
(venv)user@machine:~/heroku_clipitch$ git commit -m 'initial commit'
[master (root-commit) 33f63b5] initial commit
 4 files changed, 25 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 Procfile
 create mode 100644 clipitch.py
 create mode 100644 requirements.txt
(venv)user@machine:~/heroku_clipitch$


Agora vamos criar nosso app no heroku através do commando heroku apps:create [nome do app]

(venv)user@machine:~/heroku_clipitch$ heroku apps:create dg-clipitch
Creating dg-clipitch... done, stack is cedar-14
https://dg-clipitch.herokuapp.com/ | https://git.heroku.com/dg-clipitch.git
Git remote heroku added


No resultado do comando heroku apps:create já são apresentadas duas das coisas mais importantes para nosso app, a url de acesso e repositório git onde deverá ser enviada nossa aplicação.

Basicamente a url será no padrão https://[nome do app].herokuapp.com/.

Finalmente iremos realizar o deploy de nossa aplicação. Todos os passos anteriores foram passos preparatórios, o que significa que basta executá-los uma vez. 

Daqui em diante, para fazer o deploy de nosso app, basta enviar os commits do repositório local, para o repositório do heroku, através do comando git push heroku master.

(venv)user@machine:~/heroku_clipitch$ git push heroku master

Agora é só acessar a url do app.



 

> **Links Úteis**:
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

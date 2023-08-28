Projeto para elaboração de um Design System.

*Iniciando a arquitetura/repositórios*

1- Inicie o npm com o comando `npm init -y` <br />
2- Adicionamos o Typescript `npm i -D typescript` <br />
3- Inicia o Typescript - criando o arquivo tsconfig.json  `npx tsc --init`

Você pode transformar os arquivos de typescript para javascript com o comando `npx tsc`, com o pacote do typescript, mas será utilizada outro ferramenta. 

4- Vamos instalar o TSUP para termos o pacote para conversão dos códigos. O comando é: `npm i tsup -D` <br />

5- Criamos 2 scripts dentro de packege.json: 1º o script de build: `"tsup src/index.ts --format esm,cjs --dts"`, deste modo, exportamos o código de index como ecmascript modules e javascript, exportando, também, os arquivos de definição de tipagem. O 2º será o dev, `"tsup src/index.ts --format esm,cjs --dts --watch"`, que vai monitorar qualquer alteração nos arquivos, quando estivermos trabalhando no pacote e fazendo o processo de build. 

6- Configurações de um mono repo. Para isso, verifique os arquivos de packege.json de todos os repositorios.

7- Para a confirguaração do ESLint, crie a pasta, com os mesmos arquivos, e dê o comando `npm i -D eslint @rocketseat/eslint-config`. 
Crie o arquivo .eslintrc.json onde será aplicado, com a dependência adicionada no packege. 

8- Adicione o react e os pacotes complementares no package da pasta react: `npm i -D react @types/react @types/react-dom` e atualize o script de build e dev, acrescentando a flag: `--external react`

A biblioteca a ser usada para estilização dos componentes será o stiches, então, para adiciona-lo, basta instalar com o comando `npm i @stitches/react`

*Estilização usando o stiches* 

* Na pasta styles, vamos usar o createStitches.

Com o createStitches concluido, na pasta dos componentes, importamos o styled do styles criado.

*Criando o Storybook*

Começamos criando a pasta de docs, a partir da packeges. <br/>
Na pasta de docs, isntalamos o storybook com o comando `npx sb init --builder @storybook/builder-vite --type react --use-npm`

Intalamos mais algumas dependencias no packege do dosc: 
`npm i vite @vitejs/plugin-react -D`, `npm i react react-dom`

Criamos o arquivo de configuração do vite. <br />
Exclua a pasta de node modules da pasta docs e do packages, após a exclusão, instale tudo novamente `npm i` - precaução devido ao cache do vite.

Para ficar mais fácil, alteramos o scripts do storybook no package de docs, para dev e build, mas não é obrigatório. 

*Iniciando o uso do storybook*

1- Apagamos o stories, para iniciarmos a documentação do zero, e crie a pasta src, dentro de src, crie o stories. <br />
2- No arquivo main, dentro da pasta .storybook, atualize a linha onde ele procura o stories, adicionando o src criado no passo anterior. <br />
3- Dentro de package.json, referenciamos a dependencia dos pacotes criados: tokens, react e eslint. <br />
4- Crie o arquivo de configuração do eslint; <br />
5- Criando o primeiro componente - Button, dentro do novo diretório de stories. Para ir acompanhando os ajustes, deixe rodando o `npm run dev` da pasta react.

Podemos configurar o darkTheme do Storybook. Para isso, adicionamos o background no preview.js, dentro de .Storybook. <br />

6- Para configurar a font da aplicação, crie o arquivo preview-head.html e adicione dentro do script. <br />
7- Criamos a pasta pages, dentro de src, para separar a documentação. No arquivo main, precisamos atualizar/adicionar o caminho para o reconhecimento do storybook. <br /> 
8- Como está sendo configurado separadamente, para adicionarmos os tokens, criamos a pasta dentro de pages. <br />
9- Para melhor exibição, dentro de src, crie a pasta de components e adicione a exibição no arquivo tsx. <br />
10- Como estamos usando cores claras, para não ficar difícil de ler na configuração atual do ColorsGrid, importamos a dependência polished - `npm i polished` - em docs. <br />
11- Para evitar erros do typescript, importe a configuração no package.json de docs e adicione o arquivo de configuração. <br />

*Configurar o turbo repo*

O turbo repo serve para conseguirmos executar os scripts ao mesmo tempo, de todos os pacotes. Ajuda a acelerar o processo de build da aplicação, guardando um cache local. 

É necessário estar com o git iniciado. 

1- Na raiz do projeto, adicione o turbo, `npm i turbo@latest -D` <br />
2- Adicione o arquivo turbo.json <br />
3- No packege.json da matriz, adicione os scripts. 

Notion sobre atualização do storybook nas notas e wpp. 
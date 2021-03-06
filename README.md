# ImedicinaTest

Projeto desenvolvido para o teste de **Desenvolvedor Front End** da empresa iMedicina.

## Wireframe

Para o projeto foi criado um wireframe no programa Axure RP que pode ser acessado no link http://leandroluk.imedicina-test.wireframe.surge.sh.

## Dependencias

Para o WordPress:

 - WP REST API (https://wordpress.org/plugins/rest-api/)
 - JWT Authentication for WP-API (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
 - WP REST API Basic Auth (https://github.com/WP-API/Basic-Auth)

Para a aplicação:

 - NodeJS (https://nodejs.org/en/)
 - Bootstrap (https://www.npmjs.com/package/bootstrap)
 - Jquery (https://www.npmjs.com/package/jquery)
 - Font Awesome (https://www.npmjs.com/package/fontawesome)
 - @ngrx/store (https://github.com/ngrx/platform/blob/master/docs/store)

## Configurações

##### Wordpress
Esse plugin dependende que os 2 plugins anteriores esteja instalados e ativos no WordPress. Também é necessário fazer todas as configurações que o plugin "JWT Authentication" necessíta para sua ativação. Para fazê-lo, siga os passos abaixo:

1. Adicione ao arquivo `.htaccess` do projeto WordPress as linhas abaixo:
```
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
```

2. No arquivo `wp-config.php` adicione 2 novas chaves de definição assim como está escrito abaixo:
```
define('JWT_AUTH_SECRET_KEY', 'minha-chave-secreta-para-acesso-jwt');
define('JWT_AUTH_CORS_ENABLE', true);
```

3. Baixe o plugin "Basic Auth" informado nas dependências desse README e salve o mesmo na pasta `\wp-content\plugins`. Em seguida, habilite o mesmo na página de plugins do WordPress.

> É necessário ativar os link's permanentes para que o plugin WP REST API funcione. Pela documentação a configuração para os link's permanentes devem ser relacionados aos títulos dos posts.

##### App

1. Para gerar a compilação com os arquivos de distribuição, altere o arquivo `src/app/BASE_PATH_HERE.ts` informando na constante `BASE_URL` a url correta definida pelo plugin WP REST API. Normalmente a rota definida pelo plugin é semelhante a essa: **http://meu_dominio_aqui/wp-json**

> É necessário fazer essa alteração no arquivo BASE_PATH_HERE pois após a compilação dos arquivos em modo de produção não é possível (de uma forma simples) alterar o domínio corretamente.

2. Abra o diretório raiz dessa solução através de um prompt de comando e execute o comando `npm run prod` para que sejam compilados os arquivos de distribuição da aplicação. Após a finalização da compilação será criada uma pasta `app` no diretório raiz da solução que contém a aplicação como um todo.

3. copie a pasta app para a pasta raiz do website

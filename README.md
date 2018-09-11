# ImedicinaTest

Projeto desenvolvido para o teste de **Desenvolvedor Front End** da empresa iMedicina.

## Wireframe

Para o projeto foi criado um wireframe no programa Axure RP que pode ser acessado no link http://leandroluk.imedicina-test.wireframe.surge.sh.

## Dependencias

Para o WordPress:

 - WP REST API (https://wordpress.org/plugins/rest-api/)
 - JWT Authentication for WP-API (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)

Para a aplicação:

 - Bootstrap (https://www.npmjs.com/package/bootstrap)
 - Jquery (https://www.npmjs.com/package/jquery)
 - Font Awesome (https://www.npmjs.com/package/fontawesome)

## Configurações

Esse plugin dependende que os 2 plugins anteriores esteja instalados e ativos no WordPress. Também 
é necessário fazer todas as configurações que o plugin "JWT Authentication" necessíta para sua 
ativação. Para fazê-lo, siga os passos abaixo:

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
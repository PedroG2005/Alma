# Alma Age - Agência de Publicidade

Este é um projeto web completo para a agência de publicidade "Alma Age", implementado como uma Single Page Application (SPA) utilizando Laravel 11 (como API), React, Vite e Tailwind CSS. A navegação entre as páginas é gerenciada pelo React Router DOM. O ambiente de desenvolvimento é totalmente containerizado com Docker (Laravel Sail), pronto para ser versionado com Git/GitHub.

## 🚀 Tecnologias Utilizadas

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

## 📦 Estrutura do Projeto (SPA)

Este projeto segue uma arquitetura de Single Page Application (SPA) onde o backend Laravel serve uma única rota 

(catch-all) que carrega o frontend React. Isso permite uma experiência de usuário fluida e dinâmica, com o Laravel atuando principalmente como uma API para servir dados quando necessário.

## ⚙️ Instalação e Execução

Para configurar e rodar o projeto, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd alma-age
    ```

2.  **Copie o arquivo de ambiente:**

    ```bash
    cp .env.example .env
    ```

3.  **Inicie o Laravel Sail e instale as dependências do Composer:**

    ```bash
    ./vendor/bin/sail up -d
    ./vendor/bin/sail composer install
    ```

    *Nota: Se a pasta `vendor` não existir, você pode precisar executar `docker run --rm \ 
    -u "$(id -u):$(id -g)" \ 
    -v "$(pwd):/var/www/html" \ 
    -w /var/www/html \ 
    laravelsail/php82-composer:latest \ 
    composer install --ignore-platform-reqs` para instalar o Composer dentro de um container temporário.* 

4.  **Gere a chave da aplicação Laravel:**

    ```bash
    ./vendor/bin/sail artisan key:generate
    ```

5.  **Instale as dependências do Node.js e compile os assets do frontend:**

    ```bash
    ./vendor/bin/sail npm install
    ./vendor/bin/sail npm run build
    ```

    Para desenvolvimento, você pode usar:

    ```bash
    ./vendor/bin/sail npm run dev
    ```

6.  **Acesse a aplicação:**

    A aplicação estará disponível em `http://localhost` (ou a porta configurada no seu `.env`).

## 🛠️ Solução de Problemas

-   **`bash: docker: command not found` ou `composer: command not found`:** Este projeto é projetado para ser executado *dentro* do ambiente Docker com Laravel Sail. Certifique-se de que você está executando os comandos `sail` (ex: `./vendor/bin/sail up`, `./vendor/bin/sail composer install`, `./vendor/bin/sail npm install`) e não tentando executar `docker` ou `composer` diretamente no seu host, a menos que você os tenha instalados globalmente e configurado para isso.

-   **`npm install` ou `npm run dev/build` falhando:** Verifique se o container do Sail está rodando (`./vendor/bin/sail up -d`). As dependências do Node.js e a compilação do frontend devem ser feitas através do `sail npm ...` para garantir que o ambiente correto seja utilizado.

-   **Página em branco ou React não carregando:**
    -   Certifique-se de que o `resources/views/app.blade.php` está carregando corretamente o `app.jsx` via `@vite([\'resources/js/app.jsx\'])`.
    -   Verifique se o `npm run dev` ou `npm run build` foi executado com sucesso e se os assets estão sendo servidos corretamente.
    -   Confira o console do navegador para erros de JavaScript.

-   **Problemas de conexão com o banco de dados:** Verifique as configurações de `DB_HOST`, `DB_DATABASE`, `DB_USERNAME` e `DB_PASSWORD` no seu arquivo `.env` e certifique-se de que o serviço `mysql` no `docker-compose.yml` está saudável.

---

Desenvolvido por **Manus AI**.

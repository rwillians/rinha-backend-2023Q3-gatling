# Teste com a ferramente Gatling

Testes de stress e de breaking point para a Rinha de Backend 2023Q3, escritos utilizando [Gatling](https://gatling.io/) (ferramenta de teste) e [Faker](https://www.npmjs.com/package/@faker-js/faker) (lib de geração de carga).

## TL;DR:

> *Note*
> Supondo que você esteja rodando Linux, pelo meno como subsystem.

1.  Clone como submodule:

    ```sh
    git submodule add -b main https://github.com/rwillians/rinha-backend-2023Q3-gatling .gatling
    ```

3.  Abra para o diretório onde o submodule foi adicionado:

    ```sh
    cd .gatling
    ```

2.  Use [`asdf-vm`](https://github.com/asdf-vm/asdf) para instalar Java e demais dependencias:

    ```sh
    asdf install
    ```

5.  Instale os pacotes necessário com o comando:

    ```sh
    ./install
    ```

4.  Gere a carga de teste:

    ```sh
    ./gerar-carga
    ```

5.  Suba sua API;

6.  Quando usa API estiver pronta para receber requisições, execute o teste com o comando:

    ```sh
    ./run-test
    ```

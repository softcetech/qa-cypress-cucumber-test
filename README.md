# 🔐 Testes Automatizados com Cypress + Cucumber + Allure

Este projeto contém testes automatizados de **login válido e inválido** no site de demonstração [OrangeHRM](https://opensource-demo.orangehrmlive.com/) utilizando:

- [Cypress](https://www.cypress.io/)
- [Cucumber (Gherkin)](https://cucumber.io/)
- [Allure Reports](https://docs.qameta.io/allure/)

---

## 📁 Estrutura do Projeto

```
qa-cypress-cucumber-test/
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       └── login.feature
│   ├── support/
│   └── ...
├── allure-results/
├── allure-report/
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🚀 Como executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Executar testes

- **Modo Headless:**

```bash
npm run test
```

- **Modo Interativo (GUI do Cypress):**

```bash
npm run open
```

---

## 🧪 Cenários de Teste

O arquivo `login.feature` contém os seguintes testes:

### ✅ Login com credenciais válidas

```gherkin
Scenario: Login com credenciais válidas
  Given que acesso a página de login
  When preencho o usuário "Admin" e a senha "admin123"
  And clico no botão de login
  Then devo visualizar tela de "Dashboard"
```

### ❌ Login com credenciais inválidas

```gherkin
Scenario: Login com credenciais inválidas
  Given que acesso a página de login
  When preencho o usuário "admin" e a senha "errada"
  And clico no botão de login
  Then devo ver a mensagem "Invalid credentials"
```

---

## 📊 Relatórios com Allure

Este projeto utiliza o plugin [`@shelex/cypress-allure-plugin`](https://github.com/Shelex/cypress-allure-plugin) para gerar relatórios detalhados com evidências.

### 1. Executar testes (gera o diretório `allure-results`)
```bash
npm run test
```

### 2. Gerar o relatório Allure
```bash
npm run allure:report
```

> O navegador será aberto com o relatório visual.

---

## 🧩 Principais Dependências

```json
"devDependencies": {
  "cypress": "^12.17.4",
  "@badeball/cypress-cucumber-preprocessor": "^15.1.5",
  "@bahmutov/cypress-esbuild-preprocessor": "^2.1.5",
  "esbuild": "^0.18.11",
  "@shelex/cypress-allure-plugin": "^2.38.1",
  "allure-commandline": "^2.20.1"
}
```

---

## 📸 Evidências

- Evidências visuais (como screenshots) são geradas automaticamente pelo Cypress.
- O relatório Allure inclui essas evidências para facilitar a análise de falhas.

---

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo e demonstração de automação de testes com Cypress + Cucumber + Allure.

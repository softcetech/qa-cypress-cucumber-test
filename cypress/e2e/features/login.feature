Feature: Login

  Scenario: Login com credenciais válidas
    Given que acesso a página de login
    When preencho o usuário "Admin" e a senha "admin123"
    And clico no botão de login
    Then devo visualizar tela de "Dashboard"

  Scenario: Login com credenciais inválidas
    Given que acesso a página de login
    When preencho o usuário "admin" e a senha "errada"
    And clico no botão de login
    Then devo ver a mensagem "Invalid credentials"

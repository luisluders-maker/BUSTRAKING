-- ============================================================
-- BUSTRACKING — SCRIPT ÚNICO (MySQL 8 / MariaDB 10.4+ — XAMPP)
-- Convertido do script Oracle original.
--
-- COMO USAR: no phpMyAdmin, clique no SEU banco (menu da esquerda)
-- e importe este arquivo (aba "Importar"). Não precisa de
-- CREATE DATABASE nem USE: ele cria tudo no banco selecionado.
-- Pode rodar quantas vezes quiser (apaga e recria as tabelas).
--
-- Ordem do arquivo:
--   0) Limpeza (apaga as tabelas antigas, se existirem)
--   1) Criação das tabelas
--   2) Dados iniciais (perfis, usuários de teste, exemplo de linhas)
--   3) Consultas de conferência (comentadas)
--
-- Usuários de teste (senhas guardadas como HASH bcrypt,
-- compatível com password_verify() do PHP):
--   admin@bustracking.example   senha: admin123   perfil: ADMIN
--   joao.silva@email.com        senha: 123456     perfil: USUARIO
-- (troque a senha do admin antes de publicar o site)
-- ============================================================

SET NAMES utf8mb4;


-- ============================================================
-- 0) LIMPEZA
-- ============================================================
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS Horarios_Linhas;
DROP TABLE IF EXISTS Pontos_parada_Linhas;
DROP TABLE IF EXISTS Veiculo_Linha;
DROP TABLE IF EXISTS Rastreador;
DROP TABLE IF EXISTS Telefone;
DROP TABLE IF EXISTS Horarios;
DROP TABLE IF EXISTS Pontos_parada;
DROP TABLE IF EXISTS Linhas;
DROP TABLE IF EXISTS Veiculo;
DROP TABLE IF EXISTS Usuario;
DROP TABLE IF EXISTS Perfil;
DROP TABLE IF EXISTS Cidade;
DROP TABLE IF EXISTS Estado;

SET FOREIGN_KEY_CHECKS = 1;


-- ============================================================
-- 1) TABELAS
-- ============================================================

-- ---------- Estado ----------
CREATE TABLE Estado (
    ID_Estado  INT NOT NULL AUTO_INCREMENT,
    NM_Estado  VARCHAR(100) NOT NULL,
    CONSTRAINT PK_Estado PRIMARY KEY (ID_Estado)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Cidade ----------
CREATE TABLE Cidade (
    ID_Cidade  INT NOT NULL AUTO_INCREMENT,
    NM_Cidade  VARCHAR(100) NOT NULL,
    CEP        VARCHAR(15) NOT NULL,
    ID_Estado  INT NOT NULL,
    CONSTRAINT PK_Cidade PRIMARY KEY (ID_Cidade),
    CONSTRAINT FK_Cidade_Estado FOREIGN KEY (ID_Estado)
        REFERENCES Estado (ID_Estado)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Perfil (tipos de acesso: USUARIO e ADMIN) ----------
CREATE TABLE Perfil (
    ID_Perfil  INT NOT NULL AUTO_INCREMENT,
    NM_Perfil  VARCHAR(30) NOT NULL,
    CONSTRAINT PK_Perfil PRIMARY KEY (ID_Perfil),
    CONSTRAINT UQ_Perfil_Nome UNIQUE (NM_Perfil)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Usuario ----------
-- Senha guarda o HASH (bcrypt = 60 caracteres), nunca a senha pura.
-- ID_Estado é opcional porque a tela de cadastro não pede estado.
CREATE TABLE Usuario (
    ID_Usuario  INT NOT NULL AUTO_INCREMENT,
    Nome        VARCHAR(150) NOT NULL,
    Email       VARCHAR(150) NOT NULL,
    Senha       VARCHAR(100) NOT NULL,
    ID_Estado   INT NULL,
    ID_Perfil   INT NOT NULL,
    CONSTRAINT PK_Usuario PRIMARY KEY (ID_Usuario),
    CONSTRAINT UQ_Usuario_Email UNIQUE (Email),
    CONSTRAINT FK_Usuario_Estado FOREIGN KEY (ID_Estado)
        REFERENCES Estado (ID_Estado),
    CONSTRAINT FK_Usuario_Perfil FOREIGN KEY (ID_Perfil)
        REFERENCES Perfil (ID_Perfil)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Telefone (um usuário pode ter vários) ----------
CREATE TABLE Telefone (
    ID_Telefone   INT NOT NULL AUTO_INCREMENT,
    NUM_Telefone  VARCHAR(20) NOT NULL,
    ID_Usuario    INT NOT NULL,
    CONSTRAINT PK_Telefone PRIMARY KEY (ID_Telefone),
    CONSTRAINT UQ_Telefone_NUM UNIQUE (NUM_Telefone),
    CONSTRAINT FK_Telefone_Usuario FOREIGN KEY (ID_Usuario)
        REFERENCES Usuario (ID_Usuario) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Veiculo ----------
CREATE TABLE Veiculo (
    ID_Veiculo  INT NOT NULL AUTO_INCREMENT,
    Placa       VARCHAR(10) NOT NULL,
    TP_Veiculo  VARCHAR(50) NOT NULL,
    Modelo      VARCHAR(100) NOT NULL,
    Status      TINYINT NOT NULL DEFAULT 1,      -- 1 = ativo, 0 = inativo
    CONSTRAINT PK_Veiculo PRIMARY KEY (ID_Veiculo),
    CONSTRAINT UQ_Veiculo_Placa UNIQUE (Placa),
    CONSTRAINT CK_Veiculo_Status CHECK (Status IN (0, 1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Rastreador (1 por veículo: guarda a última posição) ----------
CREATE TABLE Rastreador (
    ID_Rastreador  INT NOT NULL AUTO_INCREMENT,
    ID_Veiculo     INT NOT NULL,
    `TimeStamp`    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Latitude       DECIMAL(9,6) NULL,
    Longitude      DECIMAL(9,6) NULL,
    Velocidade     DECIMAL(5,1) NULL DEFAULT 0,
    Status         TINYINT NOT NULL DEFAULT 1,
    CONSTRAINT PK_Rastreador PRIMARY KEY (ID_Rastreador),
    CONSTRAINT UQ_Rastreador_Veiculo UNIQUE (ID_Veiculo),
    CONSTRAINT FK_Rastreador_Veiculo FOREIGN KEY (ID_Veiculo)
        REFERENCES Veiculo (ID_Veiculo) ON DELETE CASCADE,
    CONSTRAINT CK_Rastreador_Status CHECK (Status IN (0, 1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Linhas ----------
-- Cada linha tem dois sentidos (TERMINAL e BAIRRO); o sentido fica em
-- Horarios e em Pontos_parada_Linhas.
CREATE TABLE Linhas (
    ID_Linha   INT NOT NULL AUTO_INCREMENT,
    NUM_Linha  INT NOT NULL,
    Nome       VARCHAR(150) NOT NULL,
    Status     TINYINT NOT NULL DEFAULT 1,
    CONSTRAINT PK_Linhas PRIMARY KEY (ID_Linha),
    CONSTRAINT UQ_Linhas_Num UNIQUE (NUM_Linha),
    CONSTRAINT CK_Linhas_Status CHECK (Status IN (0, 1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Veiculo_Linha (N:N) ----------
CREATE TABLE Veiculo_Linha (
    ID_Veiculo  INT NOT NULL,
    ID_Linha    INT NOT NULL,
    CONSTRAINT PK_Veiculo_Linha PRIMARY KEY (ID_Veiculo, ID_Linha),
    CONSTRAINT FK_VeiculoLinha_Veiculo FOREIGN KEY (ID_Veiculo)
        REFERENCES Veiculo (ID_Veiculo) ON DELETE CASCADE,
    CONSTRAINT FK_VeiculoLinha_Linhas FOREIGN KEY (ID_Linha)
        REFERENCES Linhas (ID_Linha) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Pontos_parada ----------
CREATE TABLE Pontos_parada (
    ID_Parada  INT NOT NULL AUTO_INCREMENT,
    NM_Parada  VARCHAR(100) NOT NULL,
    Endereco   VARCHAR(200) NULL,
    Latitude   DECIMAL(9,6) NULL,
    Longitude  DECIMAL(9,6) NULL,
    CONSTRAINT PK_Pontos_parada PRIMARY KEY (ID_Parada)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Pontos_parada_Linhas (N:N) ----------
-- A ORDEM do ponto depende da linha e do sentido, por isso fica aqui.
CREATE TABLE Pontos_parada_Linhas (
    ID_Linhas  INT NOT NULL,
    ID_Parada  INT NOT NULL,
    Sentido    VARCHAR(10) NOT NULL,
    Ordem      INT NOT NULL,
    CONSTRAINT PK_Pontos_parada_Linhas PRIMARY KEY (ID_Linhas, Sentido, Ordem),
    CONSTRAINT UQ_ParadaLinhas_Ponto UNIQUE (ID_Linhas, Sentido, ID_Parada),
    CONSTRAINT CK_ParadaLinhas_Sentido CHECK (Sentido IN ('TERMINAL', 'BAIRRO')),
    CONSTRAINT FK_ParadaLinhas_Linhas FOREIGN KEY (ID_Linhas)
        REFERENCES Linhas (ID_Linha) ON DELETE CASCADE,
    CONSTRAINT FK_ParadaLinhas_Parada FOREIGN KEY (ID_Parada)
        REFERENCES Pontos_parada (ID_Parada) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Horarios ----------
CREATE TABLE Horarios (
    ID_Horario  INT NOT NULL AUTO_INCREMENT,
    HR_Saida    VARCHAR(5) NOT NULL,              -- formato HH:MM
    Tipo_Dia    VARCHAR(20) NOT NULL,
    Sentido     VARCHAR(10) NOT NULL,
    CONSTRAINT PK_Horarios PRIMARY KEY (ID_Horario),
    CONSTRAINT UQ_Horarios UNIQUE (HR_Saida, Tipo_Dia, Sentido),
    CONSTRAINT CK_Horarios_Dia CHECK (Tipo_Dia IN ('SEGUNDA_SEXTA', 'SABADO', 'DOMINGO', 'FERIADO')),
    CONSTRAINT CK_Horarios_Sentido CHECK (Sentido IN ('TERMINAL', 'BAIRRO')),
    CONSTRAINT CK_Horarios_Hora CHECK (HR_Saida REGEXP '^([01][0-9]|2[0-3]):[0-5][0-9]$')
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Horarios_Linhas (N:N) ----------
CREATE TABLE Horarios_Linhas (
    ID_Horarios  INT NOT NULL,
    ID_Linha     INT NOT NULL,
    CONSTRAINT PK_Horarios_Linhas PRIMARY KEY (ID_Horarios, ID_Linha),
    CONSTRAINT FK_HorariosLinhas_Horarios FOREIGN KEY (ID_Horarios)
        REFERENCES Horarios (ID_Horario) ON DELETE CASCADE,
    CONSTRAINT FK_HorariosLinhas_Linhas FOREIGN KEY (ID_Linha)
        REFERENCES Linhas (ID_Linha) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- ============================================================
-- 2) DADOS INICIAIS
-- ============================================================

-- ---------- Localização ----------
INSERT INTO Estado (NM_Estado) VALUES ('São Paulo');

INSERT INTO Cidade (NM_Cidade, CEP, ID_Estado)
SELECT 'Araras', '13600-000', ID_Estado FROM Estado WHERE NM_Estado = 'São Paulo';

-- ---------- Perfis ----------
INSERT INTO Perfil (NM_Perfil) VALUES ('USUARIO');
INSERT INTO Perfil (NM_Perfil) VALUES ('ADMIN');

-- ---------- Usuários de teste ----------
INSERT INTO Usuario (Nome, Email, Senha, ID_Estado, ID_Perfil)
SELECT 'Administrador', 'admin@bustracking.example',
       '$2y$10$0Mv8SH2QxknGL0jpxOZ.weBYiAGHA7h7gqEXJ4LMZE53fqzcKMmgS',
       e.ID_Estado, p.ID_Perfil
FROM Estado e, Perfil p
WHERE e.NM_Estado = 'São Paulo' AND p.NM_Perfil = 'ADMIN';

INSERT INTO Usuario (Nome, Email, Senha, ID_Estado, ID_Perfil)
SELECT 'João Silva', 'joao.silva@email.com',
       '$2y$10$08oZdxZF7N6pOYCWLJaMR.MKbqPWgjiNi6aBujquSQGqnV6/CAdAO',
       e.ID_Estado, p.ID_Perfil
FROM Estado e, Perfil p
WHERE e.NM_Estado = 'São Paulo' AND p.NM_Perfil = 'USUARIO';

INSERT INTO Telefone (NUM_Telefone, ID_Usuario)
SELECT '11999999999', ID_Usuario FROM Usuario WHERE Email = 'joao.silva@email.com';

-- ---------- Linhas de exemplo (as mesmas da tela de rastreio) ----------
-- Depois trocamos pelos dados reais do data.js (ou cadastramos pelo painel admin).
INSERT INTO Linhas (NUM_Linha, Nome, Status) VALUES (101, 'Terminal - Centro', 1);
INSERT INTO Linhas (NUM_Linha, Nome, Status) VALUES (202, 'Terminal - Jardim', 1);
INSERT INTO Linhas (NUM_Linha, Nome, Status) VALUES (305, 'Terminal - Industrial', 1);

-- ---------- Veículos + rastreadores ----------
INSERT INTO Veiculo (Placa, TP_Veiculo, Modelo, Status) VALUES ('ABC-1234', 'Ônibus', 'Mercedes-Benz', 1);
INSERT INTO Veiculo (Placa, TP_Veiculo, Modelo, Status) VALUES ('DEF-5678', 'Ônibus', 'Volkswagen', 1);
INSERT INTO Veiculo (Placa, TP_Veiculo, Modelo, Status) VALUES ('GHI-9012', 'Ônibus', 'Volvo', 1);

INSERT INTO Rastreador (ID_Veiculo, `TimeStamp`, Latitude, Longitude, Velocidade, Status)
SELECT ID_Veiculo, NOW(), -22.357000, -47.384000, 28.0, 1 FROM Veiculo WHERE Placa = 'ABC-1234';
INSERT INTO Rastreador (ID_Veiculo, `TimeStamp`, Latitude, Longitude, Velocidade, Status)
SELECT ID_Veiculo, NOW(), -22.360000, -47.390000, 0, 1 FROM Veiculo WHERE Placa = 'DEF-5678';
INSERT INTO Rastreador (ID_Veiculo, `TimeStamp`, Latitude, Longitude, Velocidade, Status)
SELECT ID_Veiculo, NOW(), -22.352000, -47.380000, 31.5, 1 FROM Veiculo WHERE Placa = 'GHI-9012';

INSERT INTO Veiculo_Linha (ID_Veiculo, ID_Linha)
SELECT v.ID_Veiculo, l.ID_Linha FROM Veiculo v, Linhas l WHERE v.Placa = 'ABC-1234' AND l.NUM_Linha = 101;
INSERT INTO Veiculo_Linha (ID_Veiculo, ID_Linha)
SELECT v.ID_Veiculo, l.ID_Linha FROM Veiculo v, Linhas l WHERE v.Placa = 'DEF-5678' AND l.NUM_Linha = 202;
INSERT INTO Veiculo_Linha (ID_Veiculo, ID_Linha)
SELECT v.ID_Veiculo, l.ID_Linha FROM Veiculo v, Linhas l WHERE v.Placa = 'GHI-9012' AND l.NUM_Linha = 305;

-- ---------- Pontos de parada de exemplo ----------
INSERT INTO Pontos_parada (NM_Parada, Endereco, Latitude, Longitude)
VALUES ('Terminal Central', 'Av. Exemplo, 100 - Centro', -22.357000, -47.384000);
INSERT INTO Pontos_parada (NM_Parada, Endereco, Latitude, Longitude)
VALUES ('Praça da Matriz', 'Praça Exemplo, s/n - Centro', -22.358500, -47.385500);
INSERT INTO Pontos_parada (NM_Parada, Endereco, Latitude, Longitude)
VALUES ('Parada Bairro', 'Rua Exemplo, 50 - Jardim', -22.362000, -47.392000);

-- Linha 101, sentido TERMINAL: Terminal -> Praça -> Bairro
INSERT INTO Pontos_parada_Linhas (ID_Linhas, ID_Parada, Sentido, Ordem)
SELECT l.ID_Linha, p.ID_Parada, 'TERMINAL', 1 FROM Linhas l, Pontos_parada p
WHERE l.NUM_Linha = 101 AND p.NM_Parada = 'Terminal Central';
INSERT INTO Pontos_parada_Linhas (ID_Linhas, ID_Parada, Sentido, Ordem)
SELECT l.ID_Linha, p.ID_Parada, 'TERMINAL', 2 FROM Linhas l, Pontos_parada p
WHERE l.NUM_Linha = 101 AND p.NM_Parada = 'Praça da Matriz';
INSERT INTO Pontos_parada_Linhas (ID_Linhas, ID_Parada, Sentido, Ordem)
SELECT l.ID_Linha, p.ID_Parada, 'TERMINAL', 3 FROM Linhas l, Pontos_parada p
WHERE l.NUM_Linha = 101 AND p.NM_Parada = 'Parada Bairro';

-- Linha 101, sentido BAIRRO: Bairro -> Praça -> Terminal
INSERT INTO Pontos_parada_Linhas (ID_Linhas, ID_Parada, Sentido, Ordem)
SELECT l.ID_Linha, p.ID_Parada, 'BAIRRO', 1 FROM Linhas l, Pontos_parada p
WHERE l.NUM_Linha = 101 AND p.NM_Parada = 'Parada Bairro';
INSERT INTO Pontos_parada_Linhas (ID_Linhas, ID_Parada, Sentido, Ordem)
SELECT l.ID_Linha, p.ID_Parada, 'BAIRRO', 2 FROM Linhas l, Pontos_parada p
WHERE l.NUM_Linha = 101 AND p.NM_Parada = 'Praça da Matriz';
INSERT INTO Pontos_parada_Linhas (ID_Linhas, ID_Parada, Sentido, Ordem)
SELECT l.ID_Linha, p.ID_Parada, 'BAIRRO', 3 FROM Linhas l, Pontos_parada p
WHERE l.NUM_Linha = 101 AND p.NM_Parada = 'Terminal Central';

-- ---------- Horários de exemplo (linha 101, segunda a sexta) ----------
INSERT INTO Horarios (HR_Saida, Tipo_Dia, Sentido) VALUES ('06:00', 'SEGUNDA_SEXTA', 'TERMINAL');
INSERT INTO Horarios (HR_Saida, Tipo_Dia, Sentido) VALUES ('06:30', 'SEGUNDA_SEXTA', 'TERMINAL');
INSERT INTO Horarios (HR_Saida, Tipo_Dia, Sentido) VALUES ('07:00', 'SEGUNDA_SEXTA', 'TERMINAL');
INSERT INTO Horarios (HR_Saida, Tipo_Dia, Sentido) VALUES ('06:15', 'SEGUNDA_SEXTA', 'BAIRRO');
INSERT INTO Horarios (HR_Saida, Tipo_Dia, Sentido) VALUES ('06:45', 'SEGUNDA_SEXTA', 'BAIRRO');
INSERT INTO Horarios (HR_Saida, Tipo_Dia, Sentido) VALUES ('07:15', 'SEGUNDA_SEXTA', 'BAIRRO');

INSERT INTO Horarios_Linhas (ID_Horarios, ID_Linha)
SELECT h.ID_Horario, l.ID_Linha
FROM Horarios h, Linhas l
WHERE l.NUM_Linha = 101 AND h.Tipo_Dia = 'SEGUNDA_SEXTA';


-- ============================================================
-- 3) CONSULTAS DE CONFERÊNCIA (só leitura, não alteram nada)
-- Para usar: copie UMA consulta por vez e rode na aba "SQL"
-- do phpMyAdmin (tirando os "-- " do começo das linhas).
-- ============================================================

-- Usuários com seus perfis
-- SELECT u.ID_Usuario, u.Nome, u.Email, p.NM_Perfil
-- FROM Usuario u JOIN Perfil p ON p.ID_Perfil = u.ID_Perfil;

-- Itinerário da linha 101, na ordem
-- SELECT l.NUM_Linha, ppl.Sentido, ppl.Ordem, pp.NM_Parada
-- FROM Linhas l
-- JOIN Pontos_parada_Linhas ppl ON ppl.ID_Linhas = l.ID_Linha
-- JOIN Pontos_parada pp ON pp.ID_Parada = ppl.ID_Parada
-- WHERE l.NUM_Linha = 101
-- ORDER BY ppl.Sentido, ppl.Ordem;

-- Horários da linha 101
-- SELECT l.NUM_Linha, h.Tipo_Dia, h.Sentido, h.HR_Saida
-- FROM Linhas l
-- JOIN Horarios_Linhas hl ON hl.ID_Linha = l.ID_Linha
-- JOIN Horarios h ON h.ID_Horario = hl.ID_Horarios
-- WHERE l.NUM_Linha = 101
-- ORDER BY h.Tipo_Dia, h.Sentido, h.HR_Saida;

-- Ônibus com posição e linha
-- SELECT v.Placa, l.NUM_Linha, r.Latitude, r.Longitude, r.Velocidade
-- FROM Veiculo v
-- JOIN Rastreador r ON r.ID_Veiculo = v.ID_Veiculo
-- JOIN Veiculo_Linha vl ON vl.ID_Veiculo = v.ID_Veiculo
-- JOIN Linhas l ON l.ID_Linha = vl.ID_Linha;

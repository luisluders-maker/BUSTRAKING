-- ============================================================
-- SCRIPT DE CRIAÇÃO DAS TABELAS - MODELO LÓGICO (Oracle)
-- Sistema de Gerenciamento de Transporte (Linhas, Veículos, Usuários)
-- ============================================================

-- ============================================================
-- Tabela: Estado
-- ============================================================
CREATE TABLE Estado (
    ID_Estado   NUMBER(10) GENERATED ALWAYS AS IDENTITY,
    NM_Estado   VARCHAR2(100) NOT NULL,
    CONSTRAINT PK_Estado PRIMARY KEY (ID_Estado)
);

-- ============================================================
-- Tabela: Cidade
-- ============================================================
CREATE TABLE Cidade (
    ID_Cidade   NUMBER(10) GENERATED ALWAYS AS IDENTITY,
    NM_Cidade   VARCHAR2(100) NOT NULL,
    CEP         VARCHAR2(15) NOT NULL,
    ID_Estado   NUMBER(10) NOT NULL,
    CONSTRAINT PK_Cidade PRIMARY KEY (ID_Cidade),
    CONSTRAINT FK_Cidade_Estado FOREIGN KEY (ID_Estado)
        REFERENCES Estado (ID_Estado)
);

-- ============================================================
-- Tabela: Usuario
-- ============================================================
CREATE TABLE Usuario (
    ID_Usuario    NUMBER(10) GENERATED ALWAYS AS IDENTITY,
    Nome          VARCHAR2(150) NOT NULL,
    Email         VARCHAR2(150) NOT NULL,
    Senha         VARCHAR2(100) NOT NULL,
    ID_Estado     NUMBER(10) NOT NULL,
    CONSTRAINT PK_Usuario PRIMARY KEY (ID_Usuario),
    CONSTRAINT UQ_Usuario_Email UNIQUE (Email),
    CONSTRAINT FK_Usuario_Estado FOREIGN KEY (ID_Estado)
        REFERENCES Estado (ID_Estado)
);

-- ============================================================
-- Tabela: Telefone
-- Um usuário pode possuir um ou mais telefones.
-- ============================================================
CREATE TABLE Telefone (
    ID_Telefone   NUMBER(10) GENERATED ALWAYS AS IDENTITY,
    NUM_Telefone  VARCHAR2(20) NOT NULL,
    ID_Usuario    NUMBER(10) NOT NULL,
    CONSTRAINT PK_Telefone PRIMARY KEY (ID_Telefone),
    CONSTRAINT UQ_Telefone_NUM_Telefone UNIQUE (NUM_Telefone),
    CONSTRAINT FK_Telefone_Usuario FOREIGN KEY (ID_Usuario)
        REFERENCES Usuario (ID_Usuario)
        ON DELETE CASCADE
);

-- ============================================================
-- Tabela: Veiculo
-- ============================================================
CREATE TABLE Veiculo (
    ID_Veiculo  NUMBER(10) GENERATED ALWAYS AS IDENTITY,
    Placa       VARCHAR2(10) NOT NULL,
    TP_Veiculo  VARCHAR2(50) NOT NULL,
    Modelo      VARCHAR2(100) NOT NULL,
    Status      NUMBER(1) DEFAULT 1 NOT NULL,
    CONSTRAINT PK_Veiculo PRIMARY KEY (ID_Veiculo),
    CONSTRAINT CK_Veiculo_Status CHECK (Status IN (0, 1))
);

-- ============================================================
-- Tabela: Rastreador
-- Relacionamento: Veiculo (1,1) -> Rastreador (1,1)
-- ============================================================
CREATE TABLE Rastreador (
    ID_Rastreador  NUMBER(10) GENERATED ALWAYS AS IDENTITY,
    ID_Veiculo     NUMBER(10) NOT NULL,
    TimeStamp      TIMESTAMP NOT NULL,
    Status         NUMBER(1) DEFAULT 1 NOT NULL,
    CONSTRAINT PK_Rastreador PRIMARY KEY (ID_Rastreador),
    CONSTRAINT UQ_Rastreador_Veiculo UNIQUE (ID_Veiculo),
    CONSTRAINT FK_Rastreador_Veiculo FOREIGN KEY (ID_Veiculo)
        REFERENCES Veiculo (ID_Veiculo)
        ON DELETE CASCADE,
    CONSTRAINT CK_Rastreador_Status CHECK (Status IN (0, 1))
);

-- ============================================================
-- Tabela: Linhas
-- ============================================================
CREATE TABLE Linhas (
    ID_Linha   NUMBER(10) GENERATED ALWAYS AS IDENTITY,
    NUM_Linha  NUMBER(10) NOT NULL,
    Sentido    VARCHAR2(50) NOT NULL,
    Status     NUMBER(1) DEFAULT 1 NOT NULL,
    CONSTRAINT PK_Linhas PRIMARY KEY (ID_Linha),
    CONSTRAINT CK_Linhas_Status CHECK (Status IN (0, 1))
);

-- ============================================================
-- Tabela: Veiculo_Linha
-- Associativa N:N entre Veiculo e Linhas
-- ============================================================
CREATE TABLE Veiculo_Linha (
    ID_Veiculo  NUMBER(10) NOT NULL,
    ID_Linha    NUMBER(10) NOT NULL,
    CONSTRAINT PK_Veiculo_Linha PRIMARY KEY (ID_Veiculo, ID_Linha),
    CONSTRAINT FK_VeiculoLinha_Veiculo FOREIGN KEY (ID_Veiculo)
        REFERENCES Veiculo (ID_Veiculo),
    CONSTRAINT FK_VeiculoLinha_Linhas FOREIGN KEY (ID_Linha)
        REFERENCES Linhas (ID_Linha)
);

-- ============================================================
-- Tabela: Pontos_parada
-- ============================================================
CREATE TABLE Pontos_parada (
    ID_Parada  NUMBER(10) GENERATED ALWAYS AS IDENTITY,
    NM_Parada  VARCHAR2(100) NOT NULL,
    Ordem      NUMBER(10) NOT NULL,
    CONSTRAINT PK_Pontos_parada PRIMARY KEY (ID_Parada)
);

-- ============================================================
-- Tabela: Pontos_parada_Linhas
-- Associativa N:N entre Pontos_parada e Linhas
-- ============================================================
CREATE TABLE Pontos_parada_Linhas (
    ID_Linhas  NUMBER(10) NOT NULL,
    ID_Parada  NUMBER(10) NOT NULL,
    CONSTRAINT PK_Pontos_parada_Linhas PRIMARY KEY (ID_Linhas, ID_Parada),
    CONSTRAINT FK_ParadaLinhas_Linhas FOREIGN KEY (ID_Linhas)
        REFERENCES Linhas (ID_Linha)
        ON DELETE CASCADE,
    CONSTRAINT FK_ParadaLinhas_Parada FOREIGN KEY (ID_Parada)
        REFERENCES Pontos_parada (ID_Parada)
);

-- ============================================================
-- Tabela: Horarios
-- ============================================================
CREATE TABLE Horarios (
    ID_Horario  NUMBER(10) GENERATED ALWAYS AS IDENTITY,
    HR_Saida    VARCHAR2(5) NOT NULL,
    CONSTRAINT PK_Horarios PRIMARY KEY (ID_Horario)
);

-- ============================================================
-- Tabela: Horarios_Linhas
-- Associativa N:N entre Horarios e Linhas
-- ============================================================
CREATE TABLE Horarios_Linhas (
    ID_Horarios  NUMBER(10) NOT NULL,
    ID_Linha     NUMBER(10) NOT NULL,
    CONSTRAINT PK_Horarios_Linhas PRIMARY KEY (ID_Horarios, ID_Linha),
    CONSTRAINT FK_HorariosLinhas_Horarios FOREIGN KEY (ID_Horarios)
        REFERENCES Horarios (ID_Horario),
    CONSTRAINT FK_HorariosLinhas_Linhas FOREIGN KEY (ID_Linha)
        REFERENCES Linhas (ID_Linha)
        ON DELETE CASCADE
);

-- ============================================================
-- INSERÇÃO DOS DADOS INICIAIS
-- ============================================================

INSERT INTO Estado (NM_Estado)
VALUES ('São Paulo');

INSERT INTO Cidade (NM_Cidade, CEP, ID_Estado)
SELECT 'São Paulo', '01000-000', ID_Estado
FROM Estado
WHERE NM_Estado = 'São Paulo';

INSERT INTO Usuario (Nome, Email, Senha, ID_Estado)
SELECT 'João Silva', 'joao.silva@email.com', '123456', ID_Estado
FROM Estado
WHERE NM_Estado = 'São Paulo';

INSERT INTO Telefone (NUM_Telefone, ID_Usuario)
SELECT '11999999999', ID_Usuario
FROM Usuario
WHERE Email = 'joao.silva@email.com';

INSERT INTO Veiculo (Placa, TP_Veiculo, Modelo, Status)
VALUES ('ABC-1234', 'Ônibus', 'Mercedes-Benz', 1);

INSERT INTO Rastreador (ID_Veiculo, TimeStamp, Status)
SELECT ID_Veiculo, TIMESTAMP '2024-06-01 08:00:00', 1
FROM Veiculo
WHERE Placa = 'ABC-1234';

INSERT INTO Linhas (NUM_Linha, Sentido, Status)
VALUES (100, 'Centro', 1);

INSERT INTO Veiculo_Linha (ID_Veiculo, ID_Linha)
SELECT v.ID_Veiculo, l.ID_Linha
FROM Veiculo v
CROSS JOIN Linhas l
WHERE v.Placa = 'ABC-1234'
  AND l.NUM_Linha = 100;

INSERT INTO Pontos_parada (NM_Parada, Ordem)
VALUES ('Parada A', 1);

INSERT INTO Pontos_parada_Linhas (ID_Linhas, ID_Parada)
SELECT l.ID_Linha, p.ID_Parada
FROM Linhas l
CROSS JOIN Pontos_parada p
WHERE l.NUM_Linha = 100
  AND p.NM_Parada = 'Parada A';

INSERT INTO Horarios (HR_Saida)
VALUES ('08:00');

INSERT INTO Horarios_Linhas (ID_Horarios, ID_Linha)
SELECT h.ID_Horario, l.ID_Linha
FROM Horarios h
CROSS JOIN Linhas l
WHERE h.HR_Saida = '08:00'
  AND l.NUM_Linha = 100;

COMMIT;

-- ============================================================
-- CONSULTAS PARA TESTE
-- ============================================================

SELECT * FROM Estado;
SELECT * FROM Cidade;
SELECT * FROM Usuario;
SELECT * FROM Telefone;
SELECT * FROM Veiculo;
SELECT * FROM Rastreador;
SELECT * FROM Linhas;
SELECT * FROM Veiculo_Linha;
SELECT * FROM Pontos_parada;
SELECT * FROM Pontos_parada_Linhas;
SELECT * FROM Horarios;
SELECT * FROM Horarios_Linhas;

UPDATE Veiculo
SET Status = 0
WHERE Placa = 'ABC-1234';

delete from Usuario where Email = 'joao.silva@email.com';

COMMIT;


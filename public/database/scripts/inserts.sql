# DROP SCHEMA IF EXISTS `storedb`;
#TRUNCATE TABLE `Product`;
#TRUNCATE TABLE User;
#TRUNCATE TABLE `User_has_Product`;
USE `storedb` ;
INSERT INTO User (`name`, `age`, `password`, `email`)
VALUES ("Bruno", 21, "batata123", "bruno@email.com");
INSERT INTO User (`name`, `age`, `password`, `email`)
VALUES ("Ronald", 12, "ronald443", "Ronald@email.com");
INSERT INTO User (`name`, `age`, `password`, `email`)
VALUES ("Rafael", 18, "l.lauraviow", "Rafael@email.com");
INSERT INTO User (`name`, `age`, `password`, `email`)
VALUES ("a", 21, "a", "@");

select *
from User;

# Create Games

INSERT INTO `Product` (`name`, `brand`, `description`, `price`)
VALUES (
        "Farcry 6",
        "Ubsoft",
        "Bem-vindo a Yara, um paraíso tropical que parou no tempo. Anton Castillo, o ditador de Yara, pretende resgatar a glória do seu país a qualquer custo, junto com seu filho, Diego, que é tão sanguinário quanto o pai. Seu governo opressor desencadeou uma revolução.",
        249.99
    );
INSERT INTO `Product` (`name`, `brand`, `description`, `price`)
VALUES (
        "Call of Duty: Warzone",
        "Activision",
        "Uma luta épica por sobrevivência. Junte-se às tropas e encare o incrível tiroteio para ser o último esquadrão de pé.",
        0
    );
INSERT INTO `Product` (`name`, `brand`, `description`, `price`)
VALUES (
        "Resident Evil Village",
        "Capcom",
        "Vivencie o horror de sobrevivência como nunca na 8ª sequência parte da franquia Resident Evil - Resident Evil Village.",
        179.99
    );
INSERT INTO `Product` (`name`, `brand`, `description`, `price`)
VALUES (
        "DEVOUR",
        "Straight Back Games",
        "DEVOUR é um jogo cooperativo de horror e sobrevivência de 1 a 4 jogadores. Detenha integrantes possuídos por Azazel antes que eles te arrastem para o inferno. Corra. Grite. Esconda-se. Sobreviva a qualquer custo!",
        10.89
    );

select *
from `Product`;

# Bruno
INSERT INTO `User_has_Product` (`User_idUser`, `Product_idProduct`)
VALUES (1, 2);
INSERT INTO `User_has_Product` (`User_idUser`, `Product_idProduct`)
VALUES (1, 4);

# Rafael
INSERT INTO `User_has_Product` (`User_idUser`, `Product_idProduct`)
VALUES (2, 1);
INSERT INTO `User_has_Product` (`User_idUser`, `Product_idProduct`)
VALUES (2, 2);

# Ronald
INSERT INTO `User_has_Product` (`User_idUser`, `Product_idProduct`)
VALUES (3, 3);
INSERT INTO `User_has_Product` (`User_idUser`, `Product_idProduct`)
VALUES (3, 2);

select *
from `User_has_Product`;
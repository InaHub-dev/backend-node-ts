use `storedb`;

-- Select every user game
SELECT distinct p.*
FROM User u,
    `Product` p,
    `User_has_Product` h
WHERE h.`User_idUser` = u.`idUser` && h.`Product_idProduct` = p.`idProduct` && u.`idUser` = 2;

-- Select every game user
SELECT distinct u.*
FROM User u,
    `Product` p,
    `User_has_Product` h
WHERE h.`User_idUser` = u.`idUser` && h.`Product_idProduct` = p.`idProduct` && p.`idProduct` = 1;

SELECT *
FROM `Product`;

SELECT *
FROM `User`;

-- Select Product by name
SELECT *
FROM `Product`
WHERE name LIKE '%devour%';
# Update User password

UPDATE User
SET password = "newPassword123"
WHERE User.idUser = 1;

# Update Product price

UPDATE `Product`
SET price = 10.00
WHERE `Product`.`idProduct` = 1;

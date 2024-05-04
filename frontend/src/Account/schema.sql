-- Create Users table
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    Username VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(100) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Role ENUM ('Admin', 'Manager', 'Staff') NOT NULL
);

-- Create Categories table
CREATE TABLE Categories (
    CategoryID SERIAL PRIMARY KEY,
    CategoryName VARCHAR(100) UNIQUE NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Brands table
CREATE TABLE Brands (
    BrandID SERIAL PRIMARY KEY,
    BrandName VARCHAR(100) UNIQUE NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Products table
CREATE TABLE Products (
    ProductID SERIAL PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    CategoryID INT REFERENCES Categories(CategoryID),
    BrandID INT REFERENCES Brands(BrandID),
    Price NUMERIC(10, 2) NOT NULL,
    StockQuantity INT NOT NULL,
    CreatedBy INT REFERENCES Users(UserID),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Transactions table
CREATE TABLE Transactions (
    TransactionID SERIAL PRIMARY KEY,
    UserID INT REFERENCES Users(UserID),
    ProductID INT REFERENCES Products(ProductID),
    QuantitySold INT NOT NULL,
    TransactionDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserting data into Users table
INSERT INTO Users (id, Username, Password, Email, Role) 
VALUES 
(1, 'admin', 'adminpassword', 'admin@gmail.com', 'Admin'),
(2, 'manager', 'managerpassword','manager@gmail.com', 'Manager'),
(3, 'staff1', 'staffpassword1', 'staff1@gmail.com', 'Staff'),
(4, 'staff2', 'staffpassword2', 'staff2@gmail.com', 'Staff');

-- Inserting data into Categories table
INSERT INTO Categories (CategoryName) 
VALUES 
('Laptops'),
('Smartphones'),
('Tablets'),
('Watches'),
('Accessories');

-- Inserting data into Brands table
INSERT INTO Brands (BrandName) 
VALUES 
('Apple'),
('Samsung'),
('Dell'),
('HP'),
('Sony'),
('LG');

-- Inserting data into Products table
INSERT INTO Products (ProductName, CategoryID, BrandID, Price, StockQuantity, CreatedBy) 
VALUES 
('iPad Pro 12.9-inch (4th Generation)', 3, 1, 999.99, 40, 1),
('Apple Watch Series 5', 4, 1, 299.99, 50, 1),
('AirPods Pro (Refurbished)', 5, 1, 199.99, 70, 1),
('MacBook Air', 1, 1, 999.99, 50, 1),
('MacBook Pro', 1, 1, 1299.99, 30, 1),
('iPhone 13', 2, 1, 999.99, 40, 1),
('iPhone 13 Pro', 2, 1, 1099.99, 35, 1),
('Galaxy Book Flex', 1, 2, 1299.99, 30, 1),
('Galaxy Book Pro', 1, 2, 999.99, 40, 1),
('Inspiron 15 3000', 1, 3, 549.99, 30, 1),
('XPS 13', 1, 3, 999.99, 25, 1),
('Spectre x360', 1, 4, 1199.99, 35, 1),
('Envy x360', 1, 4, 899.99, 40, 1),
('VAIO Z', 1, 5, 1799.99, 20, 1),
('VAIO SX14', 1, 5, 1499.99, 25, 1),
('Gram 14 2-in-1', 1, 6, 1299.99, 30, 1),
('iMac M1', 1, 1, 1299.99, 25, 1),
('iPhone 12', 2, 1, 799.99, 40, 1),
('iPhone 12 Pro', 2, 1, 999.99, 35, 1),
('iPhone 12 Pro Max', 2, 1, 1099.99, 30, 1),
('Gram 17', 1, 6, 1399.99, 25, 1),
('iPhone 13 mini', 2, 1, 699.99, 45, 1),
('iPhone 13 Pro Max', 2, 1, 1199.99, 30, 1),
('Galaxy S21', 2, 2, 799.99, 50, 1),
('Galaxy Z Fold 3', 2, 2, 1799.99, 20, 1),
('Inspiron 14 5000', 1, 3, 799.99, 35, 1),
('XPS 15', 1, 3, 1599.99, 25, 1),
('iPad Mini (5th Generation)', 3, 1, 399.99, 50, 1),
('iPad Pro 11-inch (3rd Generation)', 3, 1, 799.99, 40, 1),
('Apple Watch Series 4', 4, 1, 199.99, 50, 1),
('Spectre x360 14', 1, 4, 1299.99, 30, 1),
('Envy 15', 1, 4, 1099.99, 35, 1),
('Xperia 1 III', 2, 5, 1299.99, 30, 1),
('MacBook Air (Refurbished)', 1, 1, 799.99, 30, 1),
('iPhone XR', 2, 1, 499.99, 40, 1),
('iPhone XS', 2, 1, 899.99, 35, 1),
('iPhone XS Max', 2, 1, 999.99, 30, 1),
('AirPods (2nd Generation)', 5, 1, 159.99, 60, 1),
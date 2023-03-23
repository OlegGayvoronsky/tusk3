<?php
namespace System;
use PDO;
use PDOException;

class DatabaseConnector {
    private $m_dbConnection = null;

    public function __construct() {
        $host = 'localhost';
        $port = '3306';
        $db = 'u52836';
        $user = 'u52836';
        $password = '3817111';

        try {
            $this->m_dbConnection = new PDO(
                "mysql:host=$host;port=$port;charset=utf8mb4;dbname=$db",
                $user,
                $password
            );
        }
        catch (PDOException $exception) {
            exit($exception->getMessage());
        }
    }

    public function getConnection(): PDO
    {
        return $this->m_dbConnection;
    }
}

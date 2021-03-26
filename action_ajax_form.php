<?php

if (isset($_POST["name"])) {

    // переменная для сохранения результата
    $data = '{';
    $hash = '';
    // из массив $_POST получаем строку json
    foreach ($_POST as $key => $value) {
        if( $key == 'hash'){
            // Получаем хэш
            $hash = $value;
        } else {
        // добавим в переменную $data имя и значение ключа
        $data .= $key . ':' . $value . ',';
    }
    }
    $data .= '}';

    // Тестируем входные данные.
    $salt = '123';
    $test = ($hash == hashCalc($data, $salt)) ? "Данные приняты!" : "Ошибка в данных.";

    // Формируем массив для JSON ответа
    $result = array(
        'name' => $test, // Ответ
        // 'hash' => hashCalc( $data, '123' ) .' == '. $hash // Хэш для тестирования
    );

    // Переводим массив в JSON
    echo json_encode($result);
}

// Получение хэша
function hashCalc($str, $salt)
{
    // return crypt($data,$salt);
    return $salt . $str;
}
?>
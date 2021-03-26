$(document).ready(function () {

    $("#btn").click(
        function () {
            // test email
            var fieldemail = $('input[name="email"]').val();
            if (!checkmail(fieldemail)) {
                return false;
            };
            // test date
            var fielddate = $('input[name="birthday"]').val();
            if (!checkdate(fielddate)){
                return false;
            }

            // serialize form to str
            serialize_form = jQuery('#ajax_form').serializeArray();
            string_form = form_to_str(serialize_form);
            // hash serialize form
            salt = '123'
            hash_form = hash(string_form, salt);

            // serialize form
            data = jQuery("#" + 'ajax_form').serialize() +'&hash='+ hash_form;
            sendAjaxForm('result_form', data, 'action_ajax_form.php');
            return false;
        }
    );
});

function sendAjaxForm(result_form, data, url) {
    jQuery.ajax({
        url: url, // url страницы
        type: "POST", // метод отправки
        dataType: "json", // формат данных
        data: data,  // данные для отправки
        success: function (response) { // Данные отправлены успешно
            document.getElementById(result_form).innerHTML = "Ответ: " + response.name;// + "<br>" + response.hash;
        },
        error: function (response) { // Данные не отправлены
            document.getElementById(result_form).innerHTML = "Ошибка. Данные не отправленны.";
        }
    });
}

// test email
function checkmail(txt)
{
if (txt == "") {
	alert("Введите Адрес электронной почты.");
	return false
	}
if (txt.indexOf(".") == -1) {
	alert("Нет символа\".\"");
	return false
	}
if((txt.indexOf(",")>=0)||(txt.indexOf(";")>=0)||(txt.indexOf(" ")>=0)){
	alert("Адрес электронной почты был введен неправильно.");
	return false
	}
dog = txt.indexOf("@");
	if (dog == -1) {
	alert("Нет символа\"@\".");
	return false
	}
if ((dog < 1) || (dog > txt.length - 5)) {
	alert("Адрес электронной почты был введен неправильно.");
	return false
	}
if ((txt.charAt(dog - 1) == '.') || (txt.charAt(dog + 1) == '.')) {
alert("Адрес электронной почты был введен неправильно.");
	return false
	}
// alert("Адрес электронной почты был введен ВЕРНО!");
return true
}

// test date
function checkdate(txt)
{
    console.log(txt);
    if ((txt.charAt(4) !== '-') || (txt.charAt(7) !== '-')) {
        alert("Дата введена неправильно.");
        return false;
    }
return true;
}

// hash simulation
function hash (str, sol) {
    // функция для создания хэша из строки + соли
    return sol+'{'+str+'}';
}

// convert serialize_form to string
function form_to_str(serialize_form){
    str_form = '';
    jQuery.each(serialize_form, function(){
        str_form += this.name +':'+ this.value +',';
        // console.log(this.name+':'+this.value);
    });

    return str_form;
}
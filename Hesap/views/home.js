Hesap.home = function (params) {
    "use strict";

    var viewModel = {
        /*Sayı değerlerini önce boş bir değer olarak atıyoruz burada.*/
        sayi1: ko.observable(''),
        sayi2: ko.observable(''),

        toplama: function () {
            var sonuc, s1, s2;
            /*Textbox değerlerini değişkenlerimize aktarıyoruz.*/
            s1 = parseInt($("#sayi1").dxTextBox('option', 'value'));
            s2 = parseInt($("#sayi2").dxTextBox('option', 'value'));
            sonuc = s1 + s2;
            /*Elde ettiğimiz sonucu textbox'ın için gönderiyoruz burada.*/
            $("#sonuc").dxTextBox('option', 'value', sonuc);
            return sonuc;
        },
        cikarma: function () {
            var sonuc, s1, s2;
            s1 = parseInt($("#sayi1").dxTextBox('option', 'value'));
            s2 = parseInt($("#sayi2").dxTextBox('option', 'value'));
            sonuc = s1 - s2;
            $("#sonuc").dxTextBox('option', 'value', sonuc);
            return sonuc;
        },
        carpma: function () {
            var sonuc, s1, s2;
            s1 = parseInt($("#sayi1").dxTextBox('option', 'value'));
            s2 = parseInt($("#sayi2").dxTextBox('option', 'value'));
            sonuc = s1 * s2;
            $("#sonuc").dxTextBox('option', 'value', sonuc);
            return sonuc;
            return;
        },
        bolme: function () {
            var sonuc, s1, s2;
            s1 = parseInt($("#sayi1").dxTextBox('option', 'value'));
            s2 = parseInt($("#sayi2").dxTextBox('option', 'value'));
            sonuc = s1 / s2;
            $("#sonuc").dxTextBox('option', 'value', sonuc);
            return sonuc;
            return;
        }
    };

    return viewModel;
};
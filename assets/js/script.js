var display = document.getElementById('display');
var currentValue = display.value;

$("body").on("keydown", function(event) {
    let key = event.key;

    if (/[\d\/\*\-\+\n]/.test(key) || event.which == 13 || event.which == 8 || event.which == 46) {
        if (event.which == 13) {
            display.value = eval(currentValue);
            currentValue = "";
            event.preventDefault();

        } else if (event.which == 8) {
            currentValue = currentValue.slice(0, -1);
            display.value = currentValue;
            
        } else if (event.which == 46) {
            currentValue = '';
            display.value = currentValue;
        } 
        else {
            display.value = currentValue + key;
            currentValue = display.value;
        }
    } else {
        event.preventDefault();
    }
});

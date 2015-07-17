var total = 0;

$(document).ready(function() {

  $('#entry').submit(function(e) {
    e.preventDefault();

     
    entry = $('#newEntry').val();
    
    entry = parseFloat(entry);
    
    total = total + entry;
    var currency = convertNum(entry);
   
      
    $('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');
   
    var totalCurrency = convertNum(total);

    $('#total').html(totalCurrency);

    $('#newEntry').val('');
  });
      

  function convertNum(number) {
    var currency = ('$' + number + '.00');
    return currency;
  } 
});
 
(function($, window) {
  $(function() {
    $('h2').show();
    $('h2').remove();
    console.log($('#index').html());
    console.log($('#index').test());
    
    $('ul#index').append('<li>メソッド</li>');
    
    $('#index').find('li').each(function(){
      alert($(this).length());
    });
    
    function AddStringToEachLine() {
      var UserString = document.getElementById('sampleUserInput').value;
      var TargetList = document.getElementById('sampleTargetLines');
      TargetList.value = TargetList.value.replace(/\n/g,(UserString + "\n"));
    }
  });
})(jQuery, window);


/*
2. testメソッドはhtmlのタグをそのまま文字として出力する。一方で、
  htmlタグを解釈して出力する。
3. appendメソッドは、指定した要素内の最後に引数のコンテンツを追加する。


*/
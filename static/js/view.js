const view = {}

view.addHandler = function(){
    var $input = $('#input');
    var $result = $('#result');
    $input.on('keyup',function(e){
        //type
        let lines = $input.val().split('\n');
        let linesResult = lines.map(input => {
            let words = input.replace(/[\s]/g," ").split(" ");
            let result = []
            for (const word of words) {
                let unicodeWord = model.getUnicodeStr(word);
                result.push(unicodeWord)
            }
            return result.join(' ');
        });
        
        $result.html("<p>"+linesResult.join("</p><p>")+"</p>")
    })
}
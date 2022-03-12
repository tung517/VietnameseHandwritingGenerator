const model = {
    glyphGroups: null,
    glyphData: null
}

model.loadJsonData = function(){
    $.getJSON("/data/all.json", function(data){
        model.glyphData = data;
        view.showComponents('baseList')
    });
}

model.download = function(filename, text){
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
}

function handleGlyphInput(e){
    console.log(123)
    let input = $(e);
    console.log(input)
    let inputValue = input.val();
    console.log(inputValue)
    let unicodeInputName = input.attr('for');
    let unicodeInput = $('#'+unicodeInputName);
    unicodeInput.val(inputValue.charCodeAt(0) | null);
}

const target = document.getElementById('glyphinputlevel1');
    target.addEventListener('paste', (e) => {
        e.preventDefault();
        let paste = (e.clipboardData || window.clipboardData).getData('text');
        console.log(paste)
        let arr = paste.trim().split(' ').map(element => element.trim()).filter(element => element.length != 0);;
        
        let arr2 = ['level', 'acute', 'lower', 'rising', 'raised', 'heavy'];

        for (let i = 0; i < arr.length; i++) {
            const glyph = arr[i];
            const tone = arr2[i];
            $('#glyphinput'+tone+'1').val(glyph);
            $('#'+tone+'1').val(glyph.split('').map(char => char.charCodeAt(0)).join(','));
        }
        
        
    })
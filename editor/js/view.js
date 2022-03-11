const view = {

}

view.showComponents = function(name){
    let app = $('#app');
    switch(name){
        case 'baseList':
            app.html(components.baseListPage);
            let baseList = $("#baseList");
            let baseListHtml = baseList.html();
            let sortedData = Object.fromEntries(Object.entries(model.glyphData).sort())
            for (const [base, data] of Object.entries(sortedData)) {
                baseListHtml += `
                    ${components.baseCard.replace("{{name}}", base)}
                `
            }
            baseList.html(baseListHtml)

            $('#addNewBaseCardModal').on('shown.bs.modal', function () {
                $('#newBaseCardInput').trigger('focus')
            })
            let newBaseCardForm = $("#newBaseCardForm");
            newBaseCardForm.on('submit', function(e){
                e.preventDefault();
                controller.addNewBase(newBaseCardForm.children('input').val())
            })

            $('#downloadJson').on('click', function(e){
                model.download('all.json', JSON.stringify(model.glyphData))
            })
            break;
        default:
            app.html(components.loading)
    }
}
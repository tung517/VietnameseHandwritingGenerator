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
            //new base card modal
            $('#addNewBaseCardModal').on('shown.bs.modal', function () {
                $('#newBaseCardInput').trigger('focus')
            })
            let newBaseCardForm = $("#newBaseCardForm");
            newBaseCardForm.on('submit', function(e){
                e.preventDefault();
                controller.addNewBase(newBaseCardForm.children('input').val())
            })

            //Download json button
            $('#downloadJson').on('click', function(e){
                model.download('all.json', JSON.stringify(model.glyphData))
            })

            //edit base
            baseList.children('.baseCard:not(:first-child)')
                    .on('click', view.populateEditForm)
            break;
        default:
            app.html(components.loading)
    }
}

view.populateEditForm = function (e){
    let baseCard = $(e.target);
    let baseCardEditorModal = $('#editBaseModal').find('.modal-body')
    let editForm = components.baseEditForm
    let typeEditor = components.singleTypeEditor
    //form header
    baseCardEditorModal.html(editForm);
    baseCardEditorModal.find('#baseCharacter').val(baseCard.text())
    baseCardEditorModal.find('#baseUnicode').val(baseCard.text().charCodeAt(0))
    
}
const components = {

}

components.loading = `
<div class="loading-container">
    <img src="./imgs/loading.gif" >
  </div>
`

components.baseListPage = `
<div class="row">
    <div class="col">
        <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="javascript:void(0)">Glyph Editor</a>
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="../">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../getcode.html">Char to point</a>
                    </li>
                </ul>
                <form class="d-flex">
                    
                </form>
                <button id="downloadJson" class="btn btn-success">Download JSON</button>
                </div>
            </div>
        </nav>
    </div>
</div>

<div class="row" style="margin-top:80px">
    <div class="col-md-12 d-flex flex-wrap" id="baseList">
        <div class="card m-3 pt-2 baseCard" data-bs-toggle="modal" data-bs-target="#addNewBaseCardModal">
            <div class="card-header bg-white text-center" style="font-size:72pt;">+</div>
        </div>
    </div>
</div>

<div class="modal fade" id="addNewBaseCardModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
            <h4 class="modal-title">Modal Heading</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
            <form id="newBaseCardForm" action="#">
                <input name="newBase" id="newBaseCardInput" maxlength=3 type="text" class="form-control glyph-input" placeholder="Character" aria-label="Character">
            </form>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
            <button id="btnCloseNewBaseModal" type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>

        </div>
    </div>
</div>
<div class="modal fade" id="editBaseModal" tabindex="-1">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
            <h4 class="modal-title">Change base </h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
            change base
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>

        </div>
    </div>
</div>
`

components.baseCard = `
<div class="card m-3 pt-2 baseCard" data-bs-toggle="modal" data-bs-target="#editBaseModal">
    <div class="card-header bg-white text-center" style="font-size:72pt;">{{name}}</div>
</div>
`

components.editor = `

`
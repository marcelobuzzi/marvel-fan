import CustomButton from "./CustomButton"

function Tabs() {

  return (
    <>
      <div className="container-md px-3 py-2 mx-auto my-3">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="compras-tab" data-bs-toggle="tab" data-bs-target="#compras-tab-pane" type="button" role="tab" aria-controls="compras-tab-pane" aria-selected="true">
              Compras
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="servicios-tab" data-bs-toggle="tab" data-bs-target="#servicios-tab-pane" type="button" role="tab" aria-controls="servicios-tab-pane" aria-selected="false">
            Impuestos & Servicios
            </button>
          </li>
          {/* <li className="nav-item" role="presentation">
            <button className="nav-link" id="impuestos-tab" data-bs-toggle="tab" data-bs-target="#impuestos-tab-pane" type="button" role="tab" aria-controls="impuestos-tab-pane" aria-selected="false">
              Impuestos
            </button>
          </li> */}
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane border border-top-0 fade show active" id="compras-tab-pane" role="tabpanel" aria-labelledby="compras-tab" tabIndex="0">
            <CustomButton label="Nuevo" icon="fa-solid fa-plus" classes={'btn-primary m-2'}/>
          </div>
          <div className="tab-pane border border-top-0 fade" id="servicios-tab-pane" role="tabpanel" aria-labelledby="servicios-tab" tabIndex="0">
            Impuestos & Servicios
          </div>
          {/* <div className="tab-pane border border-top-0 fade" id="impuestos-tab-pane" role="tabpanel" aria-labelledby="impuestos-tab" tabIndex="0">
            Impuestos
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Tabs
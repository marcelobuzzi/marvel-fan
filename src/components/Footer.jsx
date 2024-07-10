
function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-lg-start text-white border-top border-danger">
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col mb-4 mb-md-0 text-center">
              <h5 className="text-uppercase">SEGUINOS</h5>
              <div className="mb-0">
                <a href="#!" className="mx-2 text-white"><i className="fa-brands fa-facebook"></i></a>
                <a href="#!" className="mx-2 text-white"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#!" className="mx-2 text-white"><i className="fa-brands fa-instagram"></i></a>
                <a href="#!" className="mx-2 text-white"><i className="fa-brands fa-tiktok"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2024 Copyright: MARVEL
        </div>
      </footer>
    </>
  )
}

export default Footer
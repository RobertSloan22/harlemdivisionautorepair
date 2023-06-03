
function Home() {
  return (
    <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <div className="container">
            <div className="card text-center">
              <div className="card-header">
                <Card
                  txtcolor="black"
                  header="Harlem & Division Auto Repair"
                  title="Robert J, Sloan Owner-- ASE Certified master technician"
                  text="Robert A, Sloan & Patrick B, Sloan - Owners - ASE Certified technicians"
                  body={(<img src="ase_certified.png" className="img-fluid" alt="Responsive image"/>)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="shop2.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Get insights on your vehicle based on its maintence history. </h5>
            <p className="card-text"></p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary"></small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="HDauto.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Serving the Oak Park & River Forest Area</h5>
            <p className="card-text">Service calls or Towing avaliavble based on location.</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Specials on select services each month</h5>
            <p className="card-text">Create your customer login account and connect to all your vehicles repair history.</p>
            <a href="" className="btn btn-primary">Go somewhere</a>
          </div>
          <div className="card-footer text-body-secondary">
            2 days ago
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

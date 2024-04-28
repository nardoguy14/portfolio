
const Footer = () => <footer className="page-footer font-small blue pt-4 bg-light">
    <div className="container-fluid text-center text-md-left">
        <div className="row">

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-6">
                <h5 >Links</h5>
                <ul className="list-unstyled">
                    <li  style={{"textAlign": 'center'}}><b>
                        <ion-icon name="newspaper-outline"></ion-icon>
                    </b>:
                        <a href="/Bernardo Arevalo (4).pdf" target={"_blank"} rel="noopener noreferrer">  My Resume</a>
                    </li>

                    <li style={{"textAlign": 'center'}}>
                        <ion-icon name="logo-linkedin"></ion-icon>
                        :
                        <a href="https://www.linkedin.com/in/bernardo-arevalo-3055bb237/" target={"_blank"} rel="noopener noreferrer">  LinkedIn</a>
                    </li>
                    <li style={{"textAlign": 'center'}}>
                        <ion-icon name="logo-github"></ion-icon>
                        :
                        <a href="https://github.com/nardoguy14" rel="noopener noreferrer"
                           target={"_blank"}> Github</a>
                    </li>
                </ul>
            </div>

            <div className="col-md-6 mb-md-0 mb-3">
            <h5>Contact</h5>
                <ul className="list-unstyled">
                    <li style={{"textAlign": 'center'}}>
                        <b>Email</b>: <a href="mailto: are.nardo@outlook.com"> are.nardo@icloud.com</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2024 Copyright
    </div>

</footer>

export default Footer
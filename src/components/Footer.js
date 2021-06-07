import '../styles/footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <footer className="contact-info">
                <div className="address">
                    <p>Boston, MA</p>
                </div>

                <div className="connect">
                    <p><a href="https://www.linkedin.com/in/kevinsilvestre/">LinkedIn</a></p>
                    <p><a href="https://github.com/silvodesigns">GitHub</a></p>
                </div>
            </footer>
            <div className="coppyrights">
                <p>@2021 Kevin Silvestre. All Rights reserved. Legal info</p>

            </div>

        </div >
    );
}

export default Footer;

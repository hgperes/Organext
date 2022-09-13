import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <img src="./imagens/facebook.png" alt="Link para o facebook" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <img src="./imagens/twitter.png" alt="Link para o Twitter" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img src="./imagens/instagram.png" alt="Link para o instagram" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="Imagem da logo" />
       </section>
       <section>
        <p>
            Desenvolvido por Hélder Gúter.
        </p>
       </section>
    </footer>)
}

export default Rodape
import './Rodape.css'

const Rodape = () => {
    return(
        <div className='rodape'>
            <div className='imgPequenas'><img src='/imagens/fb.png' alt="Facebook" />
            <img src='/imagens/ig.png'/>
            <img src='/imagens/tw.png'/>           
            </div>
            <div>
            <img src='/imagens/logo.png'/>
            </div>
            <div className='texto'>
            Projeto para estudo.
            </div>
        </div>
    )
}

export default Rodape
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {
    const times = [
        "Escolha",
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "Ux Deseing",
        "BD"
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCadastrado({nome,cargo,imagem,time})
        console.log('Form foi submetido -',nome, cargo, imagem, time)
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    />
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario
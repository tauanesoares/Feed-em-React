import {UseParams} from "react-router-dom"

export default function Postagem(){
    const{nome, descricao} = useParams()

    return <>
        <Titulo nome= "Mergulhando no React"/>
        <Campo>
            <COnteudo
                foto= "/pessoa3.jpg"
                nome={"@" + nome}
                descricao = {descricao}
            />
        </Campo>
    
    </>
}
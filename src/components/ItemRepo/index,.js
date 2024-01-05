import { ItemContainer } from "./styles";

export function ItemRepo({repo}){
    return(
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <h3 />
            <a href={repo.html_url} target="_blank" className="">Ver repositório</a><br />
            <a className="remover">Remove</a>
        </ItemContainer>
    )
}
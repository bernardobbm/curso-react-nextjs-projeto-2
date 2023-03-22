import { GridContent } from '../../components/GridContent';

export function PageNotFound() {
  return (
    <GridContent
      title="Error 404"
      html={`<p>A página que você está buscando não foi encontrada</p><br />
        <a href="/" >Clique aqui para voltar</a>`}
      background
    />
  );
}

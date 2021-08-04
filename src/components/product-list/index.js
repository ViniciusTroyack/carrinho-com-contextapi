import Button from '../button';
import { useContext } from 'react';
import { CatalogueContext } from '../../providers/catalogue';
import { CartContext } from '../../providers/cart'
import { Container, List } from './styles';

const ProductList = ({ type }) => {

    const { catalogue } = useContext(CatalogueContext);
    const { cart } = useContext(CartContext);

    return (
        <Container>
            {type === 'catalogue' &&
                catalogue.map((item, index) => (
                    <List key={index}>
                        <span>Produto: {item.name}</span>
                        <span>Preço: {item.price}</span>
                        <Button type={type} item={item} />
                    </List>))}

            {type === "cart" &&
                cart.map((item, index) => (
                    <List key={index}>
                        <span>Produto: {item.name}</span>
                        <span>Preço: {item.price}</span>
                        <Button type={type} item={item} />
                    </List>
                ))}
        </Container>
    );
};

export default ProductList;
